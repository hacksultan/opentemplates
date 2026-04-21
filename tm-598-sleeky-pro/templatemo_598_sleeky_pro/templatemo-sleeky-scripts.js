// Sleeky Pro - Premium Photography Template Scripts

/*

TemplateMo 598 Sleeky Pro

https://templatemo.com/tm-598-sleeky-pro

*/


class VerticalCubeSlider {
    constructor() {
        this.currentIndex = 0;
        this.isAnimating = false;
        this.sliceCount = 10;
        this.autoPlayInterval = null;
        this.isPlaying = true;
        this.currentFace = 0;
        
        this.images = [
            {
                url: 'images/unsplash-image-01.jpg',
                thumb: 'images/unsplash-thumb-01.jpg',
                title: 'Mountain Peak',
                description: 'Majestic snow-capped mountains reaching towards the endless sky, showcasing nature\'s raw beauty and power.'
            },
            {
                url: 'images/unsplash-image-02.jpg',
                thumb: 'images/unsplash-thumb-02.jpg',
                title: 'Sky Paradise',
                description: 'Vibrant sunset clouds painting the heavens in brilliant oranges and purples, creating a dreamlike atmosphere.'
            },
            {
                url: 'images/unsplash-image-03.jpg',
                thumb: 'images/unsplash-thumb-03.jpg',
                title: 'Misty Forest',
                description: 'Ethereal morning fog weaving through ancient trees, creating a mystical and serene woodland sanctuary.'
            },
            {
                url: 'images/unsplash-image-04.jpg',
                thumb: 'images/unsplash-thumb-04.jpg',
                title: 'Ocean Waves',
                description: 'Powerful ocean waves crashing against rugged coastlines, demonstrating the endless rhythm of the sea.'
            },
            {
                url: 'images/unsplash-image-05.jpg',
                thumb: 'images/unsplash-thumb-05.jpg',
                title: 'Night Sky',
                description: 'Brilliant stars scattered across the cosmic canvas, revealing the infinite mystery of our universe.'
            }
        ];
        
        this.init();
    }
    
    init() {
        this.createSlices();
        this.createDots();
        this.createThumbnails();
        this.attachEventListeners();
        this.initializeImages();
        this.startAutoPlay();
    }
    
    createSlices() {
        const stage = document.getElementById('sliderStage');
        const containerWidth = stage.offsetWidth;
        
        for (let i = 0; i < this.sliceCount; i++) {
            const sliceContainer = document.createElement('div');
            sliceContainer.className = 'slice-container';
            
            const sliceCube = document.createElement('div');
            sliceCube.className = 'slice-cube';
            
            for (let face = 1; face <= 4; face++) {
                const sliceFace = document.createElement('div');
                sliceFace.className = `slice-face face-${face}`;
                
                const sliceImage = document.createElement('div');
                sliceImage.className = 'slice-image';
                sliceImage.dataset.face = face;
                
                const sliceWidth = containerWidth / this.sliceCount;
                const leftPosition = -(i * sliceWidth);
                sliceImage.style.left = `${leftPosition}px`;
                sliceImage.style.width = `${containerWidth}px`;
                
                sliceFace.appendChild(sliceImage);
                sliceCube.appendChild(sliceFace);
            }
            
            sliceContainer.appendChild(sliceCube);
            stage.appendChild(sliceContainer);
        }
    }
    
