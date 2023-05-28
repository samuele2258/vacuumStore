export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  type: string;
  availability: number;
}
export enum Tag {
  BSV = 'bsv',
  CSV = 'csv',
}
export const products = [
  {
    id: 1,
    name: 'BSV 33',
    price: 400,
    description: 'professional vacuum machines fit for any type of use.',
    type: Tag.BSV,
    availability: 0,
  },
  {
    id: 2,
    name: 'BSV 33S',
    price: 450,
    description: 'professional vacuum machines fit for any type of use.',
    type: Tag.BSV,
    availability: 1,
  },
  {
    id: 3,
    name: 'BSV 44',
    price: 800,
    description: 'professional vacuum machines fit for any type of use.',
    type: Tag.BSV,
    availability: 6,
  },
  {
    id: 4,
    name: 'BSV 44S',
    price: 600,
    description: 'professional vacuum machines fit for any type of use.',
    type: Tag.BSV,
    availability: 1,
  },
  {
    id: 5,
    name: 'BSV 45',
    price: 800,
    description: 'professional vacuum machines fit for any type of use.',
    type: Tag.BSV,
    availability: 7,
  },
  {
    id: 6,
    name: 'BSV 45 DS',
    price: 700,
    description: 'professional vacuum machines fit for any type of use.',
    type: Tag.BSV,
    availability: 4,
  },
  {
    id: 7,
    name: 'BSV 54',
    price: 500,
    description: 'professional vacuum machines fit for any type of use.',
    type: Tag.BSV,
    availability: 5,
  },
  {
    id: 8,
    name: 'BSV 94',
    price: 1000,
    description: 'professional vacuum machines fit for any type of use.',
    type: Tag.BSV,
    availability: 1,
  },
  {
    id: 9,
    name: 'CSV 42',
    price: 2000,
    description: 'professional vacuum machines fit for any type of use.',
    type: Tag.CSV,
    availability: 1,
  },
];
