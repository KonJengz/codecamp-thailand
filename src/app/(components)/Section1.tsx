import React from 'react'
import { Facebook, Instagram, Linkedin, Youtube, Check } from 'lucide-react'

type Props = {}

const Section1 = (props: Props) => {
   const features = [
      'ไม่ต้องมีพื้นฐานมาก่อน ก็เรียนได้',
      'การันตีด้วยผู้เรียนกว่า 1,000 คน!',
      'จบมาช่วยหางานให้จาก Partner กว่า 50 บริษัท',
      'โดยเฉลี่ย 90% ของนักเรียนที่จบ ได้งานทำภายใน 3 เดือน',
   ]
   return (
      <div>
         <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-6 md:px-16">
            <div className="max-w-6xl mx-auto text-center">
               <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-900 mb-4">
                  CODE CAMP แคมป์สอนเขียน CODE แห่งแรกในประเทศไทย
               </h1>
               <p className="text-xl font-semibold mb-6">
                  อยากเป็นโปรแกรมเมอร์? แต่ไม่รู้ต้องเรียนอะไร ลองไปเรียนเองแล้วแต่ติดขัดไม่มีคนช่วย
                  เราเปลี่ยนคุณเป็นโปรแกรมเมอร์ได้ ภายใน 4 เดือน (Offline) 6 เดือน (Online)
               </p>

               <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-lg mt-8">
                  {features.map((item, index) => (
                     <div key={index} className="flex items-center gap-2">
                        <Check className="text-black w-5 h-5" />
                        <span>{item}</span>
                     </div>
                  ))}
               </div>

               <div className="grid md:grid-cols-2 gap-10 mt-10 text-left">
                  {/* Offline */}
                  <div
                     className="bg-white
                       shadow-lg rounded-2xl p-8 border border-gray-100"
                  >
                     <h2 className="text-2xl font-bold text-indigo-900 text-center mb-4">Offline</h2>
                     <ul className="space-y-3 text-lg">
                        <li>📘 เรียนในห้องเรียน 4 เดือน</li>
                        <li>🕘 เรียนวันจันทร์ - ศุกร์ เวลา 9.00 น. - 17.00 น.</li>
                        <li>💬 สอบถามอาจารย์ในห้องเรียนและในกลุ่มไลน์ได้</li>
                        <li>💻 ระหว่างเรียนจะได้ทำโปรเจกกลุ่ม และโปรเจกเดี่ยว</li>
                     </ul>
                     <div className="flex justify-center mt-6">
                        {/* <button className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90">
                               สมัครเรียนคอร์ส Offline
                            </button> */}
                     </div>
                  </div>

                  {/* Online */}
                  <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
                     <h2 className="text-2xl font-bold text-indigo-900 text-center mb-4">Online</h2>
                     <ul className="space-y-3 text-lg">
                        <li>🎥 เรียนจาก VDO ที่อัดไว้แล้ว สำหรับคอร์สออนไลน์ 6 เดือน</li>
                        <li>🕘 เรียนวันเวลาที่สะดวก มีงานประจำก็เรียนได้</li>
                        <li>💬 สอบถาม TA ในกลุ่มไลน์ได้ 9.00 - 21.00 น.</li>
                        <li>💻 ระหว่างเรียนจะได้ทำโปรเจกเดี่ยว</li>
                     </ul>
                     <div className="flex justify-center mt-6">
                        {/* <button className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90">
                               สมัครเรียนคอร์ส Online
                            </button> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Section1
