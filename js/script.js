// Menú hamburguesa (si existe)
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => menu.classList.toggle('show'));
}

// Catálogo de platos y bebidas
const CATALOG = {
  'Nachos con queso': {
    img: 'https://images.unsplash.com/photo-1604908554007-5e2d75bb7ba4?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Totopos de maíz', 'Queso derretido', 'Jalapeños', 'Guacamole', 'Sour cream']
  },
  'Patatas bravas': {
    img: 'https://images.unsplash.com/photo-1546549039-49bdfc0501d8?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Patata frita', 'Salsa brava', 'Alioli', 'Pimentón']
  },
  'Croquetas caseras': {
    img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Bechamel', 'Jamón ibérico', 'Pan rallado', 'Huevo']
  },
  'Ensaladilla rusa': {
    img: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Patata', 'Zanahoria', 'Atún', 'Guisantes', 'Mayonesa']
  },
  'Queso curado': {
    img: 'https://images.unsplash.com/photo-1541782814453-c7c5a6ce1c57?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Queso de oveja', 'Aceite de oliva', 'Orégano']
  },
  'Ensalada mixta': {
    img: 'https://images.unsplash.com/photo-1555243896-c709bfa0b564?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Lechuga', 'Tomate', 'Huevo', 'Atún', 'Cebolla']
  },
  'Sopa del día': {
    img: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Caldo casero', 'Verduras', 'Fideos']
  },
  'Macarrones boloñesa': {
    img: 'https://images.unsplash.com/photo-1523983254936-b2646e2718bf?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Pasta', 'Carne picada', 'Tomate', 'Queso']
  },
  'Gazpacho andaluz': {
    img: 'https://images.unsplash.com/photo-1505575972945-2804b37a7e1d?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Tomate', 'Pepino', 'Pimiento', 'Ajo', 'Aceite de oliva']
  },
  'Revuelto de setas': {
    img: 'https://images.unsplash.com/photo-1514517220035-9f8ef32c4a43?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Setas', 'Huevo', 'Ajo', 'Perejil']
  },
  'Arroz con verduras': {
    img: 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Arroz', 'Pimiento', 'Calabacín', 'Zanahoria']
  },
  'Espaguetis carbonara': {
    img: 'https://images.unsplash.com/photo-1526312426976-593c2b999e41?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Espagueti', 'Bacon', 'Huevo', 'Queso']
  },
  'Huevos rotos': {
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Huevos', 'Patatas', 'Jamón']
  },
  'Ternera a la plancha': {
    img: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Filete de ternera', 'Sal en escamas', 'Guarnición']
  },
  'Pollo al ajillo': {
    img: 'https://images.unsplash.com/photo-1604908177447-79501e2321d6?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Pollo', 'Ajo', 'Aceite de oliva', 'Vino blanco']
  },
  'Pescado frito': {
    img: 'https://images.unsplash.com/photo-1604908553724-7c8a1b6a53c1?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Pescado', 'Harina', 'Aceite']
  },
  'Albóndigas en salsa': {
    img: 'https://images.unsplash.com/photo-1544025161-d8c3fd61f10f?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Carne picada', 'Tomate', 'Cebolla', 'Especias']
  },
  'Filete de cerdo': {
    img: 'https://images.unsplash.com/photo-1604908553502-695d0f1e9d0f?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Lomo de cerdo', 'Mojo picón', 'Patatas']
  },
  'Hamburguesa casera': {
    img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Carne de res', 'Queso curado', 'Lechuga', 'Tomate']
  },
  'Paella individual': {
    img: 'https://images.unsplash.com/photo-1604908177363-152f70b6a2d5?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Arroz', 'Marisco', 'Pollo', 'Azafrán']
  },
  'Tortilla española': {
    img: 'https://images.unsplash.com/photo-1604908177237-8e05b8a3b681?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Huevo', 'Patata', 'Cebolla']
  },
  'Arroz con leche': {
    img: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Arroz', 'Leche', 'Canela', 'Azúcar']
  },
  'Tarta de queso': {
    img: 'https://images.unsplash.com/photo-1542826438-4938e3a0f3fe?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Queso crema', 'Galleta', 'Mermelada frutos rojos']
  },
  'Flan casero': {
    img: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2a389?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Huevo', 'Leche', 'Caramelo']
  },
  'Helado variado': {
    img: 'https://images.unsplash.com/photo-1491267491800-6ca5cb67f42f?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Chocolate', 'Vainilla', 'Fresa']
  },
  'Brownie': {
    img: 'https://images.unsplash.com/photo-1601972599720-bf929b85a2b1?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Chocolate', 'Nueces', 'Harina', 'Azúcar']
  },
  'Refrescos': {
    img: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Coca-Cola', 'Fanta', 'Sprite']
  },
  'Cervezas': {
    img: 'https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Mahou', 'Cruzcampo', 'Alhambra']
  },
  'Vino tinto': {
    img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4e19b4?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Selección de la casa']
  },
  'Vino blanco': {
    img: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Frío y afrutado']
  },
  'Agua mineral': {
    img: 'https://images.unsplash.com/photo-1441123100240-f9f3f77ed41b?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Con gas', 'Sin gas']
  }
};

