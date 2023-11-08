import ArtWorks from './ArtWorks';

import './ContainerArtWorks.css'

const ContainerArtWorks = ({ artworks }) => {

    const artWorksMapped = artworks.map((artwork) => (
      <ArtWorks
        key={artwork.id}
        title={artwork.title}
        descrip={artwork.descrip}
        img={artwork.img}
        artist={artwork.artist}
        id={artwork.id}
        eds={artwork.eds}
        url={artwork.url}
      />
    ));
  
  return (
          <>
            <h1 className='titelMimimized'> VANGUARD CARDS </h1>
            <div>
              <div className="artowrk-container">
                {artWorksMapped}
              </div>
            </div>
          </>
      )
}

export default ContainerArtWorks