'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ChevronRight } from 'lucide-react';

const QUIZ_QUESTIONS = [
  {
    id: 'first_meet',
    question: 'Where did we first meet?',
    options: ['At a coffee shop', 'Through a friend', 'Online', 'At work/school'],
    correctAnswers: ['At a coffee shop'],
  },
  {
    id: 'favorite_date',
    question: 'What was our first date like?',
    options: ['Movie night', 'Dinner at a restaurant', 'Walk in the park', 'Cooking together'],
    correctAnswers: ['Movie night', 'Dinner at a restaurant', 'Walk in the park', 'Cooking together'],
  },
  {
    id: 'silly_moment',
    question: 'What was our funniest moment together?',
    options: ['Getting lost on a trip', 'Me being clumsy', 'You making me laugh', 'Our inside jokes'],
    correctAnswers: ['Getting lost on a trip', 'Me being clumsy', 'You making me laugh', 'Our inside jokes'],
  },
  {
    id: 'dream_together',
    question: 'What do you want most in our future?',
    options: ['Travel the world', 'Build a home together', 'Lots of adventures', 'Grow old together'],
    correctAnswers: ['Travel the world', 'Build a home together', 'Lots of adventures', 'Grow old together'],
  },
  {
    id: 'favorite_thing',
    question: 'What is your favorite thing about me?',
    options: ['Your smile', 'Your humor', 'Your kindness', 'Everything'],
    correctAnswers: ['Your smile', 'Your humor', 'Your kindness', 'Everything'],
  },
];

interface QuizPageProps {
  onComplete: (answers: Record<string, string>) => void;
}

export default function QuizPage({ onComplete }: QuizPageProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const question = QUIZ_QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100;

  const handleSelectAnswer = (option: string) => {
    setSelectedAnswer(option);
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    setAnswers({
      ...answers,
      [question.id]: selectedAnswer,
    });

    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      onComplete({
        ...answers,
        [question.id]: selectedAnswer,
      });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 space-y-8">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-semibold text-foreground/60">Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}</h2>
            <div className="text-xs text-primary font-bold">{Math.round(progress)}%</div>
          </div>
          <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-primary to-pink-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
            {question.question}
          </h1>
          <div className="space-y-3">
            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelectAnswer(option)}
                className={`w-full p-4 rounded-2xl border-2 transition-all duration-200 text-left font-medium ${
                  selectedAnswer === option
                    ? 'border-primary bg-primary/10 text-foreground'
                    : 'border-secondary bg-secondary/50 text-foreground/80 hover:border-accent hover:bg-accent/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    selectedAnswer === option
                      ? 'border-primary bg-primary'
                      : 'border-foreground/30'
                  }`}>
                    {selectedAnswer === option && (
                      <Heart className="w-3 h-3 text-white fill-white" />
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          {currentQuestion > 0 && (
            <Button
              onClick={() => {
                setCurrentQuestion(currentQuestion - 1);
                setSelectedAnswer(answers[QUIZ_QUESTIONS[currentQuestion - 1].id] || null);
              }}
              variant="outline"
              className="flex-1 py-6 rounded-xl"
            >
              Back
            </Button>
          )}
          <Button
            onClick={handleNext}
            disabled={!selectedAnswer}
            className="flex-1 bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90 text-white font-bold py-6 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {currentQuestion === QUIZ_QUESTIONS.length - 1 ? (
              <>Continue to Surprise</>
            ) : (
              <>Next <ChevronRight className="w-4 h-4 ml-2" /></>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
