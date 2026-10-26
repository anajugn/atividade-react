import { useState } from 'react';
import Pagination from './Pagination';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { useToast } from '../context/ToastContext';
import { products, ITEMS_PER_PAGE } from '../data/products';

function ProductsSection() {
  const { t, locale } = useLanguage();
  const { showToast } = useToast();
  const { cart, totalItems, addItem, clearCart } = useCart();
  const [currentPage, setCurrentPage] = useState(1);

  const names = t('products.names');

  const formatPrice = (value) =>
    value.toLocaleString(locale, { style: 'currency', currency: 'BRL' });

  // ===== Paginação =====
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // ===== Carrinho =====
  const totalPrice = products.reduce((sum, p) => sum + p.price * (cart[p.id] || 0), 0);
  const itemsWord = totalItems === 1 ? t('cart.item') : t('cart.items');

  const handleAdd = (product) => {
    addItem(product.id);
    showToast(`${t('products.added')}: ${names[product.id - 1]}`, 'success');
  };

  const handleClear = () => {
    clearCart();
    showToast(t('cart.cleared'), 'info');
  };

  return (
    <section id="produtos" className="card card--full" aria-labelledby="products-title">
      <h2 id="products-title">{t('products.title')}</h2>

      <ul className="product-grid">
        {visibleProducts.map((product) => (
          <li key={product.id} className="product">
            {cart[product.id] > 0 && (
              <span
                className="product__qty"
                aria-label={`${t('cart.label')}: ${cart[product.id]}`}
              >
                ×{cart[product.id]}
              </span>
            )}
            <span className="product__icon" aria-hidden="true">
              {product.icon}
            </span>
            <h3>{names[product.id - 1]}</h3>
            <p>{formatPrice(product.price)}</p>
            <button className="btn btn--small" onClick={() => handleAdd(product)}>
              {t('products.add')}
            </button>
          </li>
        ))}
      </ul>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />

      <div className="cart-summary" aria-live="polite">
        <p>
          {totalItems === 0
            ? t('cart.empty')
            : `${t('cart.label')}: ${totalItems} ${itemsWord} · ${t('cart.total')}: ${formatPrice(totalPrice)}`}
        </p>
        {totalItems > 0 && (
          <button className="btn btn--small btn--secondary" onClick={handleClear}>
            {t('cart.clear')}
          </button>
        )}
      </div>
    </section>
  );
}

export default ProductsSection;