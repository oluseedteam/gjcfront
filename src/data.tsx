import { routeType, buttonType, methodProps, values } from "./types";

// partners logo
import partner1 from "./assets/partner1.png";
import partner2 from "./assets/partner2.png";
import partner3 from "./assets/partner3.png";
import partner4 from "./assets/partner4.png";
import partner5 from "./assets/partner5.png";

// waste types images
import waste1 from "./assets/waste1.png";
import waste2 from "./assets/waste2.png";
import waste3 from "./assets/waste3.png";
import waste4 from "./assets/waste4.png";
import waste5 from "./assets/waste5.png";
import waste6 from "./assets/waste6.png";
import waste7 from "./assets/waste7.png";
import waste8 from "./assets/waste8.png";
import waste9 from "./assets/waste9.png";
import waste10 from "./assets/waste10.png";

// collection methods images
import collection1 from "./assets/collection1.png";
import collection2 from "./assets/collection2.png";
import collection3 from "./assets/collection3.png";

import testimonial from "./assets/small_img.png";

import envelope from "./assets/envelope.png";
import phone from "./assets/phone.png";

// social media icons
import twitter from "./assets/twitter.png";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import linkedin from "./assets/linkedin.png";

import dispose from "./assets/dispose.png";

import team from "./assets/team.png";

import envelope2 from "./assets/envelope2.png";
import phone2 from "./assets/phone2.png";

// social media icons
import twitter2 from "./assets/twitter2.png";
import facebook2 from "./assets/facebook2.png";
import instagram2 from "./assets/instagram2.png";
import linkedin2 from "./assets/linkedin2.png";

import SwiperOptions from "swiper";

export const LinkRoutes: routeType = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

export const ButtonType: buttonType = {
  light: "bg-white text-primary",
  dark: "bg-primary text-white",
};
export const WastesData: { name: string; img: string }[] = [
  {
    name: "Pet containers",
    img: waste2,
  },
  {
    name: "Plastic buckets",
    img: waste7,
  },
  {
    name: "glass containers",
    img: waste9,
  },
  {
    name: "used papers",
    img: waste10,
  },
  {
    name: "Aluminium can containers",
    img: waste1,
  },
  {
    name: "Pure water sachets",
    img: waste6,
  },
];

export const pickUpData = [
  {
    place: "Ebute Meta Hub",
    areas: [
      "Ebute Meta",
      "Oyinbo",
      "Ajegunle",
      "Yaba",
      "Orile Alagomeji",
      "Costain",
    ],
    phone: "08107492331",
  },
  {
    place: "Ebute Meta Hub",
    areas: [
      "Ebute Meta",
      "Oyinbo",
      "Ajegunle",
      "Yaba",
      "Orile Alagomeji",
      "Costain",
    ],
    phone: "08107492331",
  },
  {
    place: "Ebute Meta Hub",
    areas: [
      "Ebute Meta",
      "Oyinbo",
      "Ajegunle",
      "Yaba",
      "Orile Alagomeji",
      "Costain",
    ],
    phone: "08107492331",
  },
  {
    place: "Ebute Meta Hub",
    areas: [
      "Ebute Meta",
      "Oyinbo",
      "Ajegunle",
      "Yaba",
      "Orile Alagomeji",
      "Costain",
    ],
    phone: "08107492331",
  },
  {
    place: "Ebute Meta Hub",
    areas: [
      "Ebute Meta",
      "Oyinbo",
      "Ajegunle",
      "Yaba",
      "Orile Alagomeji",
      "Costain",
    ],
    phone: "08107492331",
  },
  {
    place: "Ebute Meta Hub",
    areas: [
      "Ebute Meta",
      "Oyinbo",
      "Ajegunle",
      "Yaba",
      "Orile Alagomeji",
      "Costain",
    ],
    phone: "08107492331",
  },
  {
    place: "Ebute Meta Hub",
    areas: [
      "Ebute Meta",
      "Oyinbo",
      "Ajegunle",
      "Yaba",
      "Orile Alagomeji",
      "Costain",
    ],
    phone: "08107492331",
  },
];

export const dropData = [
  {
    place: "Gbagada Phase 2",
    address:
      "Canterbury Health Consult, 20B Lanre Awolokun St, Gbagada, Lagos.",
    number: "08107492331",
    link: "/",
  },
  {
    place: "Gbagada Phase 2",
    address:
      "Canterbury Health Consult, 20B Lanre Awolokun St, Gbagada, Lagos.",
    number: "08107492331",
    link: "/",
  },

  {
    place: "Gbagada Phase 2",
    address:
      "Canterbury Health Consult, 20B Lanre Awolokun St, Gbagada, Lagos.",
    number: "08107492331",
    link: "/",
  },
  {
    place: "Gbagada Phase 2",
    address:
      "Canterbury Health Consult, 20B Lanre Awolokun St, Gbagada, Lagos.",
    number: "08107492331",
    link: "/",
  },
];

