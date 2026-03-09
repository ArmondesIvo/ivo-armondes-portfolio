const translations = {
    en: {
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "hero-tagline": "Digitizing local commerce: professional and modern online presence for small businesses.",
        "hero-bio": "Brazilian software developer specialized in transforming small business needs into high-impact digital solutions. Focused on creating clean, fast, and results-driven interfaces.",
        "btn-contact": "Contact Me",
        "section-title": "Project Portfolio",
        "project-1-desc": "Renovation Company",
        "project-2-desc": "Architect Portfolio",
        "visit-site": "Visit Site",
        "footer-title": "Let's build something together?",
        "modal-title": "How would you like to connect?"
    },
    pt: {
        "nav-projects": "Projetos",
        "nav-contact": "Contato",
        "hero-tagline": "Digitalizando o comércio local: presença online profissional e moderna para pequenos negócios.",
        "hero-bio": "Desenvolvedor de software brasileiro especializado em transformar as necessidades de pequenos negócios em soluções digitais de alto impacto. Focado em criar interfaces limpas, rápidas e que geram resultados reais.",
        "btn-contact": "Entre em Contato",
        "section-title": "Portfólio de Projetos",
        "project-1-desc": "Empresa de Renovação",
        "project-2-desc": "Portfólio de Arquiteta",
        "visit-site": "Visitar Site",
        "footer-title": "Vamos construir algo juntos?",
        "modal-title": "Como você prefere entrar em contato?"
    },
    fr: {
        "nav-projects": "Projets",
        "nav-contact": "Contact",
        "hero-tagline": "Numériser le commerce local : une présence en ligne professionnelle et moderne pour les petites entreprises.",
        "hero-bio": "Développeur de logiciels brésilien spécialisé dans la transformation des besoins des petites entreprises en solutions numériques à fort impact. Concentré sur la création d'interfaces propres, rapides et axées sur les résultats.",
        "btn-contact": "Contactez-moi",
        "section-title": "Portefeuille de Projets",
        "project-1-desc": "Entreprise de Rénovation",
        "project-2-desc": "Portfolio d'Architecte",
        "visit-site": "Visiter le Site",
        "footer-title": "Construisons quelque chose ensemble ?",
        "modal-title": "Comment souhaitez-vous nous contacter ?"
    }
};

function toggleModal() {
    const modal = document.getElementById('contact-modal');
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        // Pequeno delay para a animação de fade funcionar
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modal.querySelector('div').classList.remove('scale-95');
        }, 10);
    } else {
        modal.classList.add('opacity-0');
        modal.querySelector('div').classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('contact-modal');
    if (event.target == modal) {
        toggleModal();
    }
}

function changeLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-link').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = document.getElementById(`btn-${lang}`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    localStorage.setItem('preferredLang', lang);
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    changeLanguage(savedLang);
});