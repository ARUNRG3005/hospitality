import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/pages";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [{ title: "Contact Us · MediCore Hospital" }],
  }),
  component: ContactPage,
});