export const RegisterValues: values = {
  fullName: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SidebarLinks = [
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "Bookings",
    path: "/dashboard/bookings",
  },
  {
    name: "User",
    path: "/dashboard/users",
  },
  {
    name: "Acceptable items",
    path: "/dashboard/items",
  },
  {
    name: "Cover Area",
    path: "/dashboard/areas",
  },
  {
    name: "Admin Management",
    path: "/dashboard/admins",
  },
  {
    name: "Profile",
    path: "/dashboard/profile",
  },
  {
    name: "Logout",
    path: "/login",
  },
];

export const OverviewData = [
  {
    name: "Total bookings",
    amount: "721K",
    percent: "+11.01%",
    type: "credit",
  },
  {
    name: "Pending Pickup",
    amount: "1,156",
    percent: "+0.56 %",
    type: "credit",
  },
  {
    name: "New User ",
    amount: "367K",
    percent: "-0.56%",
    type: "debit",
  },
  {
    name: "Active User",
    amount: "239K",
    percent: "-1.48%",
    type: "debit",
  },
];

export const LanguageData = [
  {
    name: "English",
    value: "english",
  },
  {
    name: "French",
    value: "french",
  },
];
type pickUpType = Array<{
  bookingId: number;
  bookingDate: string;
  location: string;
  phone: string;
  pickupDate: string;
  status: string;
  name: string;
}>;
export const AllPickups: pickUpType = [
  {
    bookingId: 245678,
    bookingDate: "11-01-2022",
    location: "Jacob Jones",
    name: "Floyd Miles",
    phone: "08046829190",
    pickupDate: "11-01-2022",
    status: "pending",
  },
  {
    bookingId: 245678,
    bookingDate: "11-01-2022",
    location: "Jacob Jones",
    name: "Floyd Miles",
    phone: "08046829190",
    pickupDate: "11-01-2022",
    status: "pending",
  },
  {
    bookingId: 245678,
    bookingDate: "11-01-2022",
    location: "Jacob Jones",
    name: "Floyd Miles",
    phone: "08046829190",
    pickupDate: "11-01-2022",
    status: "pending",
  },
  {
    bookingId: 245678,
    bookingDate: "11-01-2022",
    location: "Jacob Jones",
    name: "Floyd Miles",
    phone: "08046829190",
    pickupDate: "11-01-2022",
    status: "pending",
  },
  {
    bookingId: 245678,
    bookingDate: "11-01-2022",
    location: "Jacob Jones",
    name: "Floyd Miles",
    phone: "08046829190",
    pickupDate: "11-01-2022",
    status: "successful ",
  },
  {
    bookingId: 245678,
    bookingDate: "11-01-2022",
    location: "Jacob Jones",
    name: "Floyd Miles",
    phone: "08046829190",
    pickupDate: "11-01-2022",
    status: "successful ",
  },
  {
    bookingId: 245678,
    bookingDate: "11-01-2022",
    location: "Jacob Jones",
    name: "Floyd Miles",
    phone: "08046829190",
    pickupDate: "11-01-2022",
    status: "successful ",
  },
  {
    bookingId: 245678,
    bookingDate: "11-01-2022",
    location: "Jacob Jones",
    name: "Floyd Miles",
    phone: "08046829190",
    pickupDate: "11-01-2022",
    status: "successful ",
  },
  {
    bookingId: 245678,
    bookingDate: "11-01-2022",
    location: "Jacob Jones",
    name: "Floyd Miles",
    phone: "08046829190",
    pickupDate: "11-01-2022",
    status: "successful ",
  },
  {
    bookingId: 245678,
    bookingDate: "11-01-2022",
    location: "Jacob Jones",
    name: "Floyd Miles",
    phone: "08046829190",
    pickupDate: "11-01-2022",
    status: "cancelled",
  },
  {
    bookingId: 245678,
    bookingDate: "11-01-2022",
    location: "Jacob Jones",
    name: "Floyd Miles",
    phone: "08046829190",
    pickupDate: "11-01-2022",
    status: "cancelled",
  },
  {
    bookingId: 245678,
    bookingDate: "11-01-2022",
    location: "Jacob Jones",
    name: "Floyd Miles",
    phone: "08046829190",
    pickupDate: "11-01-2022",
    status: "cancelled",
  },
  {
    bookingId: 245678,
    bookingDate: "11-01-2022",
    location: "Jacob Jones",
    name: "Floyd Miles",
    phone: "08046829190",
    pickupDate: "11-01-2022",
    status: "cancelled",
  },
];

