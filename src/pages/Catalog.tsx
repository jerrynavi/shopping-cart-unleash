import { Link, useSearchParams } from 'react-router-dom';
import { SparklesIcon } from '@heroicons/react/24/outline';
import useGetProducts from '../utils/hooks/useGetProducts';
import useCart from '../utils/hooks/useCart';

function Catalog() {
  const [params] = useSearchParams();
  const featured = params?.get('showFeatured') === 'true';
  const products = useGetProducts({ featured });
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map(({ id, name, sku, price, featured }) => (
        <div key={id} className="card flex flex-col">
          <Link to={`/catalog/product/${id}`}>
            <figure className="w-full h-56 relative">
              {featured && (
                <div className="absolute right-0 top-0 p-2 rounded-bl-md bg-gradient-to-tr from-gray-500/50 to-primary/50">
                  <SparklesIcon className="h-6 w-6 text-white" />
                </div>
              )}
              <img
                className="object-cover w-full h-full"
                src={`https://picsum.photos/seed/${sku}/640`}
              />
            </figure>
          </Link>
          <header className="p-4">
            <Link to={`/catalog/product/${id}`}>
              <h2 className="text-lg md:text-2xl tracking-tight font-light">
                {name}
              </h2>
            </Link>
            <div className="flex justify-between items-center">
              <p>{price}</p>
              <button className="btn btn-sm" onClick={() => addToCart(id)}>
                Add to cart
              </button>
            </div>
          </header>
        </div>
      ))}
    </div>
  );
}

export default Catalog;
