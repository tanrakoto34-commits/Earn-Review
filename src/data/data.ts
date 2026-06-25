// ═══════════════════════════════════════════════════════
// i18n — Internationalization
// ═══════════════════════════════════════════════════════

export type Locale = 'en' | 'fr' | 'mg';

export const languages: { code: Locale; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'mg', label: 'Malagasy', flag: '🇲🇬' },
];

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    nav_apps: 'Apps',
    nav_comparison: 'Comparison',
    nav_calculator: 'Calculator',
    nav_blog: 'Blog',
    nav_faq: 'FAQ',
    nav_start: 'Get Started',
    hero_badge: '🔥 Top Earning Apps — 2026',
    hero_title_1: 'Earn Money Online with the',
    hero_title_2: 'Best Legitimate Apps',
    hero_desc: 'Honest reviews and complete comparisons of apps that actually pay you. Surveys, micro-tasks, passive income — everything in one place.',
    hero_cta1: 'Browse Apps',
    hero_cta2: 'Earnings Calculator',
    stats_apps: 'Apps Reviewed',
    stats_users: 'Active Users',
    stats_earnings: 'Total User Earnings',
    stats_countries: 'Countries',
    how_title: 'How It Works',
    how_subtitle: '3 simple steps to start earning',
    how_1_title: 'Choose an App',
    how_1_desc: 'Read honest reviews and find the app that suits you best.',
    how_2_title: 'Create Your Account',
    how_2_desc: 'Click the "Get Started" button and sign up for free.',
    how_3_title: 'Start Earning',
    how_3_desc: 'Complete tasks, surveys, or let passive apps run. Withdraw your earnings anytime.',
    apps_title: 'Best Earning Apps',
    apps_subtitle: 'Every app tested and verified. Updated reviews for 2026.',
    apps_filter_all: 'All',
    apps_filter_survey: 'Surveys',
    apps_filter_passive: 'Passive',
    apps_filter_microtask: 'Micro-tasks',
    apps_filter_cashback: 'Cashback',
    apps_rating: 'Rating',
    apps_payout_methods: '💳 Payout Methods',
    apps_availability: '🌍 Availability',
    apps_pros: '✅ Pros',
    apps_cons: '❌ Cons',
    apps_more: 'Details',
    apps_less: 'Close',
    apps_cta: 'Get Started',
    apps_featured: '⭐ TOP APP — RECOMMENDED',
    comp_title: 'Full Comparison',
    comp_subtitle: 'Compare all earning apps side by side.',
    comp_rating: 'Rating',
    comp_daily: 'Earnings/Day',
    comp_min: 'Min Payout',
    comp_type: 'Type',
    comp_action: 'Action',
    calc_title: 'Earnings Calculator',
    calc_subtitle: 'Estimate how much you can earn per month.',
    calc_daily: 'Daily',
    calc_monthly: 'Monthly',
    calc_yearly: 'Yearly',
    calc_hours: 'Hours per day',
    calc_app_quality: 'App quality level',
    calc_hours_desc_1: 'Casual (1-2 hrs)',
    calc_hours_desc_2: 'Regular (3-4 hrs)',
    calc_hours_desc_3: 'Serious (5+ hrs)',
    newsletter_title: 'Start earning today!',
    newsletter_desc: 'Get exclusive tips and app recommendations delivered to your inbox.',
    newsletter_placeholder: 'your@email.com',
    newsletter_cta: 'Subscribe',
    blog_title: 'Articles & Guides',
    blog_subtitle: 'Strategies, reviews, and tips to earn more money.',
    faq_title: 'Frequently Asked Questions',
    faq_q1: 'Are these apps legitimate?',
    faq_a1: 'Yes! All apps listed here are legitimate and have been tested by our team. We only recommend apps we trust. Zero scams.',
    faq_q2: 'How much can I earn?',
    faq_a2: 'Earnings vary by app and time invested. Most users earn $1-$50/day. Passive apps earn less but require zero effort. Active survey/task apps can earn more with time.',
    faq_q3: 'How do I get paid?',
    faq_a3: 'Each app offers different payout methods: PayPal, Crypto, Bank Transfer, or Gift Cards. Minimum payout ranges from $0.50 to $20 depending on the app.',
    faq_q4: 'Is it free to sign up?',
    faq_a4: 'Yes! All apps are 100% free to join. You should never pay to sign up for an earning app.',
    faq_q5: 'Which countries are supported?',
    faq_a5: 'Most apps are available worldwide. Some survey-focused apps may be limited to US, UK, CA, and AU. Check each app\'s availability below.',
    footer_desc: 'The #1 review and comparison site for online earning apps. Honest reviews, complete guides, and earning strategies.',
    footer_navigation: 'Navigation',
    footer_top_apps: 'Top Apps',
    footer_privacy: 'Privacy Policy',
    footer_legal: 'Legal Mentions',
    footer_contact: 'Contact',
    footer_rights: '© 2026 EarnReview. All rights reserved.',
    ad_space: 'Advertisement',
  },
  fr: {
    nav_apps: 'Apps',
    nav_comparison: 'Comparaison',
    nav_calculator: 'Calculateur',
    nav_blog: 'Blog',
    nav_faq: 'FAQ',
    nav_start: 'Commencer',
    hero_badge: '🔥 Top Apps Gagnantes — 2026',
    hero_title_1: 'Gagnez de l\'argent en ligne avec les',
    hero_title_2: 'Meilleures Apps Légitimes',
    hero_desc: 'Des avis honnêtes et des comparaisons complètes d\'apps qui vous paient vraiment. Sondages, micro-tâches, revenus passifs — tout en un seul endroit.',
    hero_cta1: 'Voir les Apps',
    hero_cta2: 'Calculateur de Gains',
    stats_apps: 'Apps Testées',
    stats_users: 'Utilisateurs Actifs',
    stats_earnings: 'Gains Totaux',
    stats_countries: 'Pays',
    how_title: 'Comment ça Marche',
    how_subtitle: '3 étapes simples pour commencer',
    how_1_title: 'Choisissez une App',
    how_1_desc: 'Lisez les avis honnêtes et trouvez l\'app qui vous convient.',
    how_2_title: 'Créez votre Compte',
    how_2_desc: 'Cliquez sur "Commencer" et inscrivez-vous gratuitement.',
    how_3_title: 'Commencez à Gagner',
    how_3_desc: 'Répondez aux sondages, tâches, ou laissez les apps passives tourner. Retirez vos gains à tout moment.',
    apps_title: 'Meilleures Apps Gagnantes',
    apps_subtitle: 'Chaque app testée et vérifiée. Avis mis à jour pour 2026.',
    apps_filter_all: 'Tout',
    apps_filter_survey: 'Sondages',
    apps_filter_passive: 'Passif',
    apps_filter_microtask: 'Micro-tâches',
    apps_filter_cashback: 'Cashback',
    apps_rating: 'Note',
    apps_payout_methods: '💳 Méthodes de Paiement',
    apps_availability: '🌍 Disponibilité',
    apps_pros: '✅ Avantages',
    apps_cons: '❌ Inconvénients',
    apps_more: 'Détails',
    apps_less: 'Fermer',
    apps_cta: 'Commencer',
    apps_featured: '⭐ APP TOP — RECOMMANDÉE',
    comp_title: 'Comparaison Complète',
    comp_subtitle: 'Comparez toutes les apps côte à côte.',
    comp_rating: 'Note',
    comp_daily: 'Gain/Jour',
    comp_min: 'Min. Retrait',
    comp_type: 'Type',
    comp_action: 'Action',
    calc_title: 'Calculateur de Gains',
    calc_subtitle: 'Estimez combien vous pouvez gagner par mois.',
    calc_daily: 'Par jour',
    calc_monthly: 'Par mois',
    calc_yearly: 'Par an',
    calc_hours: 'Heures par jour',
    calc_app_quality: 'Niveau de l\'app',
    calc_hours_desc_1: 'Occasionnel (1-2h)',
    calc_hours_desc_2: 'Régulier (3-4h)',
    calc_hours_desc_3: 'Sérieux (5+h)',
    newsletter_title: 'Commencez à gagner aujourd\'hui !',
    newsletter_desc: 'Recevez des conseils exclusifs et des recommandations d\'apps.',
    newsletter_placeholder: 'votre@email.com',
    newsletter_cta: 'S\'abonner',
    blog_title: 'Articles & Guides',
    blog_subtitle: 'Stratégies, avis et conseils pour gagner plus d\'argent.',
    faq_title: 'Questions Fréquentes',
    faq_q1: 'Ces apps sont-elles légitimes ?',
    faq_a1: 'Oui ! Toutes les apps listées ici sont légitimes et testées par notre équipe. Nous ne recommandons que des apps de confiance. Zéro arnaque.',
    faq_q2: 'Combien puis-je gagner ?',
    faq_a2: 'Les gains varient selon l\'app et le temps investi. La plupart des utilisateurs gagnent 1$-50$/jour. Les apps passives gagnent moins mais sans effort.',
    faq_q3: 'Comment suis-je payé ?',
    faq_a3: 'Chaque app propose différentes méthodes : PayPal, Crypto, Virement ou Cartes Cadeaux. Le minimum varie de 0.50$ à 20$ selon l\'app.',
    faq_q4: 'L\'inscription est-elle gratuite ?',
    faq_a4: 'Oui ! Toutes les apps sont 100% gratuites. Vous ne devriez jamais payer pour vous inscrire.',
    faq_q5: 'Quels pays sont supportés ?',
    faq_a5: 'La plupart des apps sont disponibles mondialement. Certaines apps de sondages peuvent être limitées aux US, UK, CA et AU.',
    footer_desc: 'Le site #1 d\'avis et de comparaison pour les apps de gains en ligne. Avis honnêtes, guides complets et stratégies.',
    footer_navigation: 'Navigation',
    footer_top_apps: 'Top Apps',
    footer_privacy: 'Politique de confidentialité',
    footer_legal: 'Mentions légales',
    footer_contact: 'Contact',
    footer_rights: '© 2026 EarnReview. Tous droits réservés.',
    ad_space: 'Publicité',
  },
  mg: {
    nav_apps: 'Apps',
    nav_comparison: 'Comparaison',
    nav_calculator: 'Calculateur',
    nav_blog: 'Blog',
    nav_faq: 'FAQ',
    nav_start: 'Manomboka',
    hero_badge: '🔥 Apps Mahazoana Vola — 2026',
    hero_title_1: 'Mahazoa Vola Online amin\'ny',
    hero_title_2: 'Apps Tsara Indrindra',
    hero_desc: 'Reviews marina sy comparison feno momba ny apps mahazoana vola. Surveys, tasks, passive income — ny rehetra eto amin\'ny toerana iray.',
    hero_cta1: 'Jereo ny Apps',
    hero_cta2: 'Calculateur Vola',
    stats_apps: 'Apps Review',
    stats_users: 'Mpiasa Active',
    stats_earnings: 'Vola Rehetra',
    stats_countries: 'Firenena',
    how_title: 'Ahoana ny Fomba Fiasa',
    how_subtitle: 'Dingana 3 tsotra fotsiny',
    how_1_title: 'Mifidiana App',
    how_1_desc: 'Vakio ny reviews ary tadiavo ny app mety anao.',
    how_2_title: 'Soratao ny Anaranao',
    how_2_desc: 'Tsindrio ny "Manomboka" ary misorata anarana maimaim-poana.',
    how_3_title: 'Manomboka Mahazo Vola',
    how_3_desc: 'Ataovy ny surveys, tasks, na avelao fotsiny ny app mihazakazaka. Sambao ny vola-nao rehefa te-hanao ianao.',
    apps_title: 'Apps Mahazoana Vola Tsara Indrindra',
    apps_subtitle: 'Apps rehetra voandinika sy nanandrana. Reviews update isan-taona.',
    apps_filter_all: 'Rehetra',
    apps_filter_survey: 'Surveys',
    apps_filter_passive: 'Passive',
    apps_filter_microtask: 'Micro-tasks',
    apps_filter_cashback: 'Cashback',
    apps_rating: 'Naoty',
    apps_payout_methods: '💳 Fandoavana',
    apps_availability: '🌍 Fizarana',
    apps_pros: '✅ Tombony',
    apps_cons: '❌ Tsy tombiny',
    apps_more: 'Antsipiriany',
    apps_less: 'Akatona',
    apps_cta: 'Manomboka',
    apps_featured: '⭐ APP TOP — TORO HEVITRA',
    comp_title: 'Comparison Feno',
    comp_subtitle: 'Ohatana ny apps rehetra eo amin\'ny laharana iray.',
    comp_rating: 'Naoty',
    comp_daily: 'Vola/Andro',
    comp_min: 'Min Payout',
    comp_type: 'Karazana',
    comp_action: 'Hetsika',
    calc_title: 'Calculateur Vola',
    calc_subtitle: 'Kajio ny vola azonao isan-telana.',
    calc_daily: 'Isan\'andro',
    calc_monthly: 'Isan-telana',
    calc_yearly: 'Isan-taona',
    calc_hours: 'Ora isan\'andro',
    calc_app_quality: 'Kalitaon\'ny app',
    calc_hours_desc_1: 'Mila-milamina (1-2 ora)',
    calc_hours_desc_2: 'Regulier (3-4 ora)',
    calc_hours_desc_3: 'Matotra (5+ ora)',
    newsletter_title: 'Manomboka mahazo vola ankehitriny!',
    newsletter_desc: 'Mahazoa tips exclusifs sy recommandation apps amin\'ny mailakao.',
    newsletter_placeholder: 'mailaka@ohatra.mg',
    newsletter_cta: 'Misorata anarana',
    blog_title: 'Articles sy Guides',
    blog_subtitle: 'Strategies, reviews, ary tips mahazoana vola bebe kokoa.',
    faq_title: 'Fanontaniana Matetika',
    faq_q1: 'Sarra ve ireo apps ireo?',
    faq_a1: 'Eny! Apps rehetra eto dia azo itokiana. Nandinika sy nanandrana izahay alohan\'ny hanoratana review. Tsy misy kely fotsiny.',
    faq_q2: 'Ohatrinona no azonao?',
    faq_a2: 'Miovaova arakaraka ny app sy ny fotoana. Ny ankamaroany dia mahazo $1-$50/andro. Apps passive dia kely kokoa fa tsy mila effort.',
    faq_q3: 'Ahoana no fandoavana?',
    faq_a3: 'App tsirairay dia manana fandoavana samihafa: PayPal, Crypto, Virement na Gift Cards. Min payout $0.50 ka hatramin\'ny $20.',
    faq_q4: 'Maimaim-poana ve ny fisoratana anarana?',
    faq_a4: 'Eny! Apps rehetra dia 100% maimaim-poana. Tsy tokony mandoa vola ianao mba hisoratana anarana.',
    faq_q5: 'Inona ny firenena azo ampiasaina?',
    faq_a5: 'Ny ankamaroan\'ny apps dia azo ampiasaina manerantany. Ny sasany dia ho an\'ny US, UK, CA, ary AU fotsiny.',
    footer_desc: 'Ny site #1 review sy comparison ho an\'ny apps mahazoana vola online. Reviews marina, guides feno, ary strategies.',
    footer_navigation: 'Navigation',
    footer_top_apps: 'Apps Top',
    footer_privacy: 'Politique de confidentialité',
    footer_legal: 'Mentions légales',
    footer_contact: 'Fifandraisana',
    footer_rights: '© 2026 EarnReview. Zon\'ny rehetra voatokana.',
    ad_space: 'Publicité',
  },
};

