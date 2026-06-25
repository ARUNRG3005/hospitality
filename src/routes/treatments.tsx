import { createFileRoute } from "@tanstack/react-router";
import { TreatmentsPage } from "@/components/pages";

export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [{ title: "Treatments · LuxeBook" }],
  }),
  component: TreatmentsPage,
});
