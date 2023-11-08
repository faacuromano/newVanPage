import {  CardBody, CardTitle, CardText } from 'reactstrap';
import './ArtWorks.css';

const ArtWorks = ({ title, artist, id, img }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="image-container">

          <img className="imagen" src={img} alt={title} />
          <div className="overlay">
            <CardBody className="cardBody">
              <CardTitle className="cardTitle">{title}</CardTitle>
              <CardText>Artist: {artist}</CardText>
              <CardText>Eds: {id}</CardText>
            </CardBody>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtWorks;
