import { useState, useEffect, createContext, useContext } from 'react';
import {
  Star, ExternalLink, ChevronDown, ChevronUp, ArrowUpRight,
  DollarSign, TrendingUp, Check, X, Menu, X as XIcon,
  Send, Zap, Globe, Target, Clock, BookmarkPlus, Share2, Search,
  Eye, Users, CreditCard, MousePointerClick, LogIn, Lock,
  BarChart3, Activity, Wallet, TrendingUp as TrendUp,
} from 'lucide-react';
import {
  earningApps, blogPosts, faqData, statsData,
  translations, languages, type Locale, type EarningApp,
} from './data/data';

// ═══════════════════════════════════════════════════════
// i18n Context
// ═══════════════════════════════════════════════════════
const I18nContext = createContext<{ locale: Locale; setLocale: (l: Locale) => void; t: (key: string) => string }>({
  locale: 'en', setLocale: () => {}, t: (k: string) => k,
});
function useI18n() { return useContext(I18nContext); }

// ═══════════════════════════════════════════════════════
// Admin Data (localStorage-based simulation)
// ═══════════════════════════════════════════════════════
interface AdminStats {
  todayClicks: number;
  todaySignups: number;
  todayEarnings: number;
  totalClicks: number;
  totalSignups: number;
  totalEarnings: number;
  visitors: number;
  conversionRate: number;
}

interface AppBreakdown {
  appId: string;
  appName: string;
  logo: string;
  color: string;
  clicks: number;
  signups: number;
  earnings: number;
  conversionRate: number;
}

interface RecentActivity {
  id: string;
  type: 'click' | 'signup';
  appId: string;
  appName: string;
  logo: string;
  country: string;
  timestamp: string;
  estimatedValue: number;
}

interface ChartDataPoint {
  label: string;
  clicks: number;
  signups: number;
  earnings: number;
}

const ADMIN_CREDENTIALS = { username: 'admin', password: 'earn2026' };

// Generate realistic random data
function generateAdminData(): { stats: AdminStats; breakdown: AppBreakdown[]; activities: RecentActivity[]; chart: ChartDataPoint[] } {
  const countries = ['🇺🇸', '🇫🇷', '🇬🇧', '🇩🇪', '🇨🇦', '🇦🇺', '🇮🇳', '🇧🇷', '🇲🇬', '🇵🇭', '🇳🇬', '🇰🇪'];
  const countryNames = ['United States', 'France', 'UK', 'Germany', 'Canada', 'Australia', 'India', 'Brazil', 'Madagascar', 'Philippines', 'Nigeria', 'Kenya'];

  const totalClicks = 2847;
  const totalSignups = 342;
  const totalEarnings = 487.65;

  const breakdown: AppBreakdown[] = earningApps.map(app => {
    const clicks = Math.round(totalClicks * (0.12 + Math.random() * 0.18));
    const signups = Math.round(clicks * (0.08 + Math.random() * 0.15));
    const earnings = parseFloat((signups * (0.5 + Math.random() * 3)).toFixed(2));
    return {
      appId: app.id,
      appName: app.name,
      logo: app.logo,
      color: app.color,
      clicks,
      signups,
      earnings,
      conversionRate: parseFloat(((signups / clicks) * 100).toFixed(1)),
    };
  });

  const activities: RecentActivity[] = [];
  for (let i = 0; i < 20; i++) {
    const app = earningApps[Math.floor(Math.random() * earningApps.length)];
    const isSignup = Math.random() > 0.6;
    const countryIdx = Math.floor(Math.random() * countries.length);
    const hoursAgo = Math.floor(Math.random() * 48);
    activities.push({
      id: `act${i}`,
      type: isSignup ? 'signup' : 'click',
      appId: app.id,
      appName: app.name,
      logo: app.logo,
      country: `${countries[countryIdx]} ${countryNames[countryIdx]}`,
      timestamp: new Date(Date.now() - hoursAgo * 3600000).toISOString(),
      estimatedValue: parseFloat((isSignup ? (0.5 + Math.random() * 3) : 0).toFixed(2)),
    });
  }
  activities.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  const chart: ChartDataPoint[] = [];
  const now = new Date();
  for (let i = 29; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    const dayClicks = Math.round(60 + Math.random() * 140);
    const daySignups = Math.round(dayClicks * (0.08 + Math.random() * 0.12));
    const dayEarnings = parseFloat((daySignups * (1 + Math.random() * 2)).toFixed(2));
    chart.push({
      label: date.toLocaleDateString('en', { month: 'short', day: 'numeric' }),
      clicks: dayClicks,
      signups: daySignups,
      earnings: dayEarnings,
    });
  }

  return {
    stats: {
      todayClicks: Math.round(70 + Math.random() * 60),
      todaySignups: Math.round(8 + Math.random() * 15),
      todayEarnings: parseFloat((10 + Math.random() * 25).toFixed(2)),
      totalClicks,
      totalSignups,
      totalEarnings,
      visitors: Math.round(totalClicks * 0.65),
      conversionRate: parseFloat(((totalSignups / totalClicks) * 100).toFixed(1)),
    },
    breakdown,
    activities,
    chart,
  };
}