export const headerData = [
  "Booking Id",
  "Booking Date",
  "Name",
  "Location",
  "Phone Number",
  "Pickup date",
  "Booking Status",
];

export const userHeader = [
  "User ID",
  "Name",
  "Email",
  "Phone Number",
  "Total Order",
  "Pending Order",
];

export const buttonStates = [
  {
    name: "All Users",
    status: "all",
  },
  {
    name: "Top Users",
    status: "active",
  },
];

export const UsersData = [
  {
    _id: 27899,
    name: "Jacob Jones",
    data: "11-02-2023",
    phone: "08057638292",
    email: "jones@gmail.com",
    totalOrder: 40,
    pendingOrder: 4,
  },
  {
    _id: 27899,
    name: "Jacob Jones",
    data: "11-02-2023",
    phone: "08057638292",
    email: "jones@gmail.com",
    totalOrder: 40,
    pendingOrder: 4,
  },
  {
    _id: 27899,
    name: "Jacob Jones",
    data: "11-02-2023",
    phone: "08057638292",
    email: "jones@gmail.com",
    totalOrder: 40,
    pendingOrder: 4,
  },
  {
    _id: 27899,
    name: "Jacob Jones",
    data: "11-02-2023",
    phone: "08057638292",
    email: "jones@gmail.com",
    totalOrder: 40,
    pendingOrder: 4,
  },
  {
    _id: 27899,
    name: "Jacob Jones",
    data: "11-02-2023",
    phone: "08057638292",
    email: "jones@gmail.com",
    totalOrder: 40,
    pendingOrder: 4,
  },
  {
    _id: 27899,
    name: "Jacob Jones",
    data: "11-02-2023",
    phone: "08057638292",
    email: "jones@gmail.com",
    totalOrder: 40,
    pendingOrder: 4,
  },
  {
    _id: 27899,
    name: "Jacob Jones",
    data: "11-02-2023",
    phone: "08057638292",
    email: "jones@gmail.com",
    totalOrder: 40,
    pendingOrder: 4,
  },
  {
    _id: 27899,
    name: "Jacob Jones",
    data: "11-02-2023",
    phone: "08057638292",
    email: "jones@gmail.com",
    totalOrder: 40,
    pendingOrder: 4,
  },
  {
    _id: 27899,
    name: "Jacob Jones",
    data: "11-02-2023",
    phone: "08057638292",
    email: "jones@gmail.com",
    totalOrder: 40,
    pendingOrder: 4,
  },
  {
    _id: 27899,
    name: "Jacob Jones",
    data: "11-02-2023",
    phone: "08057638292",
    email: "jones@gmail.com",
    totalOrder: 40,
    pendingOrder: 4,
  },
  {
    _id: 27899,
    name: "Jacob Jones",
    data: "11-02-2023",
    phone: "08057638292",
    email: "jones@gmail.com",
    totalOrder: 40,
    pendingOrder: 4,
  },
  {
    _id: 27899,
    name: "Jacob Jones",
    data: "11-02-2023",
    phone: "08057638292",
    email: "jones@gmail.com",
    totalOrder: 40,
    pendingOrder: 4,
  },
];

export const UsersDetails = [];

export const swiperOptions: SwiperOptions = {
  centerInsufficientSlides: true,
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    500: {
      slidesPerView: 2,
    },
    840: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 4000, // Set the delay between slide transitions in milliseconds
    // Allow autoplay to continue even when the user interacts with the swiper
  },

  pagination: {
    clickable: true,
  },
};

export const swiperOptions2: SwiperOptions = {
  centerInsufficientSlides: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    500: {
      slidesPerView: 1,
    },
    840: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 4000, // Set the delay between slide transitions in milliseconds
    // Allow autoplay to continue even when the user interacts with the swiper
  },

  pagination: {
    clickable: true,
  },
};

export const CoverAreaDatas = [
  "Ogbomoso",
  "UnderG",
  "Abba",
  "Ogbomoso",
  "UnderG",
  "Abba",
  "Ogbomoso",
  "UnderG",
  "Abba",
  "Ogbomoso",
  "UnderG",
  "Abba",
  "Ogbomoso",
  "UnderG",
  "Abba",
];

export const adminData = [
  { email: "ajaniben123456@gmail.com", role: "Admin", status: "Pending" },
  { email: "ajaniben123456@gmail.com", role: "User", status: "Active" },
  { email: "ajaniben123456@gmail.com", role: "User", status: "Suspended" },
];
