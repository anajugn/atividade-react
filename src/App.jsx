import Accordion from './components/Accordion';
import Tabs from './components/Tabs';
import Dropdown from './components/Dropdown';
import ThemeToggle from './components/ThemeToggle';
import CartButton from './components/CartButton';
import UploadSection from './components/UploadSection';
import NotificationsSection from './components/NotificationsSection';
import ProductsSection from './components/ProductsSection';
import { useToast } from './context/ToastContext';
import { useLanguage } from './context/LanguageContext';
import { languageOptions, translations } from './i18n/translations';

// Links do menu lateral (o texto vem das traduções)
const navItems = [
  { href: '#faq', key: 'nav.faq' },
  { href: '#conta', key: 'nav.account' },
  { href: '#upload', key: 'nav.upload' },
  { href: '#notificacoes', key: 'nav.notifications' },
  { href: '#produtos', key: 'nav.products' },
];

function App() {
  const { showToast } = useToast();
  const { language, setLanguage, t } = useLanguage();

  // Troca o idioma e avisa no idioma novo
  const handleLanguageSelect = (option) => {
    setLanguage(option.value);
    showToast(translations[option.value].toast.languageChanged, 'success');
  };

  // As abas recebem o conteúdo já traduzido
  const tabItems = t('account.tabs').map((tab) => ({
    label: tab.label,
    content: <p>{tab.content}</p>,
  }));

  return (
    <>
      <a className="skip-link" href="#conteudo">{t('app.skipLink')}</a>

      <header className="topbar">
        <div className="topbar__inner">
          <h1 className="topbar__title">{t('app.title')}</h1>
          <div className="topbar__actions">
            <Dropdown
              label={`🌐 ${language.toUpperCase()}`}
              ariaLabel={t('topbar.languageLabel')}
              options={languageOptions}
              onSelect={handleLanguageSelect}
            />
            <ThemeToggle />
            <CartButton />
          </div>
        </div>
      </header>

      <div className="layout">
        <nav className="sidenav" aria-label={t('nav.label')}>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{t(item.key)}</a>
              </li>
            ))}
          </ul>
        </nav>

        <main id="conteudo" className="content" tabIndex={-1}>
          <section className="card card--full hero" aria-labelledby="hero-title">
            <h2 id="hero-title">{t('hero.title')}</h2>
            <p>{t('hero.text')}</p>
          </section>

          <section id="faq" className="card card--full" aria-labelledby="faq-title">
            <h2 id="faq-title">{t('faq.title')}</h2>
            <Accordion items={t('faq.items')} />
          </section>

          <section id="conta" className="card" aria-labelledby="tabs-title">
            <h2 id="tabs-title">{t('account.title')}</h2>
            <Tabs tabs={tabItems} label={t('account.label')} />
          </section>

          <div className="stack">
            <UploadSection />
            <NotificationsSection />
          </div>

          <ProductsSection />
        </main>
      </div>

      <footer className="footer">
        <p>{t('app.footer')}</p>
      </footer>
    </>
  );
}

export default App;