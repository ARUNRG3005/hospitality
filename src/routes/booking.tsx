import { createFileRoute } from "@tanstack/react-router";
import { BookingPage } from "@/components/pages";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [{ title: "Booking · LuxeBook" }],
  }),
  component: BookingPage,
});
