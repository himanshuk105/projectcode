import { useState } from 'react'

export default function AISidebar() {
  const [inputText, setInputText] = useState('')
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: 'user',
      message: 'Create a landing page for a fitness app',
    },
    {
      id: 2,
      type: 'ai',
      message:
        "I'll create a modern fitness app landing page with hero section, features, and CTA buttons.",
    },
    {
      id: 3,
      type: 'user',
      message: 'Make it more colorful and add testimonials',
    },
    {
      id: 4,
      type: 'ai',
      message: 'Added vibrant colors and testimonial section with user reviews.',
    },
  ])

  const handleGenerate = () => {
    if (inputText.trim()) {
      // Add user message
      const newUserMessage = {
        id: chatMessages.length + 1,
        type: 'user',
        message: inputText,
      }

      // Add AI response (simulated)
      const newAiMessage = {
        id: chatMessages.length + 2,
        type: 'ai',
        message: 'Generating your website...',
      }

      setChatMessages([...chatMessages, newUserMessage, newAiMessage])
      setInputText('')
    }
  }

  return (
    <div className="w-[300px] bg-slate-900 text-white border-r border-gray-800 flex flex-col h-screen">
      {/* Header */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-900 border text-purple-300">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <h2 className="text-base font-semibold text-white">AI Website Builder</h2>
          <p className="text-sm text-gray-300">Chat with AI to create your website</p>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-4">
          <button className="flex items-center justify-center px-2 py-2 text-xs font-medium border rounded bg-slate-900 text-white hover:bg-gray-900">
            <span className="mr-1">🎨</span> Figma
          </button>
          <button className="flex items-center justify-center px-2 py-2 text-xs font-medium border rounded bg-slate-900 text-white hover:bg-gray-900">
            <span className="mr-1">🌐</span> Web
          </button>
          <button className="flex items-center justify-center px-2 py-2 text-xs font-medium border rounded bg-slate-900 text-white hover:bg-gray-900">
            <span className="mr-1">🤖</span> Template
          </button>
          <button className="flex items-center justify-center px-2 py-2 text-xs font-medium border rounded bg-slate-900 text-white hover:bg-gray-900">
            <span className="mr-1">🎯</span> Style
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 bg-slate-900 text-white">
        <div className="space-y-3">
          {chatMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  message.type === 'user'
                    ? 'bg-gray-800 text-white rounded-br-sm'
                    : 'bg-gray-900 text-gray-200 rounded-bl-sm'
                }`}
              >
                {message.message}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-800 space-y-3 bg-slate-900">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Describe the website you want to create..."
          className="w-full p-3 text-sm border border-gray-700 bg-slate-900 text-white rounded-lg resize-none outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
          rows={3}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              handleGenerate()
            }
          }}
        />

        <button
          onClick={handleGenerate}
          disabled={!inputText.trim()}
          className="w-full bg-gray-800 hover:bg-gray-900 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span>Generate Website</span>
        </button>
      </div>
    </div>
  )
}
