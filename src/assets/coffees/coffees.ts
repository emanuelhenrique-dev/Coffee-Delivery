import expresso from '../coffees/expresso.png';
import americano from '../coffees/americano.png';
import expressoCremoso from '../coffees/expresso-cremoso.png';
import cafeGelado from '../coffees/cafe-gelado.png';
import cafeComLeite from '../coffees/cafe-com-leite.png';
import latte from '../coffees/latte.png';
import capuccino from '../coffees/capuccino.png';
import macchiato from '../coffees/macchiato.png';
import mocaccino from '../coffees/mocaccino.png';
import chocolateQuente from '../coffees/chocolate-quente.png';
import cubano from '../coffees/cubano.png';
import havaiano from '../coffees/havaiano.png';
import arabe from '../coffees/arabe.png';
import irlandes from '../coffees/irlandes.png';

export const coffees = [
  {
    id: '0',
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['tradicional'],
    price: 9.9,
    image: expresso
  },
  {
    id: '1',
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['tradicional'],
    price: 9.9,
    image: americano
  },
  {
    id: '2',
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['tradicional'],
    price: 9.9,
    image: expressoCremoso
  },
  {
    id: '3',
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['tradicional', 'gelado'],
    price: 9.9,
    image: cafeGelado
  },
  {
    id: '4',
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    image: cafeComLeite
  },
  {
    id: '5',
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    image: latte
  },
  {
    id: '6',
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    image: capuccino
  },
  {
    id: '7',
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    image: macchiato
  },
  {
    id: '8',
    title: 'Mocaccino',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    image: mocaccino
  },
  {
    id: '9',
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['especial', 'com leite'],
    price: 9.9,
    image: chocolateQuente
  },
  {
    id: '10',
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['especial', 'alcoólico', 'gelado'],
    price: 9.9,
    image: cubano
  },
  {
    id: '11',
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['especial'],
    price: 9.9,
    image: havaiano
  },
  {
    id: '12',
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['especial'],
    price: 9.9,
    image: arabe
  },
  {
    id: '13',
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['especial', 'alcoólico'],
    price: 9.9,
    image: irlandes
  }
];