// ═══════════════════════════════════════════════════════
// Earning Apps Data (International)
// ═══════════════════════════════════════════════════════

export interface EarningApp {
  id: string;
  name: string;
  logo: string;
  category: 'survey' | 'cashback' | 'passive' | 'microtask' | 'crypto';
  rating: number;
  reviews: number;
  earningMin: number;
  earningMax: number;
  earningUnit: 'day' | 'month';
  payout: string;
  minPayout: number;
  commissionRate: number; // hidden from public, used in admin
  description: { en: string; fr: string; mg: string };
  pros: { en: string[]; fr: string[]; mg: string[] };
  cons: { en: string[]; fr: string[]; mg: string[] };
  platforms: string[];
  available: string[];
  color: string;
  featured?: boolean;
  affiliateUrl: string;
}

export const earningApps: EarningApp[] = [
  {
    id: 'freecash', name: 'Freecash', logo: '💰', category: 'microtask',
    rating: 4.7, reviews: 12840, earningMin: 1, earningMax: 10, earningUnit: 'day',
    payout: 'PayPal, Crypto, Gift Cards', minPayout: 0.5, commissionRate: 0.50,
    description: {
      en: 'Freecash is the fastest-earning platform in 2026. Complete surveys, install apps, and earn real money. One of the highest-paying survey sites available worldwide.',
      fr: 'Freecash est la plateforme la plus rapide pour gagner de l\'argent en 2026. Répondez aux sondages, installez des apps et gagnez de l\'argent réel.',
      mg: 'Freecash no app mahazoana vola haingana indrindra. Ataovy ny surveys, installations apps, ary offres isan-karazany.',
    },
    pros: {
      en: ['Fast payouts', 'Multiple earning options', 'Low minimum ($0.50)', 'Trusted by 12K+ users'],
      fr: ['Paiements rapides', 'Options multiples', 'Minimum bas ($0.50)', 'Fiable pour 12K+ utilisateurs'],
      mg: ['Vola haingana', 'Misy options maro', 'Payout kely ($0.50)', 'Mahatoky ho an\'ny 12K+ mpampiasa'],
    },
    cons: {
      en: ['Requires significant time', 'Limited surveys per day'],
      fr: ['Demande beaucoup de temps', 'Sondages limités par jour'],
      mg: ['Mila fotoana be', 'Tsy betsaka surveys isan\'andro'],
    },
    platforms: ['Web', 'Android', 'iOS'], available: ['Worldwide'],
    color: '#f97316', featured: true,
    affiliateUrl: 'https://freecash.com/r/YOUR_REF',
  },
  {
    id: 'swagbucks', name: 'Swagbucks', logo: '🎁', category: 'survey',
    rating: 4.5, reviews: 28900, earningMin: 0.5, earningMax: 5, earningUnit: 'day',
    payout: 'PayPal, Gift Cards', minPayout: 5, commissionRate: 0.10,
    description: {
      en: 'Swagbucks is one of the oldest and most trusted earning platforms. Earn through surveys, shopping cashback, games, and watching videos. Over $800M paid out to members.',
      fr: 'Swagbucks est l\'une des plus anciennes plateformes de gains. Gagnez grâce aux sondages, cashback shopping, jeux et vidéos. Plus de 800$M distribués.',
      mg: 'Swagbucks dia iray amin\'ireo platform tranainy sy azo itokiana indrindra. Surveys, shopping, games, ary maro hafa.',
    },
    pros: {
      en: ['100% trusted since 2008', '$10 signup bonus', 'Multiple earning methods', 'Over $800M paid out'],
      fr: ['100% fiable depuis 2008', 'Bonus $10 à l\'inscription', 'Méthodes multiples', 'Plus de 800$M distribués'],
      mg: ['Azon\'i antoka 100%', 'Bonus $10 signup', 'Fomba maro'],
    },
    cons: {
      en: ['Low per-task earnings', 'Long surveys'],
      fr: ['Gains faibles par tâche', 'Sondages longs'],
      mg: ['Tena ambany ny vola', 'Surveys lavitra'],
    },
    platforms: ['Web', 'Android', 'iOS'], available: ['US', 'UK', 'CA', 'AU', 'IE'],
    color: '#ef4444',
    affiliateUrl: 'https://swagbucks.com/join/YOUR_REF',
  },
  {
    id: 'honeygain', name: 'Honeygain', logo: '🍯', category: 'passive',
    rating: 4.2, reviews: 18500, earningMin: 0.1, earningMax: 0.5, earningUnit: 'day',
    payout: 'PayPal, Crypto (JMPT)', minPayout: 20, commissionRate: 0.10,
    description: {
      en: 'Honeygain is a truly passive income app. Simply install it and let it run in the background. It uses your unused internet bandwidth to earn you money automatically.',
      fr: 'Honeygain est une app de revenu passif. Installez-la et laissez-la tourner en arrière-plan. Elle utilise votre bande passante inutilisée pour vous faire gagner de l\'argent.',
      mg: 'Honeygain dia app passive — avelao fotsiny mihazakazaka ao ambadiky ny telefaoninao.',
    },
    pros: {
      en: ['100% passive income', 'Zero effort required', 'Works on multiple devices', 'Trusted worldwide'],
      fr: ['Revenu 100% passif', 'Aucun effort requis', 'Fonctionne sur plusieurs appareils', 'Fiable mondialement'],
      mg: ['Passive — tsy mila ataony', 'Tsy misy effort', 'Miasa amin\'ny fitaovana maro'],
    },
    cons: {
      en: ['Very low earnings', 'Requires stable internet', '$20 minimum payout'],
      fr: ['Gains très faibles', 'Nécessite internet stable', 'Minimum $20'],
      mg: ['Tena mora ny vola', 'Mila connexion internet', 'Min payout $20'],
    },
    platforms: ['Android', 'iOS', 'Windows', 'Mac', 'Linux'], available: ['Worldwide'],
    color: '#eab308', featured: true,
    affiliateUrl: 'https://join.honeygain.com/YOUR_REF',
  },
  {
    id: 'pawns', name: 'Pawns.app', logo: '♟️', category: 'passive',
    rating: 4.1, reviews: 9200, earningMin: 0.05, earningMax: 0.3, earningUnit: 'day',
    payout: 'PayPal, Bitcoin, Virtual Cards', minPayout: 5, commissionRate: 0.10,
    description: {
      en: 'Pawns.app is similar to Honeygain — a passive app that shares your bandwidth. Also offers paid surveys. Lower minimum payout than most competitors.',
      fr: 'Pawns.app est similaire à Honeygain — une app passive qui partage votre bande passante. Propose aussi des sondages rémunérés. Minimum de retrait plus bas que la concurrence.',
      mg: 'Pawns.app dia toy ny Honeygain — app passive izay mampiasa ny bandwidth-nao. Misy surveys koa.',
    },
    pros: {
      en: ['Passive income', '$5 minimum payout', 'Extra survey earnings', 'Bitcoin payouts available'],
      fr: ['Revenu passif', 'Minimum $5', 'Gains sondages supplémentaires', 'Paiements Bitcoin'],
      mg: ['Passive income', 'Min payout $5', 'Surveys extra'],
    },
    cons: {
      en: ['Low earnings', 'Requires good internet'],
      fr: ['Faibles gains', 'Nécessite un bon internet'],
      mg: ['Vol mora', 'Mila internet tsara'],
    },
    platforms: ['Android', 'iOS', 'Windows', 'Mac'], available: ['Worldwide'],
    color: '#8b5cf6',
    affiliateUrl: 'https://pawns.app/?r=YOUR_REF',
  },
  {
    id: 'branded-surveys', name: 'Branded Surveys', logo: '📋', category: 'survey',
    rating: 4.3, reviews: 15600, earningMin: 0.5, earningMax: 3, earningUnit: 'day',
    payout: 'PayPal, Bank Transfer', minPayout: 5, commissionRate: 0.10,
    description: {
      en: 'Branded Surveys specializes in paid surveys. Features a loyalty program — the more you earn, the higher your bonus percentage. Over $30M paid to members worldwide.',
      fr: 'Branded Surveys est spécialisé dans les sondages rémunérés. Programme de fidélité — plus vous gagnez, plus votre bonus augmente. Plus de 30$M distribués.',
      mg: 'Branded Surveys dia manokana amin\'ny surveys. Loyalty program tsara — rehefa betsaka ny points, tombony bebe kokoa.',
    },
    pros: {
      en: ['Lots of surveys available', 'Loyalty program bonuses', 'Fast payouts', 'Over $30M paid'],
      fr: ['Beaucoup de sondages', 'Bonus programme fidélité', 'Paiements rapides', 'Plus de 30$M distribués'],
      mg: ['Surveys maro', 'Loyalty program', 'Vola haingana'],
    },
    cons: {
      en: ['Only surveys available', 'Many screen-outs'],
      fr: ['Uniquement des sondages', 'Beaucoup d\'exclusions'],
      mg: ['Tsy misy options hafa', 'Screen out betsaka'],
    },
    platforms: ['Web', 'Android', 'iOS'], available: ['US', 'UK', 'CA', 'AU'],
    color: '#06b6d4',
    affiliateUrl: 'https://brandedsurveys.com/ref/YOUR_REF',
  },
  {
    id: 'ysense', name: 'ySense', logo: '💎', category: 'survey',
    rating: 4.0, reviews: 8300, earningMin: 0.3, earningMax: 4, earningUnit: 'day',
    payout: 'PayPal, Payoneer, Skrill', minPayout: 10, commissionRate: 0.15,
    description: {
      en: 'ySense (formerly ClixSense) is a proven earning platform with surveys, offers, and tasks. Trusted since 2006 with $60M+ paid out.',
      fr: 'ySense (anciennement ClixSense) est une plateforme éprouvée avec sondages, offres et tâches. Fiable depuis 2006.',
      mg: 'ySense dia vao niova anarana avy amin\'ny ClixSense. Surveys, offers, ary tasks maro azo atao.',
    },
    pros: {
      en: ['Proven platform', 'Multiple earning options', 'Payoneer available', '$60M+ paid out'],
      fr: ['Plateforme éprouvée', 'Options multiples', 'Payoneer disponible', 'Plus de 60$M distribués'],
      mg: ['Azon\'i antoka', 'Options maro', 'Payoneer misy'],
    },
    cons: {
      en: ['$10 minimum payout', 'Limited in some countries'],
      fr: ['Minimum $10', 'Limité dans certains pays'],
      mg: ['Min payout $10', 'Tsy betsaka ho an\'ny firenena sasany'],
    },
    platforms: ['Web'], available: ['Worldwide'],
    color: '#ec4899',
    affiliateUrl: 'https://ysense.com/ref/YOUR_REF',
  },
  {
    id: 'timebucks', name: 'TimeBucks', logo: '⏰', category: 'microtask',
    rating: 3.9, reviews: 6700, earningMin: 0.5, earningMax: 3, earningUnit: 'day',
    payout: 'Bank Transfer, Crypto, Skrill', minPayout: 10, commissionRate: 0.15,
    description: {
      en: 'TimeBucks offers diverse tasks: surveys, videos, TikTok engagement, and more. Weekly bonus system. Great for users worldwide.',
      fr: 'TimeBucks propose des tâches variées : sondages, vidéos, engagement TikTok et plus. Bonus hebdomadaire.',
      mg: 'TimeBucks dia manana tasks maro: surveys, videos, TikToks, ary maro hafa.',
    },
    pros: {
      en: ['Many task types', 'Weekly bonuses', 'Worldwide availability', 'Crypto payouts'],
      fr: ['Beaucoup de types de tâches', 'Bonus hebdomadaires', 'Disponible mondialement', 'Paiements Crypto'],
      mg: ['Tasks maro karazana', 'Bonus isan-kerinandro', 'Worldwide'],
    },
    cons: {
      en: ['Complex interface', 'Low per-task pay'],
      fr: ['Interface complexe', 'Faible rémunération par tâche'],
      mg: ['Interface sarotra', 'Vola mora isaky ny task'],
    },
    platforms: ['Web', 'Android'], available: ['Worldwide'],
    color: '#22c55e',
    affiliateUrl: 'https://timebucks.com/ref/YOUR_REF',
  },
  {
    id: 'packetstream', name: 'PacketStream', logo: '📡', category: 'passive',
    rating: 3.8, reviews: 4100, earningMin: 0.1, earningMax: 0.4, earningUnit: 'day',
    payout: 'PayPal', minPayout: 5, commissionRate: 0.10,
    description: {
      en: 'PacketStream is a residential proxy network. Install the app, let it run in the background, and earn passively. Ideal for users with fast, unlimited internet.',
      fr: 'PacketStream est un réseau proxy résidentiel. Installez l\'app, laissez-la tourner et gagnez passivement.',
      mg: 'PacketStream dia proxy network passive. Avelao fotsiny mihazakazaka ao ambadika.',
    },
    pros: {
      en: ['100% passive', 'Zero effort needed', 'Simple setup'],
      fr: ['100% passif', 'Aucun effort', 'Installation simple'],
      mg: ['100% passive', 'Tsy mila effort'],
    },
    cons: {
      en: ['Very low earnings', '$5 minimum', 'Best on PC'],
      fr: ['Gains très faibles', 'Minimum $5', 'Mieux sur PC'],
      mg: ['Vol mora', 'Min payout $5', 'Mila PC matetika'],
    },
    platforms: ['Windows', 'Mac', 'Linux'], available: ['Worldwide'],
    color: '#3b82f6',
    affiliateUrl: 'https://packetstream.io/ps/YOUR_REF',
  },
];

