import { useContext, useEffect, useState } from "react";
import { CardPersonaje } from "../../components/CardPersonaje";
import { SimpsonContext } from "../../context/simpsonContext";
import './Personajes.css';

const Personajes = () => {
    const { traerPersonajes } = useContext(SimpsonContext)
    const [personajes, setPersonajes] = useState([])
    const [pagina, setPagina] = useState(1)

    const esperarPersonajes = async () => {
        let personajes = await traerPersonajes(pagina)
        setPersonajes(personajes)
    }

    useEffect(() => {
        esperarPersonajes()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [pagina])

    return (
        <main className="simpson-personajes-page">
            <section className="simpson-personajes-section container">
                <div className="simpson-personajes-header">
                    <div>
                        <span className="simpson-badge">Catálogo Simpson</span>
                        <h1 className="simpson-personajes-title">Encuentra a tus personajes favoritos</h1>
                        <p className="simpson-personajes-description">
                            Explora una selección vibrante de personajes de Los Simpson con una interfaz fresca y juvenil.
                        </p>
                    </div>
                    <div className="simpson-search-group input-group">
                        <span className="input-group-text">🔍</span>
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Buscar personaje"
                            aria-label="Buscar personaje"
                        />
                    </div>
                </div>

                <div className="simpson-personajes-grid">
                    {personajes.map(personaje => (
                        <CardPersonaje key={personaje.id} {...personaje} />
                    ))}
                </div>

                <div className="simpson-pagination mt-5">
                    <button
                        type="button"
                        className="btn btn-page btn-page-prev"
                        onClick={() => setPagina(prev => prev == 1 ? prev : prev - 1)}
                    >
                        ← Anterior
                    </button>
                    <div className="simpson-page-indicator">
                        Página <span> {pagina} </span> de <span>42</span>
                    </div>
                    <button
                        type="button"
                        className="btn btn-page btn-page-next"
                        onClick={() => setPagina(prev => prev == 42 ? prev : prev + 1)}
                    >
                        Siguiente →
                    </button>
                </div>
            </section>
        </main>
    );
}

export { Personajes };