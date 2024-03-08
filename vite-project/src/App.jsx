import HomePage from "../src/pages/HomePage";
import { ComponentProvider } from "./providers/ComponentContext";

const App = () => {
  return (
    <ComponentProvider>
      <HomePage />
    </ComponentProvider>
  );
};

export default App;
