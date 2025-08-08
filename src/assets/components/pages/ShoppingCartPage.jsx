import { useNavigate } from "react-router-dom";
import MainNavigationBar from "../layout/MainNavigationBar";
import SiteFooter from "../layout/SiteFooter";
import "../../styles/ShoppingCartPage.css";

export default function ShoppingCartPage({
  currentUser,
  getTotalItems,
  cart,
  updateQuantity,
  removeFromCart,
  setSelectedCategory,
}) {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <MainNavigationBar
        currentUser={currentUser}
        getTotalItems={getTotalItems}
      />
      <div className="cart-content">
        <h1>Shopping Cart</h1>
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <button
              onClick={() => navigate("/home")}
              className="continue-shopping-btn"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.cartId} className="cart-item">
                <img src={item.thumbnail} alt={item.title} />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p className="cart-item-category">
                    Category:{" "}
                    {item.category
                      .replace("-", " ")
                      .replace(/\b\w/g, (l) => l.toUpperCase())}
                  </p>
                  <p className="cart-item-price">${item.price}</p>
                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        updateQuantity(item.cartId, item.quantity - 1)
                      }
                      className="quantity-btn"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.cartId, item.quantity + 1)
                      }
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                  <p className="item-total">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.cartId)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="cart-summary">
              <div className="cart-stats">
                <p>Total Items: {getTotalItems()}</p>
                <h2>
                  Total Amount: $
                  {cart
                    .reduce((sum, item) => sum + item.price * item.quantity, 0)
                    .toFixed(2)}
                </h2>
              </div>
            </div>
          </div>
        )}
      </div>
      <SiteFooter setSelectedCategory={setSelectedCategory} />
    </div>
  );
}
