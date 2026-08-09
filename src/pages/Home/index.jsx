import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { NavLink } from 'react-router';

const Home = () => {
    return (
        <main className="simpson-home-page d-flex flex-column justify-content-center">
            <section className="simpson-hero container">
                <div className="row align-items-center gy-5">
                    <div className="col-lg-6">
                        <span className="simpson-hero-badge">Springfield Fan Zone</span>
                        <h1 className="simpson-hero-title">
                            Vive la experiencia de <span>Los Simpson</span>
                        </h1>
                        <p className="simpson-hero-text">
                            Diseño inspirado en el humor amarillo, con una vibra moderna, fresca y responsive para jóvenes de 15 a 25 años.
                        </p>
                        <div className="d-flex flex-column flex-sm-row gap-3">
                            <NavLink
                                to='/personajes'
                                className="btn btn-warning btn-lg simpson-btn"
                            >Ver personajes</NavLink>
                            <NavLink
                                to='/favoritos'
                                className="btn btn-outline-light btn-lg simpson-btn-outline"
                            >Mis favoritos</NavLink>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container py-5">
                <div className="row row-cols-auto row-cols-md-3 g-4">
                    <article className="col">
                        <div className="card simpson-feature-card h-100 position-relative">
                            <div className="card-body">
                                <h2>Personajes legendarios</h2>
                                <p>
                                    Homero, Bart, Lisa, Marge y Maggie presentados con un estilo vibrante, divertido y muy juvenil.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
};

export { Home };