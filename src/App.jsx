import { useEffect, useRef, useState } from 'react'
import { profile, projects, small, contacts } from './data'

function Hero() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const move = (e) => {
      const r = el.getBoundingClientRect()
      el.style.setProperty('--x', e.clientX - r.left + 'px')
      el.style.setProperty('--y', e.clientY - r.top + 'px')
    }
    el.addEventListener('pointermove', move)
    return () => el.removeEventListener('pointermove', move)
  }, [])

  return (
    <header className="hero" ref={ref}>
      <div className="grid" />
      <div className="grid hot" />
      <nav>
        <a href="#projects">Projects</a>
        <a href="#about">About me</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="hero-body">
        <p className="role">{profile.role}</p>
        <h1 aria-label={profile.name}>
          {profile.name.split(' ').map((w, i) => (
            <span className="word" key={i} aria-hidden="true">
              {[...w].map((c, j) => (
                <span key={j} style={{ '--d': `${(i * 6 + j) * 55}ms` }}>{c}</span>
              ))}
            </span>
          ))}
        </h1>
        <p className="intro">{profile.intro}</p>
      </div>
    </header>
  )
}
function Gallery({ images }) {
  if (!images || !images.length) return null
  return (
    <div className="gallery">
      {images.map((src) => {
        const url = import.meta.env.BASE_URL + src
        return (
          <a key={src} href={url} target="_blank" rel="noreferrer">
            <img src={url} alt="" loading="lazy" />
          </a>
        )
      })}
    </div>
  )
}
function Project({ p, open, onToggle, index }) {
  return (
    <article className={'proj' + (open ? ' open' : '')}>
      <button className="proj-head" onClick={onToggle} aria-expanded={open}>
        <span className="proj-title">{p.title}</span>
        <span className="proj-tag">{p.tag}</span>
        <span className="plus" aria-hidden="true" />
      </button>
      <div className="proj-panel">
        <div className="proj-inner">
          <div className="proj-cols">
            <div>
              <p className="status">{p.status}</p>
              <p>{p.text}</p>
              <ul className="points">{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div>
              <div className="chips">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
              <div className="links">
                {p.links.map((l) => <a key={l.label} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>)}
              </div>
            </div>
          </div>
          <Gallery images={p.images} />
        </div>
      </div>
    </article>
  )
}

export default function App() {
  const [open, setOpen] = useState(0)
  return (
    <>
      <Hero />
      <main>
        <section id="projects">
          <h2>Projects</h2>
          {projects.map((p, i) => (
            <Project key={p.title} p={p} index={i} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
          <h3>Smaller projects</h3>
          <div className="small">
            {small.map((s) => (
              <a className="card" key={s.title} href={s.href} target="_blank" rel="noreferrer">
                <strong>{s.title}</strong>
                <p>{s.text}</p>
                <div className="chips">{s.stack.map((t) => <span key={t}>{t}</span>)}</div>
              </a>
            ))}
          </div>
        </section>

        <section id="about" className="about">
          <h2>About me</h2>
          <div>
            {profile.about.map((t, i) => <p key={i}>{t}</p>)}
            <div className="chips big">{profile.skills.map((s) => <span key={s}>{s}</span>)}</div>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <div className="contact-list">
            {contacts.map((c) => <a key={c.label} href={c.href} target="_blank" rel="noreferrer">{c.label}</a>)}
          </div>
        </section>
      </main>
      <footer>© {new Date().getFullYear()} {profile.name}</footer>
    </>
  )
}
