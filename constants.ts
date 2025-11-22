import { Translation, NewsItem, Program, ScheduleItem, Episode } from './types';

export const translations: Record<'en' | 'ar', Translation> = {
  en: {
    nav: {
      home: 'Home',
      live: 'Live TV',
      news: 'News',
      programs: 'Programs',
      schedule: 'Schedule',
      videoLibrary: 'Video Library',
      about: 'About Us',
      contact: 'Contact',
    },
    hero: {
      watchLive: 'Watch Live',
      latestNews: 'Top Stories',
      readMore: 'Read More',
      liveSectionTitle: 'On Air Now',
      trendingTitle: 'Trending Episodes',
      newsletterTitle: 'Stay Informed',
      newsletterDesc: 'Get the latest news and program updates delivered directly to your inbox.',
      joinViewers: 'Join 1M+ Viewers',
    },
    live: {
      nowPlaying: 'Now Playing',
      upNext: 'Up Next',
      liveStream: 'Live Stream',
      quality: 'Auto (HD)',
    },
    news: {
      title: 'Latest News',
      breaking: 'BREAKING NEWS',
      categories: ['Politics', 'Economy', 'Sports', 'Tech', 'World'],
      latest: 'Latest Updates',
    },
    programs: {
      title: 'Our Programs',
      searchPlaceholder: 'Search for programs...',
      filterAll: 'All Categories',
      watchEpisodes: 'Watch Episodes',
    },
    programDetails: {
      about: 'About the Show',
      episodes: 'Latest Episodes',
      host: 'Host',
      duration: 'Duration',
      share: 'Share',
      back: 'Back to Programs',
      relatedPrograms: 'Related Programs',
    },
    schedule: {
      title: 'TV Schedule',
      today: 'Today',
      tomorrow: 'Tomorrow',
      time: 'Time',
      program: 'Program',
    },
    footer: {
      rights: '© 2024 Aletejah TV. All rights reserved.',
      followUs: 'Follow Us',
      links: 'Quick Links',
      newsletter: 'Subscribe to Newsletter',
      subscribe: 'Subscribe',
      subscribePlaceholder: 'Email address'
    },
    contact: {
      title: 'Contact Us',
      name: 'Full Name',
      email: 'Email Address',
      message: 'Your Message',
      send: 'Send Message',
      address: 'Address',
      phone: 'Phone',
    },
    search: {
      placeholder: 'Search for news, programs...',
      results: 'Search Results',
      noResults: 'No results found matching your query.',
      programs: 'Programs',
      news: 'News',
      close: 'Close',
      typeToSearch: 'Type to start searching...',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      live: 'البث المباشر',
      news: 'الأخبار',
      programs: 'البرامج',
      schedule: 'جدول البث',
      videoLibrary: 'مكتبة الفيديو',
      about: 'من نحن',
      contact: 'اتصل بنا',
    },
    hero: {
      watchLive: 'شاهد البث المباشر',
      latestNews: 'أهم الأنباء',
      readMore: 'اقرأ المزيد',
      liveSectionTitle: 'على الهواء الآن',
      trendingTitle: 'حلقات رائجة',
      newsletterTitle: 'كن على اطلاع',
      newsletterDesc: 'احصل على آخر الأخبار وتحديثات البرامج مباشرة إلى بريدك الإلكتروني.',
      joinViewers: 'انضم لأكثر من مليون مشاهد',
    },
    live: {
      nowPlaying: 'يعرض الآن',
      upNext: 'التالي',
      liveStream: 'البث الحي',
      quality: 'تلقائي (HD)',
    },
    news: {
      title: 'آخر الأخبار',
      breaking: 'عاجل',
      categories: ['سياسة', 'اقتصاد', 'رياضة', 'تكنولوجيا', 'العالم'],
      latest: 'آخر التحديثات',
    },
    programs: {
      title: 'برامجنا',
      searchPlaceholder: 'ابحث عن البرامج...',
      filterAll: 'كل التصنيفات',
      watchEpisodes: 'شاهد الحلقات',
    },
    programDetails: {
      about: 'عن البرنامج',
      episodes: 'أحدث الحلقات',
      host: 'تقديم',
      duration: 'المدة',
      share: 'مشاركة',
      back: 'العودة للبرامج',
      relatedPrograms: 'برامج ذات صلة',
    },
    schedule: {
      title: 'جدول البث',
      today: 'اليوم',
      tomorrow: 'غداً',
      time: 'الوقت',
      program: 'البرنامج',
    },
    footer: {
      rights: '© 2024 قناة الاتجاه. جميع الحقوق محفوظة.',
      followUs: 'تابعنا',
      links: 'روابط سريعة',
      newsletter: 'اشترك في النشرة الإخبارية',
      subscribe: 'اشترك',
      subscribePlaceholder: 'البريد الإلكتروني'
    },
    contact: {
      title: 'اتصل بنا',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      message: 'رسالتك',
      send: 'إرسال الرسالة',
      address: 'العنوان',
      phone: 'الهاتف',
    },
    search: {
      placeholder: 'ابحث عن الأخبار، البرامج...',
      results: 'نتائج البحث',
      noResults: 'لا توجد نتائج مطابقة لبحثك.',
      programs: 'البرامج',
      news: 'الأخبار',
      close: 'إغلاق',
      typeToSearch: 'اكتب للبدء في البحث...',
    },
  },
};

