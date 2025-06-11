import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/custom.css';

export default function MenuCardComp({ props }) {
    const { item, index } = props;
    return (
        <a href={item.reference}>
            <Card key={index} href={item.reference} className="imgOverlayHoverflow">
                <Card.Img src={item.image} alt={item.title} />
                <Card.ImgOverlay className="d-flex align-items-end bg-dark bg-opacity-25">
                    <Card.Text className="text-white fw-bold w-100 text-center mb-4 fs-6">
                        {item.title}
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </a>
    );
}
