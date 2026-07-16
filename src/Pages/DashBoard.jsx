import { useProducts } from "../hooks/useProducts";
import { useCategory } from "../hooks/useCategory";
import { FiBox, FiLayers, FiTag } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const DashBoard = () => {
  const { data } = useProducts();

  const { data: category = [] } = useCategory();

  const products = data?.products ?? [];

  const totalStock = products.reduce((sum, product) => sum + product.stock, 0);

  const averageRating =
    products.length > 0
      ? (
          products.reduce((sum, product) => sum + product.rating, 0) /
          products.length
        ).toFixed(1)
      : 0;

  return (
    <>
      <h1 className="font-bold text-4xl mb-2">Welcome back, Admin 👋</h1>
      <p className="font-semibold text-xl">Here's an overview of your store.</p>

      {/* Hero section */}
      <section className="flex items-center justify-around mt-5 bg-blue-50 p-2 rounded-xl">
        {/* Total Products */}
        <div className="p-6">
          <div className="mb-4 flex items-center gap-2">
            <FiBox size={20} className="text-blue-600" />

            <h3 className="text-2xl font-semibold text-gray-500">
              Total Products
            </h3>
          </div>

          <p className="mb-2 text-4xl font-bold text-gray-900 flex items-center justify-center">
            {data?.total}
          </p>
        </div>

        {/* Categories */}
        <div className="p-6">
          <div className="mb-4 flex items-center gap-2">
            <FiTag size={20} className="text-orange-500" />

            <h3 className="text-2xl font-semibold text-gray-500">Categories</h3>
          </div>

          <p className="mb-2 text-4xl font-bold text-gray-900 flex items-center justify-center">
            {category.length}
          </p>
        </div>

        {/* Total Stocks */}
        <div className="p-6">
          <div className="mb-4 flex items-center gap-2">
            <FiLayers size={20} className="text-pink-500" />

            <h3 className="text-2xl font-semibold text-gray-500">
              Total Stocks
            </h3>
          </div>

          <p className="mb-2 text-4xl font-bold text-gray-900 flex items-center justify-center">
            {totalStock}
          </p>
        </div>

        {/* Avg Rating */}
        <div className="p-6">
          <div className="mb-4 flex items-center gap-2">
            <FaStar size={20} className="text-yellow-500" />

            <h3 className="text-2xl font-semibold text-gray-500">
              Average Rating
            </h3>
          </div>

          <p className="mb-2 text-4xl font-bold text-gray-900 flex items-center justify-center">
            {averageRating}
          </p>
        </div>
      </section>

      <section>
        <div className="bg-white w-1/3">
          <p>Category</p>

          <div className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            temporibus corporis, qui eos doloribus voluptates nisi veniam
            voluptatem inventore aliquid nam debitis. Omnis hic placeat unde nam
            quos in voluptatem?
          </div>
        </div>
      </section>
    </>
  );
};

export default DashBoard;
