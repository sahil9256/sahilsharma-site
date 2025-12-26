export type PortfolioItem = {
  title: string;
  summary: string;
  highlights: string[];
  stack: string[];
  note?: string;
};

export const portfolio: PortfolioItem[] = [
  {
    title: "Payments & Checkout Automation (Retail)",
    summary:
      "Built E2E automation for checkout + payments using a hybrid UI + API approach and integrated it into CI for fast, repeatable validation.",
    highlights: [
      "Automated checkout flow with authentication, basket creation, and payment methods",
      "Validated multiple payment types and improved suite stability",
      "Integrated runs into CI/CD pipelines for continuous signal",
    ],
    stack: ["Playwright", "TypeScript", "Azure DevOps", "API validation"],
    note: "Client details generalized to respect confidentiality.",
  },
  {
    title: "SEO & Sitemap Validation Automation (Enterprise)",
    summary:
      "Designed automation for SEO metadata, canonical tags, redirects, URL management, and sitemap validation with reporting in CI.",
    highlights: [
      "Framework built from scratch with scalable structure",
      "Added reporting for visibility across runs",
      "Improved regression confidence for critical SEO flows",
    ],
    stack: ["Cypress", "Playwright", "GitLab CI", "Allure"],
    note: "Client details generalized to respect confidentiality.",
  },
  {
    title: "Data Validation & Cloud Workflow Testing (AWS)",
    summary:
      "Validated data ingestion and transformation flows and verified correctness in AWS services using SDK-based checks.",
    highlights: [
      "Validated DynamoDB records after ingestion / scans",
      "Tested Lambda and Step Functions workflows",
      "Added automation checks to reduce manual verification effort",
    ],
    stack: ["AWS SDK", "DynamoDB", "Lambda", "Step Functions", "Cypress"],
    note: "Client details generalized to respect confidentiality.",
  },
];
