
import React, { useState, useEffect, useCallback } from 'react';
import { ALL_QUESTIONS } from './data/questions';
import { Question } from './types';
import { CheckCircleIcon, XCircleIcon, ArrowPathIcon, PlayIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const TOTAL_QUESTIONS = 10;

// Helper function to shuffle array and pick the first N items
const getShuffledQuestions = (): Question[] => {
  return [...ALL_QUESTIONS].sort(() => 0.5 - Math.random()).slice(0, TOTAL_QUESTIONS);
};

// --- Sub-components defined outside the main App component ---

interface ProgressBarProps {
  current: number;
  total: number;
}
const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progressPercentage = (current / total) * 100;
  return (
    <div className="w-full bg-slate-200 rounded-full h-2.5 mb-4">
      <div
        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
};

interface QuizCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: string | null;
  onAnswerSelect: (answer: string) => void;
  onNext: () => void;
}
const QuizCard: React.FC<QuizCardProps> = ({ question, questionNumber, totalQuestions, selectedAnswer, onAnswerSelect, onNext }) => {
  return (
    <div className="w-full">
      <ProgressBar current={questionNumber} total={totalQuestions} />
      <p className="text-sm font-medium text-slate-500 mb-2">
        Frage {questionNumber} von {totalQuestions}
      </p>
      <h2 className="text-2xl font-bold text-slate-800 mb-6">{question.question}</h2>
      <div className="space-y-3">
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option;
          return (
            <button
              key={option}
              onClick={() => onAnswerSelect(option)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 text-slate-700
                ${isSelected 
                  ? 'bg-blue-100 border-blue-500 ring-2 ring-blue-300' 
                  : 'bg-white border-slate-300 hover:bg-slate-50 hover:border-slate-400'
                }`}
            >
              {option}
            </button>
          );
        })}
      </div>
      <div className="mt-8 flex justify-end">
        <button
          onClick={onNext}
          disabled={!selectedAnswer}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 disabled:bg-slate-400 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {questionNumber === totalQuestions ? 'Ergebnisse anzeigen' : 'Nächste Frage'}
          <ChevronRightIcon className="h-5 w-5"/>
        </button>
      </div>
    </div>
  );
};

interface ResultsCardProps {
  questions: Question[];
  userAnswers: { [key: number]: string };
  onRestart: () => void;
}
const ResultsCard: React.FC<ResultsCardProps> = ({ questions, userAnswers, onRestart }) => {
    const correctAnswersCount = questions.reduce((count, question, index) => {
        return userAnswers[index] === question.correctAnswer ? count + 1 : count;
    }, 0);
    const scorePercentage = Math.round((correctAnswersCount / questions.length) * 100);

    let scoreColor = 'text-green-600';
    if(scorePercentage < 75) scoreColor = 'text-yellow-600';
    if(scorePercentage < 50) scoreColor = 'text-red-600';

    return (
        <div className="w-full">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">Quiz beendet!</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center mb-8">
                <p className="text-slate-600 text-lg">Dein Ergebnis:</p>
                <p className={`text-6xl font-bold my-2 ${scoreColor}`}>{scorePercentage}%</p>
                <p className="text-slate-600 text-lg">Du hast <span className="font-bold">{correctAnswersCount}</span> von <span className="font-bold">{questions.length}</span> Fragen richtig beantwortet.</p>
            </div>

            <div className="space-y-6">
                {questions.map((question, index) => {
                    const userAnswer = userAnswers[index];
                    const isCorrect = userAnswer === question.correctAnswer;
                    return (
                        <div key={index} className="bg-white p-5 rounded-lg shadow-sm border-l-4"
                             style={{borderColor: isCorrect ? '#22c55e' : '#ef4444'}}>
                            <p className="font-bold text-slate-800 mb-3">{index + 1}. {question.question}</p>
                            <div className="space-y-2">
                                {question.options.map(option => {
                                    const isUserAnswer = userAnswer === option;
                                    const isCorrectAnswer = question.correctAnswer === option;
                                    let icon = null;
                                    let textClass = 'text-slate-600';

                                    if(isCorrectAnswer) {
                                        icon = <CheckCircleIcon className="h-5 w-5 text-green-500" />;
                                        textClass = 'text-green-700 font-semibold';
                                    }
                                    if(isUserAnswer && !isCorrect) {
                                        icon = <XCircleIcon className="h-5 w-5 text-red-500" />;
                                        textClass = 'text-red-700 font-semibold';
                                    }
                                    
                                    return (
                                        <div key={option} className={`flex items-center gap-2 p-2 rounded ${isUserAnswer && !isCorrect ? 'bg-red-50' : ''} ${isCorrectAnswer ? 'bg-green-50' : ''}`}>
                                            {icon ? icon : <div className="h-5 w-5"></div>}
                                            <span className={textClass}>{option}</span>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="mt-3 pt-3 border-t border-slate-200">
                                <p className="text-sm text-slate-600"><span className="font-semibold">Erklärung:</span> {question.explanation}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-10 text-center">
                <button
                    onClick={onRestart}
                    className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 flex items-center gap-2 mx-auto"
                >
                    <ArrowPathIcon className="h-5 w-5"/>
                    Erneut versuchen
                </button>
            </div>
        </div>
    );
};

// --- Main App Component ---

const App: React.FC = () => {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'results'>('start');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    if (gameState === 'playing') {
      setQuestions(getShuffledQuestions());
      setCurrentQuestionIndex(0);
      setUserAnswers({});
    }
  }, [gameState]);

  const handleStartQuiz = () => {
    setGameState('playing');
  };

  const handleRestartQuiz = useCallback(() => {
    setGameState('start');
  }, []);

  const handleAnswerSelect = (answer: string) => {
    setUserAnswers(prev => ({ ...prev, [currentQuestionIndex]: answer }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setGameState('results');
    }
  };
  
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="w-full max-w-2xl mx-auto">
        <header className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-slate-800">FaGe Quiz</h1>
            <p className="text-slate-600 mt-2">Teste dein Wissen als Fachfrau/Fachmann Gesundheit</p>
        </header>

        <main className="bg-slate-50 p-6 sm:p-8 rounded-2xl shadow-lg min-h-[400px] flex items-center justify-center">
          {gameState === 'start' && (
             <div className="text-center">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Bist du bereit?</h2>
                <p className="text-slate-600 mb-6 max-w-md mx-auto">
                    Es werden dir {TOTAL_QUESTIONS} zufällige Fragen gestellt. Am Ende siehst du deine Auswertung. Viel Erfolg!
                </p>
                <button
                  onClick={handleStartQuiz}
                  className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 flex items-center gap-2 mx-auto text-lg"
                >
                  <PlayIcon className="h-6 w-6"/>
                  Quiz starten
                </button>
             </div>
          )}

          {gameState === 'playing' && currentQuestion && (
            <QuizCard
              question={currentQuestion}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={TOTAL_QUESTIONS}
              selectedAnswer={userAnswers[currentQuestionIndex] || null}
              onAnswerSelect={handleAnswerSelect}
              onNext={handleNextQuestion}
            />
          )}

          {gameState === 'results' && (
            <ResultsCard 
                questions={questions}
                userAnswers={userAnswers}
                onRestart={handleRestartQuiz}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
