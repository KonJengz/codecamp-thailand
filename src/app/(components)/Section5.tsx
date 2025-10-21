import Image from 'next/image'
import React from 'react'

type Props = {}

const Section5 = (props: Props) => {
   const topItems = [
      {
         img: 'https://getcodecamp.com/wp-content/uploads/2023/12/education6.png',
         text: '24 วิชา ครอบคลุมเนื้อหาตาม ACM Software Engineering 2014',
      },
      {
         img: 'https://getcodecamp.com/wp-content/uploads/2023/12/folder.png',
         text: '20 การบ้าน 2 Project จำลองการทำงานจริง',
      },
      {
         img: 'https://getcodecamp.com/wp-content/uploads/2023/12/play-button.png',
         text: 'ดู Video ย้อนหลังได้ทุกวันที่สอน',
      },
      {
         img: 'https://getcodecamp.com/wp-content/uploads/2023/12/group.png',
         text: 'ทีมผู้ช่วยสอน เข้าใจ ใส่ใจ พร้อมช่วยเสมอ',
      },
      {
         img: 'https://getcodecamp.com/wp-content/uploads/2023/12/certificate.512x432.png',
         text: 'รับ Certificate จากเรา Coding Bootcamp เจ้าแรกและนานที่สุดในไทย',
      },
      {
         img: 'https://getcodecamp.com/wp-content/uploads/2023/12/silhouette.png',
         text: 'ปรึกษาได้ตั้งแต่ก่อนเข้า Camp ระหว่าง Camp หรือหลังจบจาก Camp',
      },
   ]

   const bottomItems = [
      {
         img: 'https://getcodecamp.com/wp-content/uploads/2023/12/education1.png',
         title: 'เนื้อหาครบถ้วน ทำงานจริงได้',
      },
      {
         img: 'https://getcodecamp.com/wp-content/uploads/2023/12/online-job-applicants.png',
         title: 'มีงานรองรับจากบริษัท Partner กว่า 50 บริษัท',
      },
      {
         img: 'https://getcodecamp.com/wp-content/uploads/2023/12/education3.png',
         title: 'ระบบการเรียนแบบบ้าน กลุ่ม และคู่ และทีมสอน เข้าใจ ใส่ใจ',
      },
      {
         img: 'https://getcodecamp.com/wp-content/uploads/2023/12/payment.png',
         title: 'ผ่อนจ่ายได้ และมีความยืดหยุ่นทางการเงิน',
      },
   ]
   return (
      <div>
         <section className="py-20 bg-white text-center">
            {/* จุดเด่นของแคมป์เรา */}
            <h2 className="text-3xl font-bold text-blue-900 mb-12">จุดเด่นของแคมป์เรา</h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 lg:grid-cols-6 gap-10 px-6">
               {topItems.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                     <Image src={item.img} alt={item.text} width={50} height={50} />
                     <p className="text-gray-600 text-sm leading-relaxed mt-3">{item.text}</p>
                  </div>
               ))}
            </div>

            {/* เรียนกับเราดียังไง */}
            <h2 className="text-3xl font-bold text-blue-900 mt-20 mb-12">เรียนกับเราดียังไง</h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
               {bottomItems.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                     <Image src={item.img} alt={item.title} width={70} height={70} />
                     <h3 className="text-lg font-bold text-blue-900 mt-4">{item.title}</h3>
                  </div>
               ))}
            </div>
         </section>
      </div>
   )
}

export default Section5
