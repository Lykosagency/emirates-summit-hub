import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, ArrowLeft, Send } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "What best describes your current entrepreneurial level?",
    options: ["Just getting started (pre-revenue)", "Early stage ($1K–$5K/mo)", "Growth stage ($5K–$20K/mo)", "Scaling ($20K–$100K+/mo)"],
  },
  {
    id: 2,
    question: "What is your primary objective for the next 90 days?",
    type: "textarea",
    placeholder: "Describe your most critical business goal...",
  },
  {
    id: 3,
    question: "Why do you want to be in this specific curated room?",
    type: "textarea",
    placeholder: "What draws you to this experience...",
  },
  {
    id: 4,
    question: "What is your current monthly revenue range?",
    options: ["Under $5,000", "$5,000–$15,000", "$15,000–$50,000", "$50,000+"],
  },
  {
    id: 5,
    question: "What outcome would make this mastermind a major win for you?",
    type: "textarea",
    placeholder: "Be specific about the result you want...",
  },
  {
    id: 6,
    question: "Are you ready to secure your seat at 5,000 AED if selected?",
    options: ["Yes — I'm ready to commit", "I need more information first", "I'm considering it seriously"],
  },
];

export default function QualificationForm() {
  const { ref, isVisible } = useScrollAnimation();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const current = questions[step];
  const progress = ((step + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
  };

  const handleSubmit = () => {
    console.log("Qualification form submitted:", answers);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="qualify" className="relative py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="glass-card gold-border-glow rounded-lg p-8 lg:p-16 max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6">
              <Send className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">Application Received</h3>
            <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
              Your qualification has been submitted. Our team will review your application and
              reach out within 48 hours if you're selected for access.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="qualify" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary/70 text-sm tracking-[0.3em] uppercase text-center mb-3">Qualification</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            Begin Your <span className="gold-text">Application</span>
          </h2>
          <p className="text-sm text-muted-foreground text-center mb-2 max-w-lg mx-auto">
            Access is by qualification only. Answer six strategic questions to determine alignment.
          </p>
          <div className="w-16 h-px bg-primary/40 mx-auto mb-12" />

          <div className="glass-card gold-border-glow rounded-lg p-8 lg:p-12 max-w-2xl mx-auto">
            {/* Progress bar */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground">Question {step + 1} of {questions.length}</span>
              <span className="text-xs text-primary/70">{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-1 bg-secondary rounded-full mb-8">
              <div className="h-full gold-gradient rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>

            {/* Question */}
            <h3 className="font-display text-xl lg:text-2xl font-semibold mb-6">{current.question}</h3>

            {/* Answer area */}
            {current.options ? (
              <div className="space-y-3 mb-8">
                {current.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(opt)}
                    className={`w-full text-left p-4 rounded-sm border transition-all duration-300 text-sm ${
                      answers[current.id] === opt
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border hover:border-primary/30 text-muted-foreground"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            ) : (
              <textarea
                value={answers[current.id] || ""}
                onChange={(e) => handleAnswer(e.target.value)}
                placeholder={current.placeholder}
                rows={4}
                className="w-full bg-secondary/50 border border-border rounded-sm p-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 resize-none mb-8 transition-colors"
              />
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>

              {step < questions.length - 1 ? (
                <button
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!answers[current.id]}
                  className="flex items-center gap-2 gold-gradient text-primary-foreground px-6 py-2.5 rounded-sm text-sm font-semibold tracking-wider uppercase disabled:opacity-40 hover:shadow-[0_0_20px_hsla(43,56%,52%,0.25)] transition-all"
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!answers[current.id]}
                  className="flex items-center gap-2 gold-gradient text-primary-foreground px-6 py-2.5 rounded-sm text-sm font-semibold tracking-wider uppercase disabled:opacity-40 hover:shadow-[0_0_20px_hsla(43,56%,52%,0.25)] transition-all"
                >
                  Submit Application <Send className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
