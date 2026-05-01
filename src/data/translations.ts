export type TranslationKey =
  // Hero
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.cta'
  | 'hero.description'
  // Navigation
  | 'nav.home'
  | 'nav.menu'
  | 'nav.testimonials'
  | 'nav.contact'
  | 'nav.order'
  // Menu
  | 'menu.title'
  | 'menu.subtitle'
  | 'menu.mostPopular'
  | 'menu.item1.name'
  | 'menu.item1.desc'
  | 'menu.item1.price'
  | 'menu.item2.name'
  | 'menu.item2.desc'
  | 'menu.item2.price'
  | 'menu.item3.name'
  | 'menu.item3.desc'
  | 'menu.item3.price'
  | 'menu.item4.name'
  | 'menu.item4.desc'
  | 'menu.item4.price'
  | 'menu.item5.name'
  | 'menu.item5.desc'
  | 'menu.item5.price'
  | 'menu.item6.name'
  | 'menu.item6.desc'
  | 'menu.item6.price'
  // Testimonials
  | 'testimonials.title'
  | 'testimonials.subtitle'
  | 'testimonials.review1.text'
  | 'testimonials.review1.author'
  | 'testimonials.review2.text'
  | 'testimonials.review2.author'
  | 'testimonials.review3.text'
  | 'testimonials.review3.author'
  // Contact
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.address'
  | 'contact.hours'
  | 'contact.phone'
  | 'contact.email'
  // Order form
  | 'order.form.title'
  | 'order.form.name'
  | 'order.form.namePlaceholder'
  | 'order.form.deliveryOption'
  | 'order.form.pickup'
  | 'order.form.delivery'
  | 'order.form.orderDetails'
  | 'order.form.orderPlaceholder'
  | 'order.form.submit'
  | 'order.form.success'
  // Footer
  | 'footer.copyright'
  | 'footer.privacy'
  | 'footer.terms'
  // Language toggle
  | 'language.en'
  | 'language.es'
  // Dark mode
  | 'theme.light'
  | 'theme.dark'
  // Common
  | 'common.close'
  | 'common.loading'
  | 'common.error'
  | 'common.success';

