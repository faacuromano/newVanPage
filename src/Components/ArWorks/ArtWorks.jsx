import {  CardBody, CardTitle, CardText } from 'reactstrap';
import './ArtWorks.css';

const ArtWorks = ({ title, artist, eds, id, img, url }) => {
  return (
    <div className="container">
      <a key={id} href={url} className="card">
        <div className="image-container">

          <img className="imagen" src={img} alt={title} />
          <div className="overlay">
            <CardBody className="cardBody">
              <CardTitle className="cardTitle">{title}</CardTitle>
              <CardText>Artist: {artist}</CardText>
              <CardText>Eds: {eds}</CardText>
            </CardBody>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ArtWorks;
