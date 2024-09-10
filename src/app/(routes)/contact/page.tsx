import ContactForm from '@/components/pages/contact/contact-form';

export default function ContactPage() {
  return (
    <div className="flex justify-center items-center min-h-screen pt-16 px-4">
      <div className="w-full max-w-6xl">
        <ContactForm />
      </div>
    </div>
  );
}