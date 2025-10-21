import React from 'react'
import { Facebook, Instagram, Linkedin, Youtube, Check } from 'lucide-react'

type Props = {}

const footer = (props: Props) => {
   return (
      <div>
         <footer className="bg-gray-100 text-gray-700 py-10">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
               {/* Column 1 */}
               <div>
                  <h3 className="text-blue-700 font-bold text-lg mb-3">บริการทั้งหมดของเรา</h3>
                  <ul className="space-y-1">
                     <li>คอร์สเรียน</li>
                  </ul>
               </div>

               {/* Column 2 */}
               <div>
                  <h3 className="text-blue-700 font-bold text-lg mb-3">เกี่ยวกับเรา</h3>
                  <ul className="space-y-1">
                     <li>About Us</li>
                  </ul>
               </div>

               {/* Column 3 */}
               <div>
                  <h3 className="text-blue-700 font-bold text-lg mb-3">ติดต่อเรา</h3>
                  <p>บริษัท รีเลิร์น โซลูชั่น จำกัด</p>
                  <p>35 อาคารวรรณสรณ์ ชั้น 12 A ห้องเลขที่ 1303</p>
                  <p>ถนนพญาไท แขวงถนนพญาไท เขตราชเทวี</p>
                  <p>กรุงเทพมหานคร 10400</p>
                  <p className="mt-2">
                     <span className="font-semibold">Email:</span> relearn.acc@gmail.com
                  </p>
                  <p>
                     <span className="font-semibold">โทร:</span> 083-7951555, 065-3325032 เวลา 9.00–17.00 น.
                  </p>

                  <div className="mt-4">
                     <h4 className="text-blue-700 font-semibold mb-2">Follow Us On</h4>
                     <div className="flex gap-4 text-gray-600">
                        <Facebook className="w-6 h-6 hover:text-blue-600 cursor-pointer" />
                        <Instagram className="w-6 h-6 hover:text-pink-500 cursor-pointer" />
                        <Linkedin className="w-6 h-6 hover:text-blue-500 cursor-pointer" />
                        <Youtube className="w-6 h-6 hover:text-red-600 cursor-pointer" />
                     </div>
                  </div>
               </div>
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">
               © 2025 Relearn Solution Co., Ltd. All Rights Reserved.
            </div>
         </footer>
      </div>
   )
}

export default footer
