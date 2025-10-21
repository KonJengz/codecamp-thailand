import Image from 'next/image'
import myImg1 from '../../../public/images/ภาพถ่ายหน้าจอ 2568-10-21 เวลา 11.00.14.png'
import React from 'react'

type Props = {}

const MyVideo = (props: Props) => {
   return (
      <div>
         <div className="flex flex-col justify-center items-center my-10">
            <Image src={myImg1} alt="Logo" width={1200} height={600} />
            <div className="aspect-video mt-20 w-3/4 md:w-1/2 lg:w-1/3">
               <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/3bF1981tyXs"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
               ></iframe>
            </div>
         </div>
      </div>
   )
}

export default MyVideo
