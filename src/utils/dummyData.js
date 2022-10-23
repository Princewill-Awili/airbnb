//Importing all the icons
import AmazingPools from '../assets/svgicons/px-AmazingPools.svg'
import Beach from '../assets/svgicons/px-Beach.svg'
import BedAndBreakFAst from '../assets/svgicons/px-BedAndBreakFast.svg'
import Caves from '../assets/svgicons/px-Caves.svg'
import CountrySide from '../assets/svgicons/px-CountrySide.svg'
import Design from '../assets/svgicons/px-Design.svg'
import HouseBoats from '../assets/svgicons/px-HouseBoats.svg'
import IconicCities from '../assets/svgicons/px-IconicCities.svg'
import Mansions from '../assets/svgicons/px-Mansions.svg'
import Omg from '../assets/svgicons/px-Omg.svg'
import ShareHomes from '../assets/svgicons/px-SharedHomes.svg'
import Tropical from '../assets/svgicons/px-Tropical.svg'

//Importing Apartment Pictures
import apt1 from '../assets/svgapts/px-apt1.svg'
import apt2 from '../assets/svgapts/px-apt2.svg'
import apt3 from '../assets/svgapts/px-apt3.svg'
import apt4 from '../assets/svgapts/px-ap4.svg'
import apt5 from '../assets/svgapts/px-apt5.svg'
import apt6 from '../assets/svgapts/px-apt6.svg'
import apt7 from '../assets/svgapts/px-apt7.svg'
import apt8 from '../assets/svgapts/px-apt8.svg'
import apt9 from '../assets/svgapts/px-apt9.svg'
import apt10 from '../assets/svgapts/px-apt10.svg'
import apt11 from '../assets/svgapts/px-apt11.svg'
import apt12 from '../assets/svgapts/px-apt12.svg'
import apt13 from '../assets/svgapts/px-apt13.svg'
import apt14 from '../assets/svgapts/px-apt14.svg'
import apt15 from '../assets/svgapts/px-apt15.svg'


export const iconObjects = [
    {caption:"Beach",image:<img src={Beach} alt="icon"/>},
    {caption:"Shared Homes", image:<img src={ShareHomes} alt="icon"/>},
    {caption:"OMG!", image:<img src={Omg} alt="icon"/>},
    {caption:"Mansions", image:<img src={Mansions} alt="icon"/>},
    {caption:"Countryside", image:<img src={CountrySide} alt="icon"/>},
    {caption:"Iconic Cities", image:<img src={IconicCities} alt="icon"/>},
    {caption:"Design", image:<img src={Design} alt="icon"/>},
    {caption:"Caves", image:<img src={Caves} alt="icon"/>},
    {caption:"Tropical", image:<img src={Tropical} alt="icon"/>},
    {caption:"Houseboats", image:<img src={HouseBoats} alt="icon"/>},
    {caption:"Amazing Pools", image:<img src={AmazingPools} alt="icon"/>},
    {caption:"Bed & breakfast", image:<img src={BedAndBreakFAst} alt="icon"/>},
    
]


