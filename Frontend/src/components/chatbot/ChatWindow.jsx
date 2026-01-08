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

      let errorText = "Something went wrong.";

      if (err.name === "AbortError") {
        errorText =
          "Server is waking up. Please try again in a few seconds.";
      } else {
        errorText =
          " We can't process your request now please try again";
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
 <div className="
  fixed z-50
  bottom-0 left-0 right-0
  h-[85vh]
  bg-white shadow-2xl
  flex flex-col border border-gray-200
  rounded-t-2xl
  sm:bottom-6 sm:right-4 sm:left-auto
  sm:h-[560px] sm:w-[380px]
  sm:rounded-2xl
">


  {/* Header */}
  <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center rounded-t-2xl">
    <span className="font-semibold text-sm">AI Assistance</span>
    <button onClick={onClose} className="text-lg hover:text-gray-200">
      ✕
    </button>
  </div>

  {/* Messages */}
  <div className="flex-1 px-4 py-3 space-y-3 overflow-y-auto bg-gray-50">
    {messages.map((msg, i) => (
      <div
        key={i}
        className={`max-w-[75%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
          msg.role === "user"
            ? "bg-blue-600 text-white ml-auto rounded-br-none"
            : "bg-white border text-gray-800 rounded-bl-none"
        }`}
      >
        {msg.text}
      </div>
    ))}

    {loading && (
      <div className="text-xs text-gray-500 animate-pulse">
        typing...
      </div>
    )}
  </div>

  {/* Input */}
  <div className="p-3 border-t bg-white rounded-b-2xl">
    <div className="flex gap-2">
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
        className="flex-1 border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={sendMessage}
        disabled={loading}
        className="bg-blue-600 text-white px-4 rounded-xl disabled:opacity-50 hover:bg-blue-700 transition"
      >
        Send
      </button>
    </div>
  </div>
</div>

  );
};

export default ChatWindow;
