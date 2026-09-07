import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  Menu,
  X,
  ZoomIn,
} from "lucide-react";
import "./styles.css";

const TEPAC_CONTACT_URL = "tel:+551155759488";

const nav = [
  ["TEPAC", "tepac"],
  ["Dr. Brandão", "dr-brandao"],
  ["Na prática", "na-pratica"],
  ["Para quem", "para-quem"],
  ["Experiência", "experiencia"],
  ["Como funciona", "como-funciona"],
  ["Dúvidas", "duvidas"],
  ["Participar", "participar"],
];

const timeline = [
  ["1984", "Formação em Biologia — UniAnchieta"],
  ["1990", "Farmacêutico-Bioquímico — USF"],
  ["1996", "Microbiologia Clínica e Micologia — UNESP"],
  ["1998", "Patologia Clínica — UMC"],
  ["2008", "TEAC/SBAC — Especialista em Análises Clínicas"],
  ["2012–2022", "Delegado da SBAC-SP"],
  ["2013", "Diretor e Conselheiro da ONA"],
  ["2017–2022", "Tesoureiro Adjunto da SBAC"],
  ["2018–2021", "Coordenador do GTTAC do CRF-SP"],
  ["2024–2025", "Diretor da Região Sudeste da SBAC"],
  ["2025", "Presidente do 50º CBAC"],
  ["2026", "Presidente do XII Sul Mineiro"],
];

const practical = [
  {
    n: "01",
    title: "Preparação",
    body: "Organização de materiais, equipamentos, bancada e identificação de amostras.",
    image: "./images/pratica-bancada.webp",
    alt: "Participantes em atividade prática na bancada do laboratório",
  },
  {
    n: "02",
    title: "Amostras",
    body: "Contato com recebimento, identificação, preparo, processamento e acompanhamento de análises.",
    image: "./images/equipamentos.webp",
    alt: "Rotina técnica com equipamentos e amostras laboratoriais",
  },
  {
    n: "03",
    title: "Técnicas e equipamentos",
    body: "Execução supervisionada de técnicas compatíveis e compreensão dos processos da rotina.",
    image: "./images/pratica-alunos.webp",
    alt: "Atividade de formação prática em análises clínicas",
  },
  {
    n: "04",
    title: "Qualidade e biossegurança",
    body: "Registros, conferências, controle de qualidade, EPIs, descarte, higienização e segurança.",
    image: "./images/equipe-wide.webp",
    alt: "Equipe do Laboratório Santa Helena em ambiente técnico",
  },
];

const faq = [
  [
    "Quem pode participar?",
    "Estudantes e profissionais de áreas compatíveis podem entrar em contato para verificar as modalidades disponíveis.",
  ],
  [
    "É um estágio?",
    "O TEPAC pode envolver estágio acadêmico e outras modalidades de capacitação prática. A modalidade depende do perfil do participante.",
  ],
  [
    "Preciso estar matriculado?",
    "Para estágio acadêmico, são aplicáveis os requisitos educacionais e a formalização correspondente. Profissionais formados devem consultar as modalidades de capacitação disponíveis.",
  ],
  [
    "Onde acontecem as atividades?",
    "Em ambiente de laboratório clínico, com organização, acompanhamento e responsabilidades compatíveis com cada participante.",
  ],
  [
    "Quantas horas posso fazer?",
    "A carga depende da modalidade. No estágio acadêmico, a jornada é organizada conforme as normas aplicáveis e o plano de atividades.",
  ],
  [
    "Vou realizar atividades práticas?",
    "O participante pode ter contato com diferentes etapas da rotina laboratorial, de acordo com sua formação, modalidade, plano e supervisão.",
  ],
  [
    "Como faço para participar?",
    "Entre em contato com a equipe do TEPAC e informe sua formação, curso e objetivo.",
  ],
];

