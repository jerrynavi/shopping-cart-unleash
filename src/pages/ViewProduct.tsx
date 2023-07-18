import { useParams } from 'react-router-dom';
import useGetProducts from '../utils/hooks/useGetProducts';
import useCart from '../utils/hooks/useCart';

function ViewProduct() {
  const { id } = useParams();
  const [product] = useGetProducts({ id: id ? Number(id) : -1 });
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="flex flex-col min-h-[400px] justify-center items-center">
        <h1 className="text-2xl lg:text-4xl">404</h1>
        <p>We could not find the product you're looking for.</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
      <figure className="rounded-lg overflow-hidden relative shadow-md">
        <img src={`https://picsum.photos/seed/${product.sku}/1200`} />
      </figure>
      <div className="flex flex-col">
        <header className="w-full bg-primary py-4 pl-8">
          <h1 className="text-sm md:text-base font-medium text-white">
            About Product
          </h1>
        </header>
        <div className="w-full bg-white pl-8 pr-4 py-8 rounded-b-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl md:text-3xl font-light">{product.name}</h2>
            <p className="text-xl md:text-3xl font-bold">{product.price}</p>
          </div>

          <p className="text-sm md:text-base mb-6">{product.description}</p>

          <div className="flex justify-end items-center gap-2">
            <p className="text-xs">Get 10% off when you order now!</p>
            <button
              className="btn btn-lg"
              onClick={() => addToCart(product.id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
