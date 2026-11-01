import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart, total } = useCart();

  return (
    <div className="container">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <h2>Total: ${total.toFixed(2)}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;