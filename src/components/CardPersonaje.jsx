import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardPersonaje.css';

const CardPersonaje = ({ name, occupation, status, portrait_path }) => {
    return (
        <Card className="personaje-card">
            <div className="personaje-card-image-wrapper">
                <Card.Img variant="top" src={`https://cdn.thesimpsonsapi.com/500${portrait_path}`} />
            </div>
            <Card.Body className="personaje-card-body">
                <div>
                    <Card.Title className="personaje-card-title">{name}</Card.Title>
                    <Card.Text className="personaje-card-text">
                        {occupation == 'Unknown' ? 'Ocupación no definida' : occupation}
                    </Card.Text>
                </div>
                <div className="personaje-card-meta">
                    <span className="personaje-badge">{status}</span>
                    <span className="personaje-badge">Simpson Style</span>
                </div>
                <div className="personaje-actions">
                    <Button className="btn-personaje btn-personaje-primary">Ver detalles</Button>
                    <Button className="btn-personaje btn-personaje-secondary">Agregar favoritos</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export { CardPersonaje };