import React from 'react'
import { Mail, Phone, Twitter, Facebook } from "lucide-react";

const Topbar = () => {
  return (
        <div>
      <div className="bg-accentt text-white text-sm py-2 px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 ml-[10px] sm:ml-[30px]">
            <Mail size={16} /> <span>quba@gmail.com</span>
          </div>
          <div className="hidden gap-1 sm:block sm:flex sm:items-center">
            <Phone size={16} /> <span>(871) 224-456</span>
          </div>
        </div>
        <div className="flex items-center gap-3 mr-[5px] sm:mr-[40px]">
          <Twitter size={16} className="cursor-pointer hover:text-secondary" />
          <Facebook size={16} className="cursor-pointer hover:text-secondary" />
        </div>
        
      </div>
    </div>
  )
}

export default Topbar
