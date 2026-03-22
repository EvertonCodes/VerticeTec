"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cpu, Lightbulb, Users, Play } from "lucide-react"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const floatAnimation = {
  y: [-6, 6, -6],
  x: [-3, 3, -3],
  rotate: [-1, 1, -1],
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
}

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-start justify-center overflow-hidden pt-28 lg:pt-32">

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-[conic-gradient(from_0deg,transparent,var(--primary)_10%,transparent_40%)] opacity-10"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
        />
      </div>


      <div className="absolute inset-0 bg-[linear-gradient(to_right,_var(--border)_1px,_transparent_1px),linear-gradient(to_bottom,_var(--border)_1px,_transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left"
          >

            <motion.div
              variants={item}
              className="mb-8 flex justify-center lg:justify-start"
            >
              <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-muted-foreground ring-1 ring-border hover:ring-primary/50 transition-all">
                <span className="inline-flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Oficinas disponíveis para sua escola
                </span>
              </div>
            </motion.div>


            <motion.h1
              variants={item}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance"
            >

              <span className="font-mono text-primary inline-block">
                {"VÉRTICE".split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>

              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="ml-3 font-mono text-primary/70 text-3xl sm:text-4xl lg:text-5xl"
              >
                Tec
              </motion.span>

              <br />

              <motion.span
                variants={item}
                className="text-2xl sm:text-3xl lg:text-4xl font-normal text-muted-foreground"
              >
                Tecnologia que Eleva a Educação
              </motion.span>
            </motion.h1>


            <motion.p
              variants={item}
              className="mt-8 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-pretty"
            >
              Transformamos eventos escolares em experiências únicas por meio da robótica educacional.
              Oficinas temáticas para o Dia do Trânsito, Meio Ambiente, Ciências, Tecnologia e muito mais.
            </motion.p>

            {/* Botões */}
            <motion.div
              variants={item}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button size="lg" asChild className="group">
                <Link href="#oficinas">
                  Conhecer Oficinas
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="group bg-transparent"
              >
                <Link href="#galeria" className="flex items-center gap-2">
                  <Play className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  Ver Projetos
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <motion.div
              animate={floatAnimation}
              className="relative rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20"
            >
              <Image
                src="/images/hero-robotics.jpg"
                alt="Crianças aprendendo robótica em oficina educacional"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-4 left-4 right-4 p-4 bg-card/90 backdrop-blur-sm rounded-xl border border-border"
              >
                <p className="text-sm font-medium text-foreground">Aprendizado na prática</p>
                <p className="text-xs text-muted-foreground">Oficinas interativas para todas as idades</p>
              </motion.div>
            </motion.div>

            {/* Decorative elements - slower, natural movement */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -right-6 w-24 h-24 border-2 border-dashed border-primary/30 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/30 rounded-xl blur-xl"
            />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 lg:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-3xl mx-auto"
        >
          {[
            { icon: Users, value: "5000+", label: "Alunos Impactados", color: "primary" },
            { icon: Cpu, value: "50+", label: "Oficinas Realizadas", color: "accent" },
            { icon: Lightbulb, value: "12+", label: "Temas Disponíveis", color: "primary" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors cursor-default"
            >
              <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${stat.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
              </div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 + index * 0.1 }}
                className="text-3xl font-bold text-foreground font-mono"
              >
                {stat.value}
              </motion.span>
              <span className="text-sm text-muted-foreground mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
