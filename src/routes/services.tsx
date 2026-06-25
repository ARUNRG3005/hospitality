import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/pages";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [{ title: "Services · LuxeBook" }],
  }),
  component: ServicesPage,
});
