import Nav from "./Components/Nav";
import "./App.css";
import Intro from "./Components/Intro";
import Brand from "./Components/Brand";
import Provide from "./Components/Provide";

import icon1 from "./assets/clipboard-solid-full.svg";
import icon2 from "./assets/house-solid-full.svg";
import icon3 from "./assets/business-time-solid-full (1).svg";
import icon4 from "./assets/money-check-dollar-solid-full (1).svg";

import Builds from "./Components/Builds";
import Consult from "./Components/Consult";
import Agents from "./Components/Agents";

import build1 from "./assets/building-solid-full (1).svg";
import group from "./assets/people-group-solid-full (2).svg";
import handshake from "./assets/handshake-solid-full.svg";

import ana from "./assets/téléchargement.jpg";
import Hoverpics from "./Components/Hoverpics";

import facebook from "./assets/facebook-brands-solid-full (1).svg";
import instagram from "./assets/instagram-brands-solid-full (1).svg";
import X from "./assets/x-twitter-brands-solid-full (1).svg";
import Card from "./Components/Card";
import Inspire from "./Components/Inspre";

import help from "./assets/How a Career Branding Coach Can Help You Fast-Track a Promotion in Job in India.jpg";
import help2 from "./assets/Two asian businesspeople working at office _ Premium Photo.jpg";
import help3 from "./assets/Group of young asian business people with the creative work talk and exchange ideas shared at the meeting _ Premium Photo.jpg";
import Foot from "./Components/Foot";

import foot1 from "./assets/facebook-brands-solid-full (1).svg";
import foot2 from "./assets/instagram-brands-solid-full (1).svg";
import foot3 from "./assets/x-twitter-brands-solid-full (1).svg";
import AboutUs from "./Components/AboutUs";

