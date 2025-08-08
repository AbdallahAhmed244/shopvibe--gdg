import MainNavigationBar from "../layout/MainNavigationBar";
import SiteFooter from "../layout/SiteFooter";
import ProductDisplayCard from "../ui/ProductDisplayCard";
import DataLoadingIndicator from "../ui/DataLoadingIndicator";
import "../../styles/SpecialOffersPage.css";

export default function SpecialOffersPage({
  currentUser,
  getTotalItems,
  getOfferedProducts,
  addToCart,
  addedItems,
  loading,
  setSelectedCategory,
}) {
  const offeredProducts = getOfferedProducts ? getOfferedProducts() : [];

  return (
    <div className="page-container">
      <MainNavigationBar
        currentUser={currentUser}
        getTotalItems={getTotalItems}
      />
      <div className="offers-content">
        <h1>Special Offers</h1>
        <p className="offers-description">
          Discover amazing deals with discounts over 10%! Limited time offers on
          selected products.
        </p>
        {loading ? (
          <DataLoadingIndicator />
        ) : (
          <div className="products-grid">
            {offeredProducts
              .filter((product) => product && product.id)
              .slice(0, 8)
              .map((product) => (
                <ProductDisplayCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                  addedItems={addedItems}
                  isOfferCard={true}
                />
              ))}
          </div>
        )}
        {offeredProducts.length === 0 && !loading && (
          <div className="no-offers">
            <p>No special offers available at the moment. Check back later!</p>
          </div>
        )}
      </div>
      <SiteFooter setSelectedCategory={setSelectedCategory} />
    </div>
  );
}