function usePageState() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("tepac");
  const [showMobileCta, setShowMobileCta] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      const value = max > 0 ? scrollY / max : 0;
      setProgress(value);
      setShowMobileCta(value > 0.3);
    };
    const sections = nav
      .map(([, id]) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -58%", threshold: [0, 0.25, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);
  return { progress, active, showMobileCta };
}

function Header({ progress, active }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
      <header className="header">
        <a className="brand" href="#tepac" aria-label="TEPAC — início">
          <span>TEPAC</span>
          <small>Prática em Análises Clínicas</small>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {nav.map(([label, id]) => (
            <a
              key={id}
              className={active === id ? "active" : ""}
              href={`#${id}`}
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          className="menu-button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>
      {open && (
        <nav className="mobile-nav" aria-label="Navegação móvel">
          {nav.map(([label, id]) => (
            <a
              key={id}
              className={active === id ? "active" : ""}
              href={`#${id}`}
              onClick={() => setOpen(false)}
            >
              {label}
              <ArrowRight size={17} />
            </a>
          ))}
        </nav>
      )}
    </>
  );
}

function Eyebrow({ children, light = false }) {
  return <p className={`eyebrow ${light ? "light" : ""}`}>{children}</p>;
}
function Button({ href, children, outline = false }) {
  return (
    <a className={`button ${outline ? "outline" : ""}`} href={href}>
      {children}
      <ArrowRight size={17} />
    </a>
  );
}

function Reveal({ children, className = "", ...props }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${seen ? "seen" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

function App() {
  const { progress, active, showMobileCta } = usePageState();
  const [lightbox, setLightbox] = useState(null);
  return (
    <div>
      <Header progress={progress} active={active} />
      <main>
        <section id="tepac" className="hero section-anchor">
          <div className="hero-copy reveal-static">
            <Eyebrow>TEPAC · PRÁTICA EM ANÁLISES CLÍNICAS</Eyebrow>
            <h1>
              A teoria você já conhece. Agora é hora de ver o laboratório
              acontecer.
            </h1>
            <p>
              Vivencie a rotina de um laboratório clínico, desenvolva
              experiência prática e aproxime o conhecimento acadêmico da
              realidade profissional.
            </p>
            <div className="actions">
              <Button href="#na-pratica">Quero conhecer o TEPAC</Button>
              <Button href="#participar" outline>
                Quero participar
              </Button>
            </div>
          </div>
          <div className="hero-visual">
            <img
              src="./images/pratica-alunos.webp"
              width="900"
              height="1125"
              alt="Participantes vivenciando a rotina de análises clínicas"
              fetchPriority="high"
            />
            <span className="photo-label">
              Formação em ambiente laboratorial real
            </span>
          </div>
          <a className="scroll-cue" href="#dr-brandao">
            Conheça a experiência <ArrowDown size={16} />
          </a>
        </section>

        <div className="proof-strip" aria-label="Diferenciais">
          <span>Laboratório clínico real</span>
          <span>Prática supervisionada</span>
          <span>Experiência desde 1988</span>
        </div>

        <section
          id="dr-brandao"
          className="section section-anchor authority-intro"
        >
          <Reveal className="authority-copy">
            <Eyebrow>COM QUEM VOCÊ VAI APRENDER</Eyebrow>
            <h2>
              Décadas de laboratório, ensino e atuação profissional colocadas a
              serviço da sua formação prática.
            </h2>
            <p>
              O Dr. Paulo Brandão construiu sua trajetória entre laboratório
              clínico, docência, entidades profissionais, congressos e formação
              de profissionais da área.
            </p>
            <strong>Dr. Paulo Brandão</strong>
            <small>
              Biólogo · Farmacêutico-Bioquímico · Especialista em Análises
              Clínicas
            </small>
          </Reveal>
          <Reveal className="portrait-wrap">
            <img
              src="./images/paulo-evento-tratado.webp"
              width="1024"
              height="1536"
              loading="lazy"
              alt="Retrato profissional do Dr. Paulo Brandão em evento da área"
            />
            <span className="vertical-word">EXPERIÊNCIA</span>
          </Reveal>
        </section>

        <section className="section dark credentials">
          <Reveal>
            <Eyebrow light>TRAJETÓRIA QUE SE MOSTRA</Eyebrow>
            <h2>Fatos que ajudam a dimensionar uma carreira.</h2>
          </Reveal>
          <div className="credential-grid">
            <Reveal className="credential hero-credential">
              <b>TEAC / SBAC</b>
              <h3>Título de Especialista em Análises Clínicas</h3>
              <span>2008</span>
            </Reveal>
            <Reveal className="credential">
              <b>50º CBAC</b>
              <h3>Presidente do Congresso Brasileiro de Análises Clínicas</h3>
              <span>Campinas · 2025</span>
            </Reveal>
            <Reveal className="credential">
              <b>SBAC</b>
              <h3>Diretor da Região Sudeste</h3>
              <span>2024–2025</span>
            </Reveal>
            <Reveal className="credential">
              <b>DOCÊNCIA</b>
              <h3>Professor em capacitação e pós-graduação</h3>
              <span>IPESSP · Estácio de Sá · FEF</span>
            </Reveal>
          </div>
        </section>

        <section className="section timeline-section">
          <Reveal>
            <Eyebrow>UMA LINHA DE CONSISTÊNCIA</Eyebrow>
            <h2>Formação, laboratório e participação institucional.</h2>
          </Reveal>
          <ol className="timeline">
            {timeline.map(([year, text]) => (
              <li key={year}>
                <span>{year}</span>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="experiencia" className="section section-anchor statement">
          <Reveal>
            <span>1988</span>
            <h2>
              Uma formação prática dentro de uma história construída em
              laboratório.
            </h2>
            <p>
              A trajetória do Laboratório Santa Helena envolve décadas de
              experiência em análises clínicas e atendimento a diferentes
              contextos institucionais.
            </p>
          </Reveal>
        </section>

        <section className="section congress">
          <div className="congress-image">
            <img
              src="./images/congresso-portrait.webp"
              width="800"
              height="1100"
              loading="lazy"
              alt="Dr. Paulo Brandão discursando no 50º Congresso Brasileiro de Análises Clínicas"
            />
          </div>
          <Reveal className="congress-copy">
            <Eyebrow>ATUAÇÃO PRESENTE NA ÁREA</Eyebrow>
            <b>50º CBAC</b>
            <h2>Presidente · 2025</h2>
            <p>
              Uma trajetória que também passa por entidades profissionais,
              docência, congressos e formação continuada.
            </p>
            <img
              src="./images/congresso-wide.webp"
              width="900"
              height="600"
              loading="lazy"
              alt="Participação do Dr. Paulo Brandão em congresso de análises clínicas"
            />
          </Reveal>
        </section>

        <section id="na-pratica" className="section section-anchor practice">
          <Reveal>
            <Eyebrow>NA PRÁTICA</Eyebrow>
            <h2>O laboratório deixa de ser apenas conteúdo de aula.</h2>
            <p>
              No TEPAC, a formação busca aproximar o participante da rotina
              prática das Análises Clínicas, dentro das atividades permitidas
              para sua modalidade, formação e supervisão.
            </p>
          </Reveal>
          <div className="practice-flow">
            {practical.map((item, i) => (
              <Reveal
                key={item.n}
                className={`practice-row ${i % 2 ? "reverse" : ""}`}
              >
                <div className="practice-image">
                  <img
                    src={item.image}
                    width="900"
                    height="650"
                    loading="lazy"
                    alt={item.alt}
                  />
                </div>
                <div>
                  <span>{item.n}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="legal-note">
            As atividades realizadas dependem da modalidade, formação do
            participante, plano de atividades, supervisão profissional e
            requisitos acadêmicos aplicáveis.
          </p>
        </section>

        <section className="section dark quote">
          <Reveal>
            <h2>
              Não é sobre apenas observar. É sobre começar a entender como um
              laboratório realmente funciona.
            </h2>
          </Reveal>
        </section>

        <section className="section development">
          <Reveal>
            <Eyebrow>O QUE VOCÊ PODE DESENVOLVER</Eyebrow>
            <h2>Experiência que aproxima você da realidade profissional.</h2>
          </Reveal>
          <ul>
            {[
              "Familiaridade com a rotina laboratorial",
              "Organização e atenção",
              "Responsabilidade e postura profissional",
              "Biossegurança",
              "Compreensão do fluxo de trabalho",
              "Contato com técnicas e equipamentos",
              "Integração entre teoria e prática",
            ].map((x, i) => (
              <li key={x}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {x}
              </li>
            ))}
          </ul>
        </section>

        <section className="section institutions">
          <Reveal>
            <Eyebrow>QUEM JÁ PASSOU POR AQUI</Eyebrow>
            <h2>
              Estudantes de diferentes instituições já trouxeram sua formação
              para a prática.
            </h2>
            <p>
              Participantes oriundos de diferentes instituições de ensino já
              vivenciaram experiências práticas no ambiente do Laboratório Santa
              Helena.
            </p>
          </Reveal>
          <div className="institution-list">
            {[
              "UNINOVE",
              "UNICESUMAR",
              "UNIP",
              "UNISA",
              "Universidade São Judas",
              "UNG",
              "UNISUL",
            ].map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
          <p className="legal-note">
            As instituições apresentadas representam instituições de origem de
            participantes. A menção não significa parceria, convênio ou vínculo
            institucional vigente.
          </p>
        </section>

        <section className="section gallery">
          <Reveal>
            <Eyebrow>GALERIA REAL</Eyebrow>
            <h2>Veja de perto a experiência.</h2>
          </Reveal>
          <div className="gallery-grid">
            {[
              [
                "./images/equipe-grupo.webp",
                "Equipe e participantes no laboratório",
              ],
              ["./images/pratica-bancada.webp", "Formação prática na bancada"],
              [
                "./images/equipamentos.webp",
                "Contato supervisionado com equipamentos",
              ],
              ["./images/congresso-wide.webp", "Dr. Paulo em congresso da área"],
              [
                "./images/equipe-wide.webp",
                "Equipe do Laboratório Santa Helena",
              ],
            ].map(([src, alt], i) => (
              <button
                key={src}
                className={`gallery-item g${i + 1}`}
                onClick={() => setLightbox({ src, alt })}
                aria-label={`Ampliar: ${alt}`}
              >
                <img src={src} loading="lazy" alt={alt} />
                <ZoomIn size={20} />
              </button>
            ))}
          </div>
        </section>

        <section id="para-quem" className="section section-anchor audience">
          <Reveal>
            <Eyebrow>PARA QUEM É</Eyebrow>
            <h2>Para quem quer transformar teoria em experiência.</h2>
          </Reveal>
          <div className="audience-grid">
            <Reveal>
              <span>01</span>
              <h3>Estágio acadêmico</h3>
              <p>
                Para estudantes regularmente matriculados em cursos compatíveis
                com atividades laboratoriais, conforme análise da instituição,
                modalidade, documentação e plano.
              </p>
              <ul>
                {[
                  "Biomedicina",
                  "Farmácia",
                  "Ciências Biológicas",
                  "Cursos técnicos relacionados",
                  "Outras áreas da saúde compatíveis",
                ].map((x) => (
                  <li key={x}>
                    <Check size={16} />
                    {x}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal>
              <span>02</span>
              <h3>Capacitação prática</h3>
              <p>
                Para pessoas já graduadas ou profissionais que desejam
                aprofundar o contato prático com a rotina laboratorial, conforme
                as modalidades oferecidas pelo TEPAC.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="como-funciona" className="section section-anchor journey">
          <Reveal>
            <Eyebrow>COMO FUNCIONA</Eyebrow>
            <h2>Do interesse à experiência prática.</h2>
          </Reveal>
          <ol>
            {[
              ["01", "Interesse", "Você informa sua formação e objetivo."],
              [
                "02",
                "Avaliação",
                "A equipe verifica modalidade e compatibilidade.",
              ],
              [
                "03",
                "Formalização",
                "São organizados os requisitos aplicáveis.",
              ],
              [
                "04",
                "Experiência prática",
                "As atividades seguem plano e supervisão.",
              ],
              [
                "05",
                "Conclusão",
                "São realizados os procedimentos da modalidade.",
              ],
            ].map(([n, t, d]) => (
              <li key={n}>
                <span>{n}</span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="hours">
            <div>
              <strong>6h</strong>
              <span>máximo diário</span>
            </div>
            <div>
              <strong>30h</strong>
              <span>máximo semanal</span>
            </div>
            <p>
              A jornada efetiva depende da modalidade, plano de atividades e
              formalização acadêmica aplicável.
            </p>
          </div>
        </section>

        <section className="section real-lab">
          <div>
            <img
              src="./images/pratica-bancada.webp"
              width="1000"
              height="700"
              loading="lazy"
              alt="Ambiente real da bancada do Laboratório Santa Helena"
            />
          </div>
          <Reveal>
            <Eyebrow>AMBIENTE LABORATORIAL</Eyebrow>
            <h2>Você não aprende em uma simulação de laboratório.</h2>
            <p>
              As atividades acontecem em ambiente laboratorial real, com
              organização, acompanhamento e responsabilidades compatíveis com
              cada participante.
            </p>
          </Reveal>
        </section>

        <section id="duvidas" className="section section-anchor faq">
          <Reveal>
            <Eyebrow>DÚVIDAS</Eyebrow>
            <h2>Antes de dar o próximo passo.</h2>
          </Reveal>
          <div>
            {faq.map(([q, a], i) => (
              <Faq key={q} q={q} a={a} initiallyOpen={i === 0} />
            ))}
          </div>
        </section>

        <section id="participar" className="final-cta section-anchor">
          <img
            src="./images/equipe-wide.webp"
            loading="lazy"
            alt="Equipe e participantes do Laboratório Santa Helena"
          />
          <div>
            <Eyebrow light>SEU PRÓXIMO PASSO</Eyebrow>
            <h2>
              A teoria trouxe você até aqui. A prática pode ser o próximo passo.
            </h2>
            <p>
              Conte para nossa equipe o que você estuda ou sua formação e
              descubra qual modalidade pode fazer sentido para você.
            </p>
            <Button href={TEPAC_CONTACT_URL}>Quero participar do TEPAC</Button>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-brand">
          <strong>TEPAC</strong>
          <span>Treinamentos Especializados Práticos em Análises Clínicas</span>
        </div>
        <p>Relacionado ao Laboratório Santa Helena · São Paulo</p>
        <nav>
          <a href="#tepac">TEPAC</a>
          <a href="#dr-brandao">Dr. Paulo Brandão</a>
          <a href={TEPAC_CONTACT_URL}>Contato</a>
        </nav>
      </footer>
      {showMobileCta && active !== "participar" && (
        <a className="mobile-cta" href={TEPAC_CONTACT_URL}>
          Quero participar <ArrowRight size={16} />
        </a>
      )}
      {lightbox && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={() => setLightbox(null)}
        >
          <button aria-label="Fechar imagem">
            <X />
          </button>
          <img src={lightbox.src} alt={lightbox.alt} />
        </div>
      )}
    </div>
  );
}

function Faq({ q, a, initiallyOpen }) {
  const [open, setOpen] = useState(initiallyOpen);
  return (
    <article className="faq-item">
      <button onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <ChevronDown className={open ? "rotate" : ""} />
      </button>
      {open && <p>{a}</p>}
    </article>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// VALIDAR FORMALIZAÇÃO DA CAPACITAÇÃO PARA GRADUADOS COM RESPONSÁVEL PELO PROGRAMA
