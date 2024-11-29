import { createFileRoute } from "@tanstack/react-router";
import { Home } from "../pages/Home.page";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Home />;
}
