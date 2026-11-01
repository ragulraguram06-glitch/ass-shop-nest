import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />

      <div>
        <h3>{item.title}</h3>
        <p>${item.price}</p>

        <button onClick={() => decreaseQuantity(item.id)}>
          -
        </button>

        <span> {item.quantity} </span>

        <button onClick={() => increaseQuantity(item.id)}>
          +
        </button>

        <button onClick={() => removeFromCart(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;