import Image from "next/image";
import Navbar from "./components/Navbar";
import { getHomeInfo } from "./lib/get-home-info";
import {Hero} from "./components/Hero";

export default function Home(): JSX.Element {


  const title = 'Hihghest Quiality Marijuana Seeds'
  const description = 'Habitasse platea dictumst quisque sagittis purus sit. Dignissim enim sit amet venenatis. In est ante in nibh mauris cursus mattis. Euismod elementum nisi quis eleifend quam adipiscing'
  const button_text = 'Our products'
  const text_helper = 'Our support team is available 24/7 to resolve any product issues'
  const number = '+1-202-555-0133'
  const product_name = 'Purple hawaiian haze'
  const product_description = ''
  const product_value1 = ''
  const product_value2 = ''
  const product_value3 = ''
  const product_text_button = ''
  
  return (
    <>
      <Navbar/>
      <Hero/>

    </>
  );
}