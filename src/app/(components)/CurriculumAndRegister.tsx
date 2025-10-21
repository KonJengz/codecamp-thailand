'use client'
import Image from 'next/image'

export default function CurriculumAndRegister() {
   return (
      <section className="py-8 bg-white flex flex-col items-center">
         {/* ส่วนหัว */}
         <h2 className="text-3xl font-bold text-blue-900 mb-10">หลักสูตรและขั้นตอนสมัครเรียน</h2>

         {/* ภาพคู่กัน */}
         <div className="flex flex-wrap justify-center gap-10 mb-12">
            {/* ภาพ 1 */}
            <div className="flex flex-col items-center">
               <h3 className="text-xl font-semibold text-blue-900 mb-4">CodeCamp Curriculum</h3>
               <Image
                  src="https://getcodecamp.com/wp-content/uploads/2023/12/Components.png"
                  alt="Curriculum"
                  width={450}
                  height={550}
                  className="rounded-2xl shadow-md"
               />
            </div>

            {/* ภาพ 2 */}
            <div className="flex flex-col items-center">
               <h3 className="text-xl font-semibold text-blue-900 mb-4">ขั้นตอนการสมัครเรียน</h3>
               <Image
                  src="https://getcodecamp.com/wp-content/uploads/2024/01/regis.png"
                  alt="Register"
                  width={450}
                  height={550}
                  className="rounded-2xl shadow-md"
               />
            </div>
         </div>

         {/* วิดีโอ YouTube */}
         {/* <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
               className="w-full h-full"
               src="https://www.youtube.com/embed/jNQXAC9IVRw" // 👈 ใส่ลิงก์ YouTube ของคุณตรงนี้
               title="YouTube video player"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
            ></iframe>
         </div> */}
      </section>
   )
}
