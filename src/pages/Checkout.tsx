import { Link } from 'react-router-dom';
import useCart from '../utils/hooks/useCart';
import { getProductById } from '../utils/hooks/useGetProducts';
import { Suspense, lazy, useState } from 'react';

const PaymentInternational = lazy(
  () => import('../components/PaymentInternational')
);

function Checkout() {
  const { cartItems, numberOfItems, totalValue } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return numberOfItems < 1 ? (
    <div className="flex flex-col gap-y-6 min-h-[400px] justify-center items-center max-w-xs mx-auto text-center">
      <h1 className="text-2xl lg:text-4xl">Oops!</h1>
      <p className="leading-4">
        Seems like you haven't added any items to your cart.
        <br />
        <br />
        Our Featured catalog is a good place to start looking for something you
        like.
      </p>
      <Link to="/catalog?showFeatured=true" className="btn btn-lg">
        Take me there
      </Link>
    </div>
  ) : (
    <form className="columns-1 md:columns-2 gap-x-8">
      <div className="flex flex-col">
        <header className="w-full py-4">
          <h1 className="text-sm md:text-base font-medium text-primary">
            Delivery Information
          </h1>
        </header>
        <div className="grid grid-cols-12 bg-white pl-8 pr-4 py-8 rounded-t-md md:rounded-none md:rounded-l-md gap-x-4">
          <label className="form-item col-span-12 md:col-span-6">
            <span>Name</span>
            <input type="text" name="name" />
          </label>
          <label className="form-item col-span-12 md:col-span-6">
            <span>Email</span>
            <input name="email" type="email" inputMode="email" />
          </label>
          <label className="form-item col-span-12">
            <span>Address</span>
            <input type="text" name="address" />
          </label>
          <label className="form-item col-span-12 md:col-span-6">
            <span>City/State</span>
            <input type="text" name="cityOrState" />
          </label>
          <label className="form-item col-span-12 md:col-span-6">
            <span>Country</span>
            <input type="text" name="country" />
          </label>
        </div>
      </div>

      <div className="flex flex-col">
        <header className="w-full py-4">
          <h1 className="text-sm md:text-base font-medium text-primary">
            Payment Method
          </h1>
        </header>
        <div className="bg-white pl-8 pr-4 py-8 md:rounded-bl-md">
          <fieldset className="flex flex-wrap gap-x-6">
            <label className="inline-flex items-center gap-x-2">
              <input type="radio" name="paymentMethod" />
              <span>Cash on Delivery</span>
            </label>
            <label className="inline-flex items-center gap-x-2">
              <input type="radio" name="paymentMethod" />
              <span>VISA/MasterCard</span>
            </label>
          </fieldset>
        </div>
      </div>

      <div className="flex flex-col md:min-h-[36rem]">
        <header className="w-full py-4">
          <h1 className="text-sm md:text-base font-medium text-primary">
            Order Summary
          </h1>
        </header>
        <div className="flex flex-col gap-y-4 h-full bg-white pl-8 pr-4 py-8 rounded-b-md md:rounded-none md:rounded-r-md">
          {cartItems.map(({ id, quantity }) => {
            const product = getProductById(id)!;
            return (
              <div key={id} className="flex items-start gap-x-4 w-full">
                <figure className="w-14">
                  <img
                    src={`https://picsum.photos/seed/${product.sku}/280`}
                    className="w-full h-auto"
                  />
                </figure>
                <div>
                  <h4 className="font-heading font-light">
                    {product.name} ({quantity})
                  </h4>
                  <p className="text-xs">{product.sku}</p>
                  <p className="font-semibold text-sm">{product.price}</p>
                </div>
              </div>
            );
          })}

          <div className="mt-auto w-full border-t pt-4">
            <div className="flex justify-between mb-4">
              <p>Total:</p>
              <p>${totalValue}</p>
            </div>
            <div>
              <button
                className="btn btn-lg w-full"
                type="button"
                onClick={() => setIsOpen(true)}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={<p>Getting payment processor ready...</p>}>
        <PaymentInternational isOpen={isOpen} close={() => setIsOpen(false)} />
      </Suspense>
    </form>
  );
}

export default Checkout;
