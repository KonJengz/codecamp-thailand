import Image from 'next/image'
import React from 'react'

type Props = {}

const Section4 = (props: Props) => {
   const items = [
      {
         title: 'ผู้เริ่มต้นเป็น Programmer',
         desc: 'บุคคลทั่วไป ผู้ที่สนใจอยากเป็น Programmer อยากมีผู้แนะนำ ใส่ใจ เข้าใจ พร้อมร่วมทางตลอด',
         img: 'https://getcodecamp.com/wp-content/uploads/2023/12/code1.png',
      },
      {
         title: 'ผู้ที่อยากย้ายสายงาน',
         desc: 'ผู้ที่จบไม่ตรงสาย แต่อยากเป็น Programmer (โครงการเรามีผู้เข้าร่วมกว่า 80% จบไม่ตรงสาย)',
         img: 'https://getcodecamp.com/wp-content/uploads/2023/12/m2i8b1b1b1m2K9m2-600x600.png',
      },
      {
         title: 'นักเรียน / นักศึกษา',
         desc: 'ผู้ที่กำลังศึกษาอยู่ แต่อยากได้ความรู้ และลงมือทำเพิ่มขึ้น เพื่อให้เข้าใจว่าจะทำงานจริงได้อย่างไร',
         img: 'https://getcodecamp.com/wp-content/uploads/2023/12/student2.png',
      },
   ]
   return (
      <div>
         <section className="py-16 bg-white text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-12">แคมป์นี้เหมาะกับใคร</h2>

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 px-6">
               {items.map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                     <div className="w-28 h-28 mb-6">
                        <Image src={item.img} alt={item.title} width={112} height={112} className="mx-auto" />
                     </div>
                     <h3 className="text-xl font-semibold text-blue-900 mb-3">{item.title}</h3>
                     <p className="text-gray-600 leading-relaxed max-w-xs">{item.desc}</p>
                  </div>
               ))}
            </div>
         </section>
      </div>
   )
}

export default Section4
