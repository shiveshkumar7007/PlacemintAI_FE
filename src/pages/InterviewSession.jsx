import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Send, CheckCircle } from "lucide-react";
import {
  getInterviewById,
  answerInterview,
  finishInterview,
} from "../services/interviewService";

function InterviewSession() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [interview, setInterview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [answer, setAnswer] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    const fetchInterview = async () => {
      try {
        const res = await getInterviewById(id);
        setInterview(res.interview);
      } catch (err) {
        console.error("Failed to load interview", err);
      } finally {
        setLoading(false);
      }
    };
    fetchInterview();
  }, [id]);

  // Auto-scroll to the bottom of the chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [interview?.conversation]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!answer.trim()) return;

    try {
      setSubmitting(true);
      // Optimistically update UI
      const tempUserMsg = { speaker: "USER", message: answer };
      setInterview((prev) => ({
        ...prev,
        conversation: [...prev.conversation, tempUserMsg],
      }));
      setAnswer("");

      // Send to backend
      const res = await answerInterview(id, answer);

      // Add AI's new question to UI
      const newAIMsg = { speaker: "AI", message: res.question };
      setInterview((prev) => ({
        ...prev,
        conversation: [...prev.conversation, newAIMsg],
      }));
    } catch (err) {
      console.error("Failed to submit answer", err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleFinish = async () => {
    if (!window.confirm("Are you sure you want to finish this interview?"))
      return;

    try {
      setSubmitting(true);
      await finishInterview(id);
      // Redirect back to the main dashboard to see the review
      navigate("/interview");
    } catch (err) {
      console.error("Failed to finish interview", err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
        Loading Session...
      </div>
    );
  }

  if (!interview) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
        Interview not found.
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 pb-8">
      {/* Header */}
      <div className="sticky top-0 z-10 border-b border-slate-700 bg-slate-900/80 p-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-white">{interview.title}</h1>
            <p className="text-sm text-slate-400">
              {interview.role} at {interview.company} • {interview.difficulty}
            </p>
          </div>
          <button
            onClick={handleFinish}
            disabled={submitting}
            className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700 disabled:opacity-50"
          >
            <CheckCircle size={18} />
            End Interview
          </button>
        </div>
      </div>

      {/* Chat History */}
      <div className="mx-auto w-full max-w-4xl flex-1 space-y-6 p-4 pt-8">
        {interview.conversation?.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.speaker === "USER" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-4 ${
                msg.speaker === "USER"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none"
              }`}
            >
              <p className="whitespace-pre-wrap leading-relaxed">
                {msg.message}
              </p>
            </div>
          </div>
        ))}
        {submitting && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-2xl rounded-bl-none border border-slate-700 bg-slate-800 p-4 text-slate-400 animate-pulse">
              AI is thinking...
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <div className="mx-auto mt-4 w-full max-w-4xl px-4">
        <form
          onSubmit={handleSubmit}
          className="relative flex items-end gap-2 rounded-2xl border border-slate-700 bg-slate-800 p-2 focus-within:border-blue-500"
        >
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={submitting || interview.status === "Completed"}
            placeholder="Type your answer here..."
            className="max-h-32 min-h-[50px] w-full resize-none bg-transparent p-3 text-white outline-none placeholder:text-slate-500 disabled:opacity-50"
            rows={1}
            onKeyDown={(e) => {
              // Submit on Enter (but allow Shift+Enter for new lines)
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <button
            type="submit"
            disabled={
              !answer.trim() || submitting || interview.status === "Completed"
            }
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-700 disabled:opacity-50"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default InterviewSession;
