
import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const HostSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-20 bg-white">
      <div className="japan-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Desktop layout - text on left, image on right */}
          {!isMobile && (
            <>
              <div className="order-1">
                <div className="space-y-6">
                  <div className="inline-block bg-japan-pink/10 text-japan-pink px-3 py-1 rounded-lg text-sm font-medium mb-2">
                    Your Host
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-medium text-japan-indigo mb-4">
                    Meet Laura
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    I'm Laura, the creator and travel blogger behind @our.traveltreats On my Instagram and travel blog, I share travel guides for weekend getaways, hikes, and adventure trips that you can enjoy even with a busy schedule.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    With my new group travel account, <a href="https://www.instagram.com/our.travelgroups" target="_blank" rel="noopener noreferrer" className="text-japan-indigo hover:underline">@our.travelgroups</a>, I want to encourage you to explore the world—even if you don't have a travel partner or the time to plan everything yourself. Life's too short to miss out on all the amazing trips waiting for you.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <a href="https://ourtraveltreats.de/en" target="_blank" rel="noopener noreferrer" className="text-japan-indigo hover:underline">ourtraveltreats.de/en</a>
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Ich bin Laura, Creator und Reisebloggerin hinter @our.traveltreats. Auf meinem Instagram-Account und Reiseblog zeige ich Dir Reiseguides für Wochenendtrips, Wanderungen und Abenteuerreisen, die du auch mit weniger Zeit realisieren kannst.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Mit meinem neuen Gruppenreise-Account <a href="https://www.instagram.com/our.travelgroups" target="_blank" rel="noopener noreferrer" className="text-japan-indigo hover:underline">@our.travelgroups</a> möchte ich Dich dazu ermutigen, zu reisen, selbst wenn Du keinen Reisepartner oder keine Zeit für intensive Reiseplanung hast – denn das Leben ist viel zu kurz, um all die schönen Reisen zu verpassen, die auf Dich warten
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <a 
                      href="https://www.instagram.com/Our.TravelTreats" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="border-japan-indigo text-japan-indigo hover:bg-japan-indigo hover:text-white flex items-center gap-2">
                        <Instagram className="h-4 w-4" />
                        <span>@Our.TravelTreats</span>
                      </Button>
                    </a>
                    <a 
                      href="https://www.instagram.com/our.Travelgroups" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="border-japan-indigo text-japan-indigo hover:bg-japan-indigo hover:text-white flex items-center gap-2">
                        <Instagram className="h-4 w-4" />
                        <span>@Our.Travelgroups</span>
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="order-2">
                <div className="relative">
                  <img 
                    src="https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ott//1.jpg" 
                    alt="Laura - Your Host" 
                    className="rounded-lg shadow-lg z-10 relative"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-japan-pink h-32 w-32 rounded-full -z-10"></div>
                  <div className="absolute -top-4 -left-4 bg-japan-indigo/20 h-32 w-32 rounded-full -z-10"></div>
                </div>
              </div>
            </>
          )}

          {/* Mobile layout - header, then image, then description */}
          {isMobile && (
            <div className="col-span-1">
              <div className="space-y-6">
                <div className="inline-block bg-japan-pink/10 text-japan-pink px-3 py-1 rounded-lg text-sm font-medium mb-2">
                  Your Host
                </div>
                <h2 className="text-3xl font-serif font-medium text-japan-indigo mb-4">
                  Meet Laura
                </h2>
                
                {/* Image after heading on mobile */}
                <div className="relative mb-6">
                  <img 
                    src="https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ott//1.jpg" 
                    alt="Laura - Your Host" 
                    className="rounded-lg shadow-lg z-10 relative w-full"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-japan-pink h-24 w-24 rounded-full -z-10"></div>
                  <div className="absolute -top-4 -left-4 bg-japan-indigo/20 h-24 w-24 rounded-full -z-10"></div>
                </div>
                
                {/* Description after image */}
                <p className="text-gray-700 leading-relaxed">
                  I'm Laura, the creator and travel blogger behind @our.traveltreats On my Instagram and travel blog, I share travel guides for weekend getaways, hikes, and adventure trips that you can enjoy even with a busy schedule.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With my new group travel account, <a href="https://www.instagram.com/our.travelgroups" target="_blank" rel="noopener noreferrer" className="text-japan-indigo hover:underline">@our.travelgroups</a>, I want to encourage you to explore the world—even if you don't have a travel partner or the time to plan everything yourself. Life's too short to miss out on all the amazing trips waiting for you.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <a href="https://ourtraveltreats.de/en" target="_blank" rel="noopener noreferrer" className="text-japan-indigo hover:underline">ourtraveltreats.de/en</a>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Ich bin Laura, Creator und Reisebloggerin hinter @our.traveltreats. Auf meinem Instagram-Account und Reiseblog zeige ich Dir Reiseguides für Wochenendtrips, Wanderungen und Abenteuerreisen, die du auch mit weniger Zeit realisieren kannst.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Mit meinem neuen Gruppenreise-Account <a href="https://www.instagram.com/our.travelgroups" target="_blank" rel="noopener noreferrer" className="text-japan-indigo hover:underline">@our.travelgroups</a> möchte ich Dich dazu ermutigen, zu reisen, selbst wenn Du keinen Reisepartner oder keine Zeit für intensive Reiseplanung hast – denn das Leben ist viel zu kurz, um all die schönen Reisen zu verpassen, die auf Dich warten
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a 
                    href="https://www.instagram.com/Our.TravelTreats" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="border-japan-indigo text-japan-indigo hover:bg-japan-indigo hover:text-white flex items-center gap-2">
                      <Instagram className="h-4 w-4" />
                      <span>@Our.TravelTreats</span>
                    </Button>
                  </a>
                  <a 
                    href="https://www.instagram.com/our.Travelgroups" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="border-japan-indigo text-japan-indigo hover:bg-japan-indigo hover:text-white flex items-center gap-2">
                      <Instagram className="h-4 w-4" />
                      <span>@Our.Travelgroups</span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HostSection;
