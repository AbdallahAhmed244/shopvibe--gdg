import { useLocation } from "react-router-dom";
import MainNavigationBar from "../layout/MainNavigationBar";
import SiteFooter from "../layout/SiteFooter";
import ProductDisplayCard from "../ui/ProductDisplayCard";
import DataLoadingIndicator from "../ui/DataLoadingIndicator";
import "../../styles/ProductCatalogPage.css";

const getFilteredProducts = (products, searchTerm, selectedCategory) => {
  const uniqueProducts = Array.from(
    new Map(products.map((product) => [product.id, product])).values()
  );
  let filtered = uniqueProducts;
  if (selectedCategory !== "all") {
    if (selectedCategory === "sport") {
      filtered = filtered.filter(
        (product) =>
          product.category === "mens-shirts" ||
          product.category === "mens-shoes" ||
          product.category === "womens-dresses" ||
          product.category === "womens-shoes" ||
          product.title.toLowerCase().includes("sport") ||
          product.title.toLowerCase().includes("gym") ||
          product.title.toLowerCase().includes("fitness")
      );
    } else {
      filtered = filtered.filter(
        (product) =>
          product.category &&
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
  }
  if (searchTerm && searchTerm.trim() !== "") {
    const searchLower = searchTerm.toLowerCase().trim();
    filtered = filtered.filter((product) => {
      if (!product.title) return false;

      const titleMatch = product.title.toLowerCase().includes(searchLower);
      const descriptionMatch =
        product.description &&
        product.description.toLowerCase().includes(searchLower);

      let categoryMatch = false;
      if (product.category) {
        const categoryOriginal = product.category.toLowerCase();
        const categoryFormatted = product.category
          .replace(/-/g, " ")
          .toLowerCase();
        categoryMatch =
          categoryOriginal === searchLower ||
          categoryFormatted === searchLower ||
          (searchLower.length > 2 && categoryOriginal.includes(searchLower)) ||
          (searchLower.length > 2 && categoryFormatted.includes(searchLower));
      }

      const brandMatch =
        product.brand && product.brand.toLowerCase().includes(searchLower);

      return titleMatch || descriptionMatch || categoryMatch || brandMatch;
    });
  }

  return filtered;
};

export default function ProductCatalogPage({
  currentUser,
  getTotalItems,
  products,
  availableCategories,
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  addToCart,
  addedItems,
  loading,
}) {
  const filteredProducts = getFilteredProducts(
    products,
    searchTerm,
    selectedCategory
  );

  const isSearching = searchTerm && searchTerm.trim() !== "";
  const getActiveCategoryButton = () => {
    if (isSearching) {
      return null;
    }
    return selectedCategory;
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (isSearching) {
      setSearchTerm("");
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearchAndFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
  };

  const activeCategoryButton = getActiveCategoryButton();

  return (
    <div className="page-container">
      <MainNavigationBar
        currentUser={currentUser}
        getTotalItems={getTotalItems}
      />
      <div className="home-content">
        <div className="hero-section">
          <h1>Welcome to ShopVibe</h1>
          <p>Discover amazing products at great prices</p>
        </div>
        <div className="search-section">
          <input
            type="text"
            placeholder="Search products, categories, brands..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          {isSearching && (
            <div className="search-info">
              <p>
                {filteredProducts.length} result
                {filteredProducts.length !== 1 ? "s" : ""} found for "
                {searchTerm}"
              </p>
              {filteredProducts.length > 0 && selectedCategory !== "all" && (
                <p>
                  in category:{" "}
                  {selectedCategory
                    .replace("-", " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                </p>
              )}
            </div>
          )}
        </div>
        <div className="categories-section">
          <h2>Categories</h2>
          <div className="categories">
            <button
              className={
                activeCategoryButton === "all"
                  ? "category-btn active"
                  : "category-btn"
              }
              onClick={() => handleCategorySelect("all")}
            >
              All Products ({products.length})
            </button>
            {availableCategories.map((categoryData) => (
              <button
                key={categoryData.category}
                className={
                  activeCategoryButton === categoryData.category
                    ? "category-btn active"
                    : "category-btn"
                }
                onClick={() => handleCategorySelect(categoryData.category)}
              >
                {categoryData.category
                  .replace("-", " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase())}{" "}
                ({categoryData.count})
              </button>
            ))}
          </div>
        </div>
        <div className="products-section">
          <h2>
            Products
            {selectedCategory !== "all" && !isSearching && (
              <span className="category-title">
                -{" "}
                {selectedCategory
                  .replace("-", " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase())}
              </span>
            )}
            {isSearching && (
              <span className="search-title">
                - Search Results for "{searchTerm}"
              </span>
            )}
          </h2>
          {loading ? (
            <DataLoadingIndicator />
          ) : filteredProducts.length === 0 ? (
            <div className="no-products">
              {isSearching ? (
                <div>
                  <p>No products found matching "{searchTerm}"</p>
                  <button
                    onClick={clearSearchAndFilters}
                    className="clear-search-btn"
                  >
                    Clear Search
                  </button>
                </div>
              ) : (
                <p>No products found matching your criteria.</p>
              )}
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductDisplayCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                  addedItems={addedItems}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <SiteFooter setSelectedCategory={setSelectedCategory} />
    </div>
  );
}
