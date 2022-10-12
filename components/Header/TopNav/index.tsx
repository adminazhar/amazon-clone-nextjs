import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faSearch,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";

export const TopNav = () => {
  return (
    <div>
        <div className="px-2 pt-3 pb-2 flex flex-wrap flex-row justify-around items-center bg-[#131921] text-white ">
            <div className="px-2 h-10 pt-1 pb-0 border border-transparent hover:border hover:border-white hover:rounded-sm">
                <img src="images/amazon.png" className="w-24" />
            </div>
            <div className="flex flex-row gap-2 items-center px-2 pt-1 pb-0 border border-transparent hover:border hover:border-white hover:rounded-sm">
                <div>
                    <FontAwesomeIcon
                        icon={faLocationDot}
                        style={{ fontSize: 14, color: "white" }}
                    />
                </div>
                <div>
                    <div className="text-xs font-bold text-gray-400">Deliver to</div>
                    <div className="font-bold text-sm">Australia</div>
                </div>
            </div>
            <div className="w-[55rem] flex justify-center items-center">
                <div className="relative w-full"> 
                    <div className="absolute top-2 left-3">
                        <FontAwesomeIcon
                            icon={faSearch}
                            style={{ fontSize: 20, color: "black" }}
                        />
                    </div>
                    <input type="text" className="text-black h-10 w-full pl-10 pr-20 rounded-lg z-0 focus:ring-2 focus:shadow-outline focus:outline-none focus:ring-[#e47911] " placeholder="Search anything..." />
                    <div className="absolute top-0 right-0">
                        <button className="h-10 w-10 text-black rounded-r-lg bg-[#febd69] hover:bg-[#F3A847]">
                            <FontAwesomeIcon
                            icon={faSearch}
                            style={{ fontSize: 20, color: "black" }}
                        />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center gap-1 flex flex-row gap-2 items-center px-2 pt-1 pb-0 border border-transparent hover:border hover:border-white hover:rounded-sm">
                <div><img src="images/us-flag.png" className="w-6" /></div>
                <div className="font-bold">EN</div>
            </div>
            <div className="px-2 pt-1 pb-0 border border-transparent hover:border hover:border-white hover:rounded-sm">
                <div className="text-xs">Hello, sign in</div>
                <div className="font-bold text-sm">Accounts & Lists</div>
            </div>
            <div className="px-2 pt-1 pb-0 border border-transparent hover:border hover:border-white hover:rounded-sm">
                <div className="text-xs">Returns</div>
                <div className="font-bold text-sm">& Orders</div>
            </div>
            <div className="flex flex-row items-end px-2 pt-1 pb-0 border border-transparent hover:border hover:border-white hover:rounded-sm">
                <div><img src="images/cart.png" className="w-10" /></div>
                <div className="text-sm font-bold">Cart</div>
            </div>
        </div>
    </div>
  )
}
