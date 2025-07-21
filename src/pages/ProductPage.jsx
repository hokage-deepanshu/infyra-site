import Navbar from "../components/Navbar"; 
import ProductDetails from "../components/Product";
import Footer from "../components/Footer";

const ProductPage = () => {
  return (
    <div className="product-page-container">
      <Navbar />
      <main className="product-main-content">
        <ProductDetails />
      </main>
      <Footer />
    </div>
  );
}

export default ProductPage;