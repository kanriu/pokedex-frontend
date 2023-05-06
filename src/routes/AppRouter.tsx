import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PokemonPage } from "../pages/PokemonPage";
import { DetailsPage } from "../pages/DetailsPage";

export const AppRouter = () => {
  return (
    <main className="container_main container">
      <BrowserRouter>
        <Routes>
          <Route path="pokemon" element={<PokemonPage />} />
          <Route path="pokemon/:name" element={<DetailsPage />} />
          <Route path="/*" element={<Navigate to="/pokemon" />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};
