import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MediCore Hospital · Compassionate Care & Clinical Excellence" },
      {
        name: "description",
        content:
          "State-of-the-art general hospital and research center offering round-the-clock emergency, surgery, cardiology, orthopedics, and pediatric care.",
      },
    ],
  }),
  component: HomePage,
});
