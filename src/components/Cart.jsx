
import { useDispatch } from "react-redux";
import { addCart } from "../features/cart/cartSlice";

const Cart = () => {
  const products = [
    { id: 1, name: 'Apple', price: 30 },
    { id: 2, name: 'Banana', price: 10 },
    { id: 3, name: 'Mango', price: 50 },
    { id: 4, name: 'orrange', price: 20 },
    { id: 5, name: 'grapes', price: 60 },
    { id: 6, name: 'guava', price: 15 },
  ];
  const dispatch = useDispatch()
  const handleAdd = (id,name,price)=>{
    dispatch(addCart({id,name,price}))
  }

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl shadow-md p-4 text-center border border-gray-200"
        >
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-500 mb-4">₹{product.price}</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition" onClick={()=>handleAdd(product.id,product.name,product.price)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
