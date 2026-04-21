/* JavaScript Document

TemplateMo 604 Christmas Piano

https://templatemo.com/tm-604-christmas-piano

*/

// ===== AUDIO ENGINE =====
class PianoAudio {
   constructor() {
      this.audioCtx = null;
      this.masterGain = null;
      this.volume = 0.7;
   }

   init() {
      if (this.audioCtx) return;
      this.audioCtx = new(window.AudioContext || window.webkitAudioContext)();
      this.masterGain = this.audioCtx.createGain();
      this.masterGain.gain.value = this.volume * 0.6;
      this.masterGain.connect(this.audioCtx.destination);
   }

   setVolume(value) {
      this.volume = value;
      if (this.masterGain) {
         this.masterGain.gain.value = value * 0.6;
      }
   }

   noteToFreq(note) {
      const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
      const noteName = note.slice(0, -1);
      const octave = parseInt(note.slice(-1));
      const semitone = notes.indexOf(noteName);
      const midiNote = (octave + 1) * 12 + semitone;
      return 440 * Math.pow(2, (midiNote - 69) / 12);
   }

   playNote(note, duration = 0.5) {
      this.init();
      const freq = this.noteToFreq(note);
      const now = this.audioCtx.currentTime;

      const osc1 = this.audioCtx.createOscillator();
      const osc2 = this.audioCtx.createOscillator();
      const gainNode = this.audioCtx.createGain();

      osc1.type = 'triangle';
      osc1.frequency.value = freq;
      osc2.type = 'sine';
      osc2.frequency.value = freq * 2;

      const oscGain1 = this.audioCtx.createGain();
      const oscGain2 = this.audioCtx.createGain();
      oscGain1.gain.value = 0.6;
      oscGain2.gain.value = 0.15;

      osc1.connect(oscGain1);
      osc2.connect(oscGain2);
      oscGain1.connect(gainNode);
      oscGain2.connect(gainNode);
      gainNode.connect(this.masterGain);

      const attackTime = 0.04;
      const releaseTime = 0.15;
      const noteDuration = duration * 1.1;

      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.7, now + attackTime);
      gainNode.gain.setValueAtTime(0.7, now + noteDuration - releaseTime);
      gainNode.gain.linearRampToValueAtTime(0, now + noteDuration);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + noteDuration + 0.1);
      osc2.stop(now + noteDuration + 0.1);
   }
}

