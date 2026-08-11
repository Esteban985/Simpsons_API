import { useParams } from "react-router";

const DetallesPersonajes = () => {
    const { id } = useParams()
    return (
        <h1>Hola soy detalles personajes</h1>
    );
}

export { DetallesPersonajes };