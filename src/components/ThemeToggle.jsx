import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === 'dark';

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? t('theme.toLight') : t('theme.toDark')}
    >
      <span aria-hidden="true">{isDark ? '☀️' : '🌙'}</span>
      <span className="theme-toggle__text">{isDark ? t('theme.light') : t('theme.dark')}</span>
    </button>
  );
}

export default ThemeToggle;