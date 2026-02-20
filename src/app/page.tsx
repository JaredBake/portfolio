import Link from "next/link";
import content from "@/content/portfolio.json";

type SocialLink = { label: string; href: string };
type ProjectLink = { label: string; href: string };

type Portfolio = {
  profile: {
    name: string;
    role: string;
    headline: string;
    summary: string;
    about: string;
    location: string;
    email: string;
    contactBlurb: string;
    highlights: string[];
    links: SocialLink[];
  };
  skills: string[];
  experience: Array<{
    title: string;
    company: string;
    location: string;
    start: string;
    end: string;
    summary: string;
  }>;
  projects: Array<{
    name: string;
    year?: string;
    description: string;
    tags?: string[];
    links?: ProjectLink[];
  }>;
};

const data = content as Portfolio;

function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-10">
      <div className="mx-auto w-full max-w-5xl px-5">
        <div className="mb-4 grid gap-1">
          <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
          {description ? (
            <p className="max-w-3xl text-sm text-slate-300">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">{children}</div>;
}

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <div className="min-h-screen">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:rounded-xl focus:bg-slate-900 focus:px-3 focus:py-2 focus:text-sm focus:outline-none focus:ring-4 focus:ring-sky-500/30"
        href="#main"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-3 px-5">
          <Link href="#top" className="inline-flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-xl border border-slate-800 bg-gradient-to-br from-sky-500/25 to-violet-500/20">
              ◆
            </span>
            <span className="font-semibold tracking-tight">{data.profile.name}</span>
          </Link>
          <nav className="hidden flex-wrap gap-3 text-sm text-slate-300 sm:flex">
            <Link className="rounded-xl px-3 py-2 hover:bg-slate-900/60 hover:text-slate-100" href="#about">
              About
            </Link>
            <Link className="rounded-xl px-3 py-2 hover:bg-slate-900/60 hover:text-slate-100" href="#experience">
              Experience
            </Link>
            <Link className="rounded-xl px-3 py-2 hover:bg-slate-900/60 hover:text-slate-100" href="#projects">
              Projects
            </Link>
            <Link className="rounded-xl px-3 py-2 hover:bg-slate-900/60 hover:text-slate-100" href="#contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="top" className="py-14">
          <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 px-5 md:grid-cols-[1.35fr_0.65fr]">
            <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/70 to-slate-900/30 p-6">
              <p className="mb-2 text-sm text-slate-300">{data.profile.role}</p>
              <h1 className="mb-3 text-3xl font-semibold tracking-tight sm:text-4xl">{data.profile.headline}</h1>
              <p className="mb-5 max-w-2xl text-slate-200/90">{data.profile.summary}</p>

              <div className="flex flex-wrap gap-2">
                <Link
                  href="#projects"
                  className="inline-flex h-10 items-center justify-center rounded-xl border border-sky-500/30 bg-gradient-to-br from-sky-500/20 to-violet-500/10 px-4 text-sm font-semibold hover:ring-4 hover:ring-sky-500/25"
                >
                  View projects
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex h-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/40 px-4 text-sm font-semibold text-slate-100 hover:ring-4 hover:ring-slate-400/10"
                >
                  Get in touch
                </Link>
              </div>

              <ul className="mt-4 flex flex-wrap gap-2">
                {data.profile.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target={l.href.startsWith("mailto:") ? "_self" : "_blank"}
                      rel={l.href.startsWith("mailto:") ? undefined : "noreferrer"}
                      className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/30 px-3 py-1 text-sm text-slate-300 hover:text-slate-100 hover:ring-4 hover:ring-slate-400/10"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <Card>
              <h2 className="mb-2 text-sm font-semibold text-slate-200">Highlights</h2>
              <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
                {data.profile.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        <Section id="about" title="About" description={data.profile.about}>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((s) => (
              <span key={s} className="rounded-full border border-slate-800 bg-slate-900/30 px-3 py-1 text-sm text-slate-200">
                {s}
              </span>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience" description="Recent roles and impact.">
          <div className="grid gap-3">
            {data.experience.map((x) => (
              <Card key={`${x.title}-${x.company}-${x.start}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-100">
                    {x.title} · {x.company}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {x.start} — {x.end} · {x.location}
                  </p>
                </div>
                <p className="mt-2 text-sm text-slate-200/90">{x.summary}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects" description="Selected work — shipped products, prototypes, and experiments.">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data.projects.map((p) => (
              <Card key={`${p.name}-${p.year ?? ""}`}>
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-100">{p.name}</h3>
                  {p.year ? <span className="text-xs text-slate-400">{p.year}</span> : null}
                </div>
                <p className="mt-2 text-sm text-slate-200/90">{p.description}</p>
                {p.tags?.length ? (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li key={t} className="rounded-full border border-slate-800 bg-slate-900/30 px-2.5 py-0.5 text-xs text-slate-300">
                        {t}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {p.links?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-slate-800 bg-slate-900/30 px-3 py-1 text-sm text-slate-300 hover:text-slate-100 hover:ring-4 hover:ring-slate-400/10"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </Card>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact" description={data.profile.contactBlurb}>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <Card>
              <h3 className="text-sm font-semibold text-slate-100">Reach out</h3>
              <p className="mt-2 text-sm text-slate-200/90">
                Email:{" "}
                <a className="underline decoration-slate-500 underline-offset-4" href={`mailto:${data.profile.email}`}>
                  {data.profile.email}
                </a>
              </p>
              <p className="mt-2 text-sm text-slate-200/90">Location: {data.profile.location}</p>
              <p className="mt-3 text-xs text-slate-400">
                Update content in{" "}
                <code className="rounded bg-slate-900/60 px-1 py-0.5">src/content/portfolio.json</code>.
              </p>
            </Card>
            <Card>
              <h3 className="text-sm font-semibold text-slate-100">Resume</h3>
              <p className="mt-2 text-sm text-slate-200/90">
                Add a PDF at <code className="rounded bg-slate-900/60 px-1 py-0.5">public/resume.pdf</code>.
              </p>
              <a
                className="mt-3 inline-flex h-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/40 px-4 text-sm font-semibold hover:ring-4 hover:ring-slate-400/10"
                href="/resume.pdf"
              >
                Open resume
              </a>
            </Card>
          </div>
        </Section>
      </main>

      <footer className="border-t border-slate-800 py-6">
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-3 px-5 text-sm text-slate-400">
          <p>
            {data.profile.name} · {year}
          </p>
          <Link className="rounded-xl border border-slate-800 px-3 py-2 hover:bg-slate-900/50" href="#top">
            Back to top
          </Link>
        </div>
      </footer>
    </div>
  );
}
