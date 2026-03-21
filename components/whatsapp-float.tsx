"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
    return (
        <a
            href="https://wa.me/5581983313340?text=Olá! Gostaria de informações sobre as oficinas de robótica 🤖"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="
        fixed bottom-5 right-5 z-50
        flex items-center justify-center
        w-11 h-11 rounded-full
        bg-emerald-900/90 hover:bg-emerald-800
        text-emerald-300
        shadow-lg shadow-black/30
        backdrop-blur
        transition-all duration-300
        hover:scale-105
      "
        >
            <MessageCircle className="w-5 h-5" />
        </a>
    )
}