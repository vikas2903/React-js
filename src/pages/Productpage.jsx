import React from 'react';

const Productpage = () => {
  const p = [
    {
      productUrl: "yout-first-formal-shirt",
      imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/f/z/l/m-white-formal-youthfirst-original-imagqjdfgwjfwgsb.jpeg?q=70",
      brand: "youth first",
      title: "Men Regular Fit Solid Curved Collar Formal Shirt",
      color: "white",
      discountedPrice: 299,
      price: 899,
      discountPersent: 66,
      size: [
        { name: "S", quantity: 20 },
        { name: "M", quantity: 30 },
        { name: "L", quantity: 50 }
      ],
      quantity: 100,
      topLavelCategory: "Men",
      secondLavelCategory: "Clothing",
      thirdLavelCategory: "shirt",
      description: "A traditional garment embodying elegance and grace. Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style."
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="product-images">
            <img src={p[0].imageUrl} alt={p[0].title} className="w-full h-full object-cover" />
          </div>
          <div className="product-info p-6">
            <h4 className="text-indigo-600 uppercase tracking-wide">{p[0].brand}</h4>
            <h1 className="text-3xl font-bold text-gray-900">{p[0].title}</h1>
            <p className="mt-2 text-gray-600">{p[0].description}</p>
            <div className="mt-4">
              <span className="text-xl font-semibold text-gray-800">${p[0].discountedPrice}</span>
              <span className="ml-2 line-through text-gray-500">${p[0].price}</span>
              <span className="ml-2 text-green-600">({p[0].discountPersent}% off)</span>
            </div>
            <div className="mt-4">
              <h3 className="text-md font-medium text-gray-800">Available Sizes:</h3>
              <ul className="flex space-x-4 mt-2">
                {p[0].size.map((size, index) => (
                  <li key={index} className="text-gray-600">
                    {size.name} ({size.quantity} in stock)
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productpage;
