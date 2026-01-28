//components/OrganizationJsonLd.tsx
export default function OrganizationJsonLd({ team }: { team: any[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "AccountingService", // Specific type for better local SEO
    name: "Sterling & Bourne",
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "UK",
    },
    employee: team.map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.role,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
