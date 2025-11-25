// Data for the website
const AppData = {
    services: [
        {
            title: "Диагностика",
            description: "Компьютерная диагностика электронных систем автомобиля",
            price: "от 1 500 ₽",
            icon: "fas fa-car-battery"
        },
        {
            title: "ТО и обслуживание",
            description: "Регулярное ТО с заменой жидкостей и расходников",
            price: "от 3 000 ₽",
            icon: "fas fa-oil-can"
        },
        {
            title: "Двигатель",
            description: "Капитальный и текущий ремонт двигателей",
            price: "от 5 000 ₽",
            icon: "fas fa-cogs"
        },
        {
            title: "Тормозная система",
            description: "Диагностика и ремонт тормозов, замена колодок",
            price: "от 1 500 ₽",
            icon: "fas fa-tachometer-alt"
        },
        {
            title: "Подвеска",
            description: "Диагностика и ремонт ходовой части",
            price: "от 1 500 ₽",
            icon: "fas fa-car-side"
        },
        {
            title: "Электрика",
            description: "Ремонт электрооборудования и проводки",
            price: "от 500 ₽",
            icon: "fas fa-bolt"
        }
    ],
    
    features: [
        {
            text: "Опытные мастера с сертификатами",
            icon: "fas fa-user-tie"
        },
        {
            text: "Современное диагностическое оборудование",
            icon: "fas fa-tools"
        },
        {
            text: "Гарантия на все виды работ",
            icon: "fas fa-shield-alt"
        },
        {
            text: "Оригинальные и качественные запчасти",
            icon: "fas fa-cog"
        }
    ],

    priceList: [
        {
            category: "ТО и диагностика",
            services: [
                { name: "Замена масла и масляного фильтра ДВС", price: "от 1000 ₽" },
                { name: "Фильтр салона, замена", price: "от 300 ₽" },
                { name: "Фильтр воздушный, замена", price: "от 300 ₽" },
                { name: "Фильтр топливный, замена", price: "от 800 ₽" },
                { name: "Чтение кодов неисправностей, сброс ошибок", price: "от 1 500 ₽" },
                { name: "Диагностика двигателя", price: "от 1 500 ₽" },
                { name: "Диагностика ходовой части", price: "от 1 500 ₽" }
            ]
        },
        {
            category: "Тормозная система",
            services: [
                { name: "Тормозные колодки (за ось), замена", price: "от 1 500 ₽" },
                { name: "Тормозные диски (за ось), замена", price: "от 1 500 ₽" },
                { name: "Тормозной суппорт, профилактика", price: "от 600 ₽" },
                { name: "Замена датчика ABS", price: "от 1 500 ₽" },
                { name: "Замена тормозной жидкости", price: "от 1 500 ₽" }
            ]
        },
        {
            category: "Подвеска",
            services: [
                { name: "Сайлентблок рычага подвески, замена", price: "от 500 ₽" },
                { name: "Шаровая опора, замена", price: "от 1 500 ₽" },
                { name: "Стойка амортизатора, замена", price: "от 2 500 ₽" },
                { name: "Стойка стабилизатора, замена", price: "от 800 ₽" },
                { name: "Втулка стабилизатора, замена", price: "от 800 ₽" },
                { name: "Демонтаж/монтаж рычагов подвески", price: "от 1 500 ₽" },
                { name: "Сход-развал (одна ось)", price: "от 1 500 ₽" }
            ]
        },
        {
            category: "Двигатель",
            services: [
                { name: "Ремень ГРМ, замена", price: "от 6 000 ₽" },
                { name: "Водяной насос (помпа), замена", price: "от 2 500 ₽" },
                { name: "Генератор, замена", price: "от 2 500 ₽" },
                { name: "Стартер, замена", price: "от 2 000 ₽" },
                { name: "Демонтаж/монтаж ДВС", price: "от 20 000 ₽" },
                { name: "Демонтаж/монтаж ГБЦ", price: "от 10 000 ₽" },
                { name: "Демонтаж/монтаж турбокомпрессора", price: "от 10 000 ₽" }
            ]
        }
    ]
};

class AutoluxApp {
    constructor() {
        // Telegram configuration - ЗАМЕНИТЕ НА ВАШИ ДАННЫЕ!
        this.telegramConfig = {
            botToken: '8500516623:AAFCCsvYp-uJecORbGOlGv7LqPTp8eo9Cv0', // ваш токен
            chatId: '-4626745864' // Ваш Chat ID беседы
        };

        this.menuToggle = document.getElementById('menuToggle');
        this.nav = document.getElementById('nav');
        this.logo = document.getElementById('logo');
        this.privacyModal = document.getElementById('privacyModal');
        this.privacyPolicyLink = document.getElementById('customPrivacyPolicyLink');
        
        this.init();
    }
    
    init() {
        this.setupMenuToggle();
        this.setupModal();
        this.setupSmoothScrolling();
        this.loadDynamicContent();
        this.setupAnimations();
        this.setCurrentYear();
        this.setupPriceListAccordion();
        this.setupLogoClick();
        this.setupScrollEffects();
        this.setupCustomForm();
    }
    
