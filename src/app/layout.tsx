import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://royalbluehazaribagh.com"),
  title: "Royal Blue Family Restaurant & Banquet Hall | Best Restaurant in Hazaribagh",
  description: "Royal Blue is the best family restaurant and banquet hall in Hazaribagh near Vinoba Bhave University. Experience premium multi-cuisine dining, perfect for birthdays, anniversaries, and grand celebrations.",
  keywords: [
    "Best Family Restaurant in Hazaribagh",
    "Best Restaurant in Hazaribagh",
    "Banquet Hall in Hazaribagh",
    "Birthday Party Venue in Hazaribagh",
    "Anniversary Celebration Restaurant in Hazaribagh",
    "Restaurant Near Vinoba Bhave University",
    "North Indian Restaurant Hazaribagh",
    "Chinese Restaurant Hazaribagh",
    "Royal Blue Restaurant Hazaribagh"
  ],
  openGraph: {
    title: "Royal Blue Family Restaurant & Banquet Hall | Hazaribagh",
    description: "Experience luxury dining and the perfect venue for your special celebrations at Royal Blue Family Restaurant & Banquet Hall in Hazaribagh.",
    url: "https://royalbluehazaribagh.com", // Adjust to actual production URL
    siteName: "Royal Blue Family Restaurant & Banquet Hall",
    images: [
      {
        url: "/images/exterior.jpeg",
        width: 1200,
        height: 630,
        alt: "Royal Blue Family Restaurant in Hazaribagh Exterior",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal Blue Family Restaurant & Banquet Hall | Best in Hazaribagh",
    description: "Premium multi-cuisine dining and luxury banquet hall in Hazaribagh near Vinoba Bhave University.",
    images: ["/images/exterior.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Restaurant",
                "name": "Royal Blue Family Restaurant & Banquet Hall",
                "image": [
                  "https://royalbluehazaribagh.com/images/exterior.jpeg",
                  "https://royalbluehazaribagh.com/images/dining.jpeg",
                  "https://royalbluehazaribagh.com/images/extra1.jpeg"
                ],
                "@id": "https://royalbluehazaribagh.com",
                "url": "https://royalbluehazaribagh.com",
                "telephone": "+919471714840",
                "servesCuisine": ["North Indian", "Chinese", "Multi-cuisine"],
                "priceRange": "₹₹",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Near Vinoba Bhave University, NH-33 Road",
                  "addressLocality": "Hazaribagh",
                  "addressRegion": "Jharkhand",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "24.0041", // Replace with exact coordinates
                  "longitude": "85.3582" // Replace with exact coordinates
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                  ],
                  "opens": "10:00",
                  "closes": "23:30"
                },
                "sameAs": [
                  "https://www.instagram.com/royal_blue_family_restaurant/"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Royal Blue Banquet Hall",
                "image": "https://royalbluehazaribagh.com/images/banquet.jpeg",
                "@id": "https://royalbluehazaribagh.com/#banquet",
                "url": "https://royalbluehazaribagh.com",
                "telephone": "+919471714840",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Near Vinoba Bhave University, NH-33 Road",
                  "addressLocality": "Hazaribagh",
                  "addressRegion": "Jharkhand",
                  "addressCountry": "IN"
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                  ],
                  "opens": "10:00",
                  "closes": "23:30"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Royal Blue Family Restaurant",
                "url": "https://royalbluehazaribagh.com",
                "logo": "https://royalbluehazaribagh.com/images/exterior.jpeg",
                "sameAs": [
                  "https://www.instagram.com/royal_blue_family_restaurant/"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Royal Blue Family Restaurant & Banquet Hall",
                "url": "https://royalbluehazaribagh.com"
              }
            ]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
