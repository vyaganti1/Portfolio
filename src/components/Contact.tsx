import React, { useRef, useState, useEffect } from 'react';
import { SectionId } from '../types';
import { PROFILE } from '../constants';
import { Mail, MapPin, Phone, Send, ArrowRight, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Replace these strings with your actual EmailJS credentials
  const SERVICE_ID = "service_0donzec";   // e.g. "service_x8d..."
  const TEMPLATE_ID = "template_5t3a7ec"; // e.g. "template_39d..."
  const PUBLIC_KEY = "XI3Ue0GrgX-MUzEz4";   // e.g. "user_9fs..."

  useEffect(() => {
    if ((window as any).particlesJS) {
      const particleColor = theme === 'dark' ? '#ffffff' : '#000000';
      (window as any).particlesJS("contact-particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: particleColor },
          opacity: { value: 0.5 },
          size: { value: 3 },
          line_linked: { enable: true, distance: 150, color: particleColor, opacity: 0.4 },
          move: { enable: true, speed: 6 }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" } }
        }
      });
    }
  }, [theme]);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Safety check
    if (!formRef.current) return;

    setIsSubmitting(true);
    setStatus('idle');

    // Added '!' to formRef.current to assert it exists
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          setIsSubmitting(false);
          formRef.current?.reset();
          
          setTimeout(() => setStatus('idle'), 5000);
      }, (error: any) => { // Added ': any' type definition here
          console.log(error.text);
          setStatus('error');
          setIsSubmitting(false);
      });
  };

  return (
    <section id={SectionId.CONTACT} className="py-24 relative overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      <div id="contact-particles-js" className="absolute inset-0 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Contact Info (Left Side) */}
          <div className="bg-white/50 dark:bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-zinc-800 shadow-xl">
            <h3 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Let's start a conversation</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-10 text-lg leading-relaxed">
              I'm currently available for freelance projects and full-time opportunities. 
            </p>
            
            <div className="space-y-8">
              <a href={`mailto:${PROFILE.email}`} className="flex items-start gap-5 group cursor-pointer">
                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider mb-1">Email</p>
                  <p className="text-xl font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-all">{PROFILE.email}</p>
                </div>
              </a>
              
              <div className="flex items-start gap-5 group cursor-default">
                <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider mb-1">Location</p>
                  <p className="text-xl font-medium text-slate-900 dark:text-white">{PROFILE.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group cursor-default">
                 <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                 <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider mb-1">Availability</p>
                  <p className="text-xl font-medium text-green-600 dark:text-green-400 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                    Open for Work
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (Right Side) */}
          <div className="bg-white/50 dark:bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-zinc-800 shadow-xl relative">
             <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
               <Send size={100} className="text-slate-900 dark:text-white" />
             </div>

             <form ref={formRef} className="space-y-6 relative z-10" onSubmit={sendEmail}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Name</label>
                   <input 
                    required
                    name="from_name" // Matches EmailJS variable
                    type="text" 
                    className="w-full px-5 py-3 bg-white dark:bg-black border border-slate-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all shadow-sm" 
                    placeholder="John Doe" 
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email</label>
                   <input 
                    required
                    name="from_email" // Matches EmailJS variable
                    type="email" 
                    className="w-full px-5 py-3 bg-white dark:bg-black border border-slate-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all shadow-sm" 
                    placeholder="john@example.com" 
                   />
                 </div>
               </div>
               <div>
                 <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                 <input 
                  required
                  name="subject" // Matches EmailJS variable
                  type="text" 
                  className="w-full px-5 py-3 bg-white dark:bg-black border border-slate-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all shadow-sm" 
                  placeholder="Project inquiry..." 
                 />
               </div>
               <div>
                 <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                 <textarea 
                  required
                  name="message" // Matches EmailJS variable
                  rows={5} 
                  className="w-full px-5 py-3 bg-white dark:bg-black border border-slate-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all shadow-sm resize-none" 
                  placeholder="Tell me about your project..."
                 ></textarea>
               </div>
               
               <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full group py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 flex items-center justify-center gap-2"
               >
                 {isSubmitting ? (
                   <>
                    <Loader2 className="animate-spin" size={20} /> Sending...
                   </>
                 ) : (
                   <>
                    Send Message <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                   </>
                 )}
               </button>

               {/* Status Messages */}
               {status === 'success' && (
                 <div className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                   <CheckCircle size={20} />
                   <span className="font-medium">Message sent successfully! I'll get back to you soon.</span>
                 </div>
               )}
               {status === 'error' && (
                 <div className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-4 rounded-xl">
                   <AlertCircle size={20} />
                   <span className="font-medium">Something went wrong. Please try again or email me directly.</span>
                 </div>
               )}

             </form>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-slate-200 dark:border-zinc-800 text-center text-slate-500 dark:text-slate-400 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} {PROFILE.name}. Built with React, Tailwind & Gemini.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;