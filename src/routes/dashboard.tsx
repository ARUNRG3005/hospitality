import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "@/components/pages";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [{ title: "Patient Dashboard · MediCore Hospital" }],
  }),
  component: DashboardPage,
});
