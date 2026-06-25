import { createFileRoute } from "@tanstack/react-router";
import { AuthPage } from "@/components/pages";
import { z } from "zod";

const authSearchSchema = z.object({
  mode: z.enum(["login", "signup"]).optional(),
});

export const Route = createFileRoute("/auth")({
  validateSearch: (search) => authSearchSchema.parse(search),
  head: () => ({
    meta: [{ title: "Patient Portal · MediCore Hospital" }],
  }),
  component: AuthPage,
});
