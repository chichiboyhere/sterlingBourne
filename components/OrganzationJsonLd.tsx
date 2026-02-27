// //components/OrganizationJsonLd.tsx
// export default function OrganizationJsonLd({ team }: { team: any[] }) {
//   const data = {
//     "@context": "https://schema.org",
//     "@type": "AccountingService", // Specific type for better local SEO
//     name: "Sterling & Bourne",
//     address: {
//       "@type": "PostalAddress",
//       addressLocality: "London",
//       addressCountry: "UK",
//     },
//     employee: team.map((m) => ({
//       "@type": "Person",
//       name: m.name,
//       jobTitle: m.role,
//     })),
//   };
//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
//     />
//   );
// }

export default function OrganizationJsonLd({ team }: { team: any[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "Sterling & Bourne",
    url: "https://sterlingandbourne.com",
    logo: "https://sterlingandbourne.com/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "UK",
    },
    description:
      "Boutique audit and tax advisory firm specializing in forensic accounting.",
    founder: team.slice(0, 2).map((m) => ({
      "@type": "Person",
      name: m.name,
    })),
    employee: team.map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.role,
      description: m.bio, // Adding bio helps Google understand expertise
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
