import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Jade's Reset Cleaning",
  description:
    "Get a free quote for residential cleaning in Melbourne. Contact Jade for regular cleaning, deep cleans, end of lease, decluttering and more.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
