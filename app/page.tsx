"use client";

import { FormEvent, useState } from "react";

const services = [
  ["AI Consultation", "Helping clients understand and choose the right AI tools and strategies."],
  ["AI Setup & Integration", "Setting up AI systems, workflows, automation, and AI-powered solutions."],
  ["AI Agent Solutions", "Building AI-powered agents that assist in daily operations."],
  ["AI Education & Training", "Teaching practical AI usage through workshops, consulting, and guided learning."],
  ["AI Business Incubation", "Supporting entrepreneurs and startups building AI-related businesses."],
  ["AI Content & Automation", "Using AI to improve productivity, marketing, communication, and operations."],
];

const detailedServices = [
  {
    title: "AI Consultation",
    text: "We help clients understand the AI landscape and identify the right tools, workflows, and opportunities based on their goals and business needs.",
  },
  {
    title: "AI Setup & Integration",
    text: "We assist businesses and individuals in setting up AI tools, automation systems, AI agents, and AI-powered workflows.",
  },
  {
    title: "AI Agent Solutions",
    text: "AI-powered agents for customer support, business operations, content creation, workflow automation, data management, and research assistance.",
  },
  {
    title: "AI Education & Training",
    text: "Practical AI learning sessions for businesses, entrepreneurs, teams, individuals, and beginners entering the AI space.",
  },
  {
    title: "AI Business Incubation",
    text: "Support across AI business planning, strategy guidance, product positioning, workflow development, automation setup, business models, tool selection, and growth planning.",
  },
  {
    title: "AI Automation & Content",
    text: "Reduce repetitive tasks and strengthen content creation, social media support, marketing assistance, branding ideas, and AI-generated workflows.",
  },
];

const founders = [
  {
    name: "Kin",
    role: "Long-term business development, ecosystem building, and future AI opportunities.",
    url: "https://www.linkedin.com/in/kinfams341534/",
    image: "/founders/kin.jpg",
  },
  {
    name: "Jay",
    role: "Operations, business strategy, and practical implementation of AI systems.",
    url: "https://www.linkedin.com/in/jay-koh/",
    image: "/founders/jay.jpg",
  },
  {
    name: "AC",
    role: "Technology adoption, AI solutions, and helping businesses transition into AI usage.",
    url: "https://www.linkedin.com/in/aloycwl/",
    image: "/founders/ac.jpg",
  },
];

const future = [
  "AI Agent Marketplaces",
  "AI Education Platforms",
  "AI Automation Services",
  "AI Business Incubation",
  "AI Consulting Networks",
  "AI Productivity Systems",
  "AI Community Building",
];

const benefits = [
  "Save time",
  "Improve productivity",
  "Create opportunities",
  "Build businesses",
  "Learn faster",
  "Work smarter",
];

const useCases = [
  {
    title: "Marketing Team Upgrade",
    outcome: "Turn one marketer into a full content engine",
    text: "Plan campaigns, generate content angles, draft captions, repurpose long-form material, and build follow-up sequences without adding more tools or headcount.",
    metric: "More output, less agency dependency",
  },
  {
    title: "One-Man-Operation Business",
    outcome: "Run lean without looking small",
    text: "Set up AI agents for enquiries, admin, content, research, proposals, and customer follow-ups so founders can operate with the leverage of a larger team.",
    metric: "Founder-led OMO systems",
  },
  {
    title: "Staff Replacement Support",
    outcome: "Reduce repetitive manpower needs",
    text: "Automate repeatable tasks like first-level customer replies, data entry, report drafting, appointment reminders, FAQ handling, and document preparation.",
    metric: "Replace hours, not judgement",
  },
  {
    title: "Less Licensing Headache",
    outcome: "Simplify the AI tool stack",
    text: "Choose the right AI tools, remove overlapping subscriptions, create standard workflows, and train teams to use fewer platforms with better results.",
    metric: "Cleaner stack, lower waste",
  },
  {
    title: "Sales & Enquiry Assistant",
    outcome: "Never let warm leads go cold",
    text: "Create AI-assisted scripts, lead qualification flows, reply templates, proposal drafts, and follow-up reminders that keep prospects moving.",
    metric: "Faster response cycles",
  },
  {
    title: "Management Operating System",
    outcome: "Make daily operations easier to control",
    text: "Build dashboards, SOP assistants, meeting summaries, task trackers, and internal knowledge systems so the business runs with clearer visibility.",
    metric: "Better control with fewer meetings",
  },
];

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.25 10.44 22v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.77l-.44 2.91h-2.33V22C18.34 21.25 22 17.08 22 12.06Z" />
    </svg>
  );
}

