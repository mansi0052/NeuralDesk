import { useEffect, useRef, useState } from "react";

import {
  Send,
  Sparkles,
  Plus,
  MessageSquare,
} from "lucide-react";

import { motion } from "framer-motion";

import ReactMarkdown from "react-markdown";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
  time: string;
};

type Conversation = {
  id: number;
  title: string;
};

export default function Chat() {
  const [input, setInput] = useState("");

  const [typing, setTyping] = useState(false);

  const [activeChat, setActiveChat] = useState(1);

  const [conversations, setConversations] = useState<
    Conversation[]
  >([
    {
      id: 1,
      title: "AI Research Discussion",
    },
  ]);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "# Welcome to NeuralDesk AI 👋\n\nAsk me anything about:\n\n- Research\n- Analytics\n- AI workflows\n- Documents",
      time: "Just now",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  // Send Message
  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: input,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    setTyping(true);

   const fullResponse =
  "## AI Generated Insight\n\nYour recent activity shows:\n\n- **34% increase** in AI usage\n- Highest traffic on **Thursday**\n- Most active model: `GPT-4`\n\n### Recommendation\n\nConsider optimizing high-token workflows for better cost efficiency.";

const aiMessageId = Date.now() + 1;

const aiMessage: Message = {
  id: aiMessageId,
  role: "assistant",
  content: "",
  time: new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  }),
};

setMessages((prev) => [...prev, aiMessage]);

setTyping(false);

let index = 0;

const interval = setInterval(() => {
  index++;

  setMessages((prev) =>
    prev.map((msg) =>
      msg.id === aiMessageId
        ? {
            ...msg,
            content: fullResponse.slice(0, index),
          }
        : msg
    )
  );

  if (index >= fullResponse.length) {
    clearInterval(interval);
  }
}, 15);
  };

  // New Chat
  const createNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: "New Conversation",
    };

    setConversations((prev) => [newChat, ...prev]);

    setActiveChat(newChat.id);

    setMessages([
      {
        id: 1,
        role: "assistant",
        content:
          "# New Chat Started 🚀\n\nHow can I help you today?",
        time: "Just now",
      },
    ]);
  };

  return (
    <div className="flex h-screen bg-[#020617] text-white">

      {/* Sidebar */}
      <div className="hidden w-[280px] border-r border-white/10 bg-[#0f172a] lg:flex lg:flex-col">

        {/* Top */}
        <div className="border-b border-white/10 p-4">
          <button
            onClick={createNewChat}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-medium transition hover:bg-violet-500"
          >
            <Plus size={18} />
            New Chat
          </button>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {conversations.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setActiveChat(chat.id)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${
                activeChat === chat.id
                  ? "bg-[#1e293b]"
                  : "hover:bg-[#172033]"
              }`}
            >
              <MessageSquare size={18} />

              <span className="truncate text-sm">
                {chat.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main */}
      <div className="flex flex-1 flex-col">

        {/* Header */}
        <div className="border-b border-white/10 px-6 py-5">
          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-violet-600/20 p-2">
              <Sparkles
                className="text-violet-400"
                size={20}
              />
            </div>

            <div>
              <h1 className="text-xl font-semibold">
                NeuralDesk AI
              </h1>

              <p className="text-sm text-gray-400">
                Smart research assistant
              </p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-6">

          <div className="mx-auto flex max-w-4xl flex-col gap-6">

            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-5 py-4 ${
                    message.role === "user"
                      ? "bg-violet-600"
                      : "border border-white/10 bg-[#111827]"
                  }`}
                >
                  <div className="prose prose-invert prose-sm max-w-none">
                    <ReactMarkdown>
                      {message.content}
                    </ReactMarkdown>
                  </div>

                  <p className="mt-3 text-xs text-gray-400">
                    {message.time}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Typing */}
            {typing && (
              <div className="flex justify-start">
                <div className="rounded-2xl border border-white/10 bg-[#111827] px-5 py-4">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></span>
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:0.2s]"></span>
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:0.4s]"></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-white/10 bg-[#020617] p-5">

          <div className="mx-auto flex max-w-4xl items-center gap-3 rounded-2xl border border-white/10 bg-[#111827] px-4 py-3">

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
              type="text"
              placeholder="Ask AI anything..."
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-500"
            />

            <button
              onClick={handleSend}
              className="rounded-xl bg-violet-600 p-3 transition hover:bg-violet-500"
            >
              <Send size={18} />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}