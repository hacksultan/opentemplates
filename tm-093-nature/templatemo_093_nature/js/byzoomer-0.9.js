/*

The MIT License

ByZoomer (http://www.byscripts.info/mootools/byzoomer)
Copyright (c) 2008 ByScripts.info (http://www.byscripts.info)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var ByZoomer = new Class({
	Implements: Options,
	
	options: {
		duration: 'normal',
		transition: 'linear',
		onZoomInStart: $empty,
		onZoomInComplete: $empty,
		onZoomOutStart: $empty,
		onZoomOutComplete: $empty,
		waitIcon: 'wait.gif',
		errorIcon: 'error.png'
	},
	
	initialize: function(selector, options){
		this.setOptions(options);
		this.id = 1;
		this.selector = $pick(selector, 'byzoomer');
		this.links = $$('.' + this.selector);
		this.previewElements = $H();
		this.largeElements = $H();
		
		this.pleaseWait = new Element('div', {
			styles: {
				zIndex: 10,
				position: 'absolute',
				opacity: 0.8,
				backgroundColor: '#ffffff',
				border: '1px solid #707070',
				backgroundImage: 'url(' + this.options.waitIcon + ')',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center center'
			}
		});
		
		this.links.each(function(link){
			this.prepareLink(link);
		}, this);
	},
	
	prepareLink: function(link){
		var id = this.selector + 'Elm' + this.id++;
		var preview = link.getElement('img');

		if(!preview)
			preview = link;
		
		this.previewElements[id] = preview;
		
		this.largeElements[id] = $H({
			element: null,
			loaded: false,
			width: 0,
			height: 0,
			src: link.get('href')
		});
		
		document.addEvent('click', function(link){
			this.unzoom(this.zoomed);
		}.bind(this));
		
		link.addEvent('click', function(evt, link){
			new Event(evt).stop();
			document.fireEvent('click');
			this.zoom(id);
		}.bindWithEvent(this, link));
	},
	
	loadLarge: function(id){
		this.largeElements[id].loaded = true;
		
		this.pleaseWait.setStyles({
			width: this.previewElements[id].getWidth() - 2,
			height: this.previewElements[id].getHeight() - 2,
			top: this.getPosition(this.previewElements[id]).y,
			left: this.getPosition(this.previewElements[id]).x
		});
		
		$(document.body).adopt(this.pleaseWait);
		
		this.largeElements[id].element = new Asset.image(this.largeElements[id].src, {
			id: id,
			onerror: function(){
				this.pleaseWait.dispose();
				this.setError(id);
			}.bind(this),
			onload: function(large){
				this.pleaseWait.dispose();
				if(!large.width)
					this.setError(id);
				else
				{
					this.largeElements[id].extend({
						width: large.width,
						height: large.height
					});
					this.zoom(id);
				}
			}.bind(this)
		}).setStyle('z-index', 20);
		
		this.largeElements[id].element.set('morph', {
			duration: this.options.duration,
			transition: this.options.transition
		});
	},
	
	zoom: function(id){
		
		if(!this.largeElements[id].loaded)
		{
			this.loadLarge(id);
			return;
		}
		
		if($(id))
			return;
		
		this.zoomed = id;
		
		this.largeElements[id].element.setStyles({
			position: 'absolute',
			opacity: 0,
			width: this.previewElements[id].getWidth(),
			height: this.previewElements[id].getHeight(),
			top: this.getPosition(this.previewElements[id]).y,
			left: this.getPosition(this.previewElements[id]).x
		});
		
		$(document.body).adopt(this.largeElements[id].element);
		
		this.options.onZoomInStart();
		this.largeElements[id].element.get('morph').start({
			opacity: 1,
			width: this.largeElements[id].width,
			height: this.largeElements[id].height,
			left: window.getScroll().x + (window.getWidth() - this.largeElements[id].width) / 2,
			top: window.getScroll().y + (window.getHeight() - this.largeElements[id].height) / 2
		}).chain(function(){
			this.options.onZoomInComplete();
		}.bind(this));
	},
	
	unzoom: function(id){
		if(!id)
			return;
		
		this.zoomed = false;

		this.options.onZoomOutStart();
		this.largeElements[id].element.get('morph').start({
			opacity: 0,
			width: this.previewElements[id].getWidth(),
			height: this.previewElements[id].getHeight(),
			left: this.getPosition(this.previewElements[id]).x,
			top: this.getPosition(this.previewElements[id]).y
		}).chain(function(){
			this.largeElements[id].element.dispose();
			this.options.onZoomOutComplete();
		}.bind(this));
	},
	
	setError: function(id){
		var error = this.pleaseWait.clone();
		error.setStyles({
			backgroundColor: '#ffd0d0',
			backgroundImage: 'url(' + this.options.errorIcon + ')',
			width: this.previewElements[id].getWidth() - 2,
			height: this.previewElements[id].getHeight() - 2,
			left: this.getPosition(this.previewElements[id]).x,
			top: this.getPosition(this.previewElements[id]).y
		});

		$(document.body).adopt(error);
	},
	
	getPosition: function(element) {
		if (!Browser.Engine.trident) return element.getPosition();
		var b = element.getBoundingClientRect(), html = element.getDocument().documentElement;
		return {
			x: b.left + html.scrollLeft - html.clientLeft,
			y: b.top + html.scrollTop - html.clientTop
		};
}
});