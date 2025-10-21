import Image from 'next/image'

export default function StatsAndProjects() {
   const stats = [
      { number: '90%', label: 'นักเรียนที่ได้งานทำ' },
      { number: '8:1', label: 'อัตราผู้ช่วยสอนต่อผู้เรียน' },
      { number: '50+', label: 'จำนวนบริษัท ที่พร้อมรับผู้จบการศึกษา' },
   ]

   const projects = [
      {
         img: 'https://getcodecamp.com/wp-content/uploads/elementor/thumbs/folder-qh0rv2tteoxvi5clhkaoiahdfack60ljpca2qasjqg.png',
         title: '4 Project ระดับทำงานจริง',
         desc: 'พร้อมฝึกฝน ทำงานเป็นทีม Project เดี่ยว Project กลุ่ม Project แก้ Code ทีมอื่น Project Open Source',
      },
      {
         img: 'https://getcodecamp.com/wp-content/uploads/elementor/thumbs/folder-qh0rv2tteoxvi5clhkaoiahdfack60ljpca2qasjqg.png',
         title: '1 Project ฝึกฝนแบบจับมือทำ',
         desc: 'ทำพร้อมกันกับอาจารย์ และมีผู้ช่วยสอนประกบตลอด ทำให้สามารถทำ Project แรกจนได้โดยไม่ยาก เพิ่มพูนความเชื่อมั่นเข้าใจในการทำงานทั้งหมด',
      },
      {
         img: 'https://getcodecamp.com/wp-content/uploads/elementor/thumbs/folder-qh0rv2tteoxvi5clhkaoiahdfack60ljpca2qasjqg.png',
         title: '1 Project กับ บริษัท Partner',
         desc: 'รับโจทย์จริง จากบริษัทในเครือข่ายเรา จำลองการทำงานจริง! ทำให้จบมาเข้าใจการทำงานในบริษัทได้',
      },
   ]

   return (
      <section className="py-20 bg-white text-center">
         {/* สถิติ */}
         <h2 className="text-3xl font-bold text-blue-900 mb-4">
            สถิติจากประสบการณ์ของเราจาก 20 ครั้งที่ผ่านมา ที่มีผู้เรียนกว่า 1,000 คน!
         </h2>
         <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            ด้วยค่านิยมของ Camp เรา ที่เรา “เข้าใจ” “ใส่ใจ” “เป็นเพื่อนตลอด” “คุณภาพและมาตรฐานสูง”
            “เครื่องมือในการเรียนที่ดี” เรามีสถิติที่ภาคภูมิใจ ดังนี้
         </p>
         <div className="flex flex-col md:flex-row justify-center gap-12 mb-16">
            {stats.map((item, i) => (
               <div key={i} className="text-center">
                  <h3 className="text-2xl font-bold text-blue-900">{item.number}</h3>
                  <p className="text-gray-600 mt-2">{item.label}</p>
               </div>
            ))}
         </div>

         {/* Project Overview */}
         <h2 className="text-3xl font-bold text-blue-900 mb-12">Project Overview</h2>
         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
            {projects.map((p, i) => (
               <div key={i} className="flex flex-col items-center text-center">
                  <Image src={p.img} alt={p.title} width={90} height={90} />
                  <h3 className="text-xl font-bold text-blue-900 mt-4">{p.title}</h3>
                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">{p.desc}</p>
               </div>
            ))}
         </div>
      </section>
   )
}
