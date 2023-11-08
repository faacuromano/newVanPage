import './Home.css'
import image from '../../assets/homeimage.webp'

const Home = () => {
  return (
    <div className='home-container'>
        <div className='title-home-container'>
            <h1 className='title-home'>WELCOME TO </h1>
            <h1 className='title-home-V'>VANGUARDS CARDS</h1>

            <div className='home-links-container'>
            < div >
                    <button className="button-56" role="button">
                        <a href='https://objkt.com/collection/KT1FiPKiRQ39UJCcixmidYRQtkvnm7peQuYJ' className="text">OBJKT COLLECTION</a>
                    </button>           
                </div>

                <div >
                    <button className="button-56" role="button">
                        <a href='https://www.vendingnfts.xyz' className="text">VENDING MACHINE</a>
                    </button>           
                </div>

            </div>
        </div>
        <div className='image-home-container'>
            <img className='image-home' src={image}/>
        </div>
    </div>
  )
}

export default Home


