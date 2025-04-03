
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, InstagramIcon } from 'lucide-react';
import { getFallbackImage } from '@/utils/imageDebug';

// Debug logging
console.log("Loading CtaSection component");

const CtaSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [socialHandle, setSocialHandle] = useState('');
  const [message, setMessage] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('/lovable-uploads/c78032d5-5066-4019-85f8-7a16228cffdf.png');
  const { toast } = useToast();

  // Check if the background image loads properly
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      console.log('CTA background image loaded successfully');
    };
    img.onerror = () => {
      console.error('Failed to load CTA background image, using fallback');
      setBackgroundImage(getFallbackImage(0));
    };
    img.src = backgroundImage;
    
    // Log when the component renders
    console.log("CtaSection rendered with background image URL:", backgroundImage);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send this to your contact form handler
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setName('');
    setEmail('');
    setSocialHandle('');
    setMessage('');
  };

  return (
    <section className="py-20 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
        }}
      >
        <div className="absolute inset-0 bg-japan-indigo/70 mix-blend-multiply" />
      </div>

      <div className="japan-container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium">
                Ready to Host Your Custom Japan Trip?
              </h2>
              <p className="text-lg opacity-90">
                Contact our expert team to start designing an unforgettable travel experience tailored specifically to your audience.
              </p>
            </div>
            
            <div className="bg-white/95 rounded-xl shadow-md p-6 backdrop-blur">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <div className="flex items-center border border-input rounded-md bg-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                    <div className="px-3 text-muted-foreground">
                      <InstagramIcon className="h-4 w-4" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Social handle (Instagram / TikTok)"
                      value={socialHandle}
                      onChange={(e) => setSocialHandle(e.target.value)}
                      className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                </div>
                <div>
                  <Textarea
                    placeholder="Your tour request (destinations, interests, group size, preferred dates)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full h-24"
                  />
                </div>
                <Button type="submit" size="lg" className="bg-japan-indigo hover:bg-japan-indigo/90 text-white w-full flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4" />
                  Contact Us to Start Planning
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
