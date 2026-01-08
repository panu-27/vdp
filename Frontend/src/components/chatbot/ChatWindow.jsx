import { useState } from "react";

const BACKEND_URL = "https://vdp-7v1e.onrender.com/api/chat";

const ChatWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput("");
    setLoading(true);

    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);

    try {
      // ⏳ Timeout controller (Render cold start safety)
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 20000); // 20s

      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        throw new Error(`Server error (${res.status})`);
      }

      const data = await res.json();

      if (!data.reply) {
        throw new Error("No response from AI");
      }

      setMessages((prev) => [
        ...prev,
        { role: "bot", text: data.reply },
      ]);
    } catch (err) {
      console.error("Chat Error:", err);

      let errorText = "❌ Something went wrong.";

      if (err.name === "AbortError") {
        errorText =
          "⏳ Server is waking up. Please try again in a few seconds.";
      } else {
        errorText =
          "❌ Unable to reach AI server. Please try again later.";
      }

      setMessages((prev) => [
        ...prev,
        { role: "bot", text: errorText },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-28 right-4 w-[92%] max-w-sm bg-white rounded-2xl shadow-xl z-50 flex flex-col overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
        <span className="font-semibold">VDPatil Assistant</span>
        <button onClick={onClose} className="text-lg hover:text-gray-200">
          ✕
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-gray-50 h-80">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
              msg.role === "user"
                ? "bg-blue-600 text-white ml-auto"
                : "bg-white border shadow-sm text-gray-800"
            }`}
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="text-xs text-gray-500 animate-pulse">
            Gemini is typing...
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-3 border-t flex gap-2 bg-white">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          placeholder="Type a message..."
          className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-blue-600 text-white px-4 rounded-lg disabled:opacity-50 hover:bg-blue-700 transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
