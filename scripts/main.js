// ===================================
// Content Loader with Multi-language & Dark Mode Support
// ===================================

class ContentLoader {
    constructor() {
        this.contentCache = {};
        this.currentLang = localStorage.getItem('language') || 'vn';
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    async init() {
        try {
            this.initTheme();
            await this.loadAllContent();
            this.renderContent();
            this.initEventListeners();
            this.updateLanguageUI();
        } catch (error) {
            console.error('Error loading content:', error);
            this.handleError();
        }
    }

    initTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        this.updateThemeIcon();
    }

    updateThemeIcon() {
        const themeIcon = document.getElementById('themeIcon');
        if (themeIcon) {
            themeIcon.textContent = this.currentTheme === 'dark' ? '☀️' : '🌙';
        }
    }

    updateLanguageUI() {
        const langText = document.getElementById('langText');
        if (langText) {
            langText.textContent = this.currentLang === 'vn' ? 'EN' : 'VN';
        }
        
        // Update nav menu
        const navItems = {
            home: this.currentLang === 'vn' ? 'Trang chủ' : 'Home',
            about: this.currentLang === 'vn' ? 'Về chúng tôi' : 'About',
            services: this.currentLang === 'vn' ? 'Dịch vụ' : 'Services',
            projects: this.currentLang === 'vn' ? 'Dự án' : 'Projects',
            contact: this.currentLang === 'vn' ? 'Liên hệ' : 'Contact'
        };
        
        document.querySelectorAll('[data-nav]').forEach(link => {
            const key = link.getAttribute('data-nav');
            if (navItems[key]) {
                link.textContent = navItems[key];
            }
        });
        
        // Update CTA button
        const navCtaBtn = document.getElementById('navCtaBtn');
        if (navCtaBtn) {
            navCtaBtn.textContent = this.currentLang === 'vn' ? 'Liên hệ ngay' : 'Contact Now';
        }
    }

    async loadAllContent() {
        const contentFiles = [
            'general',
            'hero',
            'about',
            'services',
            'projects',
            'contact'
        ];

        const loadPromises = contentFiles.map(file => this.loadContent(file));
        await Promise.all(loadPromises);
    }

    async loadContent(filename) {
        const folder = this.currentLang === 'vn' ? 'content_vn' : 'content_en';
        try {
            const response = await fetch(`${folder}/${filename}.txt`);
            if (!response.ok) {
                throw new Error(`Failed to load ${filename}.txt`);
            }
            const text = await response.text();
            this.contentCache[filename] = JSON.parse(text);
        } catch (error) {
            console.error(`Error loading ${filename}:`, error);
            this.contentCache[filename] = this.getDefaultContent(filename);
        }
    }

    getDefaultContent(filename) {
        // Fallback content if file loading fails
        const defaults = {
            general: {
                studioName: "Liv5Studio",
                tagline: "Chuyên nghiệp hóa mọi sự kiện thể thao"
            },
            hero: {
                title: "Nâng tầm mọi sự kiện thể thao",
                subtitle: "Livestream chuyên nghiệp - Chất lượng đỉnh cao",
                description: "Liv5Studio mang đến giải pháp phát sóng chuyên nghiệp"
            }
        };
        return defaults[filename] || {};
    }

    renderContent() {
        this.renderGeneral();
        this.renderHero();
        this.renderAbout();
        this.renderServices();
        this.renderProjects();
        this.renderContact();
        this.renderFooter();
    }

    renderGeneral() {
        const general = this.contentCache.general;
        document.title = `${general.studioName} - Livestream Chuyên Nghiệp Sự Kiện Thể Thao`;
    }

    renderHero() {
        const hero = this.contentCache.hero;
        this.setElementText('heroTitle', hero.title);
        this.setElementText('heroSubtitle', hero.subtitle);
        this.setElementText('heroDescription', hero.description);
        this.setElementText('heroPrimaryBtn', hero.primaryButton);
        this.setElementText('heroSecondaryBtn', hero.secondaryButton);
    }

    renderAbout() {
        const about = this.contentCache.about;
        this.setElementText('aboutTitle', about.title);
        this.setElementText('aboutSubtitle', about.subtitle);
        this.setElementText('aboutDescription', about.description);

        // Render features
        const featuresGrid = document.getElementById('featuresGrid');
        if (featuresGrid && about.features) {
            featuresGrid.innerHTML = about.features.map(feature => `
                <div class="feature-card">
                    <span class="feature-icon">${feature.icon}</span>
                    <h3>${feature.title}</h3>
                    <p>${feature.description}</p>
                </div>
            `).join('');
        }
    }

