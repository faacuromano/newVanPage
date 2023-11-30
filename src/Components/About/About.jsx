import './About.css'

const About = () => {
  return (
    <div className="about-container">

      <div className='background'>
        <h1 className="about-title"> THE VANGUARD</h1>
        <hr></hr>

        <p className="about-description">
          The Vanguard, or “The V”, is a collective of artists and collectors from across the globe. 
          Our mission is to support each other as we navigate these early Web3 days where the old rules and ways most likely no longer apply.
        </p>
      </div>
      
      <div className='background'>
        <h1 className="about-title"> THE VANGUARD CARDS</h1>
        <hr></hr>
        <p className="about-description">
          The Vanguard Cards is a collaborative effort from the Vanguard collective. 
          These trading cards were created over the course of 2022 and 2023 to showcase the wealth of talent within the V. 
          We are pleased to work with the Tezos Vending Machine to bring this collection to the market. Got to collect ‘em all!
        </p>
      </div>
        
    </div>
  )
}

export default About