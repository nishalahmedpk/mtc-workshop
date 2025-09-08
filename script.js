// Example images (replace with your own URLs or local images)
const images = [
    'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1465101178521-c1a4c8a0a8b7?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    './img1.jpg',
];

const galleryGrid = document.querySelector('.gallery-grid');
images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'University Photo';
    galleryGrid.appendChild(img);
});

// Simple form handler (no backend)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us!');
    this.reset();
});
