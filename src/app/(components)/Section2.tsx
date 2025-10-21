import React from 'react'

type Props = {}

const Section2 = (props: Props) => {
   return (
      <div>
         <section className="py-20 px-8 bg-white text-center">
            <h2 className="text-3xl font-bold mb-10">คอร์สยอดนิยม</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
               {[
                  { title: 'HTML & CSS เบื้องต้น', desc: 'พื้นฐานเว็บที่ทุกคนควรรู้' },
                  { title: 'JavaScript สำหรับผู้เริ่มต้น', desc: 'เข้าใจโค้ดเบื้องต้นได้ในไม่กี่วัน' },
                  { title: 'React.js ขั้นพื้นฐาน', desc: 'สร้างเว็บแบบ interactive ได้จริง' },
               ].map((c, i) => (
                  <div key={i} className="p-6 rounded-2xl shadow hover:shadow-lg transition">
                     <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                     <p className="text-gray-600 mb-4">{c.desc}</p>
                     <button className="text-blue-600 font-semibold hover:underline">ดูรายละเอียด</button>
                  </div>
               ))}
            </div>
         </section>
      </div>
   )
}

export default Section2
