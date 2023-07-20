type Product = {
  id: number;
  name: string;
  price: string;
  sku: number;
  description: string;
  featured?: boolean;
};

const staticProducts: Product[] = [
  {
    id: 1,
    name: 'Rustic Bronze Fish',
    price: '$61.00',
    sku: 92232202,
    featured: true,
    description:
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
  },
  {
    id: 2,
    name: 'Generic Bronze Shirt',
    price: '$159.00',
    sku: 60491955,
    featured: true,
    description:
      'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
  },
  {
    id: 3,
    name: 'Modern Rubber Fish',
    price: '$159.00',
    sku: 93407117,
    description:
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
  },
  {
    id: 4,
    name: 'Gorgeous Granite Gloves',
    price: '$34.00',
    sku: 29750915,
    description:
      'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
  },
  {
    id: 5,
    name: 'Tasty Rubber Pants',
    price: '$36.00',
    sku: 11735027,
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
  },
  {
    id: 6,
    name: 'Oriental Metal Computer',
    price: '$124.00',
    sku: 91907204,
    description:
      'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
  },
  {
    id: 7,
    name: 'Licensed Bronze Fish',
    price: '$190.00',
    sku: 64257673,
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
  },
  {
    id: 8,
    name: 'Awesome Frozen Fish',
    price: '$123.00',
    sku: 1895812,
    description:
      'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
  },
  {
    id: 9,
    name: 'Small Plastic Chair',
    price: '$61.00',
    sku: 59124207,
    description:
      'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
  },
  {
    id: 10,
    name: 'Generic Cotton Gloves',
    price: '$176.00',
    sku: 99459080,
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
  },
  {
    id: 11,
    name: 'Bespoke Wooden Shirt',
    price: '$87.00',
    sku: 17252760,
    featured: true,
    description:
      'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
  },
  {
    id: 12,
    name: 'Tasty Concrete Towels',
    price: '$126.00',
    sku: 11508628,
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
  },
  {
    id: 13,
    name: 'Handcrafted Fresh Towels',
    price: '$51.00',
    sku: 24114190,
    description:
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
  },
  {
    id: 14,
    name: 'Unbranded Frozen Soap',
    price: '$147.00',
    sku: 41484022,
    description:
      'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
  },
  {
    id: 15,
    name: 'Intelligent Steel Computer',
    price: '$152.00',
    sku: 87081851,
    description:
      'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
  },
  {
    id: 16,
    name: 'Recycled Rubber Car',
    price: '$172.00',
    sku: 66199095,
    description:
      'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
  },
  {
    id: 17,
    name: 'Gorgeous Bronze Fish',
    price: '$194.00',
    sku: 32212617,
    description:
      'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
  },
  {
    id: 18,
    name: 'Handcrafted Fresh Car',
    price: '$119.00',
    sku: 14110565,
    description:
      'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
  },
  {
    id: 19,
    name: 'Elegant Plastic Chicken',
    price: '$89.00',
    sku: 29801222,
    description:
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
  },
  {
    id: 20,
    name: 'Gorgeous Rubber Ball',
    price: '$29.00',
    sku: 81926459,
    description:
      'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
  },
  {
    id: 21,
    name: 'Awesome Cotton Cheese',
    price: '$183.00',
    sku: 99341866,
    featured: true,
    description:
      'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
  },
  {
    id: 22,
    name: 'Intelligent Fresh Chicken',
    price: '$169.00',
    sku: 32416486,
    description:
      'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
  },
  {
    id: 23,
    name: 'Awesome Granite Computer',
    price: '$196.00',
    sku: 66750712,
    description:
      'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
  },
  {
    id: 24,
    name: 'Licensed Fresh Soap',
    price: '$51.00',
    sku: 15150784,
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
  },
  {
    id: 25,
    name: 'Unbranded Frozen Ball',
    price: '$103.00',
    sku: 35219874,
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
  },
  {
    id: 26,
    name: 'Ergonomic Soft Chair',
    price: '$110.00',
    sku: 49034011,
    featured: true,
    description:
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
  },
  {
    id: 27,
    name: 'Rustic Bronze Mouse',
    price: '$5.00',
    sku: 62991487,
    description:
      'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
  },
  {
    id: 28,
    name: 'Ergonomic Concrete Pants',
    price: '$79.00',
    sku: 58314656,
    description:
      'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
  },
  {
    id: 29,
    name: 'Modern Metal Sausages',
    price: '$148.00',
    sku: 75154715,
    description:
      'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
  },
  {
    id: 30,
    name: 'Awesome Plastic Chips',
    price: '$162.00',
    sku: 9679986,
    description:
      'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
  },
];

export function getProductById(id: number) {
  return staticProducts.find((p) => p.id === id);
}

export default function useGetProducts({
  featured = false,
  id,
}: {
  featured?: boolean;
  id?: number;
}) {
  if (id) {
    return staticProducts.filter((p) => p.id === id);
  }
  const products = featured
    ? staticProducts.filter((p) => p.featured)
    : staticProducts;
  return products;
}
