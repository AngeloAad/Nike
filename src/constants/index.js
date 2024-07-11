import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../nike_landing_assets/assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../nike_landing_assets/assets/images";

export const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#about-us", label: "About Us" },
    { href: "/#products", label: "Products" },
    { href: "/#contact-us", label: "Contact Us" },
    { href: "/myBag", label: "My Bag" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        key:"shoe_4",
        imgURL: shoe4,
        name: "Nike Air Jordan 101",
        price: "$200.20",
    },
    {
        key:"shoe_5",
        imgURL: shoe5,
        name: "Nike Air Jordan 109",
        price: "$210.20",
    },
    {
        key:"shoe_6",
        imgURL: shoe6,
        name: "Nike Air Jordan 100",
        price: "$220.20",
    },
    {
        key:"shoe_7",
        imgURL: shoe7,
        name: "Nike Air Jordan 001",
        price: "$230.20",
    },
];

export const productSelection =[
    {
        key:"shoe_4",
        imgURL: shoe4,
        name: "Nike Air Jordan 101",
        price: "$200.20",
        description: "Embrace the fusion of vintage hoops style and modern comfort with the Nike Dunk. Synthetic leather overlays add a retro flair, while the padded, low-cut collar ensures you can wear them all day long.",
        ulList: ["Shown: Midnight Navy/University Red/White", 
            "Code: HF4293-200"],
    },
    {
        key:"shoe_5",
        imgURL: shoe5,
        name: "Nike Air Jordan 109",
        price: "$210.20",
        description: "Bringing back the classic basketball aesthetic, the Nike Dunk offers a timeless design with synthetic leather overlays. Its padded, low-cut collar provides comfort for any occasion.",
        ulList: ["Shown: Black/White/Varsity Red",
        "Code: SF3421-200"],
    },
    {
        key:"shoe_6",
        imgURL: shoe6,
        name: "Nike Air Jordan 100",
        price: "$220.20",
        description: "The Nike Dunk seamlessly blends retro appeal with contemporary comfort. With synthetic leather overlays and a padded, low-cut collar, it’s perfect for both the court and the streets.",
        ulList: ["Shown: Grey Fog/Orange Blaze/Black",
        "Code: RC4444-422"],
    },
    {
        key:"shoe_7",
        imgURL: shoe7,
        name: "Nike Air Jordan 001",
        price: "$230.20",
        description: "Elevate your style with the Nike Dunk, a perfect mix of classic basketball heritage and modern-day comfort. Synthetic leather overlays and a padded, low-cut collar make it versatile and stylish.",
        ulList: ["Shown: Sail/University Blue/White",
        "Code: TT4296-500"],
    },
]

export const myBagItems = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan 01",
        price: "$200.20",
        color: "Midnight Navy / University Red / White",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan 10",
        price: "$210.20",
        color: "Black / White / Varsity Red",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan 100",
        price: "$220.20",
        color: "Grey Fog / Orange Blaze / Black",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan 001",
        price: "$230.20",
        color: "Sail / University Blue / White",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Joe Goldberg',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Love Quinn',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];