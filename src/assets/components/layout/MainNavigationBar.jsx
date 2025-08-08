import { useLocation, Link } from "react-router-dom";
import PlaceholderProfileAvatar from "./PlaceholderProfileAvatar";
import "../../styles/MainNavigationBar.css";

export default function MainNavigationBar({ currentUser, getTotalItems }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">ShopVibe</div>
        <div className="nav-links">
          <Link
            to="/home"
            className={currentPath === "/home" ? "nav-link active" : "nav-link"}
          >
            Home
          </Link>
          <Link
            to="/cart"
            className={currentPath === "/cart" ? "nav-link active" : "nav-link"}
          >
            Cart ({getTotalItems()})
          </Link>
          <Link
            to="/offers"
            className={
              currentPath === "/offers" ? "nav-link active" : "nav-link"
            }
          >
            Offers
          </Link>
          <Link
            to="/members"
            className={
              currentPath === "/members" ? "nav-link active" : "nav-link"
            }
          >
            Members
          </Link>
          <Link
            to="/contact"
            className={
              currentPath === "/contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </Link>
          <Link
            to="/profile"
            className={
              currentPath === "/profile" ? "nav-link active" : "nav-link"
            }
          >
            {currentUser?.profilePicture ? (
              <img
                src={currentUser.profilePicture}
                alt="Profile"
                className="profile-pic-nav"
              />
            ) : (
              <PlaceholderProfileAvatar name={currentUser?.name} size="40" />
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
