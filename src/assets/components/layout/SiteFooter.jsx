import { useLocation, useNavigate, Link } from "react-router-dom";
import "../../styles/SiteFooter.css";

export default function SiteFooter({ setSelectedCategory }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate("/home");
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ShopVibe</h3>
          <p>
            Your one-stop shop for everything you need. Discover amazing
            products at great prices with fast delivery and excellent customer
            service.
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link
                to="/home"
                className={`footer-link ${
                  location.pathname === "/home" ? "active" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/offers"
                className={`footer-link ${
                  location.pathname === "/offers" ? "active" : ""
                }`}
              >
                Offers
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`footer-link ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/members"
                className={`footer-link ${
                  location.pathname === "/members" ? "active" : ""
                }`}
              >
                Our Team
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Popular Categories</h4>
          <ul>
            <li>
              <button
                onClick={() => handleCategoryClick("home-decoration")}
                className="footer-link"
              >
                Home Decoration
              </button>
            </li>
            <li>
              <button
                onClick={() => handleCategoryClick("furniture")}
                className="footer-link"
              >
                Furniture
              </button>
            </li>
            <li>
              <button
                onClick={() => handleCategoryClick("groceries")}
                className="footer-link"
              >
                Groceries
              </button>
            </li>
            <li>
              <button
                onClick={() => handleCategoryClick("laptops")}
                className="footer-link"
              >
                Laptops
              </button>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>
            <strong>Email:</strong> ShopHub@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> (+20)1146839406
          </p>
          <p>
            <strong>Address:</strong> cairo, Egypt, 123 Shopping Street, 12345
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2025 ShopVibe. All rights reserved. |
          <Link to="/privacy-policy" className="footer-bottom-link">
            {" "}
            Privacy Policy
          </Link>{" "}
          |
          <Link to="/terms-of-service" className="footer-bottom-link">
            {" "}
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
}