    renderServices() {
        const services = this.contentCache.services;
        this.setElementText('servicesTitle', services.title);
        this.setElementText('servicesSubtitle', services.subtitle);

        // Render services list
        const servicesList = document.getElementById('servicesList');
        if (servicesList && services.services) {
            servicesList.innerHTML = services.services.map(service => `
                <div class="service-card">
                    <h3>${service.name}</h3>
                    <p>${service.description}</p>
                    <div class="service-features">
                        ${service.features.map(feature => `
                            <div class="service-feature-item">${feature}</div>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        }
    }

    renderProjects() {
        const projects = this.contentCache.projects;
        this.setElementText('projectsTitle', projects.title);
        this.setElementText('projectsSubtitle', projects.subtitle);

        // Render projects grid
        const projectsGrid = document.getElementById('projectsGrid');
        if (projectsGrid && projects.projects) {
            projectsGrid.innerHTML = projects.projects.map(project => {
                // Check if project has a real image
                const hasImage = project.image && project.image !== 'project1.jpg' && project.image !== 'project2.jpg' && project.image !== 'project3.jpg' && project.image !== 'project4.jpg';
                
                return `
                <div class="project-card">
                    <div class="project-image${hasImage ? ' has-real-image' : ''}">
                        ${hasImage ? `<img src="images/${project.image}" alt="${project.name}" loading="lazy">` : '<!-- Placeholder gradient -->'}
                    </div>
                    <div class="project-content">
                        <span class="project-category">${project.category}</span>
                        <h3>${project.name}</h3>
                        <p>${project.description}</p>
                    </div>
                </div>
                `;
            }).join('');
        }
    }

    renderContact() {
        const contact = this.contentCache.contact;
        const general = this.contentCache.general;

        this.setElementText('contactTitle', contact.title);
        this.setElementText('contactSubtitle', contact.subtitle);
        this.setElementText('contactDescription', contact.description);

        // Render contact details
        const contactDetails = document.getElementById('contactDetails');
        if (contactDetails) {
            contactDetails.innerHTML = `
                <div class="contact-item">
                    <span class="contact-item-icon">📧</span>
                    <div class="contact-item-content">
                        <h4>Email</h4>
                        <p>${general.email}</p>
                    </div>
                </div>
                <div class="contact-item">
                    <span class="contact-item-icon">📞</span>
                    <div class="contact-item-content">
                        <h4>Điện thoại</h4>
                        <p>${general.phone}</p>
                    </div>
                </div>
                <div class="contact-item">
                    <span class="contact-item-icon">📍</span>
                    <div class="contact-item-content">
                        <h4>Địa chỉ</h4>
                        <p>${general.address}</p>
                    </div>
                </div>
                <div class="contact-item">
                    <span class="contact-item-icon">🕐</span>
                    <div class="contact-item-content">
                        <h4>Giờ làm việc</h4>
                        <p>${contact.workingHours}</p>
                    </div>
                </div>
            `;
        }

        // Render social links
        const socialLinks = document.getElementById('socialLinks');
        if (socialLinks) {
            socialLinks.innerHTML = `
                <a href="${general.facebook}" class="social-link" target="_blank" rel="noopener" title="Facebook">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                </a>
                <a href="${general.youtube}" class="social-link" target="_blank" rel="noopener" title="YouTube">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                </a>
                <a href="${general.instagram}" class="social-link" target="_blank" rel="noopener" title="Instagram">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                </a>
            `;
        }

        // Update form placeholders
        const form = document.getElementById('contactForm');
        if (form && contact.formFields) {
            const inputs = form.querySelectorAll('.form-input');
            if (inputs[0]) inputs[0].placeholder = contact.formFields.namePlaceholder;
            if (inputs[1]) inputs[1].placeholder = contact.formFields.emailPlaceholder;
            if (inputs[2]) inputs[2].placeholder = contact.formFields.phonePlaceholder;
            if (inputs[3]) inputs[3].placeholder = contact.formFields.messagePlaceholder;
            
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) submitBtn.textContent = contact.formFields.submitButton;
        }
    }

    renderFooter() {
        const general = this.contentCache.general;
        
        this.setElementText('footerTagline', general.tagline);
        this.setElementText('footerStudioName', general.studioName);

        // Footer contact info
        const footerContactInfo = document.getElementById('footerContactInfo');
        if (footerContactInfo) {
            footerContactInfo.innerHTML = `
                <li><a href="mailto:${general.email}">${general.email}</a></li>
                <li><a href="tel:${general.phone.replace(/\s/g, '')}">${general.phone}</a></li>
                <li>${general.address}</li>
            `;
        }
    }

    setElementText(id, text) {
        const element = document.getElementById(id);
        if (element && text) {
            element.textContent = text;
        }
    }

    initEventListeners() {
        // Dark mode toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
        
        // Language switch
        const langSwitch = document.getElementById('langSwitch');
        if (langSwitch) {
            langSwitch.addEventListener('click', () => this.switchLanguage());
        }
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Mobile menu toggle
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (mobileMenuToggle && navMenu) {
            mobileMenuToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                mobileMenuToggle.classList.toggle('active');
            });
        }

        // Contact form submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmit(contactForm);
            });
        }

        // Navbar scroll effect
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            const currentScroll = window.pageYOffset;

            if (currentScroll > 50) {
                navbar.style.boxShadow = 'var(--shadow-md)';
            } else {
                navbar.style.boxShadow = 'none';
            }

            lastScroll = currentScroll;
        });

        // CTA buttons
        const ctaButtons = document.querySelectorAll('#heroPrimaryBtn, #heroSecondaryBtn, #navCtaBtn');
        ctaButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                document.getElementById('contact').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }
    
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.currentTheme);
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        this.updateThemeIcon();
    }
    
    async switchLanguage() {
        this.currentLang = this.currentLang === 'vn' ? 'en' : 'vn';
        localStorage.setItem('language', this.currentLang);
        
        // Reload content
        await this.loadAllContent();
        this.renderContent();
        this.updateLanguageUI();
    }

    handleFormSubmit(form) {
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Show success message
        alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
        form.reset();

        // In a real implementation, you would send this to a server
        console.log('Form data:', data);
    }

    handleError() {
        console.warn('Using default content due to loading errors');
        // The getDefaultContent method will provide fallback content
    }
}

// ===================================
// Initialize on DOM Ready
// ===================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new ContentLoader();
    });
} else {
    new ContentLoader();
}

// ===================================
// Additional Utilities
// ===================================

// Add animation on scroll
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.feature-card, .service-card, .project-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
};

// Run after content is loaded
setTimeout(observeElements, 500);