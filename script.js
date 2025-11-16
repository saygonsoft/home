// ====================================
// Language Management
// ====================================
const languageData = {
    en: {
        title: "We're building something extraordinary!",
        description: "Our digital engineering platform is under construction — crafted with bits, bytes, and bold innovation. Very soon, you'll meet a true factory of smart solutions, where robust systems, scalable applications, and high-level digital experiences are designed to reshape the software development landscape.",
        description2: "We're assembling a tech ecosystem that blends modern architecture, intelligent automation, and user-centered design — all with a fearless dose of creativity and performance.",
        cta: "Stay tuned. The future is almost ready — and it starts right here.",
        progress: "Building in progress...",
        features: {
            robust: "Robust Systems",
            scalable: "Scalable Apps",
            smart: "Smart Solutions",
            creative: "Creative Design"
        }
    },
    pt: {
        title: "Estamos construindo algo extraordinário!",
        description: "A nossa plataforma de engenharia digital está em fase de montagem — com bits, bytes e muita inovação sendo cuidadosamente encaixados. Em breve, você conhecerá uma verdadeira fábrica de soluções inteligentes, onde sistemas robustos, aplicações escaláveis e experiências digitais de alto nível serão criadas para transformar o mercado de desenvolvimento de software.",
        description2: "Estamos preparando um ecossistema tecnológico que une arquitetura moderna, automação inteligente e design centrado no usuário. Tudo isso com um toque ousado de criatividade e performance.",
        cta: "Fique ligado. O futuro está quase pronto — e ele começa aqui.",
        progress: "Construção em andamento...",
        features: {
            robust: "Sistemas Robustos",
            scalable: "Apps Escaláveis",
            smart: "Soluções Inteligentes",
            creative: "Design Criativo"
        }
    }
};

let currentLang = 'en';

// Initialize language
function initLanguage() {
    // Detect browser language
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('pt')) {
        currentLang = 'pt';
        switchLanguage('pt');
    }
}

// Switch language
function switchLanguage(lang) {
    currentLang = lang;
    const data = languageData[lang];
    
    // Update text content
    document.querySelector('.title').textContent = data.title;
    document.querySelector('.description p').textContent = data.description;
    document.querySelector('.description-2 p').textContent = data.description2;
    document.querySelector('.cta-text').textContent = data.cta;
    document.querySelector('.progress-label').textContent = data.progress;
    
    // Update feature cards
    const featureTitles = document.querySelectorAll('.feature-title');
    const featureKeys = ['robust', 'scalable', 'smart', 'creative'];
    featureTitles.forEach((title, index) => {
        title.textContent = data.features[featureKeys[index]];
    });
    
    // Update language button
    document.getElementById('current-lang').textContent = lang.toUpperCase();
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
}

// ====================================
// Particles Animation
// ====================================
function createParticles() {
    const container = document.getElementById('particles-container');
    const particleCount = window.innerWidth < 768 ? 20 : 40;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 2px and 6px
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random starting position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration
        const duration = Math.random() * 10 + 15;
        particle.style.animationDuration = `${duration}s`;
        
        // Random delay
        const delay = Math.random() * 5;
        particle.style.animationDelay = `${delay}s`;
        
        // Random color between primary and accent
        const colorChoice = Math.random();
        if (colorChoice < 0.7) {
            particle.style.background = '#00d4ff';
            particle.style.boxShadow = '0 0 10px #00d4ff';
        } else {
            particle.style.background = '#ff6b35';
            particle.style.boxShadow = '0 0 10px #ff6b35';
        }
        
        container.appendChild(particle);
    }
}

// ====================================
// Progress Bar Animation
// ====================================
function animateProgress() {
    const progressFill = document.querySelector('.progress-fill');
    const progressPercentage = document.querySelector('.progress-percentage');
    
    let progress = 0;
    const targetProgress = Math.floor(Math.random() * 30) + 60; // Random between 60-89%
    
    const interval = setInterval(() => {
        if (progress < targetProgress) {
            progress++;
            progressFill.style.width = `${progress}%`;
            progressPercentage.textContent = `${progress}%`;
        } else {
            clearInterval(interval);
        }
    }, 30);
}