    createDots() {
        const dotsContainer = document.getElementById('dots');
        
        this.images.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'dot';
            if (index === 0) dot.classList.add('active');
            dot.dataset.index = index;
            
            dot.addEventListener('click', () => {
                if (!this.isAnimating && index !== this.currentIndex) {
                    this.goToSlide(index);
                }
            });
            
            dotsContainer.appendChild(dot);
        });
    }
    
    createThumbnails() {
        const thumbnailsContainer = document.getElementById('thumbnails');
        
        this.images.forEach((image, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = 'thumbnail';
            if (index === 0) thumbnail.classList.add('active');
            thumbnail.dataset.index = index;
            thumbnail.style.backgroundImage = `url(${image.thumb})`;
            
            thumbnail.addEventListener('click', () => {
                if (!this.isAnimating && index !== this.currentIndex) {
                    this.goToSlide(index);
                }
            });
            
            thumbnailsContainer.appendChild(thumbnail);
        });
    }
    
    attachEventListeners() {
        document.getElementById('prevArrow').addEventListener('click', () => this.prevSlide());
        document.getElementById('nextArrow').addEventListener('click', () => this.nextSlide());
        document.getElementById('playPauseBtn').addEventListener('click', () => this.toggleAutoPlay());
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
            if (e.key === ' ') {
                e.preventDefault();
                this.toggleAutoPlay();
            }
        });

        const container = document.querySelector('.slider-container');
        container.addEventListener('mouseenter', () => {
            if (this.isPlaying) {
                this.pauseAutoPlay();
            }
        });
        
        container.addEventListener('mouseleave', () => {
            if (this.isPlaying) {
                this.resumeAutoPlay();
            }
        });

        window.addEventListener('resize', () => this.updateSliceWidths());
    }

    updateSliceWidths() {
        const stage = document.getElementById('sliderStage');
        const containerWidth = stage.offsetWidth;
        const sliceImages = document.querySelectorAll('.slice-image');
        
        sliceImages.forEach((img, index) => {
            const sliceIndex = Math.floor(index / 4);
            const sliceWidth = containerWidth / this.sliceCount;
            const leftPosition = -(sliceIndex * sliceWidth);
            
            img.style.width = `${containerWidth}px`;
            img.style.left = `${leftPosition}px`;
        });
    }
    
    initializeImages() {
        this.setFaceImage(1, this.images[0].url);
        
        const progressBar = document.getElementById('progressBar');
        setTimeout(() => {
            progressBar.classList.add('active');
        }, 100);
    }
    
    setFaceImage(faceNumber, imageUrl) {
        const faceImages = document.querySelectorAll(`.slice-image[data-face="${faceNumber}"]`);
        faceImages.forEach(img => {
            img.style.backgroundImage = `url(${imageUrl})`;
        });
    }
    
    goToSlide(index) {
        if (this.isAnimating || index === this.currentIndex) return;
        
        this.isAnimating = true;
        
        const progressBar = document.getElementById('progressBar');
        progressBar.classList.remove('active');
        progressBar.classList.add('reset');
        
        document.getElementById('prevArrow').disabled = true;
        document.getElementById('nextArrow').disabled = true;
        
        const textOverlay = document.getElementById('textOverlay');
        const titleEl = document.getElementById('slideTitle');
        const descriptionEl = document.getElementById('slideDescription');
        const cubes = document.querySelectorAll('.slice-cube');
        
        const nextFace = (this.currentFace + 1) % 4;
        const nextFaceNumber = nextFace + 1;
        
        this.setFaceImage(nextFaceNumber, this.images[index].url);
        
        textOverlay.classList.add('hiding');
        
        cubes.forEach(cube => {
            cube.className = 'slice-cube';
            void cube.offsetWidth;
            cube.classList.add(`rotate-${nextFace}`);
        });
        
        setTimeout(() => {
            titleEl.textContent = this.images[index].title;
            descriptionEl.textContent = this.images[index].description;
            textOverlay.classList.remove('hiding');
            
            this.currentIndex = index;
            this.currentFace = nextFace;
            this.updateDots();
            this.updateThumbnails();
            
            document.getElementById('prevArrow').disabled = false;
            document.getElementById('nextArrow').disabled = false;
            
            if (this.isPlaying) {
                setTimeout(() => {
                    progressBar.classList.remove('reset');
                    progressBar.classList.add('active');
                }, 50);
            }
            
            this.isAnimating = false;
        }, 950);
    }
    
    updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === this.currentIndex);
        });
    }
    
    updateThumbnails() {
        const thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails.forEach((thumbnail, i) => {
            thumbnail.classList.toggle('active', i === this.currentIndex);
        });
    }
    
    nextSlide() {
        if (this.isAnimating) return;
        const nextIndex = (this.currentIndex + 1) % this.images.length;
        this.goToSlide(nextIndex);
    }
    
    prevSlide() {
        if (this.isAnimating) return;
        const prevIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.goToSlide(prevIndex);
    }

    startAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
        this.autoPlayInterval = setInterval(() => this.nextSlide(), 3500);
    }

    pauseAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    resumeAutoPlay() {
        if (this.isPlaying && !this.autoPlayInterval) {
            this.startAutoPlay();
        }
    }

    toggleAutoPlay() {
        const btn = document.getElementById('playPauseBtn');
        const progressBar = document.getElementById('progressBar');
        this.isPlaying = !this.isPlaying;
        
        if (this.isPlaying) {
            btn.classList.remove('paused');
            this.startAutoPlay();
            progressBar.classList.remove('reset');
            progressBar.classList.add('active');
        } else {
            btn.classList.add('paused');
            this.pauseAutoPlay();
            progressBar.classList.remove('active');
            progressBar.classList.add('reset');
        }
    }
}

// Navigation functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Active navigation highlighting
    function updateActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavigation);

    // Services tab functionality
    const serviceTabs = document.querySelectorAll('.service-tab');
    const serviceContents = document.querySelectorAll('.service-content');

    serviceTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetService = tab.getAttribute('data-service');
            
            // Remove active class from all tabs and contents
            serviceTabs.forEach(t => t.classList.remove('active'));
            serviceContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding content
            const targetContent = document.getElementById(targetService);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Contact form handling
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simple form validation feedback
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        alert(`Thank you ${data.name}! Your message has been sent. We'll get back to you at ${data.email} soon.`);
        e.target.reset();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize slider
    new VerticalCubeSlider();
});