import { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';
import { useToast } from '../context/ToastContext';
import { useLanguage } from '../context/LanguageContext';

function UploadSection() {
  const { showToast } = useToast();
  const { t } = useLanguage();
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const startUpload = () => {
    setProgress(0);
    setUploading(true);
    showToast(t('upload.started'), 'info');
  };

  // Simula o envio: sobe 10% a cada 0,4s
  useEffect(() => {
    if (!uploading) return;

    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 10, 100));
    }, 400);

    return () => clearInterval(interval); // limpeza do efeito
  }, [uploading]);

  // Detecta o fim do envio
  useEffect(() => {
    if (uploading && progress === 100) {
      setUploading(false);
      showToast(t('upload.done'), 'success');
    }
  }, [progress, uploading, showToast, t]);

  return (
    <section id="upload" className="card" aria-labelledby="progress-title">
      <h2 id="progress-title">{t('upload.title')}</h2>
      <p className="card__text">{t('upload.description')}</p>
      <ProgressBar value={progress} label={t('upload.progressLabel')} />
      <button className="btn" onClick={startUpload} disabled={uploading}>
        {uploading ? t('upload.sending') : t('upload.start')}
      </button>
    </section>
  );
}

export default UploadSection;