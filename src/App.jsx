//import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <Header />
      <Main />
      <Footer />
    </MantineProvider>
  );
}

export default App;
