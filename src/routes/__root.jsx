import { createRootRoute } from "@tanstack/react-router";
import { Layout } from "../layout/Layout.page";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return <Layout />;
}
