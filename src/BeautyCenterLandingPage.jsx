import { motion } from 'framer-motion';
import { useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1 },
  }),
};

const floatAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

const IMAGES = {
  logo: 'images/logo.jpg',
  hero: 'images/principal.jpg',
  blondeBack: 'images/foto5.jpg',
  brunetteFace: 'images/foto2.jpg',
  brunetteBack: 'images/foto4.jpg',
  blondeReals: 'images/galeria1.jpg',
  blackBob: 'images/foto4.jpg',
  smilingResult: 'images/unhas.jpg',
  salonFront: 'images/externo.jpg',
  salonInside: 'images/externo.jpg',
  thumb1:  'images/videos/tbvideo1.jpg',
  thumb2:  'images/videos/tbvideo2.jpg',
  thumb3:  'images/videos/tbvideo3.jpg',
  video1:  'images/videos/video1.mp4',
  video2:  'images/videos/video2.mp4',
  video3:  'images/videos/video3.mp4'
};

const REELS = [
  {
    title: 'Ruivo sublime',
    description: 'Uma transformação marcante, com brilho, profundidade e aquele ruivo elegante,',
    poster: IMAGES.thumb1,
    videoSrc: IMAGES.video1,
    link: IMAGES.video1
  },
  {
    title: 'Reel de transformação e rotina',
    description: 'Resultado, movimento e experiência real do salão.',
    poster: IMAGES.thumb2,
    videoSrc: IMAGES.video2,
    link: IMAGES.video2
  },
  {
    title: 'Reel real do Beauty Center',
    description: 'Mais movimento, prova social e presença visual da marca.',
    poster: IMAGES.thumb3,
    videoSrc: IMAGES.video3,
    link: IMAGES.video3
  }
];

