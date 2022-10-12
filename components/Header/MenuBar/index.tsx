import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
  } from "@fortawesome/free-solid-svg-icons";

export const MenuBar = () => {
  return (
    <div className="bg-[#232f3e] flex flex-wrap flex-row justify-between pt-1 pb-2 px-4">
        <div className="flex text-white text-sm">
            <ul className="flex flex-row gap-2">
                <li className="px-2 pt-1 pb-0 border border-transparent hover:border hover:border-white hover:rounded-sm">
                    <FontAwesomeIcon
                        icon={faBars}
                        style={{ fontSize: 14, color: "white" }}
                    />All</li>
                <li className="px-2 pt-1 pb-0 border border-transparent hover:border hover:border-white hover:rounded-sm"><a href="#">Today's Deal</a></li>
                <li className="px-2 pt-1 pb-0 border border-transparent hover:border hover:border-white hover:rounded-sm"><a href="">Customer Service</a></li>
                <li className="px-2 pt-1 pb-0 border border-transparent hover:border hover:border-white hover:rounded-sm"><a href="">Mobiles</a></li>
                <li className="px-2 pt-1 pb-0 border border-transparent hover:border hover:border-white hover:rounded-sm"><a href="">Electronics</a></li>
                <li className="px-2 pt-1 pb-0 border border-transparent hover:border hover:border-white hover:rounded-sm"><a href="">Books</a></li>
                <li className="px-2 pt-1 pb-0 border border-transparent hover:border hover:border-white hover:rounded-sm"><a href="">Fashion</a></li>
            </ul>
        </div>
        <div className="text-white">
            <img src="/images/nav_adv.jpg" className="h-6" />
        </div>    
    </div>
  )
}
