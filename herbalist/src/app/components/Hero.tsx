import Image from "next/image";
import { getHomeInfo } from "../lib/get-home-info"

export const Hero = async () => {

    const { title, description, image} = await getHomeInfo()
    console.log('??????' ,title, description, image)
    // const description = ''

    
//   const title = 'Hihghest Quiality Marijuana Seeds'
//   const description = 'Habitasse platea dictumst quisque sagittis purus sit. Dignissim enim sit amet venenatis. In est ante in nibh mauris cursus mattis. Euismod elementum nisi quis eleifend quam adipiscing'
//   const button_text = 'Our products'
//   const text_helper = 'Our support team is available 24/7 to resolve any product issues'
//   const number = '+1-202-555-0133'
//   const product_name = 'Purple hawaiian haze'
//   const product_description = ''
//   const product_value1 = ''
//   const product_value2 = ''
//   const product_value3 = ''
//   const product_text_button = ''
  
  return (
    <section className="min-h-screen flex items-center justify-center w-full relative">
    {/* Añadido relative aquí también */}
    <div className="xl:flex xl:min-h-screen max-w-screen-xl w-full relative">

        <article className="mx-6 text-center flex flex-col gap-14 pt-32 xl:w-1/2 xl:p-0 xl:block  xl:min-h-screen xl:pt-72 xl:ml-0 xl:text-left">
        <div className="flex flex-col gap-5 xl:mr-10 xl:max-w-[600px]">
            <h1 className="font-bold text-5xl text-[#214842]">{title}</h1>
            <p className="text-[#556260] xl:max-w-[410px]">Habitasse platea dictumst quisque sagittis purus sit. Dignissim enim sit amet venenatis. In est ante in nibh mauris cursus mattis. Euismod elementum nisi quis eleifend quam adipiscing</p>
            <a className="py-2 px-4 rounded-full bg-[#efc368] w-fit mx-auto text-[#556260] font-semibold xl:mx-0">Our Products</a>
        </div>

        <div className="flex items-center justify-center flex-col gap-4 mb-24  xl:flex xl:flex-col xl:items-start xl:mt-10">
            <p className="text-[#687372] font-semibold xl:max-w-[300px]">Our support team is available 24/7 to resolve any product issues</p>
            <div className="mx-auto xl:m-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="#258f67" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18.497 4.409a10 10 0 0 1 -10.36 16.828l-.223 -.098l-4.759 .849l-.11 .011a1 1 0 0 1 -.11 0l-.102 -.013l-.108 -.024l-.105 -.037l-.099 -.047l-.093 -.058l-.014 -.011l-.012 -.007l-.086 -.073l-.077 -.08l-.067 -.088l-.056 -.094l-.034 -.07l-.04 -.108l-.028 -.128l-.012 -.102a1 1 0 0 1 0 -.125l.012 -.1l.024 -.11l.045 -.122l1.433 -3.304l-.009 -.014a10 10 0 0 1 1.549 -12.454l.215 -.203a10 10 0 0 1 13.226 -.217m-8.997 3.09a1.5 1.5 0 0 0 -1.5 1.5v1a6 6 0 0 0 6 6h1a1.5 1.5 0 0 0 0 -3h-1l-.144 .007a1.5 1.5 0 0 0 -1.128 .697l-.042 .074l-.022 -.007a4.01 4.01 0 0 1 -2.435 -2.435l-.008 -.023l.075 -.041a1.5 1.5 0 0 0 .704 -1.272v-1a1.5 1.5 0 0 0 -1.5 -1.5" /></svg>
            </div>
            <div className="">
            <p className="text-[#214842] font-semibold">phone number</p>
            <p className="text-[#687372] font-bold">+1-202-555-0133</p>
            </div>
        </div>
        </article>
        
        {/* Añadido: Este es el nuevo div que crea el fondo extendido */}
        <div className="hidden xl:block absolute top-0 bottom-0 right-0 bg-[#214842] w-screen" style={{ left: '50%' }}></div>

        <article className="bg-[#214842] px-6 py-20 relative flex items-center justify-center flex-col gap-4 text-center text-white xl:flex xl:min-h-screen xl:w-1/2 xl:pt-72 xl:justify-start xl:items-end xl:pr-0">
        {/* <img src="/img_hero.png" className="w-40 xl:absolute xl:w-[24rem] xl:left-[-13rem] xl:top-[6rem]" alt="" /> */}
        <Image 
            src="/img/hero.png" 
            className="w-40 xl:w-full" 
            alt="Hero image"
            width={400}    // Este valor debe ajustarse a las dimensiones reales de tu imagen
            height={300}   // Este valor debe ajustarse a las dimensiones reales de tu imagen
        />
        <div className="flex flex-col gap-4 xl:max-w-[400px] xl:text-balance xl:text-left xl:items-start ">
            <h2 className="font-bold text-3xl ">Purple Hwaiian Haze</h2>
            <p className="font-medium">Nisl vel pretium lectus quam id leo in viate. Pellentesque adipiscing commodo elit at imperdiet</p>
            <ul className="flex items-start gap-3 flex-col">
            <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#efc368" className="icon icon-tabler icons-tabler-filled icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" /></svg>
                <p>Sativa-Dominant</p>
            </li>
            <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#efc368" className="icon icon-tabler icons-tabler-filled icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" /></svg>
                <p>Thc 110.0-160.0mg/g</p>
            </li>
            <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#efc368" className="icon icon-tabler icons-tabler-filled icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" /></svg>
                <p>Sativa-SBD 0.0-1.0mg/g</p>
            </li>
            </ul>
            <a href="" className="font-medium text-[#efc368] mx-auto mt-4 border-b border-b-[#efc368] w-fit xl:m-0">About product</a>
        </div>
        </article>
    </div>
    </section>
  );
}