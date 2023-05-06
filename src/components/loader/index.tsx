import { Navbar } from "../navbar";
import "./loader.css";

export const Loader = () => {
  return (
    <div className="container p-0">
      <Navbar />
      <section className="row loading_container justify-content-center align-items-center">
        <div className="loading_div_container">
          <span className="fs-3 fw-bold">Cargando</span>
          <div className="load" />
          <div className="load" />
          <div className="load" />
        </div>
      </section>
    </div>
  );
};
