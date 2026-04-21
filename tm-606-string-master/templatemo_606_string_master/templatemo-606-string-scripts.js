/* JavaScript Document

TemplateMo 606 String Master

https://templatemo.com/tm-606-string-master

*/

// Guitar configuration
const STRINGS = 6;
const FRETS = 8;
const STRING_NOTES = ['E4', 'B3', 'G3', 'D3', 'A2', 'E2'];
const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Chord shapes (fret positions for each string, -1 = muted, 0 = open)
const CHORDS = {
   'C': {
      frets: [-1, 1, 0, 2, 3, -1],
      fingers: [null, 1, null, 2, 3, null]
   },
   'G': {
      frets: [3, 0, 0, 0, 2, 3],
      fingers: [2, null, null, null, 1, 3]
   },
   'Am': {
      frets: [0, 1, 2, 2, 0, -1],
      fingers: [null, 1, 2, 3, null, null]
   },
   'F': {
      frets: [1, 1, 2, 3, 3, 1],
      fingers: [1, 1, 2, 3, 4, 1]
   },
   'D': {
      frets: [2, 3, 2, 0, -1, -1],
      fingers: [1, 3, 2, null, null, null]
   },
   'Em': {
      frets: [0, 0, 0, 2, 2, 0],
      fingers: [null, null, null, 1, 2, null]
   }
};

// Songs data - [string, fret, duration in ms]
const SONGS = {
   greensleeves: {
      name: 'Greensleeves',
      tempo: 400,
      notes: [
         [2, 0, 1],
         [1, 1, 1],
         [0, 3, 2],
         [0, 5, 1],
         [0, 3, 1],
         [0, 1, 2],
         [1, 0, 1],
         [2, 0, 1],
         [1, 1, 2],
         [2, 0, 1],
         [1, 1, 1],
         [0, 0, 2],
         [0, 0, 1],
         [1, 0, 1],
         [0, 1, 2],
         [0, 3, 1],
         [0, 5, 1],
         [0, 3, 2],
         [0, 1, 1],
         [1, 0, 1],
         [2, 0, 2],
         [1, 1, 1],
         [2, 0, 1],
         [1, 1, 2]
      ]
   },
   houseoftherisingsun: {
      name: 'House of the Rising Sun',
      tempo: 350,
      notes: [
         [4, 0, 1],
         [3, 2, 1],
         [2, 2, 1],
         [1, 1, 1],
         [2, 2, 1],
         [3, 2, 1],
         [4, 2, 1],
         [3, 2, 1],
         [2, 0, 1],
         [1, 1, 1],
         [2, 0, 1],
         [3, 2, 1],
         [4, 0, 1],
         [3, 2, 1],
         [2, 1, 1],
         [1, 0, 1],
         [2, 1, 1],
         [3, 2, 1],
         [4, 2, 1],
         [3, 2, 1],
         [2, 2, 1],
         [1, 1, 1],
         [2, 2, 1],
         [3, 2, 1]
      ]
   },
   amazinggrace: {
      name: 'Amazing Grace',
      tempo: 500,
      notes: [
         [3, 0, 1],
         [2, 0, 2],
         [1, 1, 1],
         [2, 0, 1],
         [1, 1, 2],
         [1, 0, 1],
         [2, 0, 3],
         [3, 2, 1],
         [3, 0, 2],
         [2, 0, 1],
         [1, 1, 1],
         [2, 0, 1],
         [1, 1, 2],
         [0, 0, 1],
         [0, 3, 3],
         [0, 3, 1],
         [0, 0, 2],
         [1, 1, 1],
         [2, 0, 1],
         [1, 1, 2],
         [1, 0, 1],
         [2, 0, 3]
      ]
   }
};

let soundEnabled = true;
let isPlaying = false;
let currentSong = 'greensleeves';
let songTimeout = null;
let noteIndex = 0;

// Single shared AudioContext
let audioCtx = null;
let compressor = null;

function getAudioContext() {
   if (!audioCtx) {
      audioCtx = new(window.AudioContext || window.webkitAudioContext)();
      // Add compressor to prevent clipping and reduce pops
      compressor = audioCtx.createDynamicsCompressor();
      compressor.threshold.value = -24;
      compressor.knee.value = 30;
      compressor.ratio.value = 12;
      compressor.attack.value = 0.003;
      compressor.release.value = 0.25;
      compressor.connect(audioCtx.destination);
   }
   // Resume if suspended (browsers require user interaction)
   if (audioCtx.state === 'suspended') {
      audioCtx.resume();
   }
   return audioCtx;
}

