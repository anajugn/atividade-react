import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);

// O carrinho é um objeto { idDoProduto: quantidade }
function getInitialCart() {
  try {
    const saved = JSON.parse(localStorage.getItem('cart'));
    return saved && typeof saved === 'object' ? saved : {};
  } catch {
    return {};
  }
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(getInitialCart);

  // Salva o carrinho a cada mudança
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addItem = useCallback((id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  }, []);

  const clearCart = useCallback(() => setCart({}), []);

  const totalItems = useMemo(
    () => Object.values(cart).reduce((sum, qty) => sum + qty, 0),
    [cart]
  );

  const value = useMemo(
    () => ({ cart, totalItems, addItem, clearCart }),
    [cart, totalItems, addItem, clearCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart deve ser usado dentro de CartProvider');
  return context;
}