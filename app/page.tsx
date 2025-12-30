"use client"

import {
  Heart,
  BookOpen,
  Sparkles,
  Footprints,
  MessageCircle,
  Eye,
  ShieldCheck,
  SunDim,
  AlertCircle,
  Music,
  Volume2,
  VolumeX,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"

export default function FarewellPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true)
          })
          .catch((err) => {
            console.log("[v0] Auto-playback blocked or failed:", err)
          })
      }
    }

    // Attempt to play immediately
    playAudio()

    // Fallback: play on first click if browser blocked auto-play
    window.addEventListener("click", playAudio, { once: true })
    return () => window.removeEventListener("click", playAudio)
  }, [isPlaying])

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch((err) => console.log("[v0] Playback failed:", err))
      }
      setIsPlaying(!isPlaying)
    }
  }

  const lyrics = [
    "Me muerdo los labios y no me importa",
    "Porque mi lengua es el único órgano",
    "Que todavía se siente vivo",
    "Y me gusta tu forma de ser",
    "Tu egoísmo y tu soledad",
    "Me gusta tu forma de ser",
    "Porque eres como un loco",
    "Que no sabe a dónde va",
    "Me gusta tu forma de ser",
  ]

  const points = [
    {
      id: "1",
      title: "1. Cuando solo quería hablar contigo",
      content:
        "Hubo momentos en los que insistí en hablar. No porque quisiera discutir, sino porque me importabas demasiado como para callarme. Quería mirarte a los ojos y entenderte. Quería escucharte de verdad. Porque cuando alguien importa, uno no se va sin intentar comprender.",
      icon: <MessageCircle className="w-5 h-5 text-accent" />,
    },
    {
      id: "2",
      title: "2. Cuando tu bienestar estaba primero",
      content: (
        <div className="space-y-4">
          <p>
            Hubo muchas veces en las que, aun estando roto por dentro, pensé primero en ti. No siempre lo dije bonito.
            No siempre lo hice perfecto. Pero lo hice sincero.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {[
              "Te dije que te cuidaras, incluso cuando sentía que te estaba perdiendo.",
              "Te dejé ir a descansar cuando pedías espacio, aunque a mí me doliera el silencio.",
              "Evité decir cosas que sentía solo para no cargarte más.",
              "Me quedé despierto pensando si estabas bien, no en si me estabas eligiendo.",
              "Acepté pausas que no entendía, solo porque tú las necesitabas.",
              "Intenté cambiar mi forma de hablar para no abrumarte.",
              "Me tragué el impulso de escribirte para respetar tu calma.",
              "Muchas veces prioricé tu tranquilidad por encima de mi urgencia.",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10 text-sm group hover:border-primary/30 transition-colors"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="pt-4 italic border-t border-primary/10 text-primary/60">
            No porque fuera fácil. Sino porque me importabas más que mi comodidad.
          </p>
        </div>
      ),
      icon: <ShieldCheck className="w-5 h-5 text-primary/60" />,
    },
    {
      id: "3",
      title: "3. Las risas que nos salvaban un rato",
      content:
        "Entre tanta confusión, hubo risas. Bromas. Momentos ligeros. Reír contigo era mi forma de decir: 'Aquí estoy, incluso cuando todo pesa'.",
      icon: <Sparkles className="w-5 h-5 text-accent" />,
    },
    {
      id: "4",
      title: "4. La Sulamita y el respeto",
      content:
        "Te hablé del Cantar de los Cantares. De la Sulamita. De ese jardín cerrado al que nadie entra sin permiso. No era poesía vacía. Era mi forma de decirte que te veía como alguien valiosa, alguien que no se conquista a la fuerza, alguien que se cuida.",
      icon: <BookOpen className="w-5 h-5 text-accent" />,
    },
    {
      id: "5",
      title: "5. Cuando tuve miedo y lo dije",
      content:
        "No siempre fui fuerte. Te dije que tenía miedo. Miedo de perderte. Miedo de sentir demasiado. Pero aun así, me quedé. Porque quererte también fue atreverme.",
      icon: <Heart className="w-5 h-5 text-accent" />,
    },
    {
      id: "6",
      title: "6. Cuando te elegí con conciencia",
      content:
        "No fue un impulso. No fue un momento. Te elegí después de años sin sentir nada por nadie. Te elegí sabiendo que no era fácil. Te elegí con dudas, pero con decisión.",
      icon: <Eye className="w-5 h-5 text-accent" />,
    },
    {
      id: "7",
      title: "7. Las mañanas simples",
      content:
        "No te imaginé solo en lo intenso. Te imaginé en lo cotidiano. En mañanas tranquilas. En silencios cómodos. En detalles pequeños. Como tus pies fríos buscando calor en mi espalda. No como deseo, sino como hogar.",
      icon: <Footprints className="w-5 h-5 text-accent" />,
    },
    {
      id: "9",
      title: "9. Las peleas (porque existieron)",
      content:
        "No todo fue bonito. Hubo peleas. Mensajes largos. Insistencia. Momentos en los que parecía que te presionaba. No porque quisiera hacerte daño. Sino porque no sabía cómo perderte en silencio.",
      icon: <AlertCircle className="w-5 h-5 text-accent" />,
    },
    {
      id: "10",
      title: "10. Mi forma de amar",
      content:
        "Mi apego contigo fue desordenado. Lo reconozco. Yo sentía mucho. Pensaba mucho. Necesitaba respuestas. Necesitaba cercanía. No era estrategia. Era miedo.",
      icon: <SunDim className="w-5 h-5 text-accent" />,
    },
  ]

  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary overflow-hidden">
      <audio
        ref={audioRef}
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Los%20Aut%C3%A9nticos%20Decadentes%20-%20Loco%20%28Tu%20Forma%20De%20Ser%29%20%28Letra%29%20%28mp3cut.net%29-pilXEc2OLI72wKQLisZ7RFJ0J5ZaUY.mp3"
        loop
        autoPlay
      />

      <button
        onClick={toggleAudio}
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md hover:bg-primary/20 transition-all group"
        aria-label={isPlaying ? "Silenciar" : "Reproducir música"}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 text-primary animate-pulse" />
        ) : (
          <VolumeX className="w-6 h-6 text-primary/60" />
        )}
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-md text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {isPlaying ? "Escuchando Tu forma de ser" : "Reproducir Música"}
        </span>
      </button>

      {/* Background Lyrics Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03] select-none">
        <div className="absolute inset-0 flex flex-col justify-around items-center rotate-[-12deg] scale-125">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex gap-12 whitespace-nowrap text-[6vh] font-serif italic uppercase tracking-widest"
            >
              {lyrics.map((line, j) => (
                <span key={j}>{line}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 md:py-32 space-y-32">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <h1 className="text-6xl md:text-8xl font-serif text-primary leading-tight">
              Lo que fuimos, <br />
              <span className="italic opacity-60">Melany</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-md">
              Este es el cierre de una historia que dolió porque importó. Aquí dejo la verdad de lo que sentí, sin
              filtros, solo con la sinceridad del que amó de verdad.
            </p>
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in duration-1000 delay-200">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <Image
              src="/images/melany-memory.png"
              alt="Recuerdo con Melany"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </section>

        <div className="flex items-center justify-center gap-4 text-primary/40 text-xs tracking-[0.3em] uppercase">
          <Music className={`w-4 h-4 ${isPlaying ? "animate-spin-slow" : ""}`} />
          <span>Los Auténticos Decadentes - Tu forma de ser</span>
        </div>

        {/* Marquee Text */}
        <div className="w-full border-y border-primary/20 py-6">
          <div className="flex animate-marquee whitespace-nowrap gap-12 text-primary/40 font-serif italic text-2xl uppercase tracking-[0.2em]">
            <span>
              Todo fue real • Fue sincero • Fue bonito • Te elegí • Todo fue real • Fue sincero • Fue bonito • Te elegí
              • Todo fue real • Fue sincero • Fue bonito • Te elegí
            </span>
          </div>
        </div>

        {/* Accordion Content */}
        <section className="space-y-16">
          <div className="max-w-xl">
            <h2 className="text-4xl font-serif text-primary italic">Fragmentos de nuestra historia</h2>
            <div className="w-20 h-px bg-accent mt-4" />
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {points.map((point) => (
              <AccordionItem
                key={point.id}
                value={point.id}
                className="border-border bg-card/50 rounded-xl px-4 overflow-hidden backdrop-blur-sm"
              >
                <AccordionTrigger className="text-left font-serif text-xl py-6 hover:no-underline hover:text-accent transition-colors">
                  <span className="flex items-center gap-6">
                    {point.icon}
                    {point.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-lg leading-relaxed text-muted-foreground pb-8 pl-11 pr-4">
                  {point.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Statement Section */}
        <section className="bg-accent/10 border border-accent/20 text-foreground p-12 md:p-24 rounded-[3rem] space-y-10 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-64 h-64 text-accent/10 rotate-12" />
          <div className="max-w-2xl space-y-8 relative z-10">
            <h3 className="text-4xl font-serif italic leading-snug text-primary">
              "Tal vez no fue el momento. Tal vez no supimos cómo. Pero esto fue real."
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Quería que al menos quedara bien contado. Que supieras que cada palabra, cada insistencia y cada miedo
              nacía de un lugar genuino. Te imaginé en lo cotidiano, en silencios cómodos, como hogar.
            </p>
          </div>
        </section>

        {/* Final Message */}
        <section className="text-center py-20 space-y-24">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="space-y-6">
              <p className="text-4xl md:text-6xl font-serif text-primary leading-tight italic px-4">
                "Te amo Melany, pero no debemos estar juntos. Eso ya es un hecho."
              </p>
              <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed px-8">
                Solo quiero verte una última vez como quedamos, como lo dijimos. Olvidémonos de todo y seamos las
                personas de las que nos enamoramos, no estas versiones en las que nos convertimos.
              </p>
            </div>

            <p className="text-lg text-primary/40 font-serif italic italic">
              Luego de eso, solo el futuro sabrá qué va a pasar.
            </p>
          </div>

          <div className="flex flex-col items-center gap-12">
            <div className="w-[1px] h-32 bg-gradient-to-b from-primary/50 to-transparent" />
            <footer className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.6em] text-primary/30 font-bold">Fin del capítulo</p>
              <Heart className="w-4 h-4 text-primary/20 mx-auto fill-current" />
            </footer>
          </div>
        </section>
      </div>
    </main>
  )
}
