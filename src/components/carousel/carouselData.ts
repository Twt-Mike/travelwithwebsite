
// Type definitions
export type ImageReplacement = {
  index: number;
  newSrc: string;
};

// These images will be used as fallbacks if Supabase images aren't available
export const defaultTourImages = [
  {
    src: '/lovable-uploads/96e71a37-e469-4c4c-903b-831baac03259.png',
    alt: 'Group at Dotonbori in Osaka with Glico Man sign'
  },
  {
    src: '/lovable-uploads/e989f4c1-0dea-4b0c-9259-6e89830b4584.png',
    alt: 'Group in traditional kimonos at a Japanese garden'
  },
  {
    src: '/lovable-uploads/2925e5fb-7926-4563-963b-abeaa60bb6b6.png',
    alt: 'Group enjoying a game arcade in Japan'
  },
  {
    src: '/lovable-uploads/f7956a6d-1b22-4a59-8a86-74a3ade9dad9.png',
    alt: 'Tour group at traditional Japanese building entrance'
  },
  {
    src: '/lovable-uploads/a2a2b699-505c-4482-b247-e15fba74ad82.png',
    alt: 'Tea ceremony experience in a traditional tatami room'
  },
  {
    src: '/lovable-uploads/29602055-acbd-4071-8ac5-83903ee6f38a.png',
    alt: 'Walking through Fushimi Inari shrine torii gates'
  },
  {
    src: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=800&auto=format',
    alt: 'Cherry blossoms and deer in Nara'
  },
  {
    src: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format',
    alt: 'Red torii gates at Fushimi Inari shrine'
  }
];
