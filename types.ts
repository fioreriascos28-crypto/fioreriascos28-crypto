export enum PropertyType {
  APARTMENT = 'Apartamento',
  HOUSE = 'Casa',
  PENTHOUSE = 'Penthouse',
  VILLA = 'Villa'
}

export enum Zone {
  BOCAGRANDE = 'Bocagrande',
  CENTRO_HISTORICO = 'Centro Histórico',
  MANGA = 'Manga',
  CASTILLOGRANDE = 'Castillogrande',
  MORROS = 'Zona Norte / Morros'
}

export interface Property {
  id: string;
  title: string;
  price: number;
  currency: string;
  type: PropertyType;
  zone: Zone;
  bedrooms: number;
  bathrooms: number;
  area: number; // m2
  imageUrl: string;
  isTokenized: boolean; // Web3 feature
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FilterState {
  zone: string;
  minPrice: number;
  maxPrice: number;
  type: string;
}