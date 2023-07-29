import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import PaymentDialogProps from '../utils/PaymentDialogProps';

function PaymentInternational({ isOpen, close }: PaymentDialogProps) {
  return (
    <Dialog open={isOpen} onClose={() => close()} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white p-4 rounded-lg">
          <Dialog.Title className="font-heading text-lg font-medium flex justify-between">
            <span>Complete purchase</span>
            <button onClick={() => close()} className="text-dark">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="text-xs">
            To complete your payment, kindly enter your card details below.
            <br />
            Powered by Some International Payment Processor.
          </Dialog.Description>

          <div className="grid grid-cols-12 px-3 py-8 gap-x-4">
            <label className="form-item col-span-12 md:col-span-6">
              <span>Card number</span>
              <input
                type="text"
                name="cardNumber"
                inputMode="numeric"
                placeholder="XXXX-XXXX-XXXX-XXXX"
              />
            </label>
            <label className="form-item col-span-12 md:col-span-6">
              <span>Expiry</span>
              <input
                name="expiry"
                type="text"
                inputMode="numeric"
                placeholder="MM/YYYY"
              />
            </label>
            <label className="form-item col-span-12 md:col-span-6">
              <span>CVV/CVC</span>
              <input
                type="text"
                name="cvv"
                inputMode="numeric"
                placeholder="XXX"
              />
            </label>

            <div className="col-span-12">
              <button className="btn btn-lg w-full">Complete Purchase</button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default PaymentInternational;
