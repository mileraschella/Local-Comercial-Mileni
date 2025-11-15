// JavaScript y jQuery para la página de Combos Mileni
// Funcionalidades: Filtros, Modal, Animaciones
// Usando TANTO JavaScript puro como jQuery

// Esperar a que jQuery y el DOM estén listos
$(document).ready(function() {
  
  // ========== ANIMACIONES AL HACER SCROLL (JavaScript puro) ==========
  function revealOnScroll() {
    // Usando JavaScript puro para cálculos precisos
    const items = document.querySelectorAll('.combo-item:not(.hidden)');
    
    items.forEach(function(item) {
      const elementTop = item.offsetTop;
      const elementBottom = elementTop + item.offsetHeight;
      const viewportTop = window.scrollY;
      const viewportBottom = viewportTop + window.innerHeight;
      
      if (elementBottom > viewportTop && elementTop < viewportBottom) {
        // Usando jQuery para animaciones suaves
        $(item).css({
          'opacity': '1',
          'transform': 'translateY(0)'
        });
      }
    });
  }
  
  // Inicializar elementos con opacidad 0 usando jQuery
  $('.combo-item').css({
    'opacity': '0',
    'transform': 'translateY(20px)',
    'transition': 'opacity 0.6s ease, transform 0.6s ease'
  });
  
  // Revelar al cargar y al hacer scroll (JavaScript puro para eventos)
  revealOnScroll();
  $(window).on('scroll', revealOnScroll);
  
  // ========== MODAL DE DETALLES (jQuery + JavaScript puro) ==========
  const modal = $('#combo-modal');
  const modalBody = $('#modal-body');
  
  // Abrir modal usando jQuery
  $('.view-details-btn').on('click', function(e) {
    e.stopPropagation();
    
    // Usando jQuery para encontrar elementos
    const $card = $(this).closest('.combo-item');
    const $details = $card.find('.combo-details');
    const title = $card.find('h3').text();
    const description = $details.find('p').text();
    
    // Obtener información de la oferta usando jQuery
    const $oferta = $details.find('.combo-oferta');
    const precioOriginal = $oferta.data('precio-original');
    const precioOferta = $oferta.data('precio-oferta');
    const descuento = $oferta.data('descuento');
    
    // Construir HTML usando JavaScript puro
    let itemsHTML = '';
    $details.find('li').each(function() {
      itemsHTML += '<li>' + $(this).text() + '</li>';
    });
    
    // Construir HTML de la oferta
    let ofertaHTML = '';
    if ($oferta.length > 0) {
      ofertaHTML = 
        '<div class="modal-oferta">' +
        '<div class="precios-container">' +
        '<span class="precio-original-modal">$' + precioOriginal.toLocaleString('es-AR') + '</span>' +
        '<span class="precio-oferta-modal">$' + precioOferta.toLocaleString('es-AR') + '</span>' +
        '</div>' +
        '<span class="descuento-badge-modal">' + descuento + '% OFF</span>' +
        '<p class="ahorro-texto">Ahorrás $' + (precioOriginal - precioOferta).toLocaleString('es-AR') + '</p>' +
        '</div>';
    }
    
    // Usar jQuery para actualizar el modal
    modalBody.html(
      '<h4>' + title + '</h4>' +
      '<p>' + description + '</p>' +
      '<ul>' + itemsHTML + '</ul>' +
      ofertaHTML
    );
    
    // Mostrar modal con jQuery
    modal.addClass('show');
    $('body').css('overflow', 'hidden');
  });
  
  // Cerrar modal (combinando jQuery y JavaScript puro)
  function closeModalFunction() {
    modal.removeClass('show');
    $('body').css('overflow', 'auto');
  }
  
  // Usando jQuery para eventos
  $('.close-modal').on('click', closeModalFunction);
  
  modal.on('click', function(e) {
    if (e.target === this) {
      closeModalFunction();
    }
  });
  
  // Cerrar modal con tecla ESC (JavaScript puro para eventos de teclado)
  $(document).on('keydown', function(e) {
    if (e.key === 'Escape' && modal.hasClass('show')) {
      closeModalFunction();
    }
  });
  
  // ========== EFECTOS HOVER MEJORADOS (jQuery) ==========
  $('.combo-item').hover(
    function() {
      // Al entrar el mouse - usando jQuery
      $(this).find('.product-image').css('transform', 'scale(1.05)');
    },
    function() {
      // Al salir el mouse - usando jQuery
      $(this).find('.product-image').css('transform', 'scale(1)');
    }
  );
  
  // ========== FUNCIONALIDAD ADICIONAL CON JAVASCRIPT PURO ==========
  // Contador de combos visibles (JavaScript puro)
  function updateComboCount() {
    const visibleCount = document.querySelectorAll('.combo-item:not(.hidden)').length;
    console.log('Combos visibles: ' + visibleCount);
  }
  
  // Animación de entrada usando JavaScript puro
  window.addEventListener('load', function() {
    const items = document.querySelectorAll('.combo-item');
    items.forEach(function(item, index) {
      setTimeout(function() {
        item.style.opacity = '0.5';
      }, index * 100);
    });
  });
  
  console.log('✅ JavaScript y jQuery de Combos Mileni cargados correctamente');
  console.log('📊 jQuery versión: ' + $.fn.jquery);
});