// ═══════════════════════════════════════════════════════
// Blog Posts (International)
// ═══════════════════════════════════════════════════════

export interface BlogPost {
  id: string;
  title: { en: string; fr: string; mg: string };
  excerpt: { en: string; fr: string; mg: string };
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'b1', category: 'Review', date: '2026-02-01', readTime: '8 min', image: '📱', featured: true,
    title: {
      en: 'Freecash 2026: Complete Review — How to Earn $100/Month?',
      fr: 'Freecash 2026 : Avis Complet — Comment Gagner 100$/Mois ?',
      mg: 'Freecash 2026: Review Feno — Ahoana ny Fomba Mahazoana $100/Volana?',
    },
    excerpt: {
      en: 'Freecash is the fastest-earning platform in 2026. Discover how it works and strategies to maximize your earnings.',
      fr: 'Freecash est la plateforme la plus rapide en 2026. Découvrez comment ça marche et les stratégies pour maximiser vos gains.',
      mg: 'Ny Freecash no app mahazoana vola haingana indrindra amin\'ny 2026. Jereo eto ny fomba fiasa.',
    },
  },
  {
    id: 'b2', category: 'Guide', date: '2026-01-28', readTime: '6 min', image: '💤', featured: true,
    title: {
      en: 'Top 5 Passive Income Apps — Earn While You Sleep',
      fr: 'Top 5 Apps Revenu Passif — Gagnez en Dormant',
      mg: 'Top 5 Apps Passive Income — Avelao Fotsiny, Mahazoa Vola',
    },
    excerpt: {
      en: 'The best passive income apps: Honeygain, Pawns.app, PacketStream, and more. Set them up once and earn automatically.',
      fr: 'Les meilleures apps de revenu passif : Honeygain, Pawns.app, PacketStream et plus.',
      mg: 'Apps tsara indrindra ahazoana vola passively: Honeygain, Pawns.app, PacketStream.',
    },
  },
  {
    id: 'b3', category: 'Strategy', date: '2026-01-25', readTime: '12 min', image: '📈',
    title: {
      en: 'How to Maximize Your Earnings: Complete Strategy Guide',
      fr: 'Comment Maximiser vos Gains : Guide Stratégique Complet',
      mg: 'Ahoana ny Fomba Mahazoana Vola Betsaka: Strategy Feno',
    },
    excerpt: {
      en: 'Complete strategy: Facebook, TikTok, Telegram — everything you need to maximize your earnings across multiple apps.',
      fr: 'Stratégie complète : Facebook, TikTok, Telegram — tout ce qu\'il faut pour maximiser vos gains.',
      mg: 'Strategy feno: Facebook, TikTok, Telegram — ny rehetra mba hahazoana vola betsaka.',
    },
  },
  {
    id: 'b4', category: 'Comparison', date: '2026-01-20', readTime: '5 min', image: '⚔️',
    title: {
      en: 'Honeygain vs Pawns.app: Which is Better?',
      fr: 'Honeygain vs Pawns.app : Lequel est Meilleur ?',
      mg: 'Honeygain vs Pawns.app: Inona no Tsara Kokoa?',
    },
    excerpt: {
      en: 'Full comparison between the two most popular passive income apps.',
      fr: 'Comparaison complète entre les deux apps de revenu passif les plus populaires.',
      mg: 'Comparison feno eo amin\'ny apps passive income roa malaza indrindra.',
    },
  },
  {
    id: 'b5', category: 'Guide', date: '2026-01-15', readTime: '10 min', image: '🌍',
    title: {
      en: 'Best Earning Apps Available Worldwide in 2026',
      fr: 'Meilleures Apps de Gains Disponibles Mondialement en 2026',
      mg: 'Apps Mahazoana Vola Azo Ampiasaina Manerantany',
    },
    excerpt: {
      en: 'All apps available worldwide. PayPal, Crypto, Gift Cards — every payout method covered.',
      fr: 'Toutes les apps disponibles mondialement. PayPal, Crypto, Cartes Cadeaux.',
      mg: 'Apps rehetra azo ampiasaina manerantany. PayPal, Crypto, Gift Cards.',
    },
  },
  {
    id: 'b6', category: 'Review', date: '2026-01-10', readTime: '7 min', image: '🎁',
    title: {
      en: 'Swagbucks 2026: Can You Really Earn $50/Month?',
      fr: 'Swagbucks 2026 : Peut-on Vraiment Gagner 50$/Mois ?',
      mg: 'Swagbucks 2026: Azonao Atao ve ny Mahazo $50/Volana?',
    },
    excerpt: {
      en: 'Fresh review of Swagbucks. What\'s new? What are the best strategies for 2026?',
      fr: 'Nouvel avis de Swagbucks. Quoi de neuf ? Stratégies pour 2026 ?',
      mg: 'Review vaovao ny Swagbucks. Inona no novaina?',
    },
  },
];

