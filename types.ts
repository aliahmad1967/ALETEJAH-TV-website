export type Language = 'en' | 'ar';

export interface NavItem {
  label: string;
  path: string;
}

export interface Translation {
  nav: {
    home: string;
    live: string;
    news: string;
    programs: string;
    schedule: string;
    videoLibrary: string;
    about: string;
    contact: string;
  };
  hero: {
    watchLive: string;
    latestNews: string;
    readMore: string;
    liveSectionTitle: string;
    trendingTitle: string;
    newsletterTitle: string;
    newsletterDesc: string;
    joinViewers: string;
  };
  live: {
    nowPlaying: string;
    upNext: string;
    liveStream: string;
    quality: string;
  };
  news: {
    title: string;
    breaking: string;
    categories: string[];
    latest: string;
  };
  programs: {
    title: string;
    searchPlaceholder: string;
    filterAll: string;
    watchEpisodes: string;
  };
  programDetails: {
    about: string;
    episodes: string;
    host: string;
    duration: string;
    share: string;
    back: string;
    relatedPrograms: string;
  };
  schedule: {
    title: string;
    today: string;
    tomorrow: string;
    time: string;
    program: string;
  };
  footer: {
    rights: string;
    followUs: string;
    links: string;
    newsletter: string;
    subscribe: string;
    subscribePlaceholder: string;
  };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    send: string;
    address: string;
    phone: string;
  };
  search: {
    placeholder: string;
    results: string;
    noResults: string;
    programs: string;
    news: string;
    close: string;
    typeToSearch: string;
  };
}

export interface NewsItem {
  id: string;
  title: { en: string; ar: string };
  category: string; // Using a simpler string for category to simplify filtering logic for demo
  image: string;
  summary: { en: string; ar: string };
  date: string;
}

export interface Program {
  id: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  image: string;
  category: string;
  host: { en: string; ar: string };
  duration: string;
}

export interface Episode {
  id: string;
  programId: string;
  title: { en: string; ar: string };
  thumbnail: string;
  duration: string;
  date: string;
  videoUrl: string;
}

export interface ScheduleItem {
  id: string;
  time: string;
  programId: string;
  title: { en: string; ar: string };
  type: string;
}