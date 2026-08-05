import { ArrowLeft, Radio } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-grid" aria-hidden="true" />
      <div className="not-found-signal" aria-hidden="true">
        <Radio size={42} />
        <span />
      </div>
      <span className="eyebrow">404 · Signal interrupted</span>
      <h1>Neural pathway<br />not found.</h1>
      <p>The requested route could not be decoded. Return to the portfolio and reconnect with the main signal.</p>
      <Link className="primary-button" href="/"><ArrowLeft size={18} /> Return home</Link>
    </main>
  );
}
