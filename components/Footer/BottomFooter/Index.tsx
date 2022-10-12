import React from "react";

export const BottomFooter = () => {
  return (
    <div className="bg-[#131A22] text-white py-10 text-xs">
      <div className="flex flex-wrap flex-row justify-center gap-x-20 gap-y-5 px-96">
        <div className="flex flex-col">
          <div>AbeBooks</div>
          <div className="text-gray-400">
            Books Art
            <br /> & Collectible
          </div>
        </div>
        <div className="flex flex-col">
          <div>Amazon Web Services</div>
          <div className="text-gray-400">
            Scalable Cloud
            <br />
            Computing Services
          </div>
        </div>
        <div className="flex flex-col">
          <div>Audible</div>
          <div className="text-gray-400">
            Download <br /> Audio Books
          </div>
        </div>
        <div className="flex flex-col">
          <div>DPReview</div>
          <div className="text-gray-400">
            Digital
            <br />
            Photography
          </div>
        </div>
        <div className="flex flex-col">
          <div>IMBD</div>
          <div className="text-gray-400">
            Movies, TV
            <br />
            &amp; Celebrities
          </div>
        </div>
        <div className="flex flex-col">
          <div>Shopbop</div>
          <div className="text-gray-400">
            Designer
            <br />
            Fashion Brands
          </div>
        </div>
        <div className="flex flex-col">
          <div>Amazon Business</div>
          <div className="text-gray-400">
            Everything For
            <br />
            Your Business
          </div>
        </div>
        <div className="flex flex-col">
          <div>Prime Now</div>
          <div className="text-gray-400">
            2-Hour Delivery
            <br />
            on Everyday Items
          </div>
        </div>
        <div className="flex flex-col">
          <div>Amazon Prime Music</div>
          <div className="text-gray-400">
            90 million songs, ad-free
            <br />
            Over 15 million podcast episodes
          </div>
        </div>
      </div>

      <div className="flex flex-wrap flex-col content-center items-center pt-10 pb-5 gap-y-2 text-sm">
        <ul className="flex flex-wrap flex-row gap-5">
          <li className="nav_first">
            <a
              href="/gp/help/customer/display.html?nodeId=200545940&ref_=footer_cou"
              className="nav_a"
            >
              Conditions of Use & Sale
            </a>
          </li>
          <li>
            <a
              href="/gp/help/customer/display.html?nodeId=200534380&ref_=footer_privacy"
              className="nav_a"
            >
              Privacy Notice
            </a>
          </li>
          <li className="nav_last">
            <a
              href="/gp/help/customer/display.html?nodeId=202075050&ref_=footer_iba"
              className="nav_a"
            >
              Interest-Based Ads
            </a>
          </li>
        </ul>
        <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
      </div>
    </div>
  );
};