// Initialize fretboard
function initFretboard() {
   const fretboard = document.getElementById('fretboard');
   const grid = document.createElement('div');
   grid.style.display = 'contents';

   for (let string = 0; string < STRINGS; string++) {
      for (let fret = 0; fret < FRETS; fret++) {
         const fretEl = document.createElement('div');
         fretEl.className = 'fret';
         fretEl.dataset.string = string;
         fretEl.dataset.fret = fret;

         // Add fret markers
         if (string === 2 && [2, 4, 6].includes(fret)) {
            const marker = document.createElement('div');
            marker.className = 'fret-marker';
            fretEl.appendChild(marker);
         }

         // Add note marker
         const noteMarker = document.createElement('div');
         noteMarker.className = 'note-marker';
         noteMarker.textContent = getNoteAtPosition(string, fret);
         fretEl.appendChild(noteMarker);

         fretEl.addEventListener('click', () => playNote(string, fret));
         fretboard.appendChild(fretEl);
      }
   }
}

function getNoteAtPosition(string, fret) {
   const baseNote = STRING_NOTES[string];
   const baseNoteIndex = NOTE_NAMES.indexOf(baseNote.slice(0, -1).replace('b', '#'));
   const noteIndex = (baseNoteIndex + fret + 1) % 12;
   return NOTE_NAMES[noteIndex];
}

function getFrequency(string, fret) {
   const baseFreqs = [329.63, 246.94, 196.00, 146.83, 110.00, 82.41];
   return baseFreqs[string] * Math.pow(2, fret / 12);
}

function playNote(string, fret, showMarker = true) {
   // Visual feedback first
   if (showMarker) {
      const fretEl = document.querySelector(`[data-string="${string}"][data-fret="${fret}"]`);
      if (fretEl) {
         const marker = fretEl.querySelector('.note-marker');
         marker.classList.add('show', 'playing');
         setTimeout(() => marker.classList.remove('playing'), 300);
      }
   }

   if (!soundEnabled) return;

   try {
      const ctx = getAudioContext();
      const freq = getFrequency(string, fret);

      // Create oscillators for guitar-like tone
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gainNode = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc1.type = 'triangle';
      osc2.type = 'sine';
      osc1.frequency.value = freq;
      osc2.frequency.value = freq * 2;

      filter.type = 'lowpass';
      filter.frequency.value = 1800;
      filter.Q.value = 0.7;

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gainNode);
      // Route through compressor to prevent clipping
      gainNode.connect(compressor);

      // Smoother guitar-like envelope with softer attack
      const now = ctx.currentTime;
      gainNode.gain.setValueAtTime(0.001, now);
      // Soft attack to prevent click
      gainNode.gain.exponentialRampToValueAtTime(0.15, now + 0.015);
      // Quick decay to sustain
      gainNode.gain.exponentialRampToValueAtTime(0.08, now + 0.1);
      // Gradual release
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 1.2);
      osc2.stop(now + 1.2);
   } catch (e) {
      console.log('Audio error:', e);
   }
}

function showChord(chordName) {
   // Clear previous
   clearNotes();

   // Highlight active button
   document.querySelector(`[data-chord="${chordName}"]`).classList.add('active');

   const chord = CHORDS[chordName];
   const notesToPlay = [];

   chord.frets.forEach((fret, string) => {
      if (fret >= 0) {
         const actualFret = fret === 0 ? 0 : fret - 1;
         const fretEl = document.querySelector(`[data-string="${string}"][data-fret="${actualFret}"]`);
         if (fretEl) {
            const marker = fretEl.querySelector('.note-marker');
            marker.classList.add('show');
            notesToPlay.push({
               string,
               fret: actualFret
            });
         }
      }
   });

   // Play chord with strum effect
   if (soundEnabled) {
      notesToPlay.reverse().forEach((note, i) => {
         setTimeout(() => playNote(note.string, note.fret, false), i * 40);
      });
   }
}

function clearNotes() {
   document.querySelectorAll('.note-marker').forEach(m => m.classList.remove('show'));
   document.querySelectorAll('.chord-btn').forEach(b => b.classList.remove('active'));
}

// Song player functions
function playSong() {
   if (isPlaying) {
      stopSong();
      return;
   }

   // Initialize audio context on user interaction
   getAudioContext();

   isPlaying = true;
   noteIndex = 0;
   document.getElementById('playBtn').textContent = '■';
   document.getElementById('playBtn').classList.add('playing');
   playNextNote();
}

