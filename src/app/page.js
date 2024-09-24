 "use clint"

import Hero from "@/components/home/Hero"
import ContactUs from "@/components/home/ContactUs"
import { BackTop } from "@/components/home/BackTop"

const page = () => {
  return (
    <>
      
      <Hero />  
      <ContactUs />
     <BackTop/>
    </>
  )
}

export default page
