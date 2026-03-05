import React from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';
import { Card } from './Layout';

export const ContactForm = () => {
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Name</label>
            <input
              id="name"
              type="text"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Email</label>
            <input
              id="email"
              type="email"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="john@example.com"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Message</label>
          <textarea
            id="message"
            required
            rows={5}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
            placeholder="How can I help you?"
          />
        </div>
        <button
          type="submit"
          disabled={status !== 'idle'}
          className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group"
        >
          {status === 'idle' && (
            <>
              Send Message
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
          {status === 'sending' && <span className="animate-pulse">Sending...</span>}
          {status === 'success' && (
            <>
              Message Sent!
              <CheckCircle size={18} />
            </>
          )}
        </button>
      </form>
    </Card>
  );
};
