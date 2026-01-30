'use client';

import { useState } from 'react';
import StartPage from '@/components/start-page';
import QuizPage from '@/components/quiz-page';
import ProposalPage from '@/components/proposal-page';
import GiftPage from '@/components/gift-page';

export default function Home() {
  const [currentPage, setCurrentPage] = useState<'start' | 'quiz' | 'proposal' | 'gift'>('start');
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleStartQuiz = () => {
    setCurrentPage('quiz');
  };

  const handleQuizComplete = (quizAnswers: Record<string, string>) => {
    setAnswers(quizAnswers);
    setCurrentPage('proposal');
  };

  const handleProposalComplete = () => {
    setCurrentPage('gift');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-secondary to-accent/10 flex items-center justify-center p-4">
      {currentPage === 'start' && <StartPage onStart={handleStartQuiz} />}
      {currentPage === 'quiz' && <QuizPage onComplete={handleQuizComplete} />}
      {currentPage === 'proposal' && <ProposalPage onComplete={handleProposalComplete} />}
      {currentPage === 'gift' && <GiftPage />}
    </main>
  );
}
