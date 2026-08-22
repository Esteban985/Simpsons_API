import { useContext, useEffect, useState } from "react";
import { Card, Container, Spinner } from "react-bootstrap";
import { NavLink, useParams } from "react-router";
import { SimpsonContext } from "../../context/simpsonContext";
import "./DetallesPersonajes.css";

const DetallesPersonajes = () => {
    const { id } = useParams();

    const { detallesPersonaje } = useContext(SimpsonContext);
    const [personaje, setPersonaje] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const cargarPersonaje = async () => {
            try {
                const resultado = await detallesPersonaje(id);
                setPersonaje(resultado);
            } catch {
                setError(true);
            } finally {
                setCargando(false);
            }
        };

        cargarPersonaje();
    }, [detallesPersonaje, id]);

    if (cargando) {
        return (
            <Container fluid className="detalles-page detalles-state">
                <Spinner animation="border" role="status" variant="dark" />
            </Container>
        );
    }

    if (error || !personaje) {
        return (
            <Container fluid className="detalles-page detalles-state">
                <p className="detalles-error">No se pudo cargar la información del personaje.</p>
            </Container>
        );
    }

    return (
        <Container fluid className="detalles-page">
            <div className="detalles-wrapper">
                <Card className="detalles-card">
                    <div className="detalles-image-panel">
                        <span className="detalles-label">Personaje #{personaje.id}</span>
                        <Card.Img
                            src={`https://cdn.thesimpsonsapi.com/500${personaje.portrait_path}`}
                            alt={personaje.name}
                            className="detalles-image"
                        />
                    </div>
                    <Card.Body className="detalles-body">
                        <span className="detalles-kicker">Ficha del personaje</span>
                        <Card.Title className="detalles-title">{personaje.name}</Card.Title>
                        <div className="detalles-status">{personaje.status || "Estado no definido"}</div>

                        <div className="detalles-data">
                            <div className="detalles-data-item">
                                <span>Ocupación</span>
                                <strong>{personaje.occupation || "No definida"}</strong>
                            </div>
                            {personaje.age && (
                                <div className="detalles-data-item">
                                    <span>Edad</span>
                                    <strong>{personaje.age} años</strong>
                                </div>
                            )}
                            {personaje.gender && (
                                <div className="detalles-data-item">
                                    <span>Género</span>
                                    <strong>{personaje.gender}</strong>
                                </div>
                            )}
                            <button className="btn detalles-back-button">
                                <NavLink to={'/personajes'}>
                                    Volver
                                </NavLink>
                            </button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
}

export { DetallesPersonajes };