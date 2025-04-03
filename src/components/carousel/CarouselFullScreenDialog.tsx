
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

type CarouselFullScreenDialogProps = {
  selectedImage: number | null;
  imageSources: Array<{ src: string; alt: string }>;
  closeImageDialog: () => void;
  navigateFullscreen: (direction: 'next' | 'prev') => void;
};

const CarouselFullScreenDialog = ({
  selectedImage,
  imageSources,
  closeImageDialog,
  navigateFullscreen
}: CarouselFullScreenDialogProps) => {
  if (selectedImage === null) return null;

  return (
    <Dialog open={selectedImage !== null} onOpenChange={(open) => {
      if (!open) closeImageDialog();
    }}>
      <DialogContent className="sm:max-w-5xl max-h-[90vh] p-0 bg-transparent border-none shadow-none">
        <div className="relative">
          <img 
            src={imageSources[selectedImage].src} 
            alt={imageSources[selectedImage].alt} 
            className="w-full h-auto rounded-md object-contain"
            onError={(e) => {
              // Fallback for lightbox view
              (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-149${3976040374 + selectedImage}-85c8e12f0c0e?q=80&w=1200`;
            }}
          />
          
          <button 
            onClick={() => navigateFullscreen('prev')}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={() => navigateFullscreen('next')}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          <button 
            onClick={closeImageDialog}
            className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-all"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CarouselFullScreenDialog;
