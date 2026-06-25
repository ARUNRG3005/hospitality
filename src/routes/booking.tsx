import { createFileRoute } from "@tanstack/react-router";
import { BookingPage } from "@/components/pages";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [{ title: "Book Appointment · MediCore Hospital" }],
  }),
  component: BookingPage,
});
