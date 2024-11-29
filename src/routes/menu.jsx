import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Home } from "../components/Home";
export const Route = createFileRoute("/menu")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Home />;
}