// ===== SONGS DATA =====
const songs = [{
      title: "Last Christmas",
      // Wham! Last Christmas - G G F C G G A F (Last Christmas I gave you my heart)
      notes: [{
            note: 'G4',
            duration: 0.5
         },
         {
            note: 'G4',
            duration: 0.3
         },
         {
            note: 'F4',
            duration: 0.4
         },
         {
            note: 'C4',
            duration: 0.3
         },
         {
            note: 'G4',
            duration: 0.3
         },
         {
            note: 'G4',
            duration: 0.3
         },
         {
            note: 'A4',
            duration: 0.4
         },
         {
            note: 'F4',
            duration: 0.6
         },
         {
            note: 'D4',
            duration: 0.4
         },
         {
            note: 'D4',
            duration: 0.3
         },
         {
            note: 'G4',
            duration: 0.2
         },
         {
            note: 'G4',
            duration: 0.3
         },
         {
            note: 'A4',
            duration: 0.4
         },
         {
            note: 'F4',
            duration: 0.4
         },
         {
            note: 'D4',
            duration: 0.3
         },
         {
            note: 'E4',
            duration: 0.3
         },
         {
            note: 'F4',
            duration: 0.3
         },
         {
            note: 'E4',
            duration: 0.3
         },
         {
            note: 'D4',
            duration: 0.6
         },
         {
            note: 'A4',
            duration: 0.5
         },
         {
            note: 'G4',
            duration: 0.4
         },
         {
            note: 'D4',
            duration: 0.3
         },
         {
            note: 'A4',
            duration: 0.3
         },
         {
            note: 'A#4',
            duration: 0.3
         },
         {
            note: 'A4',
            duration: 0.3
         },
         {
            note: 'G4',
            duration: 0.6
         },
         {
            note: 'F4',
            duration: 0.3
         },
         {
            note: 'E4',
            duration: 0.3
         },
         {
            note: 'F4',
            duration: 0.3
         },
         {
            note: 'E4',
            duration: 0.3
         },
         {
            note: 'E4',
            duration: 0.3
         },
         {
            note: 'F4',
            duration: 0.3
         },
         {
            note: 'E4',
            duration: 0.5
         },
         {
            note: 'C4',
            duration: 0.8
         },
      ]
   },
   {
      title: "Jingle Bells",
      notes: [{
            note: 'E4',
            duration: 0.3
         },
         {
            note: 'E4',
            duration: 0.3
         },
         {
            note: 'E4',
            duration: 0.6
         },
         {
            note: 'E4',
            duration: 0.3
         },
         {
            note: 'E4',
            duration: 0.3
         },
         {
            note: 'E4',
            duration: 0.6
         },
         {
            note: 'E4',
            duration: 0.3
         },
         {
            note: 'G4',
            duration: 0.3
         },
         {
            note: 'C4',
            duration: 0.4
         },
         {
            note: 'D4',
            duration: 0.3
         },
         {
            note: 'E4',
            duration: 1.0
         },
         {
            note: 'F4',
            duration: 0.3
         },
         {
            note: 'F4',
            duration: 0.3
         },
         {
            note: 'F4',
            duration: 0.4
         },
         {
            note: 'F4',
            duration: 0.3
         },
         {
            note: 'F4',
            duration: 0.3
         },
         {
            note: 'E4',
            duration: 0.3
         },
         {
            note: 'E4',
            duration: 0.3
         },
         {
            note: 'E4',
            duration: 0.2
         },
         {
            note: 'E4',
            duration: 0.3
         },
         {
            note: 'D4',
            duration: 0.3
         },
         {
            note: 'D4',
            duration: 0.3
         },
         {
            note: 'E4',
            duration: 0.4
         },
         {
            note: 'D4',
            duration: 0.5
         },
         {
            note: 'G4',
            duration: 0.8
         },
      ]
   },
   {
      title: "We Wish You a Merry Christmas",
      notes: [{
            note: 'G4',
            duration: 0.3
         },
         {
            note: 'C5',
            duration: 0.3
         },
         {
            note: 'C5',
            duration: 0.2
         },
         {
            note: 'D5',
            duration: 0.2
         },
         {
            note: 'C5',
            duration: 0.2
         },
         {
            note: 'B4',
            duration: 0.2
         },
         {
            note: 'A4',
            duration: 0.4
         },
         {
            note: 'A4',
            duration: 0.4
         },
         {
            note: 'A4',
            duration: 0.3
         },
         {
            note: 'D5',
            duration: 0.3
         },
         {
            note: 'D5',
            duration: 0.2
         },
         {
            note: 'E5',
            duration: 0.2
         },
         {
            note: 'D5',
            duration: 0.2
         },
         {
            note: 'C5',
            duration: 0.2
         },
         {
            note: 'B4',
            duration: 0.4
         },
         {
            note: 'G4',
            duration: 0.4
         },
         {
            note: 'G4',
            duration: 0.3
         },
         {
            note: 'E5',
            duration: 0.3
         },
         {
            note: 'E5',
            duration: 0.2
         },
         {
            note: 'F5',
            duration: 0.2
         },
         {
            note: 'E5',
            duration: 0.2
         },
         {
            note: 'D5',
            duration: 0.2
         },
         {
            note: 'C5',
            duration: 0.4
         },
         {
            note: 'A4',
            duration: 0.4
         },
         {
            note: 'G4',
            duration: 0.2
         },
         {
            note: 'G4',
            duration: 0.2
         },
         {
            note: 'A4',
            duration: 0.3
         },
         {
            note: 'D5',
            duration: 0.3
         },
         {
            note: 'B4',
            duration: 0.4
         },
         {
            note: 'C5',
            duration: 0.8
         },
      ]
   }
];

