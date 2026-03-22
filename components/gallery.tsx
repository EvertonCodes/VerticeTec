"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryItems = [
  {
    id: 1,
    src: "/VerticeTec/images/hero-robotics.jpg",
    alt: "Oficina de robótica educacional",
    title: "Oficina Interativa",
    category: "Aulas",
  },
  {
    id: 2,
    src: "/VerticeTec/images/workshop-traffic.jpg",
    alt: "Oficina do Dia do Trânsito",
    title: "Dia do Trânsito",
    category: "Projetos",
  },
  {
    id: 3,
    src: "/VerticeTec/images/workshop-environment.jpg",
    alt: "Oficina do Meio Ambiente",
    title: "Meio Ambiente",
    category: "Projetos",
  },
  {
    id: 4,
    src: "/VerticeTec/images/robotics-lecture.jpg",
    alt: "Palestra de robótica para crianças",
    title: "Palestra Educativa",
    category: "Palestras",
  },
  {
    id: 5,
    src: "/VerticeTec/images/student-project.jpg",
    alt: "Projeto dos alunos",
    title: "Feira de Ciências",
    category: "Projetos",
  },
  {
    id: 6,
    src: "/VerticeTec/images/team-collaboration.jpg",
    alt: "Trabalho em equipe na robótica",
    title: "Trabalho em Equipe",
    category: "Aulas",
  },
]

const categories = ["Todos"]

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredItems = selectedCategory === "Todos"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

  const currentIndex = selectedImage !== null
    ? filteredItems.findIndex(item => item.id === selectedImage)
    : -1

  const navigateImage = (direction: "prev" | "next") => {
    if (currentIndex === -1) return
    const newIndex = direction === "prev"
      ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
      : (currentIndex + 1) % filteredItems.length
    setSelectedImage(filteredItems[newIndex].id)
  }

  return (
    <section id="galeria" className="py-24 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Galeria
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Nossos projetos em ação
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            Veja momentos incríveis das nossas oficinas, palestras e projetos realizados em escolas.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-2 mt-10 flex-wrap"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card aspect-[4/3]">
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mt-1">
                      {item.title}
                    </h3>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {filteredItems.find(item => item.id === selectedImage) && (
                  <>
                    <Image
                      src={filteredItems.find(item => item.id === selectedImage)!.src || "/placeholder.svg"}
                      alt={filteredItems.find(item => item.id === selectedImage)!.alt}
                      width={1200}
                      height={800}
                      className="w-full h-auto rounded-2xl border border-border"
                    />
                    <div className="absolute bottom-4 left-4 right-4 p-4 bg-card/90 backdrop-blur-sm rounded-xl">
                      <p className="text-xs text-primary uppercase tracking-wider">
                        {filteredItems.find(item => item.id === selectedImage)!.category}
                      </p>
                      <h3 className="text-lg font-semibold text-foreground">
                        {filteredItems.find(item => item.id === selectedImage)!.title}
                      </h3>
                    </div>
                  </>
                )}

                {/* Navigation */}
                <button
                  onClick={(e) => { e.stopPropagation(); navigateImage("prev") }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); navigateImage("next") }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Close button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 p-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
