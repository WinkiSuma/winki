document.querySelector('.invitation-card').addEventListener('click', function() {
    this.classList.toggle('flipped');
});

// 添加页面滚动时的渐入效果
function checkScroll() {
    const elements = document.querySelectorAll('.animate-fade-in, .animate-slide-up');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll); 