'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles, Syringe as Ring } from 'lucide-react';

interface ProposalPageProps {
  onComplete: () => void;
}

export default function ProposalPage({ onComplete }: ProposalPageProps) {
  const [showProposal, setShowProposal] = useState(false);
  const [answered, setAnswered] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!showProposal ? (
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center space-y-8 animate-fade-in">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground/80">
              You answered all the questions perfectly!
            </h2>
            <p className="text-lg text-foreground/70">
              Now for the moment we've been waiting for...
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-pink-400 rounded-full blur-3xl opacity-30 animate-pulse" />
              <Ring className="w-20 h-20 text-primary relative" />
            </div>
          </div>

          <Button
            onClick={() => setShowProposal(true)}
            className="w-full bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90 text-white font-bold py-6 rounded-xl text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Reveal the Proposal
          </Button>
        </div>
      ) : !answered ? (
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center space-y-8 animate-fade-in">
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <Heart className="w-4 h-4 text-primary/30 fill-primary/30" />
              </div>
            ))}
          </div>

          <div className="relative z-10 space-y-8">
            <div className="flex justify-center gap-2">
              <Sparkles className="w-8 h-8 text-primary" />
              <Sparkles className="w-8 h-8 text-primary" />
              <Sparkles className="w-8 h-8 text-primary" />
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Will you marry me?
              </h1>

              <p className="text-xl text-foreground/70 leading-relaxed">
                You're the one I want to spend forever with. You make every moment special, and I can't imagine life without you. Let's build our dreams together.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-pink-500/10 rounded-2xl p-8 border border-accent/30">
              <p className="text-foreground/80 italic text-lg">
                "I fall in love with you every day."
              </p>
            </div>

            <div className="flex gap-4">
              <Button
                onClick={() => {
                  setAnswered(true);
                }}
                className="flex-1 bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90 text-white font-bold py-6 rounded-xl text-lg"
              >
                YES! 💕
              </Button>
              <Button
                onClick={() => setShowProposal(false)}
                variant="outline"
                className="flex-1 py-6 rounded-xl"
              >
                Wait... (go back)
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center space-y-8 animate-fade-in">
          <div className="space-y-6">
            <div className="flex justify-center">
              <Heart className="w-24 h-24 text-primary fill-primary animate-bounce" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              You said YES!
            </h1>

            <p className="text-xl text-foreground/70">
              You've just made me the happiest person alive! 💍
            </p>

            <p className="text-lg text-foreground/80">
              But wait... there's one more surprise waiting for you!
            </p>
          </div>

          <div className="bg-secondary/50 rounded-2xl p-6 border border-accent/20">
            <p className="text-foreground/80">
              Ready to see what I have planned?
            </p>
          </div>

          <Button
            onClick={onComplete}
            className="w-full bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90 text-white font-bold py-6 rounded-xl text-lg"
          >
            Open My Gift
          </Button>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
