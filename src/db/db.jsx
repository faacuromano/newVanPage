import vCard1 from '../assets/1.webp'
import vCard2 from '../assets/2.webp'
import vCard3 from '../assets/3.webp'
import vCard4 from '../assets/4.webp'
import vCard5 from '../assets/5.webp'
import vCard6 from '../assets/6.webp'
import vCard7 from '../assets/7.webp'
import vCard8 from '../assets/8.webp'
import vCard9 from '../assets/9.webp'
import vCard10 from '../assets/10.webp'
import vCard11 from '../assets/11.webp'
import vCard12 from '../assets/12.webp'
import vCard13 from '../assets/13.webp'
import vCard14 from '../assets/14.webp'
import vCard15 from '../assets/15.webp'
import vCard16 from '../assets/16.webp'
import vCard17 from '../assets/17.webp'
import vCard18 from '../assets/18.webp'
import vCard19 from '../assets/19.webp'
import vCard20 from '../assets/20.webp'
import vCard21 from '../assets/21.webp'
import vCard22 from '../assets/22.webp'
import vCard23 from '../assets/23.webp'

const DUMMY_ARTS = [
    {
        id: 1,
        title: "Old Boy & H",
        artist: "L'inquisiteur",
        img: vCard1,
        isSold: 0,
        url: "https://objkt.com/asset/KT1FiPKiRQ39UJCcixmidYRQtkvnm7peQuYJ/0",
        eds: 10        
        
    },
    {
        id: 2,
        title: "Le Passeur",
        artist: "L'inquisiteur",
        img: vCard2,
        isSold: 0,
        url: "https://objkt.com/asset/KT1FiPKiRQ39UJCcixmidYRQtkvnm7peQuYJ/1",
        eds: 10    
     },
    {
        id: 3,
        title: "Trippy Bears",
        artist: "MartinjoSs",
        img: vCard3,
        isSold: 0,
        url: "https://objkt.com/asset/KT1FiPKiRQ39UJCcixmidYRQtkvnm7peQuYJ/2",
        eds: 15  
    },
    {
        id: 4,
        title: "Twin Bears",
        artist: "MartinjoSs",
        img: vCard4,
        isSold: 0,
        url: "https://objkt.com/asset/KT1FiPKiRQ39UJCcixmidYRQtkvnm7peQuYJ/3",
        eds: 15
    },
    {
        id: 5,
        title: "Spooky Bear",
        artist: "MartinjoSs",
        img: vCard5,
        isSold: 0,
        url: "https://objkt.com/asset/KT1FiPKiRQ39UJCcixmidYRQtkvnm7peQuYJ/4",
        eds: 10    
    },
    {
        id: 6,
        title: "Mistress Diabla",
        artist: "MartinjoSs",
        img: vCard6,
        isSold: 0,
        url: "https://objkt.com/asset/KT1FiPKiRQ39UJCcixmidYRQtkvnm7peQuYJ/5",
        eds: 10    
    },
    {
        id: 7,
        title: "Master Bear and Mistress Bapho",
        artist: "MartinjoSs",
        img: vCard7,
        isSold: 0,
        url: "https://objkt.com/asset/KT1FiPKiRQ39UJCcixmidYRQtkvnm7peQuYJ/6",
        eds: 5    
    },
    {
        id: 8,
        title: "The V",
        artist: "trapers",
        img: vCard8,
        isSold: 0,
        url: "https://objkt.com/asset/KT1FiPKiRQ39UJCcixmidYRQtkvnm7peQuYJ/7",
        eds: 15 
    },
    {
        id: 9,
        title: "The V V",
        artist: "trapers",
        img: vCard9,
        isSold: 0,
        url: "https://objkt.com/asset/KT1FiPKiRQ39UJCcixmidYRQtkvnm7peQuYJ/8",
        eds: 15
    },
    {
        id: 10,
        title: "VanguardBot",
        artist: "trapers",
        img: vCard10,
        isSold: 0,
        url: "https://objkt.com/asset/KT1FiPKiRQ39UJCcixmidYRQtkvnm7peQuYJ/9",
        eds: 10
    },
    {
        id: 11,
        title: "Veti",
        artist: "trapers",
        img: vCard11,
        isSold: 0,
        url: "https://objkt.com/asset/KT1FiPKiRQ39UJCcixmidYRQtkvnm7peQuYJ/10",
        eds: 10
    },
    {
        id: 12,
        title: "Chain Slave",
        artist: "trapers",
        img: vCard12,
        isSold: 0,
        url: "https://objkt.com/asset/KT1FiPKiRQ39UJCcixmidYRQtkvnm7peQuYJ/11",
        eds: 5
    },
    {
        id: 13,
        title: "Fatty Frog",
        artist: "trapers",
        img: vCard13,
        isSold: 0,
        url: "https://objkt.com/asset/KT1FiPKiRQ39UJCcixmidYRQtkvnm7peQuYJ/12",
        eds: 5
    },
    {
        id: 14,
        title: "No Laws",
        artist: "gëec",
        img: vCard14,
        isSold: 0,
        url: "https://objkt.com/asset/KT1FiPKiRQ39UJCcixmidYRQtkvnm7peQuYJ/13",
        eds: 10
    },
    {
        id: 15,
        title: "Ascention",
        artist: "gëec",
        img: vCard15,
        isSold: 0,
        url: "https://objkt.com/asset/KT1FiPKiRQ39UJCcixmidYRQtkvnm7peQuYJ/14",
        eds: 10
    },
    {
        id: 16,
        title: "Pub gnome",
        artist: "pollomoolokki",
        img: vCard16,
        isSold: 0,
        url: "https://objkt.com/asset/KT1FiPKiRQ39UJCcixmidYRQtkvnm7peQuYJ/15",
        eds: 5
    },
    {
        id: 17,
        title: "The king",
        artist: "pollomoolokki",
        img: vCard17,
        isSold: 0,
        url: "https://objkt.com/asset/KT1FiPKiRQ39UJCcixmidYRQtkvnm7peQuYJ/16",
        eds: 5
    },
    {
        id: 18,
        title: "The jester",
        artist: "pollomoolokki",
        img: vCard18,
        isSold: 0,
        url: "https://objkt.com/asset/KT1FiPKiRQ39UJCcixmidYRQtkvnm7peQuYJ/17",
        eds: 15
    },
    {
        id: 19,
        title: "The vanguard goblin",
        artist: "pollomoolokki",
        img: vCard19,
        isSold: 0,
        url: "https://objkt.com/asset/KT1FiPKiRQ39UJCcixmidYRQtkvnm7peQuYJ/18",
        eds: 5
    },
    {
        id: 20,
        title: "The wizard",
        artist: "pollomoolokki",
        img: vCard20,
        isSold: 0,
        url: "https://objkt.com/asset/KT1FiPKiRQ39UJCcixmidYRQtkvnm7peQuYJ/19",
        eds: 10
    },
    {
        id: 21,
        title: "The one",
        artist: "pollomoolokki",
        img: vCard21,
        isSold: 0,
        url: "https://objkt.com/asset/KT1FiPKiRQ39UJCcixmidYRQtkvnm7peQuYJ/20",
        eds: 10
    },
    {
        id: 22,
        title: "Veni Vidi Vici",
        artist: "MikeyWilson",
        img: vCard22,
        isSold: 0,
        url: "https://objkt.com/asset/KT1FiPKiRQ39UJCcixmidYRQtkvnm7peQuYJ/21",
        eds: 10
    },
    {
        id: 23,
        title: "Wilson de la V",
        artist: "MikeyWilson",
        img: vCard23,
        isSold: 0,
        url: "https://objkt.com/asset/KT1FiPKiRQ39UJCcixmidYRQtkvnm7peQuYJ/22",
        eds: 10
    },
  ];

  export default DUMMY_ARTS