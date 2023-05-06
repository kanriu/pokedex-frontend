import "./App.css";
import { PokemonProvider } from "./context/PokemonProvider";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <PokemonProvider>
      <AppRouter />
    </PokemonProvider>
  );
}

export default App;