// ═══════════════════════════════════════════════════════
// NAVBAR
// ═══════════════════════════════════════════════════════
function Navbar({ onAdminClick }: { onAdminClick: () => void }) {
  const { t, locale, setLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const currentLang = languages.find(l => l.code === locale);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-border shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-brand-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">E</div>
            <span className="font-bold text-lg text-text-primary">EarnReview</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {['apps', 'comparison', 'calculator', 'blog', 'faq'].map(id => (
              <a key={id} href={`#${id}`} className="text-sm text-text-secondary hover:text-brand-600 font-medium transition-colors">{t(`nav_${id}`)}</a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative">
              <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-border rounded-lg text-sm text-text-secondary hover:border-brand-300 transition-colors">
                <span>{currentLang?.flag}</span>
                <span className="text-xs font-medium">{currentLang?.label}</span>
                <ChevronDown size={12} className="text-text-muted" />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white border border-border rounded-xl shadow-xl overflow-hidden animate-slideDown min-w-[160px] z-50">
                  {languages.map(lang => (
                    <button key={lang.code} onClick={() => { setLocale(lang.code); setLangOpen(false); }}
                      className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${locale === lang.code ? 'bg-brand-50 text-brand-700 font-semibold' : 'text-text-secondary'}`}>
                      <span className="text-base">{lang.flag}</span>
                      <span>{lang.label}</span>
                      {locale === lang.code && <Check size={14} className="ml-auto text-brand-600" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={onAdminClick} className="flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-brand-600 transition-colors">
              <Lock size={14} /> Admin
            </button>
            <a href="#apps" className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">{t('nav_start')}</a>
          </div>

          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <XIcon size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass border-t border-border animate-slideDown">
          <div className="px-4 py-4 space-y-3">
            {['apps', 'comparison', 'calculator', 'blog', 'faq'].map(id => (
              <a key={id} href={`#${id}`} onClick={() => setMobileOpen(false)} className="block text-sm text-text-secondary hover:text-brand-600 font-medium py-2">{t(`nav_${id}`)}</a>
            ))}
            <div className="flex gap-2 pt-2 border-t border-border">
              {languages.map(lang => (
                <button key={lang.code} onClick={() => setLocale(lang.code)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-colors ${locale === lang.code ? 'bg-brand-600 text-white' : 'bg-gray-100 text-text-secondary'}`}>
                  <span>{lang.flag}</span><span className="text-xs">{lang.label}</span>
                </button>
              ))}
            </div>
            <button onClick={() => { onAdminClick(); setMobileOpen(false); }} className="w-full flex items-center gap-2 text-sm text-text-secondary hover:text-brand-600 py-2">
              <Lock size={14} /> Admin Panel
            </button>
            <a href="#apps" onClick={() => setMobileOpen(false)} className="block bg-brand-600 text-white text-sm font-medium px-4 py-2.5 rounded-lg text-center">{t('nav_start')}</a>
          </div>
        </div>
      )}
    </nav>
  );
}

// ═══════════════════════════════════════════════════════
// HERO
// ═══════════════════════════════════════════════════════
function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-accent-500/5" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 animate-fadeUp opacity-0-init delay-1">
            <Zap size={14} /> {t('hero_badge')}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary leading-tight animate-fadeUp opacity-0-init delay-2">
            {t('hero_title_1')}{' '}
            <span className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">{t('hero_title_2')}</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed animate-fadeUp opacity-0-init delay-3">{t('hero_desc')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 animate-fadeUp opacity-0-init delay-4">
            <a href="#apps" className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white px-8 py-3.5 rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:shadow-brand-500/25 flex items-center justify-center gap-2">{t('hero_cta1')} <ArrowUpRight size={16} /></a>
            <a href="#calculator" className="w-full sm:w-auto bg-white hover:bg-gray-50 border border-border text-text-primary px-8 py-3.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2"><DollarSign size={16} /> {t('hero_cta2')}</a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 animate-fadeUp opacity-0-init delay-5">
            {statsData.map(stat => (
              <div key={stat.key} className="bg-white/60 backdrop-blur border border-border/50 rounded-xl p-4">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-xl font-bold text-text-primary">{stat.value}</div>
                <div className="text-xs text-text-muted mt-0.5">{t(stat.key)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════
// AD BANNER
// ═══════════════════════════════════════════════════════
function AdBanner() {
  const { t } = useI18n();
  return (
    <div className="w-full bg-gray-100/80 border border-dashed border-gray-300 rounded-xl p-6 text-center">
      <p className="text-xs text-text-muted uppercase tracking-wider font-medium">{t('ad_space')}</p>
      <p className="text-sm text-text-secondary mt-1">Google AdSense — 728×90</p>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// APP CARD — No commission shown to public
// ═══════════════════════════════════════════════════════
function AppCard({ app }: { app: EarningApp }) {
  const [expanded, setExpanded] = useState(false);
  const { t, locale } = useI18n();
  const desc = app.description[locale];
  const pros = app.pros[locale];
  const cons = app.cons[locale];

  return (
    <div className={`bg-white rounded-2xl border border-border hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300 overflow-hidden group ${app.featured ? 'ring-2 ring-brand-500/20' : ''}`}>
      {app.featured && (
        <div className="bg-gradient-to-r from-brand-500 to-brand-600 text-white text-center py-1.5 text-xs font-semibold flex items-center justify-center gap-1.5">
          <Star size={12} className="fill-white" /> {t('apps_featured')}
        </div>
      )}
      <div className="p-5">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ backgroundColor: app.color + '15' }}>{app.logo}</div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-text-primary text-lg">{app.name}</h3>
            <div className="flex items-center gap-1 mt-1">
              {[1, 2, 3, 4, 5].map(star => (
                <Star key={star} size={14} className={star <= Math.round(app.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'} />
              ))}
              <span className="text-sm text-text-secondary ml-1.5 font-medium">{app.rating}</span>
              <span className="text-xs text-text-muted">({app.reviews.toLocaleString()})</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-text-secondary mt-4 leading-relaxed line-clamp-2">{desc}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          <div className="bg-green-50 text-green-700 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5">
            <TrendingUp size={12} /> ${app.earningMin}–${app.earningMax}/{app.earningUnit}
          </div>
          <div className="bg-gray-50 text-text-secondary px-3 py-1.5 rounded-lg text-xs font-medium">Min: ${app.minPayout}</div>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {app.platforms.map(p => (<span key={p} className="text-[10px] bg-gray-100 text-text-secondary px-2 py-1 rounded-md font-medium">{p}</span>))}
        </div>

        {expanded && (
          <div className="mt-4 pt-4 border-t border-border space-y-4 animate-slideDown">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-semibold text-green-600 mb-2">{t('apps_pros')}</p>
                <ul className="space-y-1">{pros.map(pro => (<li key={pro} className="flex items-start gap-1.5 text-xs text-text-secondary"><Check size={12} className="text-green-500 mt-0.5 flex-shrink-0" />{pro}</li>))}</ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-red-600 mb-2">{t('apps_cons')}</p>
                <ul className="space-y-1">{cons.map(con => (<li key={con} className="flex items-start gap-1.5 text-xs text-text-secondary"><X size={12} className="text-red-400 mt-0.5 flex-shrink-0" />{con}</li>))}</ul>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs font-semibold text-text-secondary mb-1">{t('apps_payout_methods')}</p>
              <p className="text-sm text-text-primary font-medium">{app.payout}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs font-semibold text-text-secondary mb-1">{t('apps_availability')}</p>
              <p className="text-sm text-text-primary font-medium">{app.available.join(', ')}</p>
            </div>
          </div>
        )}

        <div className="flex items-center gap-2 mt-5">
          <button onClick={() => setExpanded(!expanded)} className="flex-1 flex items-center justify-center gap-1.5 bg-white border border-border hover:bg-gray-50 text-text-secondary px-4 py-2.5 rounded-xl text-sm font-medium transition-colors">
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />} {expanded ? t('apps_less') : t('apps_more')}
          </button>
          <a href={app.affiliateUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 bg-brand-600 hover:bg-brand-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors">
            {t('apps_cta')} <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// APPS SECTION
// ═══════════════════════════════════════════════════════
function AppsSection() {
  const { t } = useI18n();
  const [filter, setFilter] = useState('all');
  const categories = [
    { id: 'all', key: 'apps_filter_all' },
    { id: 'microtask', key: 'apps_filter_microtask' },
    { id: 'survey', key: 'apps_filter_survey' },
    { id: 'passive', key: 'apps_filter_passive' },
    { id: 'cashback', key: 'apps_filter_cashback' },
  ];
  const filtered = filter === 'all' ? earningApps : earningApps.filter(a => a.category === filter);

  return (
    <section id="apps" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">{t('apps_title')}</h2>
          <p className="text-text-secondary mt-3 max-w-2xl mx-auto">{t('apps_subtitle')}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(cat => (
            <button key={cat.id} onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === cat.id ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/20' : 'bg-white text-text-secondary border border-border hover:border-brand-300 hover:text-brand-600'}`}>
              {t(cat.key)}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map(app => <AppCard key={app.id} app={app} />)}
        </div>
        <div className="mt-12"><AdBanner /></div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════
// COMPARISON TABLE
// ═══════════════════════════════════════════════════════
function ComparisonTable() {
  const { t } = useI18n();
  return (
    <section id="comparison" className="py-16 sm:py-24 bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold">{t('comp_title')}</h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">{t('comp_subtitle')}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-4 px-4 text-gray-400 font-semibold">App</th>
                <th className="text-center py-4 px-4 text-gray-400 font-semibold">{t('comp_rating')}</th>
                <th className="text-center py-4 px-4 text-gray-400 font-semibold">{t('comp_daily')}</th>
                <th className="text-center py-4 px-4 text-gray-400 font-semibold">{t('comp_min')}</th>
                <th className="text-center py-4 px-4 text-gray-400 font-semibold">{t('comp_type')}</th>
                <th className="text-center py-4 px-4 text-gray-400 font-semibold">{t('comp_action')}</th>
              </tr>
            </thead>
            <tbody>
              {earningApps.map(app => (
                <tr key={app.id} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg" style={{ backgroundColor: app.color + '20' }}>{app.logo}</div>
                      <span className="font-semibold">{app.name}</span>
                      {app.featured && <span className="text-[9px] bg-brand-500/20 text-brand-400 px-1.5 py-0.5 rounded font-bold">TOP</span>}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center"><div className="flex items-center justify-center gap-1"><Star size={13} className="text-yellow-400 fill-yellow-400" /><span className="font-semibold">{app.rating}</span></div></td>
                  <td className="py-4 px-4 text-center"><span className="text-green-400 font-semibold">${app.earningMin}–${app.earningMax}</span></td>
                  <td className="py-4 px-4 text-center text-gray-400">${app.minPayout}</td>
                  <td className="py-4 px-4 text-center"><span className="text-xs text-gray-400 capitalize">{app.category}</span></td>
                  <td className="py-4 px-4 text-center">
                    <a href={app.affiliateUrl} target="_blank" rel="noopener noreferrer" className="bg-brand-600 hover:bg-brand-500 text-white px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors inline-flex items-center gap-1">{t('apps_cta')} <ExternalLink size={11} /></a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════
// CALCULATOR
// ═══════════════════════════════════════════════════════
function Calculator() {
  const { t } = useI18n();
  const [hours, setHours] = useState(3);

  const dailyEarning = (hours * 2.5).toFixed(2);
  const monthlyEarning = (hours * 2.5 * 30).toFixed(2);
  const yearlyEarning = (hours * 2.5 * 365).toFixed(2);

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-gradient-to-br from-brand-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">{t('calc_title')}</h2>
          <p className="text-text-secondary mt-3">{t('calc_subtitle')}</p>
        </div>
        <div className="bg-white rounded-2xl border border-border p-6 sm:p-8 shadow-xl shadow-brand-500/5">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold text-text-primary">{t('calc_hours')}</label>
              <div className="bg-brand-50 text-brand-700 px-4 py-1.5 rounded-lg font-bold text-lg">{hours}h</div>
            </div>
            <input type="range" min={1} max={10} value={hours} onChange={(e) => setHours(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-600" />
            <div className="flex justify-between text-xs text-text-muted mt-1">
              <span>1h</span><span>3h</span><span>5h</span><span>8h</span><span>10h</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-5 text-center border border-blue-200/50">
              <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">{t('calc_daily')}</p>
              <p className="text-3xl font-extrabold text-blue-700 mt-2">${dailyEarning}</p>
            </div>
            <div className="bg-gradient-to-br from-brand-50 to-brand-100/50 rounded-xl p-5 text-center border border-brand-200/50">
              <p className="text-xs text-brand-600 font-semibold uppercase tracking-wider">{t('calc_monthly')}</p>
              <p className="text-3xl font-extrabold text-brand-700 mt-2">${monthlyEarning}</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-5 text-center border border-green-200/50">
              <p className="text-xs text-green-600 font-semibold uppercase tracking-wider">{t('calc_yearly')}</p>
              <p className="text-3xl font-extrabold text-green-700 mt-2">${yearlyEarning}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════
// HOW IT WORKS
// ═══════════════════════════════════════════════════════
function HowItWorks() {
  const { t } = useI18n();
  const steps = [
    { icon: <Search size={24} />, titleKey: 'how_1_title', descKey: 'how_1_desc', color: 'from-blue-500 to-blue-600' },
    { icon: <Target size={24} />, titleKey: 'how_2_title', descKey: 'how_2_desc', color: 'from-brand-500 to-brand-600' },
    { icon: <DollarSign size={24} />, titleKey: 'how_3_title', descKey: 'how_3_desc', color: 'from-green-500 to-green-600' },
  ];
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">{t('how_title')}</h2>
          <p className="text-text-secondary mt-3">{t('how_subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative bg-white rounded-2xl border border-border p-6 hover:shadow-lg transition-all text-center">
              <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg`}>{step.icon}</div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-600 text-white text-xs font-bold rounded-full flex items-center justify-center">{i + 1}</div>
              <h3 className="font-bold text-text-primary">{t(step.titleKey)}</h3>
              <p className="text-sm text-text-secondary mt-2">{t(step.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════
// BLOG SECTION
// ═══════════════════════════════════════════════════════
function BlogSection() {
  const { t, locale } = useI18n();
  return (
    <section id="blog" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">{t('blog_title')}</h2>
          <p className="text-text-secondary mt-3">{t('blog_subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all cursor-pointer group">
              <div className={`h-40 flex items-center justify-center text-5xl ${post.featured ? 'bg-gradient-to-br from-brand-100 to-brand-200/50' : 'bg-gray-100'}`}>{post.image}</div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full font-semibold">{post.category}</span>
                  <span className="text-xs text-text-muted flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                </div>
                <h3 className="font-bold text-text-primary group-hover:text-brand-600 transition-colors line-clamp-2">{post.title[locale]}</h3>
                <p className="text-sm text-text-secondary mt-2 line-clamp-2">{post.excerpt[locale]}</p>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                  <span className="text-xs text-text-muted">{new Date(post.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  <div className="flex items-center gap-2 text-text-muted">
                    <BookmarkPlus size={14} className="hover:text-brand-600 cursor-pointer" />
                    <Share2 size={14} className="hover:text-brand-600 cursor-pointer" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════
// FAQ
// ═══════════════════════════════════════════════════════
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t, locale } = useI18n();
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">{t('faq_title')}</h2>
        </div>
        <div className="space-y-3">
          {faqData.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-border overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50/50 transition-colors">
                <span className="font-semibold text-text-primary pr-4">{faq.q[locale]}</span>
                {openIndex === i ? <ChevronUp size={18} className="text-text-muted flex-shrink-0" /> : <ChevronDown size={18} className="text-text-muted flex-shrink-0" />}
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 animate-slideDown">
                  <p className="text-sm text-text-secondary leading-relaxed">{faq.a[locale]}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════
// NEWSLETTER
// ═══════════════════════════════════════════════════════
function NewsletterCTA() {
  const { t } = useI18n();
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-brand-600 to-brand-800 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-4xl mb-4">🚀</div>
        <h2 className="text-2xl sm:text-3xl font-extrabold">{t('newsletter_title')}</h2>
        <p className="text-brand-100 mt-3 text-lg">{t('newsletter_desc')}</p>
        <div className="flex flex-col sm:flex-row gap-3 mt-8 max-w-md mx-auto">
          <input type="email" placeholder={t('newsletter_placeholder')} className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-brand-200 outline-none focus:ring-2 focus:ring-white/30" />
          <button className="bg-white text-brand-700 font-semibold px-6 py-3 rounded-xl text-sm hover:bg-brand-50 transition-colors whitespace-nowrap">{t('newsletter_cta')}</button>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════
// FOOTER
// ═══════════════════════════════════════════════════════
function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-brand-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">E</div>
              <span className="font-bold text-lg">EarnReview</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">{t('footer_desc')}</p>
            <div className="flex items-center gap-3 mt-6">
              <div className="w-9 h-9 bg-gray-800 hover:bg-brand-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer"><Globe size={16} /></div>
              <div className="w-9 h-9 bg-gray-800 hover:bg-brand-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer"><Send size={16} /></div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">{t('footer_navigation')}</h4>
            <ul className="space-y-2">{['apps', 'comparison', 'calculator', 'blog', 'faq'].map(id => (<li key={id}><a href={`#${id}`} className="text-sm text-gray-400 hover:text-white transition-colors">{t(`nav_${id}`)}</a></li>))}</ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">{t('footer_top_apps')}</h4>
            <ul className="space-y-2">{earningApps.slice(0, 5).map(app => (<li key={app.id}><a href={app.affiliateUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5">{app.logo} {app.name}</a></li>))}</ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">{t('footer_rights')}</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300">{t('footer_privacy')}</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300">{t('footer_legal')}</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300">{t('footer_contact')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════
// ADMIN LOGIN
// ═══════════════════════════════════════════════════════
function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      onLogin();
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">E</div>
          <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
          <p className="text-gray-400 mt-1 text-sm">Sign in to view your dashboard</p>
        </div>
        <form onSubmit={handleLogin} className="bg-dark-800 border border-gray-700 rounded-2xl p-6 space-y-4">
          {error && <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-2 rounded-lg text-sm">{error}</div>}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Username</label>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full bg-dark-900 border border-gray-600 rounded-lg px-3 py-2.5 text-sm text-white outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500" placeholder="admin" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full bg-dark-900 border border-gray-600 rounded-lg px-3 py-2.5 text-sm text-white outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full bg-brand-600 hover:bg-brand-700 text-white py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2">
            <LogIn size={16} /> Sign In
          </button>
          <p className="text-xs text-gray-500 text-center mt-2">Default: admin / earn2026</p>
        </form>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// ADMIN DASHBOARD
// ═══════════════════════════════════════════════════════
function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const [data] = useState(() => generateAdminData());
  const [activeTab, setActiveTab] = useState<'overview' | 'apps' | 'activity'>('overview');

  const { stats, breakdown, activities, chart } = data;
  const sortedBreakdown = [...breakdown].sort((a, b) => b.earnings - a.earnings);

  // Simple bar chart using divs
  const maxEarnings = Math.max(...chart.map(c => c.earnings));

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      {/* Admin Header */}
      <header className="bg-dark-800 border-b border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-brand-700 rounded-lg flex items-center justify-center text-white font-bold text-xs">E</div>
              <span className="font-bold text-sm">EarnReview Admin</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Live
              </div>
              <button onClick={onLogout} className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                <X size={14} /> Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-dark-800/50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1">
            {[
              { id: 'overview' as const, label: 'Overview', icon: BarChart3 },
              { id: 'apps' as const, label: 'By App', icon: Eye },
              { id: 'activity' as const, label: 'Activity', icon: Activity },
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors
                    ${activeTab === tab.id ? 'border-brand-500 text-brand-400' : 'border-transparent text-gray-400 hover:text-gray-200'}`}>
                  <Icon size={15} /> {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-dark-800 border border-gray-700 rounded-xl p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center"><MousePointerClick size={18} className="text-blue-400" /></div>
                  <div>
                    <p className="text-2xl font-bold">{stats.totalClicks.toLocaleString()}</p>
                    <p className="text-xs text-gray-400">Total Clicks</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1 text-xs text-green-400">
                  <TrendUp size={12} /> +{stats.todayClicks} today
                </div>
              </div>

              <div className="bg-dark-800 border border-gray-700 rounded-xl p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center"><Users size={18} className="text-green-400" /></div>
                  <div>
                    <p className="text-2xl font-bold">{stats.totalSignups.toLocaleString()}</p>
                    <p className="text-xs text-gray-400">Total Signups</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1 text-xs text-green-400">
                  <TrendUp size={12} /> +{stats.todaySignups} today
                </div>
              </div>

              <div className="bg-dark-800 border border-gray-700 rounded-xl p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center"><Wallet size={18} className="text-brand-400" /></div>
                  <div>
                    <p className="text-2xl font-bold">${stats.totalEarnings.toFixed(2)}</p>
                    <p className="text-xs text-gray-400">Total Earnings</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1 text-xs text-green-400">
                  <TrendUp size={12} /> +${stats.todayEarnings.toFixed(2)} today
                </div>
              </div>

              <div className="bg-dark-800 border border-gray-700 rounded-xl p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center"><CreditCard size={18} className="text-purple-400" /></div>
                  <div>
                    <p className="text-2xl font-bold">{stats.conversionRate}%</p>
                    <p className="text-xs text-gray-400">Conversion Rate</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1 text-xs text-gray-400">
                  <Eye size={12} /> {stats.visitors.toLocaleString()} unique visitors
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-dark-800 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-semibold">Earnings — Last 30 Days</h3>
                  <p className="text-xs text-gray-400 mt-0.5">Daily earnings from all apps</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-brand-400">${chart.reduce((sum, c) => sum + c.earnings, 0).toFixed(2)}</p>
                  <p className="text-xs text-gray-400">30-day total</p>
                </div>
              </div>
              <div className="flex items-end gap-1 h-40">
                {chart.map((point, i) => {
                  const height = (point.earnings / maxEarnings) * 100;
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                      <div className="relative w-full">
                        <div
                          className="w-full bg-brand-500/20 rounded-t-sm hover:bg-brand-500/40 transition-colors cursor-pointer"
                          style={{ height: `${Math.max(height, 3)}px` }}
                        />
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-dark-700 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                          ${point.earnings}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-gray-500">
                <span>{chart[0]?.label}</span>
                <span>{chart[14]?.label}</span>
                <span>{chart[29]?.label}</span>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-dark-800 border border-gray-700 rounded-xl p-6">
              <h3 className="font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {activities.slice(0, 8).map(act => (
                  <div key={act.id} className="flex items-center gap-3 py-2 border-b border-gray-700/50 last:border-0">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 ${act.type === 'signup' ? 'bg-green-500/10' : 'bg-blue-500/10'}`}>
                      {act.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm">
                        <span className="font-medium">{act.type === 'signup' ? '🎉 Signup' : '👆 Click'}</span>
                        <span className="text-gray-400"> on </span>
                        <span className="font-medium text-brand-400">{act.appName}</span>
                      </p>
                      <p className="text-xs text-gray-500">{act.country} • {new Date(act.timestamp).toLocaleString()}</p>
                    </div>
                    {act.type === 'signup' && (
                      <span className="text-sm font-semibold text-green-400">+${act.estimatedValue.toFixed(2)}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Apps Tab */}
        {activeTab === 'apps' && (
          <div className="space-y-4">
            <div className="bg-dark-800 border border-gray-700 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold text-xs uppercase">App</th>
                    <th className="text-center py-3 px-4 text-gray-400 font-semibold text-xs uppercase">Clicks</th>
                    <th className="text-center py-3 px-4 text-gray-400 font-semibold text-xs uppercase">Signups</th>
                    <th className="text-center py-3 px-4 text-gray-400 font-semibold text-xs uppercase">Conv. Rate</th>
                    <th className="text-right py-3 px-4 text-gray-400 font-semibold text-xs uppercase">Earnings</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedBreakdown.map(app => (
                    <tr key={app.appId} className="border-b border-gray-700/50 hover:bg-gray-700/20 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm" style={{ backgroundColor: app.color + '20' }}>{app.logo}</div>
                          <span className="font-medium">{app.appName}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center text-gray-300">{app.clicks.toLocaleString()}</td>
                      <td className="py-3 px-4 text-center text-green-400 font-medium">{app.signups.toLocaleString()}</td>
                      <td className="py-3 px-4 text-center">
                        <span className={`px-2 py-0.5 rounded-md text-xs font-bold ${app.conversionRate > 12 ? 'bg-green-500/10 text-green-400' : app.conversionRate > 8 ? 'bg-yellow-500/10 text-yellow-400' : 'bg-red-500/10 text-red-400'}`}>
                          {app.conversionRate}%
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right font-bold text-brand-400">${app.earnings.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-gray-600 bg-dark-700/30">
                    <td className="py-3 px-4 font-bold">Total</td>
                    <td className="py-3 px-4 text-center font-bold">{breakdown.reduce((s, a) => s + a.clicks, 0).toLocaleString()}</td>
                    <td className="py-3 px-4 text-center font-bold text-green-400">{breakdown.reduce((s, a) => s + a.signups, 0).toLocaleString()}</td>
                    <td className="py-3 px-4 text-center font-bold">{stats.conversionRate}%</td>
                    <td className="py-3 px-4 text-right font-bold text-brand-400">${breakdown.reduce((s, a) => s + a.earnings, 0).toFixed(2)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}

        {/* Activity Tab */}
        {activeTab === 'activity' && (
          <div className="space-y-3">
            {activities.map(act => (
              <div key={act.id} className="bg-dark-800 border border-gray-700 rounded-xl p-4 hover:bg-dark-700/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 ${act.type === 'signup' ? 'bg-green-500/10' : 'bg-blue-500/10'}`}>
                    {act.type === 'signup' ? '🎉' : '👆'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${act.type === 'signup' ? 'bg-green-500/10 text-green-400' : 'bg-blue-500/10 text-blue-400'}`}>
                        {act.type === 'signup' ? 'SIGNUP' : 'CLICK'}
                      </span>
                      <span className="text-sm font-medium">{act.appName}</span>
                      <span className="text-base">{act.logo}</span>
                    </div>
                    <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                      <span>{act.country}</span>
                      <span>•</span>
                      <span>{new Date(act.timestamp).toLocaleString()}</span>
                    </div>
                  </div>
                  {act.type === 'signup' && (
                    <div className="text-right">
                      <p className="text-lg font-bold text-green-400">+${act.estimatedValue.toFixed(2)}</p>
                      <p className="text-[10px] text-gray-500">estimated</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// APP — Root
// ═══════════════════════════════════════════════════════
export default function App() {
  const [locale, setLocale] = useState<Locale>('en');
  const [showAdmin, setShowAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const t = (key: string): string => translations[locale]?.[key] || key;

  if (showAdmin) {
    if (!isLoggedIn) {
      return <AdminLogin onLogin={() => setIsLoggedIn(true)} />;
    }
    return <AdminDashboard onLogout={() => { setShowAdmin(false); setIsLoggedIn(false); }} />;
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      <div className="min-h-screen">
        <Navbar onAdminClick={() => setShowAdmin(true)} />
        <Hero />
        <HowItWorks />
        <AppsSection />
        <ComparisonTable />
        <Calculator />
        <NewsletterCTA />
        <BlogSection />
        <FAQ />
        <Footer />
      </div>
    </I18nContext.Provider>
  );
}
