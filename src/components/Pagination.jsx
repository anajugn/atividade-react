import { useLanguage } from '../context/LanguageContext';

function Pagination({ totalPages, currentPage, onPageChange }) {
  const { t } = useLanguage();
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="pagination" aria-label={t('pagination.label')}>
      <button
        className="pagination__btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {t('pagination.previous')}
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`pagination__btn ${page === currentPage ? 'pagination__btn--active' : ''}`}
          onClick={() => onPageChange(page)}
          aria-current={page === currentPage ? 'page' : undefined}
          aria-label={`${t('pagination.page')} ${page}`}
        >
          {page}
        </button>
      ))}

      <button
        className="pagination__btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {t('pagination.next')}
      </button>
    </nav>
  );
}

export default Pagination;