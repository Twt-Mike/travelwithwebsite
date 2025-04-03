
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, InstagramIcon } from 'lucide-react';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [socialHandle, setSocialHandle] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

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
    <section className="py-16 bg-japan-cream">
      <div className="japan-container">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-japan-indigo mb-3">
              Let's Plan Your Custom Trip
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Are you a travel host or influencer looking to organize an unforgettable trip in Japan (or beyond)? Contact us directly at <a href="mailto:Info@TravelWith.Tours" className="text-japan-indigo hover:underline">Info@TravelWith.Tours</a> or via our quick contact form.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
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
                className="w-full h-32"
              />
            </div>
            <Button type="submit" className="bg-japan-indigo hover:bg-japan-indigo/90 text-white w-full flex items-center justify-center gap-2">
              <Mail className="h-4 w-4" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