export default function BeautyCenterLandingPage() {
  const [activeVideo, setActiveVideo] = useState(null);
  const whatsappNumber = '5568999818153';
  const whatsappText = encodeURIComponent('Olá! Vim pela landing page do Beauty Center e quero agendar meu horário.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  const highlights = [
    'Loiros de impacto e morena iluminada',
    'Cortes, finalização e escovas elegantes',
    'Make e produção para ocasiões especiais',
    'Ambiente sofisticado e acolhedor',
  ];

  const services = [
    {
      title: 'Loiros & Morena Iluminada',
      text: 'Técnicas personalizadas para iluminar, valorizar o rosto e entregar um visual sofisticado e moderno.',
      image: IMAGES.blondeBack,
    },
    {
      title: 'Cortes, Escova & Finalização',
      text: 'Modelagens e cortes com movimento, brilho e acabamento elegante.',
      image: IMAGES.blackBob,
    },
    {
      title: 'Produção & Transformação',
      text: 'Resultados marcantes para quem quer sair do salão se sentindo poderosa.',
      image: IMAGES.brunetteFace,
    },
  ];

  const gallery = [
    { src: IMAGES.blondeReals, alt: 'Resultado loiro', label: 'Loiros reais' },
    { src: IMAGES.blondeBack, alt: 'Morena iluminada', label: 'Morena iluminada' },
    { src: IMAGES.blackBob, alt: 'Corte bob', label: 'Cortes modernos' },
    { src: IMAGES.smilingResult, alt: 'Unhas perfeitas', label: 'Unhas perfeitas' },
  ];

  return (
    <div className="min-h-screen bg-[#f4f0ea] text-[#221d1d]">
      <header className="sticky top-0 z-50 border-b border-[#ddcfc3]/80 bg-[#efe5d7]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5">
          <div className="flex items-center gap-3">
            <img src={IMAGES.logo} alt="Logo Beauty Center" className="h-12 w-12 rounded-full object-cover ring-2 ring-[#d8c4ae] sm:h-14 sm:w-14" />
            <div>
              <p className="text-xl font-semibold tracking-wide sm:text-2xl">Beauty Center</p>
              <p className="text-sm text-[#7d6b64]">Rio Branco • AC</p>
            </div>
          </div>
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#servicos" className="transition hover:opacity-70">Serviços</a>
            <a href="#galeria"  className="transition hover:opacity-70">Galeria</a>
            <a href="#contato"  className="transition hover:opacity-70">Contato</a>
          </nav>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-full bg-[#1a1717] px-5 py-3 text-center text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-[1.02] sm:w-auto"
          >
            Agendar no WhatsApp
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute left-2 top-10 h-20 w-20 rounded-full bg-[#cfae8d]/40 blur-2xl sm:left-10 sm:top-20 sm:h-28 sm:w-28" />
        <div className="absolute right-2 top-8 h-24 w-24 rounded-full bg-[#b89262]/30 blur-3xl sm:right-16 sm:top-16 sm:h-36 sm:w-36" />

        <div className="mx-auto grid max-w-7xl grid-cols-[0.95fr_1.05fr]">
          <motion.div
            className="bg-[#d8c4ae] px-4 py-12 sm:px-6 sm:py-14 md:px-12 md:py-24 lg:px-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={0}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#7d665d]">Bem-vinda</p>
            <h1 className="mt-6 max-w-xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Resultados reais, atendimento premium e beleza que chama atenção.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[#4f4541] sm:text-lg sm:leading-8">
              No Beauty Center, cada detalhe foi pensado para entregar uma experiência sofisticada,
              acolhedora e visualmente impecável — do ambiente ao resultado final.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#1a1717] px-6 py-4 text-base font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-[1.02] sm:w-auto sm:px-7"
              >
                Quero meu horário
              </a>
              <a
                href="#galeria"
                className="inline-flex w-full items-center justify-center rounded-full border border-[#9a7d61] px-6 py-4 text-base font-semibold text-[#3d322f] transition duration-300 hover:-translate-y-1 hover:bg-white/40 sm:w-auto sm:px-7"
              >
                Ver estilos
              </a>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#7d665d]">Atendimento</p>
                <p className="mt-1 text-lg font-semibold">Segunda a sábado</p>
                <p className="text-[#5d504b]">08h às 18h</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#7d665d]">Endereço</p>
                <p className="mt-1 text-lg font-semibold">R. Áureliano Lopes, 229</p>
                <p className="text-[#5d504b]">Manoel Julião, Rio Branco - AC</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative min-h-[340px] bg-[#efe7dd] sm:min-h-[420px] md:min-h-[520px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
          >
            <img src={IMAGES.hero} alt="Resultado Beauty Center" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/10" />
            <motion.div
              className="absolute bottom-4 left-4 right-4 rounded-3xl bg-white/85 px-4 py-3 backdrop-blur shadow-xl sm:bottom-8 sm:left-8 sm:right-auto sm:px-6 sm:py-4"
              animate={floatAnimation}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-[#8b6e57]">Beauty Center</p>
              <p className="mt-1 text-lg font-semibold">Seu novo visual começa aqui.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <div className="grid gap-8 grid-cols-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={index}
              whileHover={{ y: -6 }}
              className="text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#d7b9a7] text-2xl shadow-sm">
                ✦
              </div>
              <p className="mt-4 text-lg font-semibold">{item}</p>
              <p className="mt-2 text-sm leading-6 text-[#6d615b]">
                Atendimento com foco em técnica, beleza e experiência acolhedora.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="servicos" className="bg-[#e9dfd3] py-14 sm:py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b6e57]">Serviços</p>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">Especialidades que transformam sua imagem</h2>
          </motion.div>
          <div className="mt-12 grid gap-6 grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={index}
                whileHover={{ y: -8, scale: 1.01 }}
                className="overflow-hidden bg-[#9b7852] text-white shadow-xl"
              >
                <img src={service.image} alt={service.title} className="h-60 w-full object-cover transition duration-500 hover:scale-105 sm:h-72" />
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-semibold sm:text-2xl">{service.title}</h3>
                  <p className="mt-4 leading-7 text-white/90">{service.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 md:py-24">
        <motion.div
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b6e57]">Galeria</p>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">Veja o Beauty Center em ação</h2>
          </div>
          <a
            href="https://www.instagram.com/beauty.rbr/"
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-full border border-[#b79c86] px-6 py-3 text-center font-semibold text-[#3e3330] transition duration-300 hover:-translate-y-1 hover:bg-[#efe5d7] sm:w-auto"
          >
            Ver Instagram
          </a>
        </motion.div>

        <div className="mt-10 grid gap-4 grid-cols-4">
          {gallery.map((image, index) => (
            <motion.div
              key={image.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={index}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-lg ring-1 ring-black/5"
            >
              <div className="relative h-64 overflow-hidden sm:h-80">
                <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#8f6559]">
                    {image.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid gap-5 grid-cols-3">
          {REELS.map((video, index) => (
            <motion.div
              key={video.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={index}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-[2rem] bg-white shadow-lg ring-1 ring-black/5"
            >
              <button
                type="button"
                onClick={() => setActiveVideo(video)}
                className="relative block aspect-[9/16] w-full overflow-hidden bg-black text-left"
              >
                <img src={video.poster} alt={video.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/25" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1a1717] text-3xl text-white shadow-xl"
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    &#9658;
                  </motion.div>
                </div>
              </button>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-semibold">{video.title}</h3>
                <p className="mt-3 text-[#6e5d57]">{video.description}</p>
                <button
                  type="button"
                  onClick={() => setActiveVideo(video)}
                  className="mt-5 inline-flex rounded-full bg-[#1a1717] px-5 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1"
                >
                  Abrir vídeo
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {activeVideo ? (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative w-full max-w-md overflow-hidden rounded-[2rem] bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-lg font-bold text-[#221d1d]"
              >
                ×
              </button>
              <video
                key={activeVideo.link}
                src={activeVideo.videoSrc || activeVideo.link}
                poster={activeVideo.poster}
                controls
                autoPlay
                playsInline
                className="aspect-[9/16] w-full object-cover"
              />
            </div>
          </div>
        ) : null}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 md:py-24">
        <motion.div
          className="grid gap-8 grid-cols-[1.1fr_0.9fr] items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b6e57]">Ambiente Beauty Center</p>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">Um espaço bonito, elegante e pensado para você se sentir bem.</h2>
            <p className="mt-4 text-base leading-7 text-[#6e5d57] sm:text-lg sm:leading-8">
              Além dos resultados, o Beauty Center entrega uma experiência sofisticada, com ambiente acolhedor,
              fachada marcante e estrutura moderna para tornar cada atendimento ainda mais especial.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#1a1717] px-6 py-4 text-base font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-[1.02] sm:w-auto sm:px-7"
              >
                Agendar visita
              </a>
              <a
                href="https://www.instagram.com/beauty.rbr/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full border border-[#9a7d61] px-6 py-4 text-base font-semibold text-[#3d322f] transition duration-300 hover:-translate-y-1 hover:bg-white/40 sm:w-auto sm:px-7"
              >
                Ver mais no Instagram
              </a>
            </div>
          </div>

          <motion.div whileHover={{ y: -6 }} className="overflow-hidden rounded-[2rem] bg-white shadow-lg ring-1 ring-black/5">
            <img src={IMAGES.salonFront} alt="Ambiente externo do salão" className="h-full w-full object-cover" />
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-[#242120] bg-[radial-gradient(circle_at_top_left,_rgba(175,137,94,0.28),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(175,137,94,0.2),_transparent_30%)] py-16 sm:py-20 text-white">
        <motion.div
          className="mx-auto max-w-4xl px-4 text-center sm:px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d9b890]">Contato</p>
          <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl md:text-5xl">
            Você merece esse cuidado. Agende seu horário e viva a experiência Beauty Center.
          </h2>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-[#b89262] px-8 py-4 text-base font-semibold text-[#221d1d] shadow-xl transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
          >
            Falar no WhatsApp
          </a>
        </motion.div>
      </section>

      <footer id="contato" className="bg-[#f4f0ea] py-12 sm:py-14">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 grid-cols-3 md:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <img src={IMAGES.logo} alt="Logo Beauty Center" className="h-14 w-14 rounded-full object-cover ring-2 ring-[#d8c4ae]" />
              <p className="text-2xl font-semibold">Beauty Center</p>
            </div>
            <p className="mt-3 text-[#6d615b]">Beleza, autoestima e cuidado com toque sofisticado.</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Contato</p>
            <p className="mt-3 text-[#6d615b]">WhatsApp: (68) 99981-8153</p>
            <p className="text-[#6d615b]">Instagram: @beauty.rbr</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Endereço</p>
            <p className="mt-3 text-[#6d615b]">R. Áureliano Lopes, 229</p>
            <p className="text-[#6d615b]">Manoel Julião, Rio Branco - AC</p>
            <p className="text-[#6d615b]">CEP 69918-414</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