export const mockNews: NewsItem[] = [
  {
    id: '1',
    title: { en: 'Global Summit Reaches Historic Agreement on Climate Action', ar: 'القمة العالمية تتوصل إلى اتفاق تاريخي بشأن المناخ' },
    category: 'Politics',
    image: 'https://picsum.photos/800/450?random=1',
    summary: { en: 'World leaders have united to sign a pledge reducing carbon emissions by 50% by 2030.', ar: 'اتحد قادة العالم لتوقيع تعهد بخفض انبعاثات الكربون بنسبة 50٪ بحلول عام 2030.' },
    date: '2024-05-20',
  },
  {
    id: '2',
    title: { en: 'Tech Giants Announce New AI Collaboration', ar: 'عمالقة التكنولوجيا يعلنون عن تعاون جديد في مجال الذكاء الاصطناعي' },
    category: 'Tech',
    image: 'https://picsum.photos/800/450?random=2',
    summary: { en: 'Three major tech companies are joining forces to create ethical AI standards.', ar: 'ثلاث شركات تكنولوجية كبرى توحد جهودها لإنشاء معايير أخلاقية للذكاء الاصطناعي.' },
    date: '2024-05-19',
  },
  {
    id: '3',
    title: { en: 'Championship Finals: The Underdog Victory', ar: 'نهائيات البطولة: فوز غير متوقع' },
    category: 'Sports',
    image: 'https://picsum.photos/800/450?random=3',
    summary: { en: 'In a stunning turn of events, the local team secured the trophy last night.', ar: 'في تحول مذهل للأحداث، ضمن الفريق المحلي الكأس الليلة الماضية.' },
    date: '2024-05-18',
  },
  {
    id: '4',
    title: { en: 'Market Analysis: Stocks Rally Amid Positive Reports', ar: 'تحليل السوق: الأسهم تنتعش وسط تقارير إيجابية' },
    category: 'Economy',
    image: 'https://picsum.photos/800/450?random=4',
    summary: { en: 'Wall Street sees green as quarterly reports exceed expectations across sectors.', ar: 'وول ستريت تشهد ارتفاعاً مع تجاوز التقارير الفصلية للتوقعات في جميع القطاعات.' },
    date: '2024-05-18',
  },
];

export const mockPrograms: Program[] = [
  {
    id: 'p1',
    title: { en: 'Morning Coffee', ar: 'قهوة الصباح' },
    description: { en: 'Start your day with the latest headlines and lifestyle discussions. Our hosts bring you the most interesting stories from around the world, along with expert guests in health, technology, and culture.', ar: 'ابدأ يومك بآخر العناوين ومناقشات أسلوب الحياة. يقدم مضيفونا أكثر القصص إثارة للاهتمام من جميع أنحاء العالم، جنبًا إلى جنب مع ضيوف خبراء في الصحة والتكنولوجيا والثقافة.' },
    image: 'https://picsum.photos/600/800?random=10',
    category: 'Talk Show',
    host: { en: 'Sarah James', ar: 'سارة جيمس' },
    duration: '60 min',
  },
  {
    id: 'p2',
    title: { en: 'The Debate', ar: 'المناظرة' },
    description: { en: 'In-depth political analysis and heated debates on current affairs. We bring opposing viewpoints together to discuss the most pressing issues facing our society today.', ar: 'تحليل سياسي متعمق ومناظرات ساخنة حول الشؤون الحالية. نجمع وجهات النظر المتعارضة لمناقشة القضايا الأكثر إلحاحًا التي تواجه مجتمعنا اليوم.' },
    image: 'https://picsum.photos/600/800?random=11',
    category: 'Politics',
    host: { en: 'Ahmed Kamal', ar: 'أحمد كمال' },
    duration: '45 min',
  },
  {
    id: 'p3',
    title: { en: 'Tech Horizons', ar: 'آفاق التكنولوجيا' },
    description: { en: 'Exploring the future of technology, from AI to space travel. Join us as we visit cutting-edge labs and interview the innovators shaping our future.', ar: 'استكشاف مستقبل التكنولوجيا، من الذكاء الاصطناعي إلى السفر عبر الفضاء. انضم إلينا ونحن نزور المختبرات المتطورة ونجري مقابلات مع المبتكرين الذين يشكلون مستقبلنا.' },
    image: 'https://picsum.photos/600/800?random=12',
    category: 'Documentary',
    host: { en: 'Dr. Alan Grant', ar: 'د. آلان غرانت' },
    duration: '30 min',
  },
  {
    id: 'p4',
    title: { en: 'Sports Arena', ar: 'الساحة الرياضية' },
    description: { en: 'Weekly round-up of all major sporting events worldwide. Goals, highlights, and exclusive interviews with your favorite athletes.', ar: 'ملخص أسبوعي لجميع الأحداث الرياضية الكبرى حول العالم. أهداف، لقطات بارزة، ومقابلات حصرية مع الرياضيين المفضلين لديك.' },
    image: 'https://picsum.photos/600/800?random=13',
    category: 'Sports',
    host: { en: 'Mike Ross', ar: 'مايك روس' },
    duration: '90 min',
  },
];

