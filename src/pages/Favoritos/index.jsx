import { useContext, useEffect, useState } from "react";
import { SimpsonContext } from "../../context/simpsonContext";
import { CardPersonaje } from "../../components/CardPersonaje";
import { NavLink } from "react-router";
import './Favoritos.css';

const Favoritos = () => {
    const {
        favoritos
    } = useContext(SimpsonContext)
    const [personajes, setPersonajes] = useState([])

    useEffect(() => {
        setPersonajes(favoritos)
    }, [favoritos])

    return (
        <main className="simpson-favoritos-page">
            <section className="simpson-favoritos-section container">
                <div className="simpson-favoritos-toolbar">
                    <NavLink className="simpson-favoritos-back" to="/personajes">
                        ← Catálogo
                    </NavLink>
                    <span className="simpson-favoritos-count">
                        {personajes.length} {personajes.length === 1 ? 'favorito' : 'favoritos'}
                    </span>
                </div>

                <header className="simpson-favoritos-header">
                    <div className="simpson-favoritos-mark" aria-hidden="true">♥</div>
                    <div>
                        <span className="simpson-favoritos-eyebrow">Tu colección especial</span>
                        <h1 className="simpson-favoritos-title">Mis personajes favoritos</h1>
                        <p className="simpson-favoritos-description">
                            Aquí viven los personajes que siempre quieres tener cerca.
                        </p>
                    </div>
                </header>

                {personajes.length > 0 ? (
                    <div className="simpson-favoritos-grid">
                        {personajes.map((item) => (
                            <CardPersonaje key={item.id} {...item} favorito={true} />
                        ))}
                    </div>
                ) : (
                    <div className="simpson-favoritos-empty">
                        <span className="simpson-favoritos-empty-icon" aria-hidden="true">☆</span>
                        <h2>Tu colección está esperando</h2>
                        <p>Explora el catálogo y guarda tus personajes preferidos.</p>
                        <NavLink className="simpson-favoritos-action" to="/personajes">
                            Explorar personajes
                        </NavLink>
                    </div>
                )}
            </section>
        </main>
    );
}

export { Favoritos };