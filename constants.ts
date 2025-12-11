import { Property, PropertyType, Zone, Testimonial } from './types';

export const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Penthouse de Lujo Vista al Mar',
    price: 850000,
    currency: 'USD',
    type: PropertyType.PENTHOUSE,
    zone: Zone.BOCAGRANDE,
    bedrooms: 4,
    bathrooms: 5,
    area: 320,
    imageUrl: 'https://images.unsplash.com/photo-1512918760513-95f192972701?q=80&w=2070&auto=format&fit=crop',
    isTokenized: true,
    description: 'Espectacular penthouse duplex en primera línea de playa. Acabados importados, terraza privada con jacuzzi y automatización completa. Ideal para rentas cortas de alto perfil.',
    coordinates: { lat: 10.406, lng: -75.556 }
  },
  {
    id: '2',
    title: 'Casa Colonial Restaurada',
    price: 1200000,
    currency: 'USD',
    type: PropertyType.HOUSE,
    zone: Zone.CENTRO_HISTORICO,
    bedrooms: 5,
    bathrooms: 6,
    area: 450,
    imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop',
    isTokenized: false,
    description: 'Joya arquitectónica del siglo XVII en el corazón de la ciudad amurallada. Piscina interna, patio tropical y mirador hacia la cúpula de la catedral.',
    coordinates: { lat: 10.423, lng: -75.549 }
  },
  {
    id: '3',
    title: 'Apartamento Moderno Morros',
    price: 350000,
    currency: 'USD',
    type: PropertyType.APARTMENT,
    zone: Zone.MORROS,
    bedrooms: 2,
    bathrooms: 2,
    area: 98,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop',
    isTokenized: true,
    description: 'Apartamento con salida directa a la playa en la zona de mayor valorización. Condominio tipo resort con múltiples piscinas y gimnasio.',
    coordinates: { lat: 10.456, lng: -75.516 }
  },
  {
    id: '4',
    title: 'Villa Exclusiva en Manga',
    price: 650000,
    currency: 'USD',
    type: PropertyType.VILLA,
    zone: Zone.MANGA,
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    imageUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop',
    isTokenized: false,
    description: 'Casa republicana con muelle privado en la bahía de Manga. Amplios espacios, jardines exuberantes y perfecta para vida familiar tranquila.',
    coordinates: { lat: 10.413, lng: -75.539 }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Montoya',
    role: 'Inversionista Crypto',
    content: 'La opción de comprar una fracción del apartamento en Bocagrande con USDT fue increíblemente sencilla. El proceso fue transparente y rápido.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    role: 'Expat',
    content: 'Encontrar mi casa de retiro en el Centro Histórico fue un sueño gracias al equipo. Entendieron exactamente lo que buscaba.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: '3',
    name: 'Felipe Restrepo',
    role: 'Comprador Primera Vivienda',
    content: 'La asesoría legal me dio mucha tranquilidad. Son verdaderos expertos en el mercado de Cartagena.',
    avatar: 'https://randomuser.me/api/portraits/men/85.jpg'
  }
];