// ═══════════════════════════════════════════════════════
// FAQ (International)
// ═══════════════════════════════════════════════════════

export interface FAQItem {
  q: { en: string; fr: string; mg: string };
  a: { en: string; fr: string; mg: string };
}

export const faqData: FAQItem[] = [
  {
    q: { en: 'Are these apps legitimate?', fr: 'Ces apps sont-elles légitimes ?', mg: 'Sarra ve ireo apps ireo?' },
    a: {
      en: 'Yes! All apps listed here are legitimate and have been tested by our team. We only recommend apps we trust. Zero scams.',
      fr: 'Oui ! Toutes les apps listées ici sont légitimes et testées par notre équipe. Zéro arnaque.',
      mg: 'Eny! Apps rehetra eto dia azo itokiana. Nandinika sy nanandrana izahay.',
    },
  },
  {
    q: { en: 'How much can I earn?', fr: 'Combien puis-je gagner ?', mg: 'Ohatrinona no azonao?' },
    a: {
      en: 'Earnings vary by app and time invested. Most users earn $1-$50/day. Passive apps earn less but require zero effort.',
      fr: 'Les gains varient selon l\'app et le temps investi. La plupart gagnent 1$-50$/jour.',
      mg: 'Miovaova arakaraka ny app sy ny fotoana. Ny ankamaroany dia $1-$50/andro.',
    },
  },
  {
    q: { en: 'How do I get paid?', fr: 'Comment suis-je payé ?', mg: 'Ahoana no fandoavana?' },
    a: {
      en: 'Each app offers different payout methods: PayPal, Crypto, Bank Transfer, or Gift Cards. Minimum payout ranges from $0.50 to $20.',
      fr: 'Chaque app propose différentes méthodes : PayPal, Crypto, Virement ou Cartes Cadeaux. Minimum de 0.50$ à 20$.',
      mg: 'App tsirairay dia manana fandoavana samihafa: PayPal, Crypto, Virement na Gift Cards.',
    },
  },
  {
    q: { en: 'Is it free to sign up?', fr: 'L\'inscription est-elle gratuite ?', mg: 'Maimaim-poana ve ny fisoratana anarana?' },
    a: {
      en: 'Yes! All apps are 100% free to join. You should never pay to sign up for an earning app.',
      fr: 'Oui ! Toutes les apps sont 100% gratuites. Vous ne devriez jamais payer pour vous inscrire.',
      mg: 'Eny! Apps rehetra dia 100% maimaim-poana.',
    },
  },
  {
    q: { en: 'Which countries are supported?', fr: 'Quels pays sont supportés ?', mg: 'Inona ny firenena azo ampiasaina?' },
    a: {
      en: 'Most apps are available worldwide. Some survey-focused apps may be limited to US, UK, CA, and AU.',
      fr: 'La plupart des apps sont disponibles mondialement. Certaines sont limitées aux US, UK, CA et AU.',
      mg: 'Ny ankamaroan\'ny apps dia azo ampiasaina manerantany.',
    },
  },
];

// Stats
export const statsData = [
  { icon: '📱', key: 'stats_apps', value: '25+' },
  { icon: '👥', key: 'stats_users', value: '12K+' },
  { icon: '💰', key: 'stats_earnings', value: '$2.4M+' },
  { icon: '🌍', key: 'stats_countries', value: '50+' },
];
