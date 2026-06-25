import { createFileRoute } from "@tanstack/react-router";
import { ExperiencePage } from "@/components/pages";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [{ title: "My Health · MediCore Hospital" }],
  }),
  component: ExperiencePage,
});
