"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const FAQ_RESPONSES: Record<string, string> = {
  "how to book":
    "To book an appointment, search for a doctor by specialty or location, select your preferred doctor, choose an available time slot, and fill in your details. It's that simple!",
  "cancel appointment":
    "You can cancel your appointment from your dashboard. Go to 'My Appointments', find the booking you want to cancel, and click the 'Cancel' button.",
  payment:
    "We accept all major credit cards, debit cards, and digital wallets. Payment is processed securely after you confirm your booking.",
  insurance:
    "Many doctors on our platform accept insurance. You can filter by insurance provider in the search page or contact the clinic directly.",
  emergency:
    "For medical emergencies, please call 911 or go to your nearest emergency room. HealthBook is for scheduled appointments only.",
  reschedule:
    "To reschedule, go to your dashboard, find your appointment, and click 'Reschedule'. You'll be able to select a new time slot.",
  "first visit":
    "For your first visit, arrive 10-15 minutes early to complete any necessary paperwork. Bring your ID, insurance card, and any relevant medical records.",
  telemedicine:
    "Yes! Many of our doctors offer virtual consultations. Look for the 'Video Consultation' badge when searching for doctors.",
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm your HealthBook assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    for (const [key, response] of Object.entries(FAQ_RESPONSES)) {
      if (lowerMessage.includes(key)) {
        return response
      }
    }

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      return "Hello! How can I assist you with your healthcare needs today?"
    }

    if (lowerMessage.includes("thank")) {
      return "You're welcome! Is there anything else I can help you with?"
    }

    return "I'm here to help! You can ask me about booking appointments, canceling or rescheduling, payment options, insurance, telemedicine, or general questions about using HealthBook."
  }

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend()
    }
  }

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className="fixed bottom-6 left-6 z-50 h-14 w-14 rounded-full bg-primary shadow-lg transition-all hover:scale-110 hover:bg-primary/90"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 left-6 z-50 flex h-[500px] w-[380px] flex-col rounded-2xl border border-border bg-card shadow-2xl animate-in slide-in-from-bottom-5">
          <div className="flex items-center justify-between rounded-t-2xl bg-primary p-4 text-primary-foreground">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">HealthBook Assistant</h3>
                <p className="text-xs opacity-90">Always here to help</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto p-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}>
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                    message.sender === "user" ? "bg-primary" : "bg-muted"
                  }`}
                >
                  {message.sender === "user" ? (
                    <User className="h-4 w-4 text-primary-foreground" />
                  ) : (
                    <Bot className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                    message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                  <Bot className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-center gap-1 rounded-2xl bg-muted px-4 py-2">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]"></div>
                  <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]"></div>
                  <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-border p-4">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon" className="shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
