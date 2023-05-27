export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
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
    description: 'Macchinario sottovuoto per ogni tipo di mercato',
    type: Tag.BSV,
  },
  {
    id: 2,
    name: 'BSV 33S',
    price: 450,
    description: 'Macchinario sottovuoto per ogni tipo di mercato',
    type: Tag.BSV,
  },
  {
    id: 3,
    name: 'BSV 44',
    price: 2000,
    description: 'Macchinario sottovuoto per ogni tipo di mercato',
    type: Tag.BSV,
  },
  {
    id: 4,
    name: 'BSV 44S',
    price: 2000,
    description: 'Macchinario sottovuoto per ogni tipo di mercato',
    type: Tag.BSV,
  },
  {
    id: 5,
    name: 'BSV 45',
    price: 2000,
    description: 'Macchinario sottovuoto per ogni tipo di mercato',
    type: Tag.BSV,
  },
  {
    id: 6,
    name: 'BSV 45 DS',
    price: 2000,
    description: 'Macchinario sottovuoto per ogni tipo di mercato',
    type: Tag.BSV,
  },
  {
    id: 7,
    name: 'BSV 54',
    price: 2000,
    description: 'Macchinario sottovuoto per ogni tipo di mercato',
    type: Tag.BSV,
  },
  {
    id: 8,
    name: 'BSV 94',
    price: 2000,
    description: 'Macchinario sottovuoto per ogni tipo di mercato',
    type: Tag.BSV,
  },
  {
    id: 8,
    name: 'CSV 42',
    price: 2000,
    description: 'Macchinario sottovuoto per ogni tipo di mercato',
    type: Tag.CSV,
  },
];
