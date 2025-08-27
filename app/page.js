import Faq from "./components/Faq";
import Hero from "./components/Hero";
import HomeProducts from "./components/HomeProducts";
import Slider from "./components/Slider";

export default function Home() {
  return(
    <>
      <Hero></Hero>
      <Slider></Slider>
      <HomeProducts></HomeProducts>
      <Faq></Faq>
    </>
  )
}