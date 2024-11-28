import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MantineProvider, createTheme } from "@mantine/core";

export const Route = createRootRoute({
  component: RootComponent,
});

const theme = createTheme({
  primaryColor: "bright-green",
  colors: {
    "bright-green": ["#495E57"],
  },
});

function RootComponent() {
  return (
    <MantineProvider theme={theme}>
      <meta
        name="description"
        content="Welcome to Little Lemon Restaurant – where fresh flavors and vibrant dishes meet exceptional dining. Enjoy a cozy atmosphere, locally-sourced ingredients, and a menu crafted to delight your taste buds. Perfect for family gatherings, date nights, and food lovers seeking unforgettable culinary experiences. Visit us today!"
      />
      <meta name="og:title" content="Little Lemon Restaurant" />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </MantineProvider>
  );
}
