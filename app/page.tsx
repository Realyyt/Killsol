"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import KillonomicsPieChart from "@/components/piechart";
import KILLOInfo from "@/components/killoinfo";

const links = [
  { name: "Home", href: "/" },
  { name: "Official Links", href: "/" },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center w-full h-[90px] bg-slate-200 px-4">
        <div className="flex items-center">
          <Link href="/" className="flex flex-row items-center">
            <h1 className="text-2xl sm:text-4xl font-semibold text-[#f5b041]">
              KILLO
            </h1>
            <Image
              src="/img/im.png"
              alt="h"
              width={50}
              height={50}
              className="ml-2"
            />
          </Link>
        </div>
        <div className="hidden sm:flex items-center space-x-4">
          <ul className="flex space-x-4">
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-sm sm:text-base">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <Link href="https://x.com/Killosol">
              <Image src="/img/x.png" alt="x" width={25} height={25} />
            </Link>
          </div>
          <div>
            <Link href="https://t.me/KILLOOFFICIAL">
              <Image src="/img/t.png" alt="Telegram" width={30} height={30} />
            </Link>
          </div>
        </div>
        <div className="sm:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Image src="/img/menu.png" alt="Menu" width={25} height={25} />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="sm:hidden bg-slate-200 w-full flex flex-col items-center space-y-4 p-4">
          <ul className="space-y-4">
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-sm sm:text-base">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex space-x-4">
            <Link href="https://x.com/Killosol">
              <Image src="/img/x.png" alt="x" width={25} height={25} />
            </Link>
            <Link href="https://t.me/KILLOOFFICIAL">
              <Image src="/img/t.png" alt="Telegram" width={30} height={30} />
            </Link>
          </div>
        </div>
      )}

      <div className="bg-[#a8cec6] h-auto sm:h-[732px] w-full flex flex-col items-center py-8">
        <h1 className="text-3xl sm:text-5xl font-semibold text-[#f5b041] pb-4">
          KILLO
        </h1>
        <p className="text-white text-lg sm:text-xl pb-8 text-center px-4">
          The Grim reaper of Zeroes Reap Rewards by slaying Zeroes
        </p>
        <div
          className={`transition-all duration-1000 ease-in-out transform ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <Image
            src="/img/im.png"
            alt="KILLO the Grim Reaper"
            width={500}
            height={500}
            className="w-full sm:w-2/3 md:w-1/2 lg:w-3/4 xl:w-2/3 mx-auto"
          />
        </div>
      </div>

      <div className="bg-[#f5b041] py-8 text-center px-4">
        <p className="font-normal hover:font-bold text-lg sm:text-xl">
          Contract Renounced | No Taxes | Total Supply 69 Billion | Crowdfunded
          Launch | All Tokens in Circulation
        </p>
      </div>

      <div className="flex flex-col sm:flex-row w-full bg-slate-200 py-8">
        <div className="sm:w-1/2 flex justify-center">
          <KillonomicsPieChart />
        </div>
        <div className="sm:w-1/2 flex flex-col justify-center items-center text-center px-4 mt-8 sm:mt-0">
          <p className="bg-gradient-to-r from-amber-700 via-brown-500 to-yellow-900 bg-clip-text text-transparent text-xl sm:text-3xl font-black">
            Legend tells of an ancient prophecy. When the markets crash,
            <span className="font-semibold text-slate-700">
              when bulls turn to bears, and FOMO fades to FUD,
            </span>
            a spectral figure emerges from the shadows. The Grim Reaper arises
            with his scythe.
          </p>
          <p className="font-semibold text-slate-700 mt-4 text-xl sm:text-3xl">
            With Every swing cutting away FUDs and Zeroes maintaining the
            balance.
          </p>
        </div>
      </div>

      <div className="w-full bg-slate-200 py-8">
        <KILLOInfo />
      </div>

      <div className="bg-slate-800 text-white w-full py-8">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0">
          <Link href="/" className="flex flex-row items-center">
            <h1 className="text-2xl sm:text-4xl font-semibold text-[#f5b041]">
              KILLO
            </h1>
            <Image
              src="/img/im.png"
              alt="h"
              width={50}
              height={50}
              className="ml-2"
            />
          </Link>
          <div className="text-center sm:text-left sm:ml-8 mx-2 font-['Bangers'] ">
            <h1 className="text-lg font-semibold m-2 ">DISCLAIMER</h1>
            <p className="text-sm sm:text-base mt-2">
              $KILLO is a fan made speculative digital asset with no intrinsic
              value. The price can fluctuate wildly and might go down. Do not
              invest money you cannot afford to lose. We are not responsible for
              any financial loss.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
