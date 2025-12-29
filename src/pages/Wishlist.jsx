import { useCart } from "../context/CartContext";

const Wishlist = () => {
  const { wishlist, addToCart } = useCart();

  if (!wishlist.length)
    return <h2 className="text-center mt-20">Wishlist Empty</h2>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
      {wishlist.map((p) => (
        <div key={p.id} className="bg-white p-4 rounded shadow">
          <img src={p.image} className="h-32 w-full object-cover rounded" />
          <h3>{p.title}</h3>
          <button
            onClick={() => addToCart(p)}
            className="mt-2 bg-amber-700 text-white px-3 py-1 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
