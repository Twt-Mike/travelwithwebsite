
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using the provided Formspree endpoint
      const response = await fetch('https://formspree.io/f/xkgjpbqn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          socialHandle,
          message,
          _subject: `TravelWith Contact Form: ${name}`
        })
      });
      
      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
        });
        
        // Reset form fields
        setName('');
        setEmail('');
        setSocialHandle('');
        setMessage('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Message Not Sent",
        description: "There was an error sending your message. Please try again or email us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-16 bg-japan-cream">
      <div className="japan-container">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12 max-w-4xl mx-auto relative">
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-0 md:translate-x-1/4 w-16 h-16 bg-japan-pink/30 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-0 md:-translate-x-1/4 w-16 h-16 bg-japan-green/30 rounded-full blur-xl"></div>
          
          <div className="text-center mb-8 relative z-10">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Are you a travel host or influencer looking to organize an unforgettable trip in Japan (or beyond)? Contact us directly at <a href="mailto:info@travelwith.tours" className="text-japan-indigo hover:underline">info@travelwith.tours</a> or via our quick contact form.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto relative z-10">
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
            <Button 
              type="submit" 
              className="bg-japan-indigo hover:bg-japan-indigo/90 text-white w-full flex items-center justify-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="animate-pulse">Sending...</span>
              ) : (
                <>
                  <Mail className="h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
