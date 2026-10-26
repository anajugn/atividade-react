function ProgressBar({ value, label = 'Progresso' }) {
  // Garante que o valor fique entre 0 e 100
  const safeValue = Math.min(100, Math.max(0, value));
  const isDone = safeValue === 100;

  return (
    <div className="progress-wrapper">
      <div
        className="progress"
        role="progressbar"
        aria-label={label}
        aria-valuenow={safeValue}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={`progress__fill ${isDone ? 'progress__fill--done' : ''}`}
          style={{ width: `${safeValue}%` }}
        />
      </div>
      <span className="progress__value" aria-hidden="true">
        {safeValue}%
      </span>
    </div>
  );
}

export default ProgressBar;