    setupCustomForm() {
        this.customForm = document.getElementById('custom-appointment-form');
        this.customPrivacyCheckbox = document.getElementById('customPrivacyPolicy');
        this.customSubmitBtn = document.getElementById('customSubmitBtn');
        
        if (!this.customForm) return;
        
        // Form submission handler
        this.customForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleCustomFormSubmit();
        });
        
        // Privacy checkbox handler
        if (this.customPrivacyCheckbox && this.customSubmitBtn) {
            this.customPrivacyCheckbox.addEventListener('change', (e) => {
                this.customSubmitBtn.disabled = !e.target.checked;
            });
        }
        
        // Privacy policy link handler
        if (this.privacyPolicyLink) {
            this.privacyPolicyLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.openModal();
            });
        }
    }
    
    async handleCustomFormSubmit() {
        const formData = new FormData(this.customForm);
        const data = Object.fromEntries(formData);
        
        // Validation
        if (!this.validateForm(data)) {
            return;
        }
        
        try {
            this.setCustomFormLoading(true);
            
            // Prepare lead data
            const leadData = {
                name: data.name,
                phone: data.phone,
                car: data.car,
                service: data.service,
                message: data.message || 'Не указано',
                source: 'website',
                timestamp: new Date().toLocaleString('ru-RU')
            };
            
            // Send to Telegram
            await this.sendToTelegram(leadData);
            
            this.showSuccessMessage();
            this.resetForm();
            
        } catch (error) {
            console.error('Form submission error:', error);
            this.showErrorMessage();
        } finally {
            this.setCustomFormLoading(false);
        }
    }
    
    validateForm(data) {
        if (!data.name || !data.phone || !data.car || !data.service) {
            this.showNotification('Пожалуйста, заполните все обязательные поля', 'error');
            return false;
        }
        
        if (!data.privacyPolicy) {
            this.showNotification('Пожалуйста, согласитесь с политикой обработки персональных данных', 'error');
            return false;
        }
        
        // Basic phone validation
        const phoneRegex = /^[\+]?[78][-\s]?\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;
        if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
            this.showNotification('Пожалуйста, введите корректный номер телефона', 'error');
            return false;
        }
        
        return true;
    }
    
    async sendToTelegram(leadData) {
        const message = this.formatTelegramMessage(leadData);
        
        const response = await fetch(`https://api.telegram.org/bot${this.telegramConfig.botToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: this.telegramConfig.chatId,
                text: message,
                parse_mode: 'HTML'
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.description || 'Telegram API error');
        }
        
        return response.json();
    }
    
    formatTelegramMessage(leadData) {
        return `
🚗 <b>НОВАЯ ЗАЯВКА С САЙТА</b>

👤 <b>Имя:</b> ${leadData.name}
📞 <b>Телефон:</b> ${leadData.phone}
🚙 <b>Автомобиль:</b> ${leadData.car}
🔧 <b>Услуга:</b> ${leadData.service}
📝 <b>Сообщение:</b> ${leadData.message}

⏰ <b>Время:</b> ${leadData.timestamp}
🌐 <b>Источник:</b> сайт АвтоЛюкс
        `.trim();
    }
    
    setCustomFormLoading(loading) {
        if (!this.customSubmitBtn) return;
        
        if (loading) {
            this.customSubmitBtn.disabled = true;
            this.customSubmitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
        } else {
            const isChecked = this.customPrivacyCheckbox ? this.customPrivacyCheckbox.checked : false;
            this.customSubmitBtn.disabled = !isChecked;
            this.customSubmitBtn.innerHTML = '<span class="btn__text">Отправить заявку</span><i class="fas fa-paper-plane btn__icon"></i>';
        }
    }
    
    resetForm() {
        if (this.customForm) {
            this.customForm.reset();
        }
        if (this.customPrivacyCheckbox) {
            this.customPrivacyCheckbox.checked = false;
        }
        if (this.customSubmitBtn) {
            this.customSubmitBtn.disabled = true;
        }
    }
    
    showSuccessMessage() {
        this.showNotification('Заявка успешно отправлена! Мы свяжемся с вами в течение 15 минут.', 'success');
    }
    
    showErrorMessage() {
        this.showNotification('Ошибка при отправке формы. Пожалуйста, позвоните нам: +7 (995) 123-44-77', 'error');
    }
    
    setupLogoClick() {
        if (!this.logo) return;
        
        this.logo.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            history.replaceState(null, null, ' ');
        });
    }
    
    setupMenuToggle() {
        if (!this.menuToggle || !this.nav) return;
        
        this.menuToggle.addEventListener('click', () => {
            const isExpanded = this.menuToggle.getAttribute('aria-expanded') === 'true';
            this.menuToggle.setAttribute('aria-expanded', !isExpanded);
            this.menuToggle.classList.toggle('active');
            
            this.nav.classList.toggle('nav--mobile-open');
            document.body.classList.toggle('menu-open');
        });

        // Close menu when clicking on links
        const navLinks = this.nav.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.nav.classList.contains('nav--mobile-open') && 
                !this.nav.contains(e.target) && 
                !this.menuToggle.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
    }

    closeMobileMenu() {
        this.nav.classList.remove('nav--mobile-open');
        this.menuToggle.classList.remove('active');
        this.menuToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
    }
    
    setupScrollEffects() {
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 50) {
                header.style.background = 'rgba(4, 3, 3, 0.95)';
                header.style.backdropFilter = 'blur(20px)';
            } else {
                header.style.background = 'rgba(4, 3, 3, 0.85)';
                header.style.backdropFilter = 'blur(15px)';
            }
        });
    }
    
    setupModal() {
        if (!this.privacyModal || !this.privacyPolicyLink) return;
        
        this.privacyPolicyLink.addEventListener('click', (e) => {
            e.preventDefault();
            this.openModal();
        });
        
        const closeButtons = this.privacyModal.querySelectorAll('[data-modal-close]');
        closeButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.closeModal();
            });
        });
        
        this.privacyModal.addEventListener('click', (e) => {
            if (e.target === this.privacyModal) {
                this.closeModal();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.privacyModal.classList.contains('modal--active')) {
                this.closeModal();
            }
        });
    }
    
    setupPriceListAccordion() {
        setTimeout(() => {
            const priceCategories = document.querySelectorAll('.price-category');
            
            priceCategories.forEach(category => {
                const header = category.querySelector('.price-category__header');
                const services = category.querySelector('.price-category__services');
                const toggleIcon = category.querySelector('.price-category__toggle i');
                
                if (services) {
                    services.style.display = 'none';
                }
                
                header.addEventListener('click', () => {
                    const isActive = category.classList.contains('price-category--active');
                    
                    if (isActive) {
                        services.style.display = 'none';
                        category.classList.remove('price-category--active');
                        if (toggleIcon) {
                            toggleIcon.classList.remove('fa-chevron-up');
                            toggleIcon.classList.add('fa-chevron-down');
                        }
                    } else {
                        services.style.display = 'block';
                        category.classList.add('price-category--active');
                        if (toggleIcon) {
                            toggleIcon.classList.remove('fa-chevron-down');
                            toggleIcon.classList.add('fa-chevron-up');
                        }
                    }
                });
            });
        }, 100);
    }
    
    openModal() {
        this.privacyModal.classList.add('modal--active');
        document.body.style.overflow = 'hidden';
        
        const closeButton = this.privacyModal.querySelector('.modal__close');
        if (closeButton) {
            setTimeout(() => closeButton.focus(), 100);
        }
    }
    
    closeModal() {
        this.privacyModal.classList.remove('modal--active');
        document.body.style.overflow = '';
    }
    
    setupSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                if (href === '#') return;
                
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault();
                    
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    loadDynamicContent() {
        this.loadServices();
        this.loadFeatures();
        this.loadPriceList();
    }
    
    loadServices() {
        const servicesGrid = document.getElementById('servicesGrid');
        if (!servicesGrid) return;
        
        servicesGrid.innerHTML = AppData.services.map(service => `
            <div class="service-card" data-service-card>
                <div class="service-card__icon">
                    <i class="${service.icon}" aria-hidden="true"></i>
                </div>
                <h3 class="service-card__title">${service.title}</h3>
                <p class="service-card__description">${service.description}</p>
                <div class="service-card__price">${service.price}</div>
            </div>
        `).join('');
    }
    
    loadFeatures() {
        const aboutFeatures = document.getElementById('aboutFeatures');
        if (!aboutFeatures) return;
        
        aboutFeatures.innerHTML = AppData.features.map(feature => `
            <div class="feature">
                <i class="${feature.icon}" aria-hidden="true"></i>
                <span>${feature.text}</span>
            </div>
        `).join('');
    }
    
    loadPriceList() {
        const priceListContainer = document.getElementById('priceList');
        if (!priceListContainer) return;
        
        priceListContainer.innerHTML = AppData.priceList.map(category => `
            <div class="price-category">
                <div class="price-category__header">
                    <h3 class="price-category__title">${category.category}</h3>
                    <span class="price-category__toggle">
                        <i class="fas fa-chevron-down"></i>
                    </span>
                </div>
                <div class="price-category__services">
                    ${category.services.map(service => `
                        <div class="price-service">
                            <span class="price-service__name">${service.name}</span>
                            <span class="price-service__price">${service.price}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }
    
    setupAnimations() {
        this.animateTitle();
        this.setupScrollAnimations();
    }
    
    animateTitle() {
        const titleWords = document.querySelectorAll('[data-title-word]');
        titleWords.forEach((word, index) => {
            word.style.opacity = '0';
            word.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                word.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                word.style.opacity = '1';
                word.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }
    
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('[data-service-card]').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }
    
    setCurrentYear() {
        const yearElement = document.getElementById('currentYear');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }
    
    showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <div class="notification__content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => notification.classList.add('notification--visible'), 100);
        
        setTimeout(() => {
            notification.classList.remove('notification--visible');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AutoluxApp();
});

// Ensure page loads at top
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
    window.scrollTo(0, 0);

});
