import { createFileRoute } from "@tanstack/react-router";
import { Reservations } from "../pages/Reservations.page";

export const Route = createFileRoute("/reservation")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Reservations />;
}
