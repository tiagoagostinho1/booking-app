//import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
