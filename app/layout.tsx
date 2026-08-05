import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL("https://roy056.github.io"),
  title: "Dibakar Roy | Neural Engineering Researcher",
  description:
    "Research portfolio of Dibakar Roy — neural engineering, brain-computer interfaces, EEG signal processing, and biomedical machine learning.",
  keywords: [
    "Dibakar Roy",
    "Neural Engineering",
    "Brain-Computer Interface",
    "EEG",
    "Biomedical Machine Learning",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dibakar Roy | Neural Engineering Researcher",
    description:
      "Building adaptive intelligent systems at the intersection of neural signals and machine learning.",
    url: "/",
    siteName: "Dibakar Roy — Research Portfolio",
    type: "website",
    images: [{
      url: "/opengraph-image",
      width: 1200,
      height: 630,
      alt: "Dibakar Roy — Neural Engineering, BCI, EEG, and Biomedical Machine Learning",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dibakar Roy | Neural Engineering Researcher",
    description:
      "Neural engineering, brain-computer interfaces, EEG signal processing, and biomedical machine learning.",
    images: ["/opengraph-image"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://roy056.github.io/#profile-page",
      url: "https://roy056.github.io/",
      name: "Dibakar Roy — Research Portfolio",
      mainEntity: { "@id": "https://roy056.github.io/#person" },
    },
    {
      "@type": "Person",
      "@id": "https://roy056.github.io/#person",
      name: "Dibakar Roy",
      image: "https://roy056.github.io/dibakar-roy-profile.png",
      jobTitle: "Neural Engineering Researcher",
      description: "Electrical and Computer Engineering graduate researching brain-computer interfaces, neural signal decoding, EEG, and biomedical machine learning.",
      email: "mailto:dibakarroy4056@gmail.com",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Rajshahi University of Engineering & Technology",
      },
      knowsAbout: ["Neural engineering", "Brain-computer interfaces", "EEG signal processing", "Biomedical machine learning"],
      sameAs: [
        "https://www.linkedin.com/in/dibakar0804",
        "https://github.com/roy056",
        "https://scholar.google.com/citations?user=6y0LEcUAAAAJ&hl=en",
      ],
    },
  ],
};

const themeScript = `
  try {
    const saved = localStorage.getItem('theme');
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.dataset.theme = saved || preferred;
  } catch (_) {}
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${display.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
