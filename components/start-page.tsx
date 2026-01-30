'use client';

import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface StartPageProps {
  onStart: () => void;
}

export default function StartPage({ onStart }: StartPageProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center space-y-8 animate-fade-in">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-pink-400 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="relative">
            <Heart className="w-24 h-24 mx-auto text-primary fill-primary" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
            I Love You
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed">
            But I want to tell you in a special way...
          </p>
        </div>

        <div className="bg-secondary/50 rounded-2xl p-6 border border-accent/20">
          <p className="text-sm md:text-base text-foreground/80 mb-4">
            <span className="font-semibold">A coded love story</span> where you answer some questions about us, and then I have a special surprise for you.
          </p>
          <p className="text-xs text-foreground/60">
            Ready to discover what's waiting at the end?
          </p>
        </div>

        <Button
          onClick={onStart}
          className="w-full bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90 text-white font-bold py-6 rounded-xl text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          Start the Adventure
        </Button>

        <div className="flex justify-center gap-2 text-primary/40">
          <Heart className="w-5 h-5" />
          <Heart className="w-5 h-5" />
          <Heart className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
