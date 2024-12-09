// pages/api/products.js
export default function handler(req, res) {
    const products = [
      {
        id: 1,
        name: "Appareil à raclette",
        price: 39.5,
        description: "Location appareil à raclette traditionnelle.",
      },
      {
        id: 2,
        name: "Grand couteau/10pc",
        price: 0.35,
        description: "Jewel – grand couteau.",
      },
    ];
  
    res.status(200).json(products);
  }
  