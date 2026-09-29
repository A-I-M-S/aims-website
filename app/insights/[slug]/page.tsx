import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Breadcrumbs,
  ProjectCta,
  SectionHeading,
  ServiceCard,
} from "../../../components/sections";
import { BreadcrumbSchema, JsonLd } from "../../../components/json-ld";
import { Icon } from "../../../components/icon";
import { getInsight, insights } from "../../../lib/insights";
import { services } from "../../../lib/services";
import { pageMetadata, SITE_URL, SITE_NAME } from "../../../lib/site";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const insight = getInsight((await params).slug);
  if (!insight) notFound();
  const metadata = pageMetadata(
    insight.title,
    insight.description,
    `/insights/${insight.slug}`,
  );
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: insight.date,
      modifiedTime: insight.date,
      authors: [SITE_NAME],
    },
  };
}

export default async function InsightPage({ params }: Props) {
  const insight = getInsight((await params).slug);
  if (!insight) notFound();
  return (
    <>
      <article>
        <header className="container page-intro article-intro">
          <Breadcrumbs
            items={[
              { name: "Insights", href: "/insights" },
              { name: insight.category },
            ]}
          />
          <p className="eyebrow">
            <span />
            {insight.category}
          </p>
          <h1>{insight.title}</h1>
          <p className="page-lead">{insight.description}</p>
          <div className="article-byline">
            <span>By AIMS</span>
            <span>{insight.readTime}</span>
            <time dateTime={insight.date}>29 September 2026</time>
          </div>
        </header>
        <div className="container article-grid">
          <aside className="article-sidebar">
            <nav aria-label="In this guide">
              <span className="mono">IN THIS GUIDE</span>
              {insight.sections.map((section, index) => (
                <a key={section.id} href={`#${section.id}`}>
                  <span className="mono">0{index + 1}</span>
                  {section.title}
                </a>
              ))}
            </nav>
            <Link href="/contact" className="text-link">
              Discuss your requirements
              <Icon name="arrow" />
            </Link>
          </aside>
          <div className="article-body">
            <div className="article-takeaway">
              <span className="mono">THE USEFUL DISTINCTION</span>
              <p>{insight.takeaway}</p>
            </div>
            {insight.sections.map((section) => (
              <section id={section.id} key={section.id}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.points && (
                  <ul>
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            <div className="article-end">
              <span className="mono">AIMS / PRACTICAL INTELLIGENCE</span>
              <Link href="/insights" className="text-link">
                More field notes
                <Icon name="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </article>
      <section className="section container">
        <SectionHeading
          eyebrow="From understanding to implementation"
          title="Put the ideas to work."
        />
        <div className="related-grid">
          {services
            .filter((service) => insight.relatedServices.includes(service.slug))
            .map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
        </div>
      </section>
      <ProjectCta />
      <BreadcrumbSchema
        items={[
          { name: "Insights", path: "/insights" },
          { name: insight.title, path: `/insights/${insight.slug}` },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          "@id": `${SITE_URL}/insights/${insight.slug}#article`,
          mainEntityOfPage: `${SITE_URL}/insights/${insight.slug}`,
          headline: insight.title,
          description: insight.description,
          image: `${SITE_URL}/social-card.png`,
          datePublished: insight.date,
          dateModified: insight.date,
          author: {
            "@type": "Organization",
            name: SITE_NAME,
            url: `${SITE_URL}/about`,
          },
          publisher: { "@id": `${SITE_URL}/#organization` },
          inLanguage: "en-SG",
        }}
      />
    </>
  );
}
