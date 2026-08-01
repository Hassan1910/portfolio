import React, { useRef } from 'react';
import ContactForm from '@/components/contact/ContactForm';
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";

const contactInfo = [
  {
    icon: <Mail size={16} />,
    label: 'Email',
    value: 'adanhassan1910@gmail.com',
    href: 'mailto:adanhassan1910@gmail.com',
  },
  {
    icon: <Github size={16} />,
    label: 'GitHub',
    value: 'github.com/Hassan1910',
    href: 'https://github.com/Hassan1910',
  },
  {
    icon: <Linkedin size={16} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/hassan-adan',
    href: 'https://www.linkedin.com/in/hassan-adan/',
  },
  {
    icon: <FaWhatsapp size={16} />,
    label: 'WhatsApp',
    value: '+254 757 489 214',
    href: 'https://wa.me/254757489214',
  },
  {
    icon: <FaTelegram size={16} />,
    label: 'Telegram',
    value: '@Hassan',
    href: 'https://t.me/254757489214',
  },
  {
    icon: <MapPin size={16} />,
    label: 'Location',
    value: 'Marsabit, Kenya',
    href: null,
  },
];

const ContactSection = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);

  return (
    <section id="contact" className="section-container">
      <p className="section-heading">Contact</p>
      <h2 className="section-title">Get In Touch</h2>
      <p className="text-muted-foreground text-sm mb-12 max-w-lg">
        Have a project in mind or want to discuss opportunities? I'd love to hear from you.
      </p>

      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        {/* Form */}
        <div className="lg:col-span-3">
          <ContactForm nameInputRef={nameInputRef} />
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-1">
          <h3 className="text-sm font-semibold text-foreground mb-6">Find me elsewhere</h3>
          <div className="space-y-4">
            {contactInfo.map((item) => (
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm group"
                >
                  <span className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0">
                    {item.icon}
                  </span>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {item.value}
                  </span>
                </a>
              ) : (
                <div key={item.label} className="flex items-center gap-3 text-sm">
                  <span className="text-muted-foreground flex-shrink-0">{item.icon}</span>
                  <span className="text-muted-foreground">{item.value}</span>
                </div>
              )
            ))}
          </div>

          {/* Availability info */}
          <div className="mt-10 pt-6 border-t border-border">
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-foreground">Available for freelance</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Mon–Fri, 9 AM–6 PM EAT. Usually respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