// ====================================
// Smooth Scroll
// ====================================
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ====================================
// Parallax Effect (Desktop Only)
// ====================================
function initParallax() {
    if (window.innerWidth > 768) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.logo-container, .construction-icon');
            
            parallaxElements.forEach(element => {
                const speed = 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
}

// ====================================
// Dynamic Background Gradient
// ====================================
function animateBackground() {
    const overlay = document.querySelector('.background-overlay');
    let hue = 0;
    
    setInterval(() => {
        hue = (hue + 1) % 360;
        // Subtle hue rotation for dynamic effect
    }, 100);
}

// ====================================
// Intersection Observer for Animation
// ====================================
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });
}

// ====================================
// Easter Egg - Konami Code
// ====================================
function initKonamiCode() {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

function activateEasterEgg() {
    // Add rainbow effect to logo
    const logo = document.querySelector('.logo');
    logo.style.animation = 'rainbow 2s linear infinite';
    
    // Create style for rainbow animation if not exists
    if (!document.getElementById('rainbow-style')) {
        const style = document.createElement('style');
        style.id = 'rainbow-style';
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg) drop-shadow(0 10px 30px rgba(0, 212, 255, 0.5)); }
                100% { filter: hue-rotate(360deg) drop-shadow(0 10px 30px rgba(0, 212, 255, 0.5)); }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Show message
    const message = document.createElement('div');
    message.textContent = '🎉 Easter Egg Activated! 🎉';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 212, 255, 0.9);
        color: #000;
        padding: 20px 40px;
        border-radius: 15px;
        font-weight: bold;
        font-size: 24px;
        z-index: 10000;
        animation: fadeInOut 3s ease;
    `;
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
}

// ====================================
// Year Update
// ====================================
function updateYear() {
    document.getElementById('year').textContent = new Date().getFullYear();
}

// ====================================
// Preloader
// ====================================
function hidePreloader() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
}

// ====================================
// Performance Optimization
// ====================================
function optimizePerformance() {
    // Lazy load images
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
    
    // Reduce animations on low-end devices
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        document.body.classList.add('reduced-motion');
    }
}

// ====================================
// Service Worker Registration (PWA)
// ====================================
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            // Uncomment when you create a service worker
            // navigator.serviceWorker.register('/sw.js')
            //     .then(registration => console.log('SW registered'))
            //     .catch(err => console.log('SW registration failed'));
        });
    }
}

// ====================================
// Event Listeners
// ====================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize everything
    initLanguage();
    createParticles();
    animateProgress();
    smoothScroll();
    initParallax();
    animateBackground();
    initIntersectionObserver();
    initKonamiCode();
    updateYear();
    hidePreloader();
    optimizePerformance();
    registerServiceWorker();
    
    // Language toggle button
    const langBtn = document.getElementById('lang-btn');
    langBtn.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'pt' : 'en';
        switchLanguage(newLang);
        
        // Add click animation
        langBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            langBtn.style.transform = 'scale(1)';
        }, 150);
    });
    
    // Add hover effect to logo
    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseenter', () => {
        logo.style.transform = 'scale(1.05) rotate(2deg)';
    });
    logo.addEventListener('mouseleave', () => {
        logo.style.transform = 'scale(1) rotate(0deg)';
    });
});

// ====================================
// Window Events
// ====================================
window.addEventListener('resize', () => {
    // Recreate particles on resize
    const container = document.getElementById('particles-container');
    container.innerHTML = '';
    createParticles();
});

// Prevent context menu on logo (optional)
document.querySelector('.logo')?.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// ====================================
// Console Easter Egg
// ====================================
console.log('%c🚀 Saygonsoft - Digital Engineering Platform', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
console.log('%cWe\'re building something extraordinary!', 'color: #ff6b35; font-size: 14px;');
console.log('%cInterested in joining our team? Contact us!', 'color: #b8c5d6; font-size: 12px;');

// ====================================
// Analytics (placeholder)
// ====================================
function trackPageView() {
    // Add your analytics code here
    // Example: gtag('config', 'GA_MEASUREMENT_ID');
}

// ====================================
// Error Handling
// ====================================
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
    // You can send this to an error tracking service
});

// ====================================
// Export for testing (if needed)
// ====================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        switchLanguage,
        createParticles,
        animateProgress
    };
}
