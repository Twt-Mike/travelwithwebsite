
import { supabase } from '@/integrations/supabase/client';

const BUCKET_NAME = 'carousel-images';
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=800&auto=format';

export async function getCarouselImages() {
  try {
    const { data, error } = await supabase
      .storage
      .from(BUCKET_NAME)
      .list('', {
        sortBy: { column: 'name', order: 'asc' }
      });
    
    if (error) {
      console.error('Error fetching images from Supabase:', error);
      return null;
    }
    
    // Filter for image files only
    const imageFiles = data.filter(file => 
      !file.id.includes('/') && 
      (file.metadata?.mimetype?.startsWith('image/') || 
      file.name.match(/\.(jpeg|jpg|png|gif|webp)$/i))
    );
    
    return imageFiles;
  } catch (error) {
    console.error('Error in getCarouselImages:', error);
    return null;
  }
}

export function getPublicImageUrl(fileName: string) {
  try {
    const { data } = supabase
      .storage
      .from(BUCKET_NAME)
      .getPublicUrl(fileName);
    
    return data.publicUrl;
  } catch (error) {
    console.error('Error getting public URL:', error);
    return FALLBACK_IMAGE;
  }
}

export const defaultAltTexts = {
  'dotonbori.jpg': 'Group at Dotonbori in Osaka with Glico Man sign',
  'kimonos.jpg': 'Group in traditional kimonos at a Japanese garden',
  'arcade.jpg': 'Group enjoying a game arcade in Japan',
  'temple.jpg': 'Tour group at traditional Japanese building entrance',
  'tea.jpg': 'Tea ceremony experience in a traditional tatami room',
  'fushimi.jpg': 'Walking through Fushimi Inari shrine torii gates',
  'nara.jpg': 'Cherry blossoms and deer in Nara',
  'torii.jpg': 'Red torii gates at Fushimi Inari shrine'
};

export function getAltTextForImage(fileName: string) {
  const baseName = fileName.split('/').pop()?.toLowerCase() || '';
  
  // Check if we have a predefined alt text for this file
  for (const [key, altText] of Object.entries(defaultAltTexts)) {
    if (baseName.includes(key.split('.')[0].toLowerCase())) {
      return altText;
    }
  }
  
  // If no match, generate a generic alt text
  return `Japan travel experience photo - ${baseName}`;
}
