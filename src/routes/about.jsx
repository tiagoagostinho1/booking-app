import { createFileRoute } from "@tanstack/react-router";
import { About } from "../pages/About.page";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return <About />;
}
