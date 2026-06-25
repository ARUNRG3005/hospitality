import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/pages";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [{ title: "About · LuxeBook" }],
  }),
  component: AboutPage,
});