export default function Home() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      setStatus("sent");
      form.reset();
      return;
    }

    const data = await response.json().catch(() => ({}));
    setError(data.error || "Something went wrong. Please try again.");
    setStatus("error");
  }

  return (
    <main>
      <nav className="nav">
        <a href="#home" className="brand" aria-label="AIMS home">
          <img src="/aims-logo-transparent.png" alt="AIMS logo" />
        </a>
        <div className="navLinks">
          <a href="#services">Services</a>
          <a href="#use-cases">Use Cases</a>
          <a href="#about">About</a>
          <a href="#founders">Founders</a>
          <a href="#contact" className="navCta">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero section">
        <div className="orb orbOne" />
        <div className="orb orbTwo" />
        <div className="heroGrid">
          <div className="heroCopy reveal">
            <p className="eyebrow">A.I. Management Services</p>
            <h1>Helping Businesses and Individuals Use AI With Confidence</h1>
            <p className="lead">
              AIMS is an AI management and consulting company that helps businesses, entrepreneurs,
              professionals, and individuals discover, manage, and implement practical AI solutions for real-world use.
            </p>
            <p>
              We help clients understand AI, choose the right tools, build AI systems, automate workflows,
              and create practical AI strategies without needing to become technology experts themselves.
            </p>
            <div className="heroActions">
              <a className="primaryButton" href="#contact">Start Your AI Journey</a>
              <a className="secondaryButton" href="#services">Explore Services</a>
            </div>
          </div>

          <div className="commandPanel reveal delayOne" aria-label="AIMS capability panel">
            <div className="panelHeader">
              <span />
              <span />
              <span />
              <strong>AIMS Operating Layer</strong>
            </div>
            <div className="panelImage">
              <img src="/visuals/ai-interface.jpg" alt="AIMS interface visualization" />
            </div>
            <div className="signalGrid">
              {services.map(([title, text], index) => (
                <article key={title} className="signalCard" style={{ "--i": index } as React.CSSProperties}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section splitSection">
        <div className="sectionIntro reveal">
          <p className="eyebrow">About AIMS</p>
          <h2>The Future Will Belong To Those Who Understand AI</h2>
        </div>
        <div className="copyStack reveal delayOne">
          <p>
            Artificial Intelligence is no longer a future concept. It is becoming part of daily business,
            communication, operations, and decision-making.
          </p>
          <p>
            AIMS was founded to help people navigate this transition in a practical and manageable way.
            We believe AI should not only belong to large technology companies or technical experts.
          </p>
          <div className="benefitGrid">
            {benefits.map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="insightImageCard">
            <img src="/visuals/ai-operations.jpg" alt="AIMS operations visualization" />
          </div>
        </div>
      </section>

      <section className="section missionVision">
        <article className="glassCard reveal">
          <p className="eyebrow">Our Mission</p>
          <h2>To Help People Use AI With Confidence</h2>
          <p>
            Our mission is to make AI easier to understand, easier to use, and easier to manage. AIMS focuses
            on practical implementation, real-world solutions, and long-term support.
          </p>
        </article>
        <article className="glassCard reveal delayOne">
          <p className="eyebrow">Our Vision</p>
          <h2>To Become A Trusted AI Management Partner</h2>
          <p>
            We believe every business will have its own AI system, every entrepreneur will use AI tools,
            every professional will work alongside AI, and every company will require AI management.
          </p>
        </article>
      </section>

      <section id="founders" className="section foundersSection">
        <div className="sectionIntro centered reveal">
          <p className="eyebrow">Founders</p>
          <h2>Built From Different Industries. United By One Vision.</h2>
          <p>
            AIMS was founded by three entrepreneurs from different business backgrounds who believe AI should become
            a practical tool that helps ordinary people improve productivity, create opportunities, save time,
            and build better businesses.
          </p>
        </div>
        <div className="founderGrid">
          {founders.map((founder, index) => (
            <a className="founderCard reveal" style={{ "--i": index } as React.CSSProperties} key={founder.name} href={founder.url} target="_blank" rel="noreferrer">
              <div className="avatar"><img src={founder.image} alt={`${founder.name} profile`} /></div>
              <h3>{founder.name}</h3>
              <p>{founder.role}</p>
              <span>View LinkedIn →</span>
            </a>
          ))}
        </div>
      </section>

      <section id="services" className="section servicesSection">
        <div className="sectionIntro reveal">
          <p className="eyebrow">Services</p>
          <h2>Practical AI Systems For Real-World Operations</h2>
        </div>
        <div className="serviceGrid">
          <div className="serviceImageCard">
            <img src="/visuals/ai-meeting.jpg" alt="AI meeting visualization" />
            <div className="serviceImageOverlay">
              <span>Implementation Layer</span>
              <h3>From AI ideas to operational systems</h3>
              <p>We turn scattered AI tools into guided workflows, agents, and automation that teams can actually use.</p>
            </div>
          </div>
          {detailedServices.map((service, index) => (
            <article className="serviceCard reveal" style={{ "--i": index } as React.CSSProperties} key={service.title}>
              <div className="serviceNumber">{String(index + 1).padStart(2, "0")}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section whySection">
        <div className="sectionIntro reveal">
          <p className="eyebrow">Why Choose AIMS</p>
          <h2>AI Adoption Without The Noise</h2>
        </div>
        <div className="whyGrid reveal delayOne">
          {[
            "Practical AI Focus",
            "Save Time",
            "Beginner Friendly",
            "Long-Term Support",
            "Real Business Understanding",
          ].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section id="use-cases" className="section useCaseSection">
        <div className="sectionIntro centered reveal">
          <p className="eyebrow">Use Cases</p>
          <h2>What AIMS Can Turn AI Into For Your Business</h2>
          <p>
            We do not sell AI hype. We design practical operating systems that help small teams produce more,
            reduce repetitive work, and run with the leverage of a much larger company.
          </p>
        </div>
        <div className="useCaseGrid">
          {useCases.map((useCase, index) => (
            <article className="useCaseCard reveal" style={{ "--i": index } as React.CSSProperties} key={useCase.title}>
              <div className="useCaseTopline">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{useCase.metric}</strong>
              </div>
              <h3>{useCase.title}</h3>
              <h4>{useCase.outcome}</h4>
              <p>{useCase.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section futureSection">
        <div className="futurePanel reveal">
          <p className="eyebrow">Future Direction</p>
          <h2>Building The Future AI Ecosystem</h2>
          <p>
            AIMS plans to expand into a connected ecosystem of AI services, education, automation, consulting,
            productivity systems, and community building.
          </p>
          <div className="futureList">
            {future.map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="futureVisual">
            <img src="/visuals/ai-datacenter.jpg" alt="Future AI ecosystem visualization" />
          </div>
        </div>
      </section>

      <section id="contact" className="section contactSection">
        <div className="contactCopy reveal">
          <p className="eyebrow">Contact Us</p>
          <h2>Let’s Build Your AI Future Together</h2>
          <p>
            Whether you are exploring AI for your business, your career, or your future opportunities, AIMS is here to help.
          </p>
          <div className="contactLinks" aria-label="AIMS contact links">
            <a href="mailto:enquiries@aims-sg.com" className="contactLink">enquiries@aims-sg.com</a>
            <a href="https://maps.google.com/?q=29%20Carpenter%20St%20Singapore%20059923" className="contactLink" target="_blank" rel="noreferrer">
              29 Carpenter St, Singapore 059923
            </a>
            <a href="https://www.facebook.com/profile.php?id=61589876739695" className="contactIconLink" target="_blank" rel="noreferrer" aria-label="AIMS on Facebook">
              <FacebookIcon />
              <span>Facebook</span>
            </a>
          </div>
          <p className="tagline">AIMS — Helping Businesses and Individuals Use AI With Confidence.</p>
        </div>

        <form className="contactForm reveal delayOne" onSubmit={submitContact}>
          <label>
            Name
            <input name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="you@example.com" required />
          </label>
          <label>
            Company
            <input name="company" placeholder="Company or project name" />
          </label>
          <label>
            What do you need help with?
            <select name="interest" defaultValue="AI Consultation">
              <option>AI Consultation</option>
              <option>AI Setup & Integration</option>
              <option>AI Agent Solutions</option>
              <option>AI Education & Training</option>
              <option>AI Business Incubation</option>
              <option>AI Automation</option>
            </select>
          </label>
          <label className="fullWidth">
            Message
            <textarea name="message" placeholder="Tell us what you want to build, improve, or automate." rows={5} required />
          </label>
          <button className="primaryButton fullWidth" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Enquiry"}
          </button>
          {status === "sent" && <p className="success">Thank you. Your enquiry has been sent.</p>}
          {status === "error" && <p className="error">{error}</p>}
        </form>
      </section>

      <footer>
        <img src="/aims-logo-transparent.png" alt="AIMS logo" />
        <p>© {new Date().getFullYear()} AIMS — A.I. Management Services. All rights reserved.</p>
      </footer>
    </main>
  );
}