function stopSong() {
   isPlaying = false;
   if (songTimeout) {
      clearTimeout(songTimeout);
      songTimeout = null;
   }
   noteIndex = 0;
   document.getElementById('playBtn').textContent = '▶';
   document.getElementById('playBtn').classList.remove('playing');
   document.getElementById('progressBar').style.width = '0%';
   clearNotes();
}

function playNextNote() {
   if (!isPlaying) return;

   const song = SONGS[currentSong];
   if (noteIndex >= song.notes.length) {
      stopSong();
      return;
   }

   const [string, fret, duration] = song.notes[noteIndex];

   // Clear previous and play current
   clearNotes();
   const fretEl = document.querySelector(`[data-string="${string}"][data-fret="${fret}"]`);
   if (fretEl) {
      const marker = fretEl.querySelector('.note-marker');
      marker.classList.add('show', 'playing');
      playNote(string, fret, false);
   }

   // Update progress
   const progress = ((noteIndex + 1) / song.notes.length) * 100;
   document.getElementById('progressBar').style.width = progress + '%';

   noteIndex++;
   songTimeout = setTimeout(playNextNote, song.tempo * duration);
}

function changeSong(songKey) {
   stopSong();
   currentSong = songKey;
   document.getElementById('songTitle').textContent = SONGS[songKey].name;
}

// Event listeners
document.querySelectorAll('.chord-btn').forEach(btn => {
   btn.addEventListener('click', () => {
      stopSong();
      showChord(btn.dataset.chord);
   });
});

document.getElementById('soundToggle').addEventListener('click', function () {
   soundEnabled = !soundEnabled;
   this.classList.toggle('active', soundEnabled);
   // Initialize audio context when enabling sound
   if (soundEnabled) {
      getAudioContext();
   }
});

document.getElementById('clearBtn').addEventListener('click', () => {
   stopSong();
   clearNotes();
});

document.getElementById('playBtn').addEventListener('click', playSong);

document.getElementById('songSelect').addEventListener('change', function () {
   changeSong(this.value);
});

// Initialize
initFretboard();

// Pre-initialize audio context on first user interaction
document.addEventListener('click', function initAudio() {
   getAudioContext();
   document.removeEventListener('click', initAudio);
}, {
   once: true
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navCta = document.querySelector('.nav-cta');

mobileMenuBtn.addEventListener('click', () => {
   const isOpen = navLinks.classList.toggle('active');
   navCta.classList.toggle('active', isOpen);
   mobileMenuBtn.textContent = isOpen ? '✕' : '☰';

   // Dynamically position CTA below nav-links
   if (isOpen) {
      setTimeout(() => {
         const navLinksHeight = navLinks.offsetHeight;
         navCta.style.top = `calc(100% + ${navLinksHeight}px)`;
      }, 10);
   }
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
   link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      navCta.classList.remove('active');
      mobileMenuBtn.textContent = '☰';
   });
});

// Pricing toggle
const PRICING = {
   monthly: {
      price: 30,
      period: '/mo',
      billed: '',
      savings: ''
   },
   quarterly: {
      price: 25.50,
      period: '/mo',
      billed: 'Billed $76.50 every 3 months',
      savings: 'Save 15%'
   },
   yearly: {
      price: 21,
      period: '/mo',
      billed: 'Billed $252 per year',
      savings: 'Save 30%'
   }
};

function updatePricing(billing) {
   const plan = PRICING[billing];

   // Update active button
   document.querySelectorAll('.billing-option').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.billing === billing);
   });

   // Update price display
   const priceEl = document.getElementById('proPrice');
   const billedEl = document.getElementById('proBilled');
   const savingsEl = document.getElementById('proSavings');

   // Animate price change
   priceEl.style.opacity = '0';
   priceEl.style.transform = 'translateY(-10px)';

   setTimeout(() => {
      priceEl.textContent = plan.price % 1 === 0 ? plan.price : plan.price.toFixed(2);
      billedEl.textContent = plan.billed;
      savingsEl.textContent = plan.savings;

      priceEl.style.opacity = '1';
      priceEl.style.transform = 'translateY(0)';
   }, 150);
}

document.querySelectorAll('.billing-option').forEach(btn => {
   btn.addEventListener('click', () => updatePricing(btn.dataset.billing));
});

// Add transition to price element
document.getElementById('proPrice').style.transition = 'all 0.15s ease';