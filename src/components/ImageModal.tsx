
import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  altText: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageUrl, altText }) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-4xl p-0 bg-transparent border-none shadow-none">
        <div className="relative">
          <button 
            onClick={onClose}
            className="absolute top-2 right-2 bg-black/60 text-white rounded-full p-1 hover:bg-black/80 transition-colors"
            aria-label="Close dialog"
          >
            <X size={24} />
          </button>
          <img 
            src={imageUrl} 
            alt={altText} 
            className="w-full h-auto rounded-lg max-h-[80vh] object-contain" 
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
