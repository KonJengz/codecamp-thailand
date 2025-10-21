import React from 'react'

type Props = {}

const Section3 = (props: Props) => {
   return (
      <div>
         <section className="py-20 px-8 bg-gray-50 text-center">
            <h2 className="text-3xl font-bold mb-10">บทความล่าสุด</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
               {[
                  { title: '5 เคล็ดลับเริ่มเขียนโค้ดอย่างมีเป้าหมาย' },
                  { title: 'React vs Vue เลือกตัวไหนดีสำหรับมือใหม่' },
                  { title: 'ทำไม JavaScript ถึงสำคัญที่สุดในยุคนี้' },
               ].map((a, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                     <h3 className="text-xl font-semibold mb-3">{a.title}</h3>
                     <p className="text-gray-600 mb-4">อ่านต่อเพื่อเรียนรู้เพิ่มเติมเกี่ยวกับเทคนิคใหม่ ๆ</p>
                     <button className="text-blue-600 font-semibold hover:underline">อ่านเพิ่มเติม</button>
                  </div>
               ))}
            </div>
         </section>
      </div>
   )
}

export default Section3