export const homes= [
    
    {
        host:"Matthew",
        img:apt1,
        date:"Oct 25-30",
        desc:"Well Furnished Shortlet Apartment ",
        bedrooms:Math.floor(Math.random()*5)+1,
        price: 13.50,
        rating: Math.floor(Math.random()*5)
    },
    {
        host:"Olatunji",
        img:apt2,
        date:"Dec 1-5",
        desc:"Beautiful Luxury Apartment ",
        bedrooms:Math.floor(Math.random()*5)+1,
        price: 24.50,
        rating: Math.floor(Math.random()*5)
    },
    {
        host:"Gbemisola",
        img:apt3,
        date:"Oct 23-30",
        desc:"Luxury Bedroom Apartment ",
        bedrooms:Math.floor(Math.random()*5)+1,
        price: 24.50,
        rating: Math.floor(Math.random()*5)
    },
    {
        host:"Ruben",
        img:apt4,
        date:"Nov 17-21",
        desc:"Luxury Bedroom Apartment ",
        bedrooms:Math.floor(Math.random()*5)+1,
        price: 24.50,
        rating: Math.floor(Math.random()*5)
    },
    {
        host:"Oswald",
        img:apt5,
        date:"Nov 14-18",
        desc:"Luxury Bedroom Apartment ",
        bedrooms:Math.floor(Math.random()*5)+1,
        price: 24.50,
        rating: Math.floor(Math.random()*5)
    },
    {
        host:"Yemi",
        img:apt6,
        date:"Dec 4-14",
        desc:"Luxury Bedroom Apartment ",
        bedrooms:Math.floor(Math.random()*5)+1,
        price: 24.50,
        rating: Math.floor(Math.random()*5)
    },
    {
        host:"Lotanna",
        img:apt7,
        date:"Oct 29-31",
        desc:"Luxury Bedroom Apartment ",
        bedrooms:Math.floor(Math.random()*5)+1,
        price: 24.50,
        rating: Math.floor(Math.random()*5)
    },
    {
        host:"Omasola",
        img:apt8,
        date:"Dec 20-25",
        desc:"Luxury Bedroom Apartment ",
        bedrooms:Math.floor(Math.random()*5)+1,
        price: 24.50,
        rating: Math.floor(Math.random()*5)
    },
    {
        host:"Debbie",
        img:apt9,
        date:"Nov 1-15",
        desc:"Luxury Bedroom Apartment ",
        bedrooms:Math.floor(Math.random()*5)+1,
        price: 24.50,
        rating: Math.floor(Math.random()*5)
    },
    {
        host:"Rowland",
        img:apt10,
        date:"Oct 25-30",
        desc:"Luxury Bedroom Apartment ",
        bedrooms:Math.floor(Math.random()*5)+1,
        price: 24.50,
        rating: Math.floor(Math.random()*5)
    },
    
    {
        host:"Nkiru",
        img:apt11,
        date:"Nov 8-10",
        desc:"Luxury Bedroom Apartment ",
        bedrooms:Math.floor(Math.random()*5)+1,
        price: 24.50,
        rating: Math.floor(Math.random()*5)
    },
    {
        host: "Ebube", 
        img: apt12,
        date:"Oct 24-27",
        desc:"Luxury Bedroom Apartment ",
        bedrooms:Math.floor(Math.random()*5)+1,
        price: 14.50,
        rating: Math.floor(Math.random()*5)
    },
    {
        host:"Kelvin",
        img:apt13,
        date:"Nov 2-5",
        desc:"Terraced 5 Bedroom flat ",
        bedrooms:5,
        price: 44.50,
        rating: Math.floor(Math.random()*5)
    },
    
    {
        host:"Oluwaseun",
        img:"https://plistbooking.com/wp-content/uploads/2020/09/5-Amazing-Facts-about-Shortlet-Apartments-in-Lagos-Nigeria-1170x853.jpg",
        date:"Dec 20-30",
        desc:"Luxury Bedroom Apartment ",
        bedrooms:Math.floor(Math.random()*5)+1,
        price: 24.50,
        rating: Math.floor(Math.random()*5)
    }
    ,
    {
        host:"Yemi",
        img:"https://media-cdn.tripadvisor.com/media/vr-splice-j/0a/ea/56/90.jpg",
        date:"Dec 4-14",
        desc:"Luxury Bedroom Apartment ",
        bedrooms:Math.floor(Math.random()*5)+1,
        price: 24.50,
        rating: Math.floor(Math.random()*5)
    },
    {
        host:"Debbie",
        img:"https://www.bellanaija.com/wp-content/uploads/2021/11/image3.jpg",
        date:"Nov 1-15",
        desc:"Luxury Bedroom Apartment ",
        bedrooms:Math.floor(Math.random()*5)+1,
        price: 24.50,
        rating: Math.floor(Math.random()*5)
    },
    {
        host:"Rowland",
        img:"https://diywithjoy.com/wp-content/uploads/2021/03/Picture-2png.png",
        date:"Oct 25-30",
        desc:"Luxury Bedroom Apartment ",
        bedrooms:Math.floor(Math.random()*5)+1,
        price: 24.50,
        rating: Math.floor(Math.random()*5)
    },
    
    {
        host:"Nkiru",
        img:"https://nairametrics.com/wp-content/uploads/2021/11/Shortlet-1.jpg?w=900&h=570&crop=1",
        date:"Nov 8-10",
        desc:"Luxury Bedroom Apartment ",
        bedrooms:Math.floor(Math.random()*5)+1,
        price: 24.50,
        rating: Math.floor(Math.random()*5)
    },

    {
        host:"Oluwaseun",
        img:"https://plistbooking.com/wp-content/uploads/2020/09/5-Amazing-Facts-about-Shortlet-Apartments-in-Lagos-Nigeria-1170x853.jpg",
        date:"Dec 20-30",
        desc:"Luxury Bedroom Apartment ",
        bedrooms:Math.floor(Math.random()*5)+1,
        price: 24.50,
        rating: Math.floor(Math.random()*5)
    }
    ,
    {
        host:"Yemi",
        img:"https://media-cdn.tripadvisor.com/media/vr-splice-j/0a/ea/56/90.jpg",
        date:"Dec 4-14",
        desc:"Luxury Bedroom Apartment ",
        bedrooms:Math.floor(Math.random()*5)+1,
        price: 24.50,
        rating: Math.floor(Math.random()*5)
    },
]