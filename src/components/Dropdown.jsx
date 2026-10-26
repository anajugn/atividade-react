import { useEffect, useRef, useState } from 'react';

function Dropdown({ label, options, onSelect, ariaLabel }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Fecha o menu ao clicar fora ou apertar Esc
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleSelect = (option) => {
    onSelect(option);   // callback do componente pai
    setIsOpen(false);   // fecha ao selecionar
  };

  return (
    <div className="dropdown" ref={containerRef}>
      <button
        className="dropdown__toggle"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label={ariaLabel}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label} <span aria-hidden="true">▾</span>
      </button>

      {isOpen && (
        <ul className="dropdown__menu" role="menu" aria-label={ariaLabel}>
          {options.map((option) => (
            <li key={option.value} role="none">
              <button
                role="menuitem"
                className="dropdown__item"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;