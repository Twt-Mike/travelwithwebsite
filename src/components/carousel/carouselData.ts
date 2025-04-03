
// This type helps us manage image replacements
export type ImageReplacement = {
  index: number;
  newSrc: string;
};

// Using reliable Unsplash URLs for the carousel images
export const defaultTourImages = [
  {
    src: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186',
    alt: 'Group of friends at an Irish pub in Japan'
  },
  {
    src: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
    alt: 'Red torii gates at Fushimi Inari shrine'
  },
  {
    src: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3',
    alt: 'Group in kimonos in Kyoto'
  },
  {
    src: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d',
    alt: 'Men in traditional Japanese robes'
  },
  {
    src: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65',
    alt: 'Cherry blossoms and deer in Nara'
  },
  {
    src: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9',
    alt: 'Japanese tea ceremony'
  },
  {
    src: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc',
    alt: 'Group in colorful kimonos'
  },
  {
    src: 'https://images.unsplash.com/photo-1590559899731-a382839e5549',
    alt: 'Group at Arashiyama Bamboo Forest'
  }
];