const icons = [
  {
    img: `${icon1}`,
    titel: "Low And Cost Home Taxes",
    lorem: "Lorem ipsum dolor sit amet conse adipiscing elit magna",
  },
  {
    img: `${icon2}`,
    titel: "Best Home Guarantee",
    lorem: "Lorem ipsum dolor sit amet conse adipiscing elit magna",
  },
  {
    img: `${icon3}`,
    titel: "Get Property Insurance",
    lorem: "Lorem ipsum dolor sit amet conse adipiscing elit magna",
  },
  {
    img: `${icon4}`,
    titel: "Easy & Quick Process",
    lorem: "Lorem ipsum dolor sit amet conse adipiscing elit magna",
  },
];
const images = [
  {
    chemin:
      "https://kit.baliniz.com/restead/wp-content/uploads/sites/12/elementor/thumbs/modern-townhouse-in-germany-e1630595600660-pf2n5gl18rjzmaugoy8trvt94161yyp9eu1qtquarc.jpg",
    price: "$ 42,000",
    titel: "Deva Bali Apartment, Kuta",
    bd: "8 BD",
    ba: "2 BA",
    sf: "3,200 SF",
    loc: "Jl. Raya Kuta No.70, Kuta",
  },
  {
    chemin:
      "https://kit.baliniz.com/restead/wp-content/uploads/sites/12/elementor/thumbs/big-modern-apartment-house-e1630595490940-pf2n5gl18rjzmaugoy8trvt94161yyp9eu1qtquarc.jpg",
    price: "$ 86,000",
    titel: "Clio Apartment, Seminyak",
    bd: "4 BD",
    ba: "2 BA",
    sf: "2,200 SF",
    loc: "Jl. Rama Seminyak No 12, Seminyak",
  },
  {
    chemin:
      "https://kit.baliniz.com/restead/wp-content/uploads/sites/12/elementor/thumbs/beautiful-house-in-the-suburbs-e1630595542250-pf2n5gl18rjzmaugoy8trvt94161yyp9eu1qtquarc.jpg",
    price: "$ 34,000",
    titel: "Royal Villa Jepun, Ubud",
    bd: "4 BD",
    ba: "2 BA",
    sf: "2,200 SF",
    loc: "Jl. Raya Ubud No.20, Ubud",
  },
  {
    chemin:
      "https://kit.baliniz.com/restead/wp-content/uploads/sites/12/elementor/thumbs/contemporary-architecture-vacation-home-e1630595771901-pf2n5gl18rjzmaugoy8trvt94161yyp9eu1qtquarc.jpg",
    price: "$ 38,000",
    titel: "Contemporary Apartment, Canggu",
    bd: "4 BD",
    ba: "2 BA",
    sf: "2,200 SF",
    loc: "Jl. Pantai Batu Bolong No.24, Canggu",
  },
  {
    chemin:
      "https://kit.baliniz.com/restead/wp-content/uploads/sites/12/elementor/thumbs/typical-apartment-building-in-east-berlin-e1630595428315-pf2n5gl18rjzmaugoy8trvt94161yyp9eu1qtquarc.jpg",
    price: "$ 75,000",
    titel: "Cempaka Apartment, Kuta",
    bd: "4 BD",
    ba: "2 BA",
    sf: "2,200 SF",
    loc: "Jl. Raya Kuta No.70, Kuta",
  },
  {
    chemin:
      "https://kit.baliniz.com/restead/wp-content/uploads/sites/12/elementor/thumbs/modern-luxury-apartment-house-in-berlin-e1630595527793-pf2n5gl18rjzmaugoy8trvt94161yyp9eu1qtquarc.jpg",
    price: "$ 60,000",
    titel: "Sahadewa Apartment, Kuta",
    bd: "4 BD",
    ba: "2 BA",
    sf: "2,200 SF",
    loc: "Jl. Merta Sari No.9, Kuta",
  },
];
const icons2 = [
  {
    chemin: build1,
    titel: "Search Property",
    desc: "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua exercitation ullamco",
    background: "white",
    color: "#061f4a",
    pcolor: "gray",
  },
  {
    chemin: group,
    titel: "Meet Your Agent",
    desc: "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua exercitation ullamco,",
    background: "#f98140",
    color: "white",
    pcolor: "white",
  },
  {
    chemin: handshake,
    titel: "Close The Deal",
    desc: "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua exercitation ullamco",
    background: "white",
    color: "#061f4a",
    pcolor: "gray",
  },
];
const images2 = [
  {
    chemin: ana,
    top: "30%",
    left: "30%",
  },
  {
    chemin: ana,
    top: "55%",
    left: "15%",
  },
  {
    chemin: ana,
    top: "80%",
    left: "30%",
  },
  {
    chemin: ana,
    top: "30%",
    left: "70%",
  },
  {
    chemin: ana,
    top: "55%",
    left: "85%",
  },
  {
    chemin: ana,
    top: "80%",
    left: "70%",
  },
];
const Agents2 = [
  {
    img: ana,
    name: "Adil Aaboune",
    job: "Agent",
  },
  {
    img: ana,
    name: "Ahmed sabiri",
    job: "consultant",
  },
  {
    img: ana,
    name: "Kamal kadiri",
    job: "boss",
  },
  {
    img: ana,
    name: "Kamal kadiri",
    job: "boss",
  },
];
const platforms = [
  {
    img: facebook,
  },
  {
    img: instagram,
  },
  {
    img: X,
  },
];
const more = [
  {
    img: help,
    titel: "Insight",
    titel2: "Want To Succeed In Real Estate? Focus On These Habits",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...",
  },
  {
    img: help2,
    titel: "Investment",
    titel2: "How Investors Can Leverage the Power of Real Estate",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...",
  },
  {
    img: help3,
    titel: "Real Estae",
    titel2: "Why We Got Into Real Estate – And Why We Stayed",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...",
  },
];
const foot = [
  {
    img: foot1,
  },
  {
    img: foot2,
  },
  {
    img: foot3,
  },
];

export default function App() {
  return (
    <>
      <Nav />
      <Intro />
      <Brand />
      <Provide icons={icons} />
      <Builds images={images} />
      <Consult />
      <Agents icons2={icons2} images2={images2} />
      <Hoverpics Agents2={Agents2} platforms={platforms} />
      <Card />
      <Inspire more={more} />
      <Foot foot={foot} />
    </>
  );
}
