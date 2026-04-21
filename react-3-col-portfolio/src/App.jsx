import { useMemo, useState } from "react";

const projects = [
  {
    id: 1,
    name: "Project Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.",
  },
  {
    id: 2,
    name: "Project Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.",
  },
  {
    id: 3,
    name: "Project Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="topbar-inner container">
        <a className="brand" href="https://startbootstrap.com" target="_blank" rel="noreferrer">
          Start Bootstrap
        </a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav-links ${open ? "is-open" : ""}`}>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function PortfolioCard({ item }) {
  return (
    <article className="portfolio-item">
      <a href="#project-link" aria-label={`${item.name} preview`}>
        <img
          className="portfolio-image"
          src={`https://placehold.co/700x400?text=Project+${item.id}`}
          alt={`${item.name} ${item.id}`}
        />
      </a>
      <h3>
        <a href="#project-link">{item.name}</a>
      </h3>
      <p>{item.description}</p>
    </article>
  );
}

export default function App() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <>
      <Navbar />
      <main className="container page-content">
        <section className="page-header-row">
          <h1>
            3 Col Portfolio <small>Showcase Your Work</small>
          </h1>
        </section>

        <section className="portfolio-grid" aria-label="Portfolio items">
          {projects.map((project) => (
            <PortfolioCard key={project.id} item={project} />
          ))}
        </section>

        <hr />

        <nav className="pager" aria-label="Pagination">
          <a href="#">&laquo;</a>
          <a className="is-active" href="#">
            1
          </a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">&raquo;</a>
        </nav>
      </main>

      <footer className="container footer">
        <hr />
        <p>Copyright &copy; Company {year}</p>
      </footer>
    </>
  );
}