export const translations: Record<'en' | 'es', Record<TranslationKey, string>> = {
  en: {
    'hero.title': 'Premium Dining Experience',
    'hero.subtitle': 'Crafting Culinary Excellence Since 2005',
    'hero.cta': 'Order Now',
    'hero.description': 'Indulge in our chef-curated menu featuring locally sourced ingredients and bold flavors.',
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.order': 'Order Now',
    'menu.title': 'Our Menu',
    'menu.subtitle': 'Fresh ingredients, unforgettable taste',
    'menu.mostPopular': 'Most Popular',
    'menu.item1.name': 'Truffle Pasta',
    'menu.item1.desc': 'Handmade pasta with black truffle, Parmesan cream, and herbs.',
    'menu.item1.price': '$24.99',
    'menu.item2.name': 'Grilled Salmon',
    'menu.item2.desc': 'Atlantic salmon with lemon butter sauce and seasonal vegetables.',
    'menu.item2.price': '$28.50',
    'menu.item3.name': 'Wagyu Burger',
    'menu.item3.desc': 'Prime wagyu beef with aged cheddar, truffle aioli, and brioche bun.',
    'menu.item3.price': '$32.00',
    'menu.item4.name': 'Caesar Salad',
    'menu.item4.desc': 'Crisp romaine, homemade croutons, Parmesan, and classic Caesar dressing.',
    'menu.item4.price': '$16.75',
    'menu.item5.name': 'Chocolate Lava Cake',
    'menu.item5.desc': 'Warm chocolate cake with a molten center, served with vanilla ice cream.',
    'menu.item5.price': '$12.99',
    'menu.item6.name': 'Craft Cocktails',
    'menu.item6.desc': 'Signature cocktails crafted by our expert mixologists.',
    'menu.item6.price': '$14.50',
    'testimonials.title': 'What Our Guests Say',
    'testimonials.subtitle': 'Rated 4.9/5 by over 500 customers',
    'testimonials.review1.text': 'The best dining experience I’ve had this year. The attention to detail is incredible.',
    'testimonials.review1.author': 'Maria Gonzalez',
    'testimonials.review2.text': 'Flawless service and outstanding flavors. We’ll definitely be back!',
    'testimonials.review2.author': 'James Wilson',
    'testimonials.review3.text': 'Perfect for special occasions. The ambiance and food were exceptional.',
    'testimonials.review3.author': 'Sophie Chen',
    'contact.title': 'Visit Us',
    'contact.subtitle': 'We’d love to welcome you',
    'contact.address': '123 Gourmet Avenue, Culinary City, CC 10001',
    'contact.hours': 'Mon–Thu: 11am–10pm, Fri–Sun: 11am–11pm',
    'contact.phone': '+1 (555) 123-4567',
    'contact.email': 'info@restaurant.com',
    'order.form.title': 'Place Your Order',
    'order.form.name': 'Your Name',
    'order.form.namePlaceholder': 'Enter your full name',
    'order.form.deliveryOption': 'Delivery Option',
    'order.form.pickup': 'Pickup',
    'order.form.delivery': 'Delivery',
    'order.form.orderDetails': 'Order Details',
    'order.form.orderPlaceholder': 'Describe your order (e.g., 2x Truffle Pasta, 1x Grilled Salmon)',
    'order.form.submit': 'Send via WhatsApp',
    'order.form.success': 'Order sent successfully!',
    'footer.copyright': '© 2025 Restaurant Name. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'language.en': 'English',
    'language.es': 'Español',
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'common.close': 'Close',
    'common.loading': 'Loading...',
    'common.error': 'Something went wrong',
    'common.success': 'Success!',
  },
  es: {
    'hero.title': 'Experiencia Gastronómica Premium',
    'hero.subtitle': 'Creando Excelencia Culinaria Desde 2005',
    'hero.cta': 'Ordenar Ahora',
    'hero.description': 'Disfruta de nuestro menú curado por chefs con ingredientes locales y sabores audaces.',
    'nav.home': 'Inicio',
    'nav.menu': 'Menú',
    'nav.testimonials': 'Testimonios',
    'nav.contact': 'Contacto',
    'nav.order': 'Ordenar Ahora',
    'menu.title': 'Nuestro Menú',
    'menu.subtitle': 'Ingredientes frescos, sabor inolvidable',
    'menu.mostPopular': 'Más Popular',
    'menu.item1.name': 'Pasta con Trufa',
    'menu.item1.desc': 'Pasta artesanal con trufa negra, crema de parmesano y hierbas.',
    'menu.item1.price': '$24.99',
    'menu.item2.name': 'Salmón a la Parrilla',
    'menu.item2.desc': 'Salmón del Atlántico con salsa de mantequilla de limón y verduras de temporada.',
    'menu.item2.price': '$28.50',
    'menu.item3.name': 'Hamburguesa Wagyu',
    'menu.item3.desc': 'Carne de wagyu prime con cheddar añejo, alioli de trufa y pan brioche.',
    'menu.item3.price': '$32.00',
    'menu.item4.name': 'Ensalada César',
    'menu.item4.desc': 'Lechuga romana crujiente, crutones caseros, parmesano y aderezo César clásico.',
    'menu.item4.price': '$16.75',
    'menu.item5.name': 'Pastel de Chocolate Lava',
    'menu.item5.desc': 'Pastel de chocolate caliente con centro derretido, servido con helado de vainilla.',
    'menu.item5.price': '$12.99',
    'menu.item6.name': 'Cócteles Artesanales',
    'menu.item6.desc': 'Cócteles signature creados por nuestros expertos mixólogos.',
    'menu.item6.price': '$14.50',
    'testimonials.title': 'Lo Que Dicen Nuestros Clientes',
    'testimonials.subtitle': 'Calificado 4.9/5 por más de 500 clientes',
    'testimonials.review1.text': 'La mejor experiencia gastronómica que he tenido este año. La atención al detalle es increíble.',
    'testimonials.review1.author': 'María González',
    'testimonials.review2.text': 'Servicio impecable y sabores excepcionales. ¡Definitivamente volveremos!',
    'testimonials.review2.author': 'James Wilson',
    'testimonials.review3.text': 'Perfecto para ocasiones especiales. El ambiente y la comida fueron excepcionales.',
    'testimonials.review3.author': 'Sophie Chen',
    'contact.title': 'Visítanos',
    'contact.subtitle': 'Nos encantaría recibirte',
    'contact.address': 'Avenida Gourmet 123, Ciudad Culinaria, CC 10001',
    'contact.hours': 'Lun–Jue: 11am–10pm, Vie–Dom: 11am–11pm',
    'contact.phone': '+1 (555) 123-4567',
    'contact.email': 'info@restaurant.com',
    'order.form.title': 'Realiza Tu Pedido',
    'order.form.name': 'Tu Nombre',
    'order.form.namePlaceholder': 'Ingresa tu nombre completo',
    'order.form.deliveryOption': 'Opción de Entrega',
    'order.form.pickup': 'Recoger',
    'order.form.delivery': 'Entrega a Domicilio',
    'order.form.orderDetails': 'Detalles del Pedido',
    'order.form.orderPlaceholder': 'Describe tu pedido (ej: 2x Pasta con Trufa, 1x Salmón a la Parrilla)',
    'order.form.submit': 'Enviar por WhatsApp',
    'order.form.success': '¡Pedido enviado con éxito!',
    'footer.copyright': '© 2025 Nombre del Restaurante. Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'language.en': 'Inglés',
    'language.es': 'Español',
    'theme.light': 'Claro',
    'theme.dark': 'Oscuro',
    'common.close': 'Cerrar',
    'common.loading': 'Cargando...',
    'common.error': 'Algo salió mal',
    'common.success': '¡Éxito!',
  },
};