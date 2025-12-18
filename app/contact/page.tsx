"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })

    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">Get In Touch</h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
              <div className="space-y-8 lg:col-span-1">
                <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
                  <h2 className="mb-6 text-2xl font-bold text-foreground">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-foreground">Email</h3>
                        <p className="text-muted-foreground">support@healthbook.com</p>
                        <p className="text-muted-foreground">info@healthbook.com</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-foreground">Phone</h3>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        <p className="text-muted-foreground">+1 (555) 987-6543</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-foreground">Office</h3>
                        <p className="text-muted-foreground">123 Healthcare Avenue</p>
                        <p className="text-muted-foreground">San Francisco, CA 94102</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-foreground">Business Hours</h3>
                        <p className="text-muted-foreground">Monday - Friday: 9am - 6pm</p>
                        <p className="text-muted-foreground">Saturday: 10am - 4pm</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
                  <h3 className="mb-4 text-lg font-semibold text-foreground">Need Immediate Help?</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    For urgent medical concerns, please contact emergency services or visit your nearest emergency room.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Emergency Resources
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="rounded-2xl border border-border bg-card p-8 shadow-lg animate-in fade-in slide-in-from-right-8 duration-1000">
                  <h2 className="mb-6 text-2xl font-bold text-foreground">Send Us A Message</h2>

                  {submitted && (
                    <div className="mb-6 rounded-lg bg-success/10 p-4 text-success animate-in fade-in slide-in-from-top-2">
                      <p className="font-semibold">Message sent successfully!</p>
                      <p className="text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help?"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "How quickly will I receive a response?",
                    a: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line.",
                  },
                  {
                    q: "Can I schedule a demo of the platform?",
                    a: "Contact us through this form or call our sales team to schedule a personalized demo of HealthBook.",
                  },
                  {
                    q: "Do you offer support for healthcare providers?",
                    a: "Yes, we have a dedicated support team for healthcare providers. Please mention you're a provider in your message.",
                  },
                  {
                    q: "How can I report a technical issue?",
                    a: "Please use this contact form and select 'Technical Support' as your subject. Include as much detail as possible about the issue.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-border bg-card p-6 animate-in fade-in slide-in-from-bottom-4"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <h3 className="mb-2 font-semibold text-foreground">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
