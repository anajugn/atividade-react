import { useToast } from '../context/ToastContext';
import { useLanguage } from '../context/LanguageContext';

function NotificationsSection() {
  const { showToast } = useToast();
  const { t } = useLanguage();

  return (
    <section id="notificacoes" className="card" aria-labelledby="toast-title">
      <h2 id="toast-title">{t('notifications.title')}</h2>
      <p className="card__text">{t('notifications.description')}</p>
      <div className="btn-group">
        <button className="btn btn--success" onClick={() => showToast(t('notifications.successMsg'), 'success')}>
          {t('notifications.success')}
        </button>
        <button className="btn btn--error" onClick={() => showToast(t('notifications.errorMsg'), 'error')}>
          {t('notifications.error')}
        </button>
        <button className="btn btn--info" onClick={() => showToast(t('notifications.infoMsg'), 'info')}>
          {t('notifications.info')}
        </button>
      </div>
    </section>
  );
}

export default NotificationsSection;