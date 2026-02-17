import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Construction Innova for a free quote on your construction project. Call us at 251-284-2842 or fill out our contact form.',
  openGraph: {
    title: 'Contact Us | Construction Innova',
    description: 'Get in touch with Construction Innova for a free quote on your construction project.',
  },
}

export default function Contact() {
  return <ContactForm />
}
