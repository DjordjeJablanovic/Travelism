import img1 from './assets/slider1.png'
import img2 from './assets/slider2.png'
import img3 from './assets/slider3.png'
import img4 from './assets/slider4.png'
import img5 from './assets/slider5.png'
import img6 from './assets/slider6.png'
import img7 from './assets/slider7.png'
import img8 from './assets/slider8.png'
import {MdDateRange} from 'react-icons/md'
import {BsFillPeopleFill} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
import {AiFillStar} from 'react-icons/ai'
import userImgOne from './assets/userImg.png'
import blogImgTwo from './assets/blogImgTwo.png'
import blogImgThree from './assets/blogImgThree.png'
import blogImgFour from './assets/blogImgFour.png'
import stickerOne from './assets/001-online-booking.png'
import stickerTwo from './assets/003-shield.png'
import stickerThree from './assets/005-ticket.png'
import stickerFour from './assets/006-counsel.png'

export const ChooseUsData = [
    {
        image:stickerOne,
        title: 'Hotel Booking',
        context: 'You can easily book hotel according to your budget from our website.',
    },
    {
        image:stickerTwo,
        title: 'Reliable tours',
        context: 'We provide you the best plan within a short period of time to explore.',
    },
    {
        image:stickerThree,
        title: 'Ticket booking',
        context: 'We book all type domestic or international ticket for your destination.',
    },
    {
        image:stickerFour,
        title: 'Expert advice',
        context: 'Our experts are always ready to help or guidance for your next steps.',
    },
]

export const blogData = [
    {
        id:1,
        image:blogImgTwo,
        date:'16 Oct, 2022 / Travel',
        title:'New experience at Damnoen Saduk floating market',
    },
    {
        id:2,
        image:blogImgThree,
        date:'26 Sep, 2022 / Travel',
        title:'Top 10 best things of cottage staying during your travel',
    },
    {
        id:3,
        image:blogImgFour,
        date:'13 Nov, 2022 / Hollidays',
        title:'Great places to spend your summer holidays',
    },
]

export const reviewsData = [
    {
        id: 1,
        ratingIcon:<AiFillStar/>,
        rating:'5.0',
        title: 'Amazing Customer Service',
        comment: 'Sed dignissim nisl pellentesque ut sed dapibus nam. Consectetur pellentesque nulla pretium, elit, elementum, sapien. Sit semper eget hendrerit ornare magna aliquet sere. Nec aliquet odio turpis pretium ut. Ac elit ac non, in sagittis netus ac in. Purus suada sed neque sed ut eu auctor mi enim euismod egestas enim gravida posuere.',
        userImg: userImgOne,
        userName: 'Nicholas Watson',
        userLocation: 'United States',
    },
    {
        id: 2,
        ratingIcon:<AiFillStar/>,
        rating:'4.8',
        title: 'Comment Number Two',
        comment: 'Ded dignissim nisl pellentesque ut sed dapibus nam. Consectetur pellentesque nulla pretium, elit, elementum, sapien. Sit semper eget hendrerit ornare magna aliquet sere. Nec aliquet odio turpis pretium ut. Ac elit ac non, in sagittis netus ac in. Purus suada sed neque sed ut eu auctor mi enim euismod egestas enim gravida posuere.',
        userImg: userImgOne,
        userName: 'Jack Miller',
        userLocation: 'United Kingdom',
    },
    {
        id: 3,
        ratingIcon:<AiFillStar/>,
        rating:'4.9',
        title: 'Services Very Good',
        comment: 'Seed dignissim nisl pellentesque ut sed dapibus nam. Consectetur pellentesque nulla pretium, elit, elementum, sapien. Sit semper eget hendrerit ornare magna aliquet sere. Nec aliquet odio turpis pretium ut. Ac elit ac non, in sagittis netus ac in. Purus suada sed neque sed ut eu auctor mi enim euismod egestas enim gravida posuere.',
        userImg: userImgOne,
        userName: 'Mickey Mouse',
        userLocation: 'Babilon',
    },
]

export const recommendedData = [
    {
        id: 1,
        category:'adventure',
        image: img5,
        place: 'Aoraki Mount Cook',
        locationIcon: <GoLocation/>,
        location: 'South Island, New Zeland',
        rating: '4.8',
        starIcon:<AiFillStar/>,
    },
    {
        id: 2,
        category:'cultural',
        image: img6,
        place: 'Ulun Danu Beratan',
        locationIcon: <GoLocation/>,
        location: 'Bali, Indonesia',
        rating: '4.8',
        starIcon:<AiFillStar/>,
    },
    {
        id: 3,
        category:'beach',
        image: img7,
        place: 'Bromo Tengerr Sermeru',
        locationIcon: <GoLocation/>,
        location: 'East Java, Indonesia',
        rating: '4.8',
        starIcon:<AiFillStar/>,
    },
    {
        id: 4,
        category:'popular',
        image: img8,
        place: 'Kiyomizu-dera',
        locationIcon: <GoLocation/>,
        location: 'Eastern Kyoto, Japan',
        rating: '4.8',
        starIcon:<AiFillStar/>,
    },
]

export const sliderData = [
    {
        id: 1,
        image: img1,
        dateIcon:<MdDateRange/>, 
        days: 10,
        peopleIcon:<BsFillPeopleFill/>,
        people: '12+',
        locationIcon: <GoLocation/>,
        location: 'Thailand',
        place: 'Wat Sothonwararam',
        price: '$1,750/person',
        rating: '4.8',
        starIcon:<AiFillStar/>,
    },
    {
        id: 2,
        image: img2,
        dateIcon:<MdDateRange/>, 
        days: 12,
        peopleIcon:<BsFillPeopleFill/>,
        people: '10+',
        locationIcon: <GoLocation/>,
        location: 'Japan',
        place: 'Kumano-Nachi Taisha',
        price: '$1,550/person',
        rating: '4.8',
        starIcon:<AiFillStar/>,
    },
    {
        id: 3,
        image: img3,
        dateIcon:<MdDateRange/>, 
        days: 23,
        peopleIcon:<BsFillPeopleFill/>,
        people: '12+',
        locationIcon: <GoLocation/>,
        location: 'Nepal',
        place: 'Dingboche Village',
        price: '$1,850/person',
        rating: '4.8',
        starIcon:<AiFillStar/>,
    },
    {
        id: 4,
        image: img4,
        dateIcon:<MdDateRange/>, 
        days:8,
        peopleIcon:<BsFillPeopleFill/>,
        people: '12+',
        locationIcon: <GoLocation/>,
        location: 'Indonesia',
        place: 'Lempuyang Temple',
        price: '$1,650/person',
        rating: '4.8',
        starIcon:<AiFillStar/>,
    },
]