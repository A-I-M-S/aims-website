import Link from "next/link";
import { Icon } from "../components/icon";

export default function NotFound() {
  return (
    <section className="container not-found">
      <p className="eyebrow">
        <span />
        404 / A different direction
      </p>
      <h1>
        This path ends here.
        <br />
        <span className="accent">The possibilities don’t.</span>
      </h1>
      <p>
        The page you’re looking for isn’t available. Explore our capabilities or
        head back to the start.
      </p>
      <div className="button-row">
        <Link href="/" className="button">
          Back to AIMS
          <Icon name="arrow" />
        </Link>
        <Link href="/services" className="button button-outline">
          Explore capabilities
          <Icon name="diagonal" />
        </Link>
      </div>
    </section>
  );
}