// ===== PIANO PLAYER =====
class ChristmasPiano {
   constructor() {
      this.audio = new PianoAudio();
      this.currentSong = 0;
      this.isPlaying = false;
      this.currentNoteIndex = 0;
      this.speed = 1;
      this.volume = 0.7;
      this.repeat = false;
      this.timeoutId = null;

      this.initElements();
      this.buildPiano();
      this.bindEvents();
      this.updateSongInfo();
      this.audio.setVolume(this.volume);
   }

   initElements() {
      this.playBtn = document.getElementById('playBtn');
      this.prevBtn = document.getElementById('prevBtn');
      this.nextBtn = document.getElementById('nextBtn');
      this.progressFill = document.getElementById('progressFill');
      this.currentTimeEl = document.getElementById('currentTime');
      this.totalTimeEl = document.getElementById('totalTime');
      this.songTitleEl = document.getElementById('currentSongTitle');
      this.speedSlider = document.getElementById('speedSlider');
      this.speedValue = document.getElementById('speedValue');
      this.volumeSlider = document.getElementById('volumeSlider');
      this.volumeValue = document.getElementById('volumeValue');
      this.repeatToggle = document.getElementById('repeatToggle');
      this.repeatSwitch = document.getElementById('repeatSwitch');
      this.songTabs = document.querySelectorAll('.song-tab');
   }

   buildPiano() {
      const piano = document.getElementById('miniPiano');
      piano.innerHTML = '';

      const whiteNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
      const blackNotes = {
         'C': 'C#',
         'D': 'D#',
         'F': 'F#',
         'G': 'G#',
         'A': 'A#'
      };

      const octaves = [4, 5];
      let whiteKeyIndex = 0;

      octaves.forEach(octave => {
         whiteNotes.forEach(note => {
            const whiteKey = document.createElement('div');
            whiteKey.className = 'mini-key white';
            whiteKey.dataset.note = note + octave;
            piano.appendChild(whiteKey);

            if (blackNotes[note]) {
               const blackKey = document.createElement('div');
               blackKey.className = 'mini-key black';
               blackKey.dataset.note = blackNotes[note] + octave;
               const offset = whiteKeyIndex * 30 + 20;
               blackKey.style.left = offset + 'px';
               piano.appendChild(blackKey);
            }

            whiteKeyIndex++;
         });
      });

      this.keys = document.querySelectorAll('.mini-key');
   }

   bindEvents() {
      this.playBtn.addEventListener('click', () => this.togglePlay());
      this.prevBtn.addEventListener('click', () => this.prevSong());
      this.nextBtn.addEventListener('click', () => this.nextSong());

      this.speedSlider.addEventListener('input', (e) => {
         this.speed = parseFloat(e.target.value);
         this.speedValue.textContent = this.speed.toFixed(1) + 'x';
      });

      this.volumeSlider.addEventListener('input', (e) => {
         this.volume = parseFloat(e.target.value);
         this.volumeValue.textContent = Math.round(this.volume * 100) + '%';
         this.audio.setVolume(this.volume);
      });

      this.repeatToggle.addEventListener('click', () => {
         this.repeat = !this.repeat;
         this.repeatToggle.classList.toggle('active', this.repeat);
         this.repeatSwitch.classList.toggle('active', this.repeat);
      });

      this.songTabs.forEach(tab => {
         tab.addEventListener('click', () => {
            const songIndex = parseInt(tab.dataset.song);
            this.selectSong(songIndex);
         });
      });

      // Click on piano keys
      this.keys.forEach(key => {
         key.addEventListener('click', () => {
            this.audio.playNote(key.dataset.note, 0.3);
            this.highlightKey(key.dataset.note);
         });
      });

      // Setup keyboard piano playing
      this.setupKeyboardPlay();
   }

