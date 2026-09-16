/* =================================================================
   GRUPO CORPORATIVO A&J - LÓGICA JAVASCRIPT & INTERACTIVIDAD
   ================================================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. MENÚ MÓVIL RESPONSIVE --- */
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Cerrar menú al hacer clic en un enlace del menú móvil
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
    }

    /* --- 2. CALCULADORA INTERACTIVA DE TARIFAS (SEGÚN TABLA OFICIAL A&J) --- */
    // Matriz de precios exacta basada en la tabla suministrada (image_d83b01.png)
    const pricingMatrix = {
        'R1': {
            'eps_arl': { price: '$140.000', name: 'EPS + ARL' },
            'eps_arl_ccf': { price: '$210.000', name: 'EPS + ARL + Caja de Compensación (CCF)' },
            'eps_arl_afp': { price: '$420.000', name: 'EPS + ARL + Pensión (AFP)' },
            'completo': { price: '$490.000', name: 'EPS + ARL + Caja de Compensación + Pensión (Completo)' }
        },
        'R2': {
            'eps_arl': { price: '$149.000', name: 'EPS + ARL' },
            'eps_arl_ccf': { price: '$219.000', name: 'EPS + ARL + Caja de Compensación (CCF)' },
            'eps_arl_afp': { price: '$429.000', name: 'EPS + ARL + Pensión (AFP)' },
            'completo': { price: '$499.000', name: 'EPS + ARL + Caja de Compensación + Pensión (Completo)' }
        },
        'R3': {
            'eps_arl': { price: '$173.000', name: 'EPS + ARL' },
            'eps_arl_ccf': { price: '$243.000', name: 'EPS + ARL + Caja de Compensación (CCF)' },
            'eps_arl_afp': { price: '$453.000', name: 'EPS + ARL + Pensión (AFP)' },
            'completo': { price: '$524.000', name: 'EPS + ARL + Caja de Compensación + Pensión (Completo)' }
        },
        'R4': {
            'eps_arl': { price: '$207.000', name: 'EPS + ARL' },
            'eps_arl_ccf': { price: '$277.000', name: 'EPS + ARL + Caja de Compensación (CCF)' },
            'eps_arl_afp': { price: '$487.000', name: 'EPS + ARL + Pensión (AFP)' },
            'completo': { price: '$557.000', name: 'EPS + ARL + Caja de Compensación + Pensión (Completo)' }
        },
        'R5': {
            'eps_arl': { price: '$252.000', name: 'EPS + ARL' },
            'eps_arl_ccf': { price: '$322.000', name: 'EPS + ARL + Caja de Compensación (CCF)' },
            'eps_arl_afp': { price: '$533.000', name: 'EPS + ARL + Pensión (AFP)' },
            'completo': { price: '$603.000', name: 'EPS + ARL + Caja de Compensación + Pensión (Completo)' }
        }
    };

    const arlSelect = document.getElementById('arlLevel');
    const planSelect = document.getElementById('planType');
    const priceDisplay = document.getElementById('priceDisplay');
    const planSummary = document.getElementById('planSummary');
    const whatsappBtn = document.getElementById('whatsappBtn');

    const whatsappNumber = '573185292777';

    function updateCalculator() {
        const selectedArl = arlSelect.value;
        const selectedPlan = planSelect.value;

        const planData = pricingMatrix[selectedArl][selectedPlan];
        const arlText = arlSelect.options[arlSelect.selectedIndex].text;

        // Actualizar UI
        priceDisplay.textContent = planData.price;
        planSummary.innerHTML = `<strong>Cobertura:</strong> ${planData.name} <br><strong>Nivel ARL:</strong> ${arlText}`;

        // Construir URL de WhatsApp con mensaje prellenado (Optimización CRO)
        const message = `Hola, Grupo Corporativo A&J. Estoy interesado en afiliarme. Coticé el plan *${planData.name}* con *${arlText}* por un valor estimado de *${planData.price}* mensuales. Deseo iniciar mi proceso.`;
        const encodedMessage = encodeURIComponent(message);
        whatsappBtn.href = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    }

    if (arlSelect && planSelect && priceDisplay && whatsappBtn) {
        arlSelect.addEventListener('change', updateCalculator);
        planSelect.addEventListener('change', updateCalculator);
        
        // Ejecutar al cargar para inicializar valores por defecto
        updateCalculator();
    }

    /* --- 3. ACORDEÓN DE PREGUNTAS FRECUENTES (FAQ) --- */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Opcional: Cerrar los demás abiertos para mejor UX
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });

    /* --- 4. LOG DE RENDIMIENTO Y ESTABILIDAD --- */
    console.log('%c[Grupo Corporativo A&J] Landing Page Inicializada Correctamente - WhatsApp: 3185292777', 'color: #8bc34a; background: #1b3b6f; padding: 4px 8px; border-radius: 4px; font-weight: bold;');
});