import { useState, useRef } from "react";
import { motion } from "motion/react";
import { MapPin, Linkedin, Mail, Send, Loader2, CheckCircle2, XCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        'service_nftxxar', // Service ID
        'template_e7sylhg', // Template ID
        formRef.current,
        'xF1SF-Xvn8--4mTpX' // Public Key
      );
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "amit.pandurnikar@gmail.com",
      href: "mailto:amit.pandurnikar@gmail.com"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Nanded, Maharashtra, India",
      href: "https://maps.google.com/?q=Nanded,Maharashtra,India"
    },
    {
      icon: <Linkedin size={24} />,
      title: "LinkedIn",
      value: "Amitkumar Pandurnikar",
      href: "https://linkedin.com/in/amitkumar-pandurnikar"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-eng-blue rounded-full"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Let's Connect</h3>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                I'm currently open to new opportunities in advanced manufacturing, engineering research, and product development. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-eng-blue/30 hover:shadow-sm transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-eng-blue group-hover:bg-eng-blue group-hover:text-white transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">{info.title}</p>
                    <p className="font-semibold text-slate-800 group-hover:text-eng-blue transition-colors text-sm break-all">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl border border-slate-200 shadow-lg relative overflow-hidden"
          >
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-eng-blue/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            
            <form ref={formRef} className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="from_name" className="text-sm font-medium text-slate-700">Name</label>
                <input 
                  type="text" 
                  id="from_name" 
                  name="from_name"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-eng-blue focus:ring-2 focus:ring-eng-blue/20 outline-none transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="reply_to" className="text-sm font-medium text-slate-700">Email</label>
                <input 
                  type="email" 
                  id="reply_to" 
                  name="reply_to"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-eng-blue focus:ring-2 focus:ring-eng-blue/20 outline-none transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4}
                  required
                  placeholder="Hello Amitkumar, I'd like to discuss..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-eng-blue focus:ring-2 focus:ring-eng-blue/20 outline-none transition-all resize-none"
                />
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-eng-dark text-white font-medium hover:bg-eng-blue transition-all group shadow-md hover:shadow-lg hover:shadow-eng-blue/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle2 size={18} className="text-green-400" />
                    Message Sent!
                  </>
                ) : submitStatus === 'error' ? (
                  <>
                    <XCircle size={18} className="text-red-400" />
                    Failed to Send
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
