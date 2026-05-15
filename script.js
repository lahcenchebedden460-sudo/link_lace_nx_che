// Image Database
const galleryImages = [
    "https://i.postimg.cc/Q9zkKVHc/B.png",
    "https://i.postimg.cc/ZBQFv0Cy/C.png",
    "https://i.postimg.cc/RJn179Ht/E.png",
    "https://i.postimg.cc/xNbGvYzs/K.png",
    "https://i.postimg.cc/T5WjVGDH/L.png",
    "https://i.postimg.cc/0KJGYxw3/M.png",
    "https://i.postimg.cc/JtyQV327/N.png",
    "https://i.postimg.cc/0r6CRGBC/P-1111.png",
    "https://i.postimg.cc/yWJT4hbj/Q.png"
];

let currentIndex = 0;

// DOM Elements
const modal = document.getElementById('galleryModal');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const mainImg = document.getElementById('currentImg');
const counter = document.getElementById('imgCounter');

// Gallery Logic
function updateGallery() {
    mainImg.src = galleryImages[currentIndex];
    counter.textContent = `${currentIndex + 1} / ${galleryImages.length}`;
}

function openGallery() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    updateGallery();
}

function closeGallery() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function nextImage() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    updateGallery();
}

function prevImage() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    updateGallery();
}

// Event Listeners
openBtn.addEventListener('click', openGallery);
closeBtn.addEventListener('click', closeGallery);
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (modal.style.display === 'block') {
        if (e.key === 'ArrowLeft') nextImage();
        if (e.key === 'ArrowRight') prevImage();
        if (e.key === 'Escape') closeGallery();
    }
});

// Close on Overlay Click
modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        closeGallery();
    }
});
