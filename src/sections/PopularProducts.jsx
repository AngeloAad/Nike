import { products } from "../constants/index";
import { PopularProductsCard } from "../components";

const PopularProducts = () => {
  return (
    <section
      id="products"
      className="max-container
    max-sm:mt-12"
    >
      <div
        className="flex flex-col justify-start gap-5
      "
      >
        <h2
          className="text-4xl font-palanquin
        font-bold"
        >
          Our
          <span className="text-coral-red"> Popular </span>
          Products
        </h2>
        <p
          className="lg:max-w-lg
        mt-2 font-montserrat text-slate-gray"
        >
          Enjoy the best quality and style with our popular choices. Discover
          comfort, great design, and value.
        </p>
      </div>

      <div
        className="mt-16 grid
      lg:grid-cols-4 md:grid-cols-3
      sm:grid-cols-2 grid-cols-1
      sm:gap-6 gap-14"
      >
        {products.map((product) => (
          <div key={product.key}>
            <PopularProductsCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
