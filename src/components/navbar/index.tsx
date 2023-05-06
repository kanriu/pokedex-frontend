import { Link } from "react-router-dom";
import { NavbarInterface } from "./navbarInterface";

export const Navbar = ({ children }: NavbarInterface) => {
  return (
    <section className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark p-2 d-flex justify-content-between">
      <Link className="navbar-brand fs-1 ms-2" to="/">
        Pokémon
      </Link>
      {children}
    </section>
  );
};
