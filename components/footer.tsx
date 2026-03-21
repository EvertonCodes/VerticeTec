"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Bot, Zap, Heart, ArrowUp } from "lucide-react"

const navigation = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre", href: "#sobre" },
  { name: "Galeria", href: "#galeria" },
  { name: "Oficinas", href: "#oficinas" },
  { name: "Serviços", href: "#servicos" },
  { name: "Contato", href: "#contato" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 relative">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center gap-2 mb-8 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary"
              >
                <Bot className="w-7 h-7 text-primary-foreground" />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-mono text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                  VÉRTICE TEC
                </span>
                <span className="text-xs text-primary font-medium -mt-1 flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  Inovação na Educação
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10"
          >
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-full max-w-xs h-px bg-border mb-10"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              {new Date().getFullYear()} VÉRTICE Tec Robótica. Feito com
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-primary fill-primary" />
              </motion.span>
              para a educação.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Robótica Educacional para Escolas
            </p>
          </motion.div>

          {/* Back to top button */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="mt-10 p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors border border-border hover:border-primary/50"
          >
            <ArrowUp className="w-5 h-5 text-primary" />
            <span className="sr-only">Voltar ao topo</span>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
