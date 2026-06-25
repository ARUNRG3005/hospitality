import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LuxeBook · Aesthetic Clinic of Quiet Luxury" },
      { name: "description", content: "The pinnacle of medical aesthetic excellence." },
    ],
  }),
  component: HomePage,
});
