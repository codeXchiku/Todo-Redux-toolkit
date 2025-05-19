import React from 'react';

const Cart = () => {
  const products = [
    { id: 1, name: 'Apple', price: 30 },
    { id: 2, name: 'Banana', price: 10 },
    { id: 3, name: 'Mango', price: 50 },
  ];

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl shadow-md p-4 text-center border border-gray-200"
        >
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-500 mb-4">₹{product.price}</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
