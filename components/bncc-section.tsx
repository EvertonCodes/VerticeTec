"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen, Brain, Users, Target, Lightbulb,
  GraduationCap, CheckCircle2, Sparkles, ArrowRight
} from "lucide-react"

const competencias = [
  {
    numero: "01",
    titulo: "Conhecimento",
    descricao: "Valorizar e utilizar conhecimentos sobre o mundo físico, social, cultural e digital.",
    icon: BookOpen,
    cor: "from-blue-500 to-cyan-500"
  },
  {
    numero: "02",
    titulo: "Pensamento Científico",
    descricao: "Exercitar a curiosidade intelectual e utilizar as ciências com criticidade e criatividade.",
    icon: Brain,
    cor: "from-emerald-500 to-teal-500"
  },
  {
    numero: "04",
    titulo: "Comunicação",
    descricao: "Utilizar diferentes linguagens para expressar e partilhar informações e experiências.",
    icon: Users,
    cor: "from-amber-500 to-orange-500"
  },
  {
    numero: "05",
    titulo: "Cultura Digital",
    descricao: "Compreender e utilizar tecnologias digitais de forma crítica, significativa e ética.",
    icon: Target,
    cor: "from-cyan-500 to-blue-500"
  },
  {
    numero: "09",
    titulo: "Empatia e Cooperação",
    descricao: "Exercitar a empatia, o diálogo e a resolução de conflitos de forma harmônica.",
    icon: Lightbulb,
    cor: "from-green-500 to-emerald-500"
  },
  {
    numero: "10",
    titulo: "Responsabilidade",
    descricao: "Agir pessoal e coletivamente com autonomia, responsabilidade, flexibilidade e resiliência.",
    icon: GraduationCap,
    cor: "from-teal-500 to-cyan-500"
  },
]

const diferenciais = [
  "Planos de aula alinhados com habilidades específicas da BNCC",
  "Materiais didáticos com referências curriculares",
  "Certificados com competências desenvolvidas",
  "Relatórios pedagógicos para a coordenação",
  "Integração com conteúdos de múltiplas disciplinas",
  "Avaliação por competências e habilidades"
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function BnccSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="bncc" ref={sectionRef} className="py-24 sm:py-32 relative overflow-hidden bg-secondary/30">
      {/* Animated background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </motion.div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
        />
      ))}

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <GraduationCap className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Alinhado com a BNCC</span>
          </motion.div>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Educação de qualidade seguindo a{" "}
            <span className="text-primary">Base Nacional Comum Curricular</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            Todas as nossas oficinas são desenvolvidas em conformidade com as competências
            gerais da BNCC, garantindo que o aprendizado seja significativo e alinhado com
            os objetivos educacionais nacionais.
          </p>
        </motion.div>

        {/* Competências Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {competencias.map((comp) => (
            <motion.div
              key={comp.numero}
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 h-full overflow-hidden">
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${comp.cor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${comp.cor} shadow-lg`}
                    >
                      <comp.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <span className="text-4xl font-bold text-muted-foreground/20 group-hover:text-primary/20 transition-colors">
                      {comp.numero}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {comp.titulo}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {comp.descricao}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Diferenciais */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative p-8 sm:p-12 rounded-3xl bg-card border border-border overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                backgroundSize: '32px 32px'
              }} />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-accent uppercase tracking-wider">
                    Diferenciais Pedagógicos
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-balance">
                  Metodologia desenvolvida por educadores
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Nossa equipe de pedagogos trabalha em conjunto para criar
                  experiências que unem a teoria curricular à prática tecnológica,
                  garantindo aprendizado significativo.
                </p>

                <motion.a
                  href="#contato"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-primary font-medium group"
                >
                  Solicite nosso material pedagógico
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>

              <div className="space-y-3">
                {diferenciais.map((diff, index) => (
                  <motion.div
                    key={diff}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{diff}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* BNCC Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {["Ensino Fundamental I", "Ensino Fundamental II", "Ensino Médio"].map((nivel, i) => (
            <Badge
              key={nivel}
              variant="outline"
              className="px-4 py-2 text-sm border-primary/30 hover:bg-primary/10 transition-colors cursor-default"
            >
              {nivel}
            </Badge>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
