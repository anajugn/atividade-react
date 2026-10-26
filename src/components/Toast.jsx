import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ICONS = { success: '✔', error: '✖', info: 'ℹ' };

function Toast({ message, type = 'info', onClose, duration = 4000 }) {
  const { t } = useLanguage();

  // Guarda o callback mais recente sem reiniciar o timer a cada render
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  // Fecha sozinho após alguns segundos
  useEffect(() => {
    const timer = setTimeout(() => onCloseRef.current(), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div
      className={`toast toast--${type}`}
      role={type === 'error' ? 'alert' : 'status'}
    >
      <span aria-hidden="true">{ICONS[type]}</span>
      <span className="toast__message">{message}</span>
      <button className="toast__close" onClick={onClose} aria-label={t('toast.close')}>
        ×
      </button>
    </div>
  );
}

export default Toast;