   selectSong(index) {
      const wasPlaying = this.isPlaying;
      this.stop();
      this.currentSong = index;
      this.currentNoteIndex = 0;
      this.updateSongInfo();
      this.updateTabs();
      this.updateProgress(0);
      if (wasPlaying) {
         this.play();
      }
   }

   updateTabs() {
      this.songTabs.forEach((tab, i) => {
         tab.classList.toggle('active', i === this.currentSong);
      });
   }

   updateSongInfo() {
      const song = songs[this.currentSong];
      this.songTitleEl.textContent = song.title;

      const totalDuration = song.notes.reduce((sum, n) => sum + n.duration, 0);
      this.totalTimeEl.textContent = this.formatTime(totalDuration);
      this.currentTimeEl.textContent = '0:00';
   }

   formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs.toString().padStart(2, '0')}`;
   }

   togglePlay() {
      if (this.isPlaying) {
         this.pause();
      } else {
         this.play();
      }
   }

   play() {
      this.isPlaying = true;
      this.playBtn.textContent = '❚❚';
      this.playNextNote();
   }

   pause() {
      this.isPlaying = false;
      this.playBtn.textContent = '▶';
      if (this.timeoutId) {
         clearTimeout(this.timeoutId);
      }
   }

   stop() {
      this.pause();
      this.currentNoteIndex = 0;
      this.updateProgress(0);
      this.clearAllKeys();
   }

   playNextNote() {
      if (!this.isPlaying) return;

      const song = songs[this.currentSong];
      if (this.currentNoteIndex >= song.notes.length) {
         if (this.repeat) {
            // Restart the song
            this.currentNoteIndex = 0;
            this.updateProgress(0);
            this.currentTimeEl.textContent = '0:00';
            this.playNextNote();
            return;
         } else {
            this.stop();
            return;
         }
      }

      const noteData = song.notes[this.currentNoteIndex];
      const adjustedDuration = noteData.duration / this.speed;

      this.audio.playNote(noteData.note, adjustedDuration);
      this.highlightKey(noteData.note);

      const totalNotes = song.notes.length;
      const progress = ((this.currentNoteIndex + 1) / totalNotes) * 100;
      this.updateProgress(progress);

      let elapsed = 0;
      for (let i = 0; i <= this.currentNoteIndex; i++) {
         elapsed += song.notes[i].duration;
      }
      this.currentTimeEl.textContent = this.formatTime(elapsed / this.speed);

      this.currentNoteIndex++;

      this.timeoutId = setTimeout(() => {
         this.playNextNote();
      }, adjustedDuration * 1000);
   }

   highlightKey(note) {
      this.clearAllKeys();
      const key = document.querySelector(`.mini-key[data-note="${note}"]`);
      if (key) {
         key.classList.add('active');
         setTimeout(() => key.classList.remove('active'), 200);
      }
   }

   clearAllKeys() {
      this.keys.forEach(k => k.classList.remove('active'));
   }

   updateProgress(percent) {
      this.progressFill.style.width = percent + '%';
   }

   prevSong() {
      const newIndex = this.currentSong === 0 ? songs.length - 1 : this.currentSong - 1;
      this.selectSong(newIndex);
   }

   nextSong() {
      const newIndex = (this.currentSong + 1) % songs.length;
      this.selectSong(newIndex);
   }

   // Keyboard to note mapping
   getKeyboardMapping() {
      return {
         // Lower octave C4-B4 (bottom row + some middle)
         'KeyZ': 'C4',
         'KeyS': 'C#4',
         'KeyX': 'D4',
         'KeyD': 'D#4',
         'KeyC': 'E4',
         'KeyV': 'F4',
         'KeyG': 'F#4',
         'KeyB': 'G4',
         'KeyH': 'G#4',
         'KeyN': 'A4',
         'KeyJ': 'A#4',
         'KeyM': 'B4',
         // Upper octave C5-B5 (top row)
         'KeyQ': 'C5',
         'Digit2': 'C#5',
         'KeyW': 'D5',
         'Digit3': 'D#5',
         'KeyE': 'E5',
         'KeyR': 'F5',
         'Digit5': 'F#5',
         'KeyT': 'G5',
         'Digit6': 'G#5',
         'KeyY': 'A5',
         'Digit7': 'A#5',
         'KeyU': 'B5'
      };
   }

   setupKeyboardPlay() {
      const keyMap = this.getKeyboardMapping();
      const activeKeys = new Set();

      document.addEventListener('keydown', (e) => {
         // Skip if typing in input fields
         if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

         // Space for play/pause
         if (e.code === 'Space') {
            e.preventDefault();
            this.togglePlay();
            return;
         }

         // Piano keys
         const note = keyMap[e.code];
         if (note && !activeKeys.has(e.code)) {
            e.preventDefault();
            activeKeys.add(e.code);
            this.audio.playNote(note, 0.4);
            this.highlightKey(note);
         }
      });

      document.addEventListener('keyup', (e) => {
         if (keyMap[e.code]) {
            activeKeys.delete(e.code);
         }
      });
   }
}

// ===== SNOWFLAKES =====
function createSnowflakes() {
   const container = document.getElementById('snowflakes');
   const flakes = ['❄', '❅', '❆', '✦', '•'];
   const count = 25;

   for (let i = 0; i < count; i++) {
      const flake = document.createElement('div');
      flake.className = 'snowflake';
      flake.textContent = flakes[Math.floor(Math.random() * flakes.length)];
      flake.style.left = Math.random() * 100 + '%';
      flake.style.fontSize = (Math.random() * 0.6 + 0.5) + 'rem';
      flake.style.opacity = Math.random() * 0.4 + 0.2;
      flake.style.animationDuration = (Math.random() * 15 + 20) + 's';
      flake.style.animationDelay = Math.random() * 10 + 's';
      container.appendChild(flake);
   }
}

// ===== NAVIGATION =====
function initNavigation() {
   const navToggle = document.getElementById('navToggle');
   const navLinks = document.getElementById('navLinks');

   navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
   });

   document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
         navToggle.classList.remove('active');
         navLinks.classList.remove('active');
      });
   });
}

// ===== GALLERY LIGHTBOX =====
function initGallery() {
   const lightbox = document.getElementById('lightbox');
   const lightboxImg = document.getElementById('lightboxImg');
   const lightboxClose = document.getElementById('lightboxClose');
   const lightboxPrev = document.getElementById('lightboxPrev');
   const lightboxNext = document.getElementById('lightboxNext');
   const galleryItems = document.querySelectorAll('.gallery-item');

   let currentIndex = 0;
   const images = Array.from(galleryItems).map(item => item.querySelector('img').src);

   function openLightbox(index) {
      currentIndex = index;
      lightboxImg.src = images[currentIndex];
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
   }

   function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
   }

   function showPrev() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      lightboxImg.src = images[currentIndex];
   }

   function showNext() {
      currentIndex = (currentIndex + 1) % images.length;
      lightboxImg.src = images[currentIndex];
   }

   galleryItems.forEach((item, index) => {
      item.addEventListener('click', () => openLightbox(index));
   });

   lightboxClose.addEventListener('click', closeLightbox);
   lightboxPrev.addEventListener('click', showPrev);
   lightboxNext.addEventListener('click', showNext);

   lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
   });

   document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
   });
}

// ===== FORM HANDLING =====
function initForm() {
   const form = document.getElementById('contactForm');
   form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for subscribing! You\'ll receive updates about new songs.');
      form.reset();
   });
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
   createSnowflakes();
   initNavigation();
   initGallery();
   initForm();
   new ChristmasPiano();
});