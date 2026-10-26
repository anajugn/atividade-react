import { useState } from 'react';

function Accordion({ items }) {
  // Guarda o índice do item aberto (null = todos fechados)
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div className="accordion__item" key={item.title}>
            <h3>
              <button
                id={`accordion-header-${index}`}
                className="accordion__header"
                aria-expanded={isOpen}
                aria-controls={`accordion-panel-${index}`}
                onClick={() => toggle(index)}
              >
                {item.title}
                <span
                  className={`accordion__icon ${isOpen ? 'accordion__icon--open' : ''}`}
                  aria-hidden="true"
                >
                  ▾
                </span>
              </button>
            </h3>
            <div
              id={`accordion-panel-${index}`}
              role="region"
              aria-labelledby={`accordion-header-${index}`}
              className={`accordion__panel ${isOpen ? 'accordion__panel--open' : ''}`}
            >
              <div className="accordion__content">
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;