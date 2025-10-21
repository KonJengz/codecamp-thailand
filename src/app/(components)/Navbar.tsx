// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// type Props = {}

// const Navbar = (props: Props) => {
//    return (
//       <div>
//          <nav className="relative flex items-center justify-between px-8 py-4 shadow-md bg-white">
//             {/* ซ้าย */}
//             <div className="flex items-center gap-6 text-gray-700 font-medium">
//                <Link href="#">บทเรียน</Link>
//             </div>

//             {/* โลโก้ตรงกลาง */}
//             <div className="absolute left-1/2 -translate-x-1/2">
//                <Image
//                   src="https://getcodecamp.com/wp-content/uploads/2020/05/cropped-Web-Favicon-2.png"
//                   alt="Logo"
//                   width={40}
//                   height={40}
//                />
//             </div>

//             {/* ขวา */}
//             <div className="flex items-center gap-6 text-gray-700 font-medium">
//                <Link href="#">คอร์สเรียน</Link>
//                <Link href="#">บทความ</Link>
//                <Link href="#">แจ้งชำระเงิน</Link>
//                <Link href="#" className="text-gray-400 hover:text-blue-600">
//                   เข้าสู่ระบบ
//                </Link>
//             </div>
//          </nav>
//       </div>
//    )
// }

// export default Navbar

'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const [isDropdownOpen, setIsDropdownOpen] = useState(false)

   return (
      <nav className="relative flex items-center justify-between px-6 py-4 shadow-md bg-white">
         {/* เมนูซ้าย */}
         <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
            <div className="relative">
               <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="hover:text-blue-600 flex items-center gap-1 cursor-pointer"
               >
                  บทเรียน
                  {/* <span className="text-sm">▼</span> */}
               </button>

               {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg border border-gray-100 z-50">
                     <Link href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                        HTML / CSS
                     </Link>
                     <Link href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                        JavaScript
                     </Link>
                     <Link href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                        React
                     </Link>
                  </div>
               )}
            </div>
         </div>

         {/* โลโก้ตรงกลาง */}
         <div className="absolute left-1/2 -translate-x-1/2">
            <Image
               src="https://getcodecamp.com/wp-content/uploads/2020/05/cropped-Web-Favicon-2.png"
               alt="Logo"
               width={40}
               height={40}
            />
         </div>

         {/* เมนูขวา (desktop) */}
         <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
            <Link href="#">คอร์สเรียน</Link>
            <Link href="#">บทความ</Link>
            <Link href="#">แจ้งชำระเงิน</Link>
            <Link href="#" className="text-gray-400 hover:text-blue-600">
               เข้าสู่ระบบ
            </Link>
         </div>

         {/* ปุ่ม Hamburger (mobile) */}
         <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
         </button>

         {/* เมนูตอนมือถือ */}
         {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-100 flex flex-col text-gray-700 font-medium md:hidden z-40">
               <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="px-6 py-3 text-left flex items-center justify-between hover:bg-gray-50"
               >
                  <span>บทเรียน</span>
                  <span className="text-sm">▼</span>
               </button>
               {isDropdownOpen && (
                  <div className="flex flex-col pl-10 text-sm bg-gray-50">
                     <Link href="#" className="py-2 hover:text-blue-600">
                        HTML / CSS
                     </Link>
                     <Link href="#" className="py-2 hover:text-blue-600">
                        JavaScript
                     </Link>
                     <Link href="#" className="py-2 hover:text-blue-600">
                        React
                     </Link>
                  </div>
               )}

               <Link href="#" className="px-6 py-3 hover:bg-gray-50">
                  คอร์สเรียน
               </Link>
               <Link href="#" className="px-6 py-3 hover:bg-gray-50">
                  บทความ
               </Link>
               <Link href="#" className="px-6 py-3 hover:bg-gray-50">
                  แจ้งชำระเงิน
               </Link>
               <Link href="#" className="px-6 py-3 text-gray-400 hover:text-blue-600 hover:bg-gray-50">
                  เข้าสู่ระบบ
               </Link>
            </div>
         )}
      </nav>
   )
}

export default Navbar
