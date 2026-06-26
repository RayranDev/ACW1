import { useCart } from '../context/CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from './ui/sheet';
import { Trash2, Plus, Minus } from 'lucide-react';

export default function CartDrawer() {
  // Nota: `cartTotal` sigue disponible en el contexto; se omite acá porque
  // el flujo actual es de cotización (sin precios ni total).
  const { isCartOpen, closeCart, cartItems, updateQuantity, removeFromCart, clearCart } = useCart();

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    let message = "Hola, me gustaría cotizar los siguientes productos:\n\n";
    cartItems.forEach(item => {
      message += `- ${item.quantity}x ${item.name}\n`;
    });

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/573003714694?text=${encodedMessage}`, '_blank');
    
    // Optional: Clear cart after checkout
    clearCart();
    closeCart();
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent className="w-full sm:max-w-md flex flex-col bg-crema border-l-dorado/20">
        <SheetHeader className="border-b border-tierra/10 pb-4">
          <SheetTitle className="font-display text-tierra text-2xl">Mi Carrito</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4 pr-2">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-tierra/50">
              <p className="font-body text-sm">Tu carrito está vacío.</p>
            </div>
          ) : (
            <ul className="space-y-6">
              {cartItems.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 bg-white rounded-md overflow-hidden flex-shrink-0 border border-tierra/10">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display text-sm font-semibold text-tierra leading-tight">{item.name}</h4>
                      {/* Precio por ítem oculto temporalmente (cotización). Revertir: descomentar. */}
                      {/* <p className="text-xs text-dorado font-bold mt-1">{item.price}</p> */}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-3 bg-white px-2 py-1 rounded-sm border border-tierra/10">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-tierra/50 hover:text-tierra transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-semibold text-tierra w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-tierra/50 hover:text-tierra transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="p-1.5 text-red-400 hover:text-red-600 transition-colors bg-red-50 rounded-sm"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <SheetFooter className="border-t border-tierra/10 pt-4 flex flex-col gap-4">
          {/* Fila de Total oculta temporalmente (cotización). Revertir: descomentar.
          <div className="flex justify-between items-center w-full">
            <span className="font-display text-tierra font-semibold">Total</span>
            <span className="font-display text-lg text-tierra font-bold">
              {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(cartTotal)}
            </span>
          </div>
          */}
          <button
            onClick={handleCheckout}
            disabled={cartItems.length === 0}
            className="w-full py-3 bg-bosque text-white font-medium text-sm rounded-sm hover:bg-bosque-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cotizar por WhatsApp
          </button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
