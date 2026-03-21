"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Trophy, Swords, Goal, Puzzle, Timer, Zap,
  Users, Medal, Target, Gamepad2, ArrowRight,
  Star, Crown, Flame
} from "lucide-react"

const jogos = [
  {
    id: "futebol",
    titulo: "Futebol de Robôs",
    subtitulo: "RoboCup Junior",
    descricao:
      "Competição de futebol onde robôs autônomos disputam partidas emocionantes. Os alunos programam estratégias de ataque, defesa e trabalho em equipe.",
    icon: Goal,
    cor: "from-green-500 to-emerald-600",
    corBg: "bg-green-500/10",
    corBorder: "border-green-500/30",
    regras: [
      "2 robôs por equipe",
      "Partidas de 5 minutos",
      "Campo oficial 1.2m x 1.8m",
    ],
    habilidades: [
      "Programação",
      "Sensores",
      "Trabalho em equipe",
      "Estratégia",
      "Lógica",
    ],
    destaque: true,
  },
  {
    id: "sumo",
    titulo: "Luta de Robôs Sumô",
    subtitulo: "Sumo Bot Challenge",
    descricao:
      "Robôs competem em um ringue circular tentando empurrar o adversário para fora. Desenvolve força, equilíbrio e programação de sensores.",
    icon: Swords,
    cor: "from-red-500 to-orange-600",
    corBg: "bg-red-500/10",
    corBorder: "border-red-500/30",
    regras: [
      "Peso máximo 500g",
      "Ringue de 77cm",
      "Eliminação direta",
      "3 rounds por luta",
    ],
    habilidades: [
      "Mecânica",
      "Sensores de linha",
      "Estratégia",
      "Engenharia",
      "Física",
    ],
    destaque: true,
  },

]

const estatisticas = [
  { numero: "2", label: "Modalidades", icon: Gamepad2 },
  { numero: "5+", label: "Competicoes", icon: Trophy },
  { numero: "20+", label: "Escolas", icon: Users },
  { numero: "500+", label: "Competidores", icon: Medal },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function RobotGames() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeGame, setActiveGame] = useState<string | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section id="jogos" ref={sectionRef} className="py-24 sm:py-32 relative overflow-hidden bg-secondary/30">
      {/* Animated background */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </motion.div>

      {/* Floating game elements */}
      {[Trophy, Medal, Star, Crown].map((Icon, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          className="absolute text-primary/20"
          style={{
            left: `${15 + i * 25}%`,
            top: `${10 + (i % 2) * 70}%`,
          }}
        >
          <Icon className="w-8 h-8" />
        </motion.div>
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
          >
            <Trophy className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-accent">Jogos Escolares</span>
          </motion.div>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Competicoes de Robotica{" "}
            <span className="text-primary">Emocionantes</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            Organize jogos escolares de robotica que despertam o espirito competitivo saudavel,
            trabalho em equipe e paixao pela tecnologia. Competicoes para todas as idades!
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {estatisticas.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative p-6 rounded-2xl bg-card border border-border text-center group hover:border-primary/30 transition-all"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-3 right-3 opacity-10 group-hover:opacity-20 transition-opacity"
              >
                <stat.icon className="w-12 h-12" />
              </motion.div>
              <p className="text-4xl font-bold text-primary mb-1">{stat.numero}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Games - Futebol e Luta */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {jogos.filter(j => j.destaque).map((jogo, index) => (
            <motion.div
              key={jogo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card
                className={`group relative overflow-hidden border-2 ${jogo.corBorder} hover:shadow-2xl transition-all duration-500 cursor-pointer h-full`}
                onMouseEnter={() => setActiveGame(jogo.id)}
                onMouseLeave={() => setActiveGame(null)}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${jogo.cor} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Animated corner accent */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${jogo.cor} opacity-20 rounded-full blur-2xl`}
                />

                <CardContent className="p-8 relative">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <Badge className={`${jogo.corBg} border-0 mb-3`}>
                        <Flame className="w-3 h-3 mr-1" />
                        Destaque
                      </Badge>
                      <h3 className="text-2xl font-bold text-foreground mb-1">{jogo.titulo}</h3>
                      <p className="text-sm text-primary font-medium">{jogo.subtitulo}</p>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${jogo.cor} shadow-lg`}
                    >
                      <jogo.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {jogo.descricao}
                  </p>

                  {/* Rules */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Timer className="w-4 h-4 text-primary" />
                      Regras
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {jogo.regras.map((regra) => (
                        <Badge key={regra} variant="outline" className="text-xs">
                          {regra}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-accent" />
                      Habilidades Desenvolvidas
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {jogo.habilidades.map((hab) => (
                        <Badge key={hab} variant="secondary" className="text-xs">
                          {hab}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: activeGame === jogo.id ? 1 : 0, y: activeGame === jogo.id ? 0 : 10 }}
                    className="mt-6 pt-6 border-t border-border"
                  >
                    <Button asChild className="w-full group">
                      <a href="#contato">
                        Organizar Competicao
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Games Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {jogos.filter(j => !j.destaque).map((jogo) => (
            <motion.div key={jogo.id} variants={item}>
              <Card
                className={`group relative overflow-hidden border ${jogo.corBorder} hover:shadow-xl transition-all duration-300 cursor-pointer h-full`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${jogo.cor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <CardContent className="p-5 relative">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${jogo.cor}`}
                    >
                      <jogo.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{jogo.titulo}</h4>
                      <p className="text-xs text-primary">{jogo.subtitulo}</p>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    {jogo.descricao}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {jogo.habilidades.slice(0, 2).map((hab) => (
                      <Badge key={hab} variant="secondary" className="text-xs py-0">
                        {hab}
                      </Badge>
                    ))}
                  </div>

                  <ArrowRight className="absolute bottom-4 right-4 w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl"
            />
            <div className="relative p-8 sm:p-12 rounded-2xl bg-card border border-border">
              <Trophy className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Organize os Jogos Escolares na sua escola!
              </h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Levamos toda a estrutura, robos, pistas e arbitragem. Sua escola so precisa dos competidores!
              </p>
              <Button asChild size="lg" className="group">
                <a href="#contato">
                  Solicitar Orcamento
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