// Modal
const modal = document.getElementById('plato-modal');
const modalTitle = document.getElementById('plato-title');
const modalImg = document.getElementById('plato-img');
const modalIngredientes = document.getElementById('plato-ingredientes');
const modalCloseBtn = document.querySelector('.modal-close');

function openModalFor(name) {
  const data = CATALOG[name] || {
    img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop',
    ingredientes: ['Ingredientes variados', 'Producto fresco', 'Sazonado al gusto']
  };
  modalTitle.textContent = name;
  modalImg.src = data.img;
  modalIngredientes.innerHTML = data.ingredientes.map(item => `<li>${item}</li>`).join('');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

if (modal && modalCloseBtn) {
  modalCloseBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

// Scroll suave a hash si existe
if (window.location.hash) {
  const element = document.querySelector(window.location.hash);
  if (element) element.scrollIntoView({ behavior: 'smooth' });
}

// Delegación de eventos para abrir modal desde .menu-item o .dish-name
document.addEventListener('click', e => {
  const card = e.target.closest('.menu-item');
  if (card && card.querySelector('h3.plato')) {
    openModalFor(card.querySelector('h3.plato').textContent.trim());
    return;
  }
  const dishName = e.target.closest('.dish-name');
  if (dishName) openModalFor(dishName.textContent.trim());
});

// Fondo dinámico con scroll (crossfade de imágenes)
(() => {
  const BG_IMAGES = [
    'images/44069201-mojito-cocktail-drink-on-bar-counter-with-blur-bottles-on-background.jpg',
    'images/croquetas-de-jamon-iberico-1200x675.jpg',
    'images/6384f69227d8bbf604fd2fae_tipos-de-bar.jpg',
    'images/sabrosa-taza-cafe-nuevos-deliciosos-mini-pasteles-diferentes-formas-sobre-mesa-madera-cafeteria_482257-19866.jpg',
    'images/zumos-refrescos-esta-bebida-que-mas-sube-azucar-sangre_98.webp',
    'images/17377428838157.jpg'
  ];
  const stack = document.querySelector('.bg-stack');
  if (!stack || !BG_IMAGES.length) return;

  const layers = BG_IMAGES.map((src, idx) => {
    const layer = document.createElement('div');
    layer.className = 'bg-layer';
    layer.style.backgroundImage = `url('${src}')`;
    layer.style.opacity = idx === 0 ? '1' : '0';
    stack.appendChild(layer);
    return layer;
  });

  BG_IMAGES.forEach(src => { const img = new Image(); img.src = src; });

  let ticking = false;
  function getAnchoredProgress() {
    const doc = document.documentElement;
    const viewportH = window.innerHeight || doc.clientHeight;
    const scrollY = window.scrollY || 0;
    const heroTop = 0;
    const entrantesEl = document.getElementById('entrantes');
    const entrantesTop = entrantesEl ? entrantesEl.getBoundingClientRect().top + scrollY : viewportH * 1.2;
    const body = document.body;
    const docHeight = Math.max(
      body.scrollHeight, body.offsetHeight,
      doc.clientHeight, doc.scrollHeight, doc.offsetHeight
    );
    const endTop = docHeight - viewportH;
    if (scrollY <= entrantesTop) {
      const span = Math.max(1, entrantesTop - heroTop);
      const local = Math.min(1, Math.max(0, (scrollY - heroTop) / span));
      return local * (1 / (layers.length - 1));
    } else {
      const remainingImages = Math.max(1, layers.length - 2);
      const span = Math.max(1, endTop - entrantesTop);
      const local = Math.min(1, Math.max(0, (scrollY - entrantesTop) / span));
      const start = 1 / (layers.length - 1);
      return start + local * (remainingImages / (layers.length - 1));
    }
  }
  function updateLayersAnchored() {
    if (layers.length === 1) { layers[0].style.opacity = '1'; return; }
    const progress = getAnchoredProgress();
    const t = progress * (layers.length - 1);
    const i = Math.floor(t);
    const frac = t - i;
    layers.forEach((layer, idx) => {
      if (idx === i) layer.style.opacity = String(1 - frac);
      else if (idx === i + 1) layer.style.opacity = String(frac);
      else layer.style.opacity = '0';
    });
  }
  function onScrollOrResize() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateLayersAnchored();
      ticking = false;
    });
  }
  updateLayersAnchored();
  window.addEventListener('scroll', onScrollOrResize, { passive: true });
  window.addEventListener('resize', onScrollOrResize);
})();
