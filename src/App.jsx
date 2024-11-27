//import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({
  primaryColor: "bright-green",
  colors: {
    "bright-green": ["#495E57"],
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <meta
        name="description"
        content="Welcome to Little Lemon Restaurant – where fresh flavors and vibrant dishes meet exceptional dining. Enjoy a cozy atmosphere, locally-sourced ingredients, and a menu crafted to delight your taste buds. Perfect for family gatherings, date nights, and food lovers seeking unforgettable culinary experiences. Visit us today!"
      />
      <meta name="og:title" content="Little Lemon Restaurant" />
      <Header />
      <Main />
      <Footer />
    </MantineProvider>
  );
}

export default App;