export const mockEpisodes: Episode[] = [
  // Morning Coffee
  { id: 'e101', programId: 'p1', title: { en: 'Healthy Breakfast Habits', ar: 'عادات الإفطار الصحية' }, thumbnail: 'https://picsum.photos/800/450?random=20', duration: '45:00', date: '2024-05-20', videoUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ' },
  { id: 'e102', programId: 'p1', title: { en: 'Interview with Mayor', ar: 'مقابلة مع العمدة' }, thumbnail: 'https://picsum.photos/800/450?random=21', duration: '42:30', date: '2024-05-19', videoUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ' },
  { id: 'e103', programId: 'p1', title: { en: 'Summer Fashion Trends', ar: 'صيحات موضة الصيف' }, thumbnail: 'https://picsum.photos/800/450?random=22', duration: '44:15', date: '2024-05-18', videoUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ' },
  
  // The Debate
  { id: 'e201', programId: 'p2', title: { en: 'Economic Reform Policy', ar: 'سياسة الإصلاح الاقتصادي' }, thumbnail: 'https://picsum.photos/800/450?random=23', duration: '55:00', date: '2024-05-15', videoUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ' },
  { id: 'e202', programId: 'p2', title: { en: 'Healthcare Crisis', ar: 'أزمة الرعاية الصحية' }, thumbnail: 'https://picsum.photos/800/450?random=24', duration: '58:20', date: '2024-05-08', videoUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ' },

  // Tech Horizons
  { id: 'e301', programId: 'p3', title: { en: 'AI Revolution', ar: 'ثورة الذكاء الاصطناعي' }, thumbnail: 'https://picsum.photos/800/450?random=25', duration: '28:00', date: '2024-05-10', videoUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ' },
  { id: 'e302', programId: 'p3', title: { en: 'Mars Colonization', ar: 'استعمار المريخ' }, thumbnail: 'https://picsum.photos/800/450?random=26', duration: '29:45', date: '2024-05-03', videoUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ' },

  // Sports Arena
  { id: 'e401', programId: 'p4', title: { en: 'Champions League Review', ar: 'مراجعة دوري الأبطال' }, thumbnail: 'https://picsum.photos/800/450?random=27', duration: '45:00', date: '2024-05-21', videoUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ' },
  { id: 'e402', programId: 'p4', title: { en: 'Derby Preview', ar: 'معاينة الديربي' }, thumbnail: 'https://picsum.photos/800/450?random=28', duration: '43:15', date: '2024-05-14', videoUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ' },
];

export const mockSchedule: ScheduleItem[] = [
  { id: 's1', time: '08:00', programId: 'p1', title: { en: 'Morning Coffee', ar: 'قهوة الصباح' }, type: 'Live' },
  { id: 's2', time: '10:00', programId: 'p3', title: { en: 'Tech Horizons', ar: 'آفاق التكنولوجيا' }, type: 'Rerun' },
  { id: 's3', time: '12:00', programId: 'news', title: { en: 'Midday News', ar: 'نشرة المنتصف' }, type: 'Live' },
  { id: 's4', time: '14:00', programId: 'p4', title: { en: 'Sports Arena', ar: 'الساحة الرياضية' }, type: 'New' },
  { id: 's5', time: '16:00', programId: 'doc', title: { en: 'Wild Earth', ar: 'الأرض البرية' }, type: 'Documentary' },
  { id: 's6', time: '18:00', programId: 'news', title: { en: 'Evening News', ar: 'نشرة المساء' }, type: 'Live' },
  { id: 's7', time: '20:00', programId: 'p2', title: { en: 'The Debate', ar: 'المناظرة' }, type: 'Live' },
];