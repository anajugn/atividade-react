export const DEFAULT_LANGUAGE = 'pt';

// Opções do menu suspenso de idioma
export const languageOptions = [
  { label: 'Português (Brasil)', value: 'pt' },
  { label: 'English', value: 'en' },
  { label: 'Español', value: 'es' },
];

export const translations = {
  // ===================== PORTUGUÊS =====================
  pt: {
    locale: 'pt-BR',
    app: {
      title: 'Loja React',
      skipLink: 'Pular para o conteúdo',
      footer: 'Projeto acadêmico · Universidade Católica do Salvador · Engenharia de Software',
    },
    topbar: { languageLabel: 'Selecionar idioma' },
    theme: {
      toLight: 'Ativar modo claro',
      toDark: 'Ativar modo escuro',
      light: 'Claro',
      dark: 'Escuro',
    },
    nav: {
      label: 'Seções da página',
      faq: 'Perguntas frequentes',
      account: 'Minha conta',
      upload: 'Envio de arquivo',
      notifications: 'Notificações',
      products: 'Produtos',
    },
    hero: {
      title: 'Bem-vindo à Loja React',
      text: 'Uma vitrine interativa feita com React: navegue pelos produtos, adicione itens ao carrinho, acompanhe o envio de um arquivo e troque o idioma e o tema quando quiser.',
    },
    faq: {
      title: 'Perguntas frequentes',
      items: [
        {
          title: 'Como faço para criar uma conta?',
          content: 'Clique em "Minha conta", escolha a aba Perfil e preencha seus dados. O cadastro leva menos de um minuto e não exige cartão de crédito.',
        },
        {
          title: 'Quais são as formas de pagamento?',
          content: 'Aceitamos Pix, boleto e cartão de crédito em até 6 parcelas sem juros. O pagamento via Pix é confirmado na hora.',
        },
        {
          title: 'Como acompanho meu pedido?',
          content: 'Acesse a aba Pedidos em "Minha conta" para ver o status e o código de rastreio de cada compra.',
        },
        {
          title: 'Posso trocar ou devolver um produto?',
          content: 'Sim. Você tem até 7 dias após o recebimento para solicitar troca ou devolução, desde que o produto esteja na embalagem original.',
        },
      ],
    },
    account: {
      title: 'Minha conta',
      label: 'Seções da conta',
      tabs: [
        { label: 'Perfil', content: 'Nome: Maria Silva · E-mail: maria@exemplo.com · Cliente desde 2024.' },
        { label: 'Pedidos', content: 'Você tem 3 pedidos recentes: 1 em transporte, 1 em separação e 1 entregue.' },
        { label: 'Configurações', content: 'Escolha como receber promoções e atualizações dos pedidos: e-mail, SMS ou notificações no navegador.' },
      ],
    },
    upload: {
      title: 'Envio de arquivo',
      description: 'Envie o comprovante de pagamento do seu pedido (simulação).',
      progressLabel: 'Progresso do envio',
      start: 'Iniciar envio',
      sending: 'Enviando...',
      started: 'Envio iniciado...',
      done: 'Envio concluído com sucesso!',
    },
    notifications: {
      title: 'Notificações',
      description: 'Teste os três tipos de aviso do sistema:',
      success: 'Sucesso',
      error: 'Erro',
      info: 'Informação',
      successMsg: 'Operação realizada com sucesso!',
      errorMsg: 'Erro ao salvar os dados.',
      infoMsg: 'Você tem uma nova mensagem.',
    },
    products: {
      title: 'Produtos',
      add: 'Adicionar ao carrinho',
      added: 'Adicionado ao carrinho',
      names: [
        'Fone de ouvido Bluetooth',
        'Teclado mecânico',
        'Mouse sem fio',
        'Monitor Full HD 24"',
        'Webcam HD',
        'Carregador USB-C 65 W',
        'Mochila para notebook',
        'Caixa de som portátil',
        'Hub USB-C 7 em 1',
        'SSD externo 1 TB',
        'Suporte para notebook',
        'Smartwatch',
      ],
    },
    cart: {
      label: 'Carrinho',
      item: 'item',
      items: 'itens',
      total: 'Total',
      clear: 'Esvaziar carrinho',
      empty: 'Seu carrinho está vazio.',
      cleared: 'Carrinho esvaziado',
    },
    pagination: {
      label: 'Paginação de produtos',
      previous: 'Anterior',
      next: 'Próxima',
      page: 'Página',
    },
    toast: {
      close: 'Fechar notificação',
      languageChanged: 'Idioma alterado para Português (Brasil)',
    },
  },

  // ===================== ENGLISH =====================
  en: {
    locale: 'en-US',
    app: {
      title: 'React Store',
      skipLink: 'Skip to content',
      footer: 'Academic project · Universidade Católica do Salvador · Software Engineering',
    },
    topbar: { languageLabel: 'Select language' },
    theme: {
      toLight: 'Switch to light mode',
      toDark: 'Switch to dark mode',
      light: 'Light',
      dark: 'Dark',
    },
    nav: {
      label: 'Page sections',
      faq: 'FAQ',
      account: 'My account',
      upload: 'File upload',
      notifications: 'Notifications',
      products: 'Products',
    },
    hero: {
      title: 'Welcome to React Store',
      text: 'An interactive storefront built with React: browse products, add items to your cart, follow a file upload, and switch language and theme whenever you like.',
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          title: 'How do I create an account?',
          content: 'Click "My account", choose the Profile tab and fill in your details. Signing up takes less than a minute and does not require a credit card.',
        },
        {
          title: 'What payment methods do you accept?',
          content: 'We accept Pix, bank slip and credit card in up to 6 interest-free installments. Pix payments are confirmed instantly.',
        },
        {
          title: 'How can I track my order?',
          content: 'Open the Orders tab under "My account" to see the status and tracking code of each purchase.',
        },
        {
          title: 'Can I exchange or return a product?',
          content: 'Yes. You have up to 7 days after delivery to request an exchange or return, as long as the product is in its original packaging.',
        },
      ],
    },
    account: {
      title: 'My account',
      label: 'Account sections',
      tabs: [
        { label: 'Profile', content: 'Name: Maria Silva · Email: maria@example.com · Customer since 2024.' },
        { label: 'Orders', content: 'You have 3 recent orders: 1 in transit, 1 being prepared and 1 delivered.' },
        { label: 'Settings', content: 'Choose how to receive promotions and order updates: email, SMS or browser notifications.' },
      ],
    },
    upload: {
      title: 'File upload',
      description: 'Send the payment receipt for your order (simulation).',
      progressLabel: 'Upload progress',
      start: 'Start upload',
      sending: 'Uploading...',
      started: 'Upload started...',
      done: 'Upload completed successfully!',
    },
    notifications: {
      title: 'Notifications',
      description: 'Try the three types of system messages:',
      success: 'Success',
      error: 'Error',
      info: 'Information',
      successMsg: 'Operation completed successfully!',
      errorMsg: 'Error saving your data.',
      infoMsg: 'You have a new message.',
    },
    products: {
      title: 'Products',
      add: 'Add to cart',
      added: 'Added to cart',
      names: [
        'Bluetooth headphones',
        'Mechanical keyboard',
        'Wireless mouse',
        '24" Full HD monitor',
        'HD webcam',
        'USB-C charger 65 W',
        'Laptop backpack',
        'Portable speaker',
        '7-in-1 USB-C hub',
        '1 TB external SSD',
        'Laptop stand',
        'Smartwatch',
      ],
    },
    cart: {
      label: 'Cart',
      item: 'item',
      items: 'items',
      total: 'Total',
      clear: 'Empty cart',
      empty: 'Your cart is empty.',
      cleared: 'Cart emptied',
    },
    pagination: {
      label: 'Product pagination',
      previous: 'Previous',
      next: 'Next',
      page: 'Page',
    },
    toast: {
      close: 'Close notification',
      languageChanged: 'Language changed to English',
    },
  },

  // ===================== ESPAÑOL =====================
  es: {
    locale: 'es-ES',
    app: {
      title: 'Tienda React',
      skipLink: 'Saltar al contenido',
      footer: 'Proyecto académico · Universidade Católica do Salvador · Ingeniería de Software',
    },
    topbar: { languageLabel: 'Seleccionar idioma' },
    theme: {
      toLight: 'Activar modo claro',
      toDark: 'Activar modo oscuro',
      light: 'Claro',
      dark: 'Oscuro',
    },
    nav: {
      label: 'Secciones de la página',
      faq: 'Preguntas frecuentes',
      account: 'Mi cuenta',
      upload: 'Envío de archivo',
      notifications: 'Notificaciones',
      products: 'Productos',
    },
    hero: {
      title: 'Bienvenido a Tienda React',
      text: 'Un escaparate interactivo hecho con React: explora los productos, añade artículos al carrito, sigue el envío de un archivo y cambia el idioma y el tema cuando quieras.',
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          title: '¿Cómo creo una cuenta?',
          content: 'Haz clic en "Mi cuenta", elige la pestaña Perfil y completa tus datos. El registro lleva menos de un minuto y no requiere tarjeta de crédito.',
        },
        {
          title: '¿Qué formas de pago aceptan?',
          content: 'Aceptamos Pix, boleto bancario y tarjeta de crédito hasta en 6 cuotas sin interés. El pago con Pix se confirma al instante.',
        },
        {
          title: '¿Cómo sigo mi pedido?',
          content: 'Abre la pestaña Pedidos en "Mi cuenta" para ver el estado y el código de seguimiento de cada compra.',
        },
        {
          title: '¿Puedo cambiar o devolver un producto?',
          content: 'Sí. Tienes hasta 7 días después de la entrega para solicitar un cambio o una devolución, siempre que el producto esté en su embalaje original.',
        },
      ],
    },
    account: {
      title: 'Mi cuenta',
      label: 'Secciones de la cuenta',
      tabs: [
        { label: 'Perfil', content: 'Nombre: Maria Silva · Correo: maria@ejemplo.com · Cliente desde 2024.' },
        { label: 'Pedidos', content: 'Tienes 3 pedidos recientes: 1 en tránsito, 1 en preparación y 1 entregado.' },
        { label: 'Configuración', content: 'Elige cómo recibir promociones y actualizaciones de tus pedidos: correo, SMS o notificaciones del navegador.' },
      ],
    },
    upload: {
      title: 'Envío de archivo',
      description: 'Envía el comprobante de pago de tu pedido (simulación).',
      progressLabel: 'Progreso del envío',
      start: 'Iniciar envío',
      sending: 'Enviando...',
      started: 'Envío iniciado...',
      done: '¡Envío completado con éxito!',
    },
    notifications: {
      title: 'Notificaciones',
      description: 'Prueba los tres tipos de aviso del sistema:',
      success: 'Éxito',
      error: 'Error',
      info: 'Información',
      successMsg: '¡Operación realizada con éxito!',
      errorMsg: 'Error al guardar los datos.',
      infoMsg: 'Tienes un mensaje nuevo.',
    },
    products: {
      title: 'Productos',
      add: 'Añadir al carrito',
      added: 'Añadido al carrito',
      names: [
        'Auriculares Bluetooth',
        'Teclado mecánico',
        'Ratón inalámbrico',
        'Monitor Full HD de 24"',
        'Cámara web HD',
        'Cargador USB-C de 65 W',
        'Mochila para portátil',
        'Altavoz portátil',
        'Hub USB-C 7 en 1',
        'SSD externo de 1 TB',
        'Soporte para portátil',
        'Smartwatch',
      ],
    },
    cart: {
      label: 'Carrito',
      item: 'artículo',
      items: 'artículos',
      total: 'Total',
      clear: 'Vaciar carrito',
      empty: 'Tu carrito está vacío.',
      cleared: 'Carrito vaciado',
    },
    pagination: {
      label: 'Paginación de productos',
      previous: 'Anterior',
      next: 'Siguiente',
      page: 'Página',
    },
    toast: {
      close: 'Cerrar notificación',
      languageChanged: 'Idioma cambiado a Español',
    },
  },
};