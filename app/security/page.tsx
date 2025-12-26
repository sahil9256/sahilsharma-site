export default function SecurityPage() {
  return (
    <main className="mx-auto max-w-[980px] px-5 py-14">
      <h1 className="text-3xl font-semibold tracking-tight">Security Awareness & Validation</h1>

      <p className="mt-4 max-w-[860px] leading-relaxed text-black/80">
        My approach to security is grounded in quality engineering — identifying common web and API risks early
        and validating them responsibly as part of testing workflows.
      </p>

      {/* Web Vulnerabilities */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Web & API Vulnerabilities (OWASP-aligned)</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 leading-relaxed text-black/80">
          <li>Information Disclosure</li>
          <li>IDOR & Broken Access Control</li>
          <li>Path Traversal & Cookie Manipulation</li>
          <li>CSRF & OAuth 2.0 flow issues</li>
          <li>Injection attacks (SQLi, Blind SQLi, Time-based SQLi, Command, HTML injection)</li>
          <li>XSS (Reflected, Stored, DOM-based)</li>
          <li>SSRF (including blind variants)</li>
          <li>XXE & CSP bypass awareness</li>
        </ul>
      </section>

      {/* Methodology */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Analysis & Testing Methodology</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 leading-relaxed text-black/80">
          <li>Information gathering & attack surface understanding</li>
          <li>Endpoint & hidden path discovery</li>
          <li>HTTP headers, methods, status code analysis</li>
          <li>Input parameter analysis</li>
          <li>Basic code & behavior analysis (QA context)</li>
        </ul>
      </section>

      {/* Tools */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Tools & Utilities</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 leading-relaxed text-black/80">
          <li>Burp Suite (Proxy, Repeater, Intruder, Collaborator)</li>
          <li>FeroxBuster</li>
          <li>Browser DevTools</li>
          <li>WSL</li>
        </ul>
      </section>

      {/* Disclaimer */}
      <p className="mt-10 text-sm text-black/60 max-w-[860px]">
        Note: All security practices are applied in controlled environments for learning, validation,
        and quality assurance. No unauthorized testing is performed.
      </p>
    </main>
  );
}
