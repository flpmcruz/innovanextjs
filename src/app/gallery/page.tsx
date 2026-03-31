import type { Metadata } from "next";
import Gallery from "./Gallery";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Browse our portfolio of completed construction and renovation projects. See our quality work in kitchens, bathrooms, living rooms, and complete home builds.",
  openGraph: {
    title: "Project Gallery | Construction Innova",
    description:
      "Browse our portfolio of completed construction and renovation projects.",
  },
};

export default function GalleryPage() {
  return <Gallery />;
}
