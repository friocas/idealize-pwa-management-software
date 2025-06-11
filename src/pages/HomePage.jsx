import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBarComp from '../components/NavigationBarComp';
import MenuCardComp from '../components/MenuCardComp';
import image1 from '../assets/imgs/ponto.png';
import image2 from '../assets/imgs/colheita.png';
import image3 from '../assets/imgs/colaboradores.png';
import image4 from '../assets/imgs/framboesas.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InstallPWA from '../components/InstallPWA';

export default function Home() {
  const menuItems = [
    {
      title: "PICAGEM DE PONTO",
      image: image1,
      reference: "/ponto"
    },
    {
      title: "GESTÃO DE COLHEITA",
      image: image2,
      reference: "/colheita"
    },
    {
      title: "COLABORADORES",
      image: image3,
      reference: "/colaboradores"
    },
    {
      title: "REGISTO DE COLHEITA",
      image: image4,
      reference: "/registo-colheita"
    }
  ];

  return (
    <>
      <NavigationBarComp>
        <Row xs={1} md={4} className="g-4">
          {menuItems.map((item, index) => (
            <Col key={index}>
              <MenuCardComp key={index} props={{ item, index }} />
            </Col>
          ))}
        </Row>
        <InstallPWA />
      </NavigationBarComp>
    </>
  );
}
