import Link from "next/link";
import { CONTACT_EMAIL } from "../lib/site";
import { services } from "../lib/services";
import { Icon } from "./icon";

const servicesForFooter = services.filter((service) =>
  ["01", "02", "05", "08"].includes(service.number),
);

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" aria-label="AIMS home">
            <img
              src="/aims-logo-white.png"
              alt="AIMS"
              width="151"
              height="42"
              loading="lazy"
            />
          </Link>
          <p>
            Intelligence, engineered
            <br />
            for the real world.
          </p>
          <span className="location">
            <span className="status-dot" /> Singapore · Working globally
          </span>
        </div>
        <div>
          <p className="footer-label">Capabilities</p>
          {servicesForFooter.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              {service.shortTitle}
            </Link>
          ))}
          <Link href="/services" className="footer-all">
            All capabilities <Icon name="arrow" />
          </Link>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          <Link href="/solutions">Business solutions</Link>
          <Link href="/#approach">Our approach</Link>
          <Link href="/services/frontier-model-access">Model access</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/about">About AIMS</Link>
        </div>
        <div>
          <p className="footer-label">Start a conversation</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="footer-email">
            {CONTACT_EMAIL}
            <Icon name="diagonal" />
          </a>
          <p className="footer-address">
            29 Carpenter Street
            <br />
            Singapore 059923
          </p>
          <a
            href="https://www.facebook.com/profile.php?id=61589876739695"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook <span className="sr-only">(opens in a new tab)</span>
            <Icon name="diagonal" />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} A.I. Management Services. All rights
          reserved.
        </span>
        <div>
          <Link href="/privacy">Privacy notice</Link>
          <a href="#main-content">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
