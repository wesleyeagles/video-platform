import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation } from 'swiper'
import { Header } from "../components/Header";
import { useGetLaunchsQuery } from "../graphql/generated";

import 'swiper/css';
import 'swiper/css/navigation';

interface LaunchProps {

    name: string;
    launchSlug: string;
}



export function Home(props: LaunchProps) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const { launchSlug } = useParams<{launchSlug: string}>()
    
    const { data } = useGetLaunchsQuery()
    console.log(data)

    const navigate = useNavigate()

    function tokenCheck() {
        const token = localStorage.getItem('key')

        if (token == null) {
            navigate('/login')
        }
    }


    useEffect(() => {
        tokenCheck()
    }, [])

   



    return (
        <div className="flex flex-col min-h-screen">
        <Header />

        <h2 className="mt-10 px-6 text-2xl">Lançamentos</h2>
        <div className="mt-5 px-6">
        <Swiper
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={1}
        navigation
        breakpoints={{
            640: {
              slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4
            }
        }}            
        onSlideChange={() => console.log('slide change')}
         onSwiper={(swiper: any) => console.log(swiper)}
        >

        
        {data?.launches.map(launch => {
                return (
                    <SwiperSlide key={launch.name}>
                    <Link className="w-[260px] h-[300px]" to={`/launches/${launch.launchSlug}`}>
                    <div className="relative duration-200 w-full h-[300px] flex justify-between flex-col bg-gradient-to-b bg-[#0f111676] hover:bg-[#0f111600]">
                    <img className="absolute w-full h-full -z-10" src={launch.thumbUrl} alt="" />
                    <span className="bg-[rgba(15,17,22,.8)] py-1 px-3 block mt-2 mx-5 w-max h-max rounded-full text-xs text-purple-600 font-bold">Lançamento</span>
                    <h1 className="ml-5 mb-5 text-xl uppercase font-black">{launch.name}</h1>
                    </div>
                    </Link>
                    </SwiperSlide>
                )
            })}
        

        </Swiper>
        </div>
        
       
        
        </div>
    )
}