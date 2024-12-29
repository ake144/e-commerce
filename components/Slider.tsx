'use client'


import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";


const Slides=[
    {
        id:1,
        title:"Summer Sale Collections",
        description:'Sale! up to 50%  off!   Shop from our wide selection of fresh produce, dairy, bakery items, and more.',
        url:'/',
        img:"https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920",
        bg: "bg-gradient-to-r from-yellow-50 to-pink-50"
    },
    {  
        id:2,
        title:"Winter Sale Collections",
        description:'Sale! up to 30%  off! Get everything you need delivered right to your doorstep.',
        url:'/',
        img:"https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920",
        bg:'bg-gradient-to-r from-pink-50 to-blue-50'
    },
    {  
        id:3,
        title:"Spring Sale Collections",
        description:'Sale! up to 30%  off!',
        url:'/',      
        img:"https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920",
        bg:'bg-gradient-to-r from-blue-50 to-yellow-50'
    },
]



const Slider=()=>{
   const [current, setScurrent] = useState(0)

    useEffect(()=>{ 
      const interval = setInterval(()=>{
        setScurrent(prev=>(prev === Slides.length-1 ? 0 : prev +1))
      }, 3000)

      return ()=>clearInterval(interval)
    }, [])

    return(

        <div className="relative h-[calc(100vh-80px)]  overflow-hidden  rounded-lg">
           
        <div className="w-max h-full flex transition-all  ease-in-out duration-1000 "
              style={{transform: `translateX(-${current * 100}vw)`}}
             >
            {
                Slides.map((slide)=>(
            <div
            //absolute inset-0
                className={` w-screen h-full gap-16   bg-cover bg-center `}
                style={{
                    backgroundImage:
                    `url(${slide.img})`,
                }}
                key={slide.id}
                >
            <div className="relative px-6 py-24 sm:px-12 sm:py-32">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight  md:text-5xl">
                  {slide.title}
                    </h1>
                    <p className="mt-6  text-lg  ">
                  {slide.description}
                    </p>
                    <div className="mt-12  flex gap-4 ">
                    <Button size="lg" className="bg-green-500 hover:bg-green-600">
                        Shop Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button size="lg" variant="outline" className="text-black border-white ">
                        View Deals
                    </Button>
                    </div>

                    </div>
                  </div>
                </div>
                ))}
       </div>


          <div className="absolute m-auto left-1/2 bottom-8 flex gap-4 ">         
            {Slides.map((slide, index:number)=>(
                <div className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center
                 ${current === index ? 'scale-150':"" }
                `}  key={slide.id}
                 onClick={()=>setScurrent(index)}
                >

                      {
                        current === index && (
                            <div className="w-[6px] h-[6px] rounded-full ">  </div>
                        )
                      }
                </div>
                  ))}
                  
           </div>

       </div>

            
)}

export default Slider;