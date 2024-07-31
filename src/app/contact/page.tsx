import DisplayedBreadcrumb from '@/components/breadcrumb';
import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import MainContentHolder from '@/components/MainContentHolder';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import { MapProvider } from '@/components/MapProvider';
import { Mail, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function Page() {
  return (
    <>
      <DisplayedBreadcrumb path={['Contact']} />
      <MainContentHolder
        title="Contact"
        subtitle="Laboratory contact and location information"
      >
        <div className="space-y-8 py-2">
          <div className="w-fit mx-auto">
            <div className="flex flex-col items-start gap-2">
              <div className="flex gap-1 items-center">
                <Mail size={16} />
                <p>Email: Email1@example.com </p>
              </div>
              <div className="flex gap-1 items-center">
                <MapPin size={16} />
                <p>Adress: Ivana Lučića 5, 10 000 Zagreb</p>
              </div>
              <div className="flex gap-1 items-center">
                <Phone size={16} />
                <p>Phone: +385 123 321 32</p>
              </div>
            </div>
          </div>
          <MapProvider>
            <GoogleMapEmbed />
          </MapProvider>
          <div className="h-[1px] w-full bg-zinc-700" />
          <ContactForm />
        </div>
      </MainContentHolder>
    </>
  );
}
