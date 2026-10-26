import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

function CartButton() {
  const { totalItems } = useCart();
  const { t } = useLanguage();
  const itemsWord = totalItems === 1 ? t('cart.item') : t('cart.items');

  return (
    <a
      className="cart-button"
      href="#produtos"
      aria-label={`${t('cart.label')}: ${totalItems} ${itemsWord}`}
    >
      <span aria-hidden="true">🛒</span>
      <span className="cart-button__count" aria-hidden="true">
        {totalItems}
      </span>
    </a>
  );
}

export default CartButton;