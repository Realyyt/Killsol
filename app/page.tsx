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

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center w-full h-[90px] bg-slate-200">
        <div>
          <Link href="/" className="flex flex-row w-32 ">
            <h1 className="text-4xl font-semibold pt-8 text-[#f5b041] pb-4">
              KILLO
            </h1>
            <Image src="/img/im.png" alt="h" width={70} height={70} />
          </Link>
        </div>
        {links.map((link) => (
          <ul key={link.name}>
            <li>
              <Link href={link.href}>{link.name}</Link>
            </li>
          </ul>
        ))}

        <div>
          <Link href="/">
            <Image src="" alt="" />
          </Link>

          <Link href="/">
            <Image src="" alt="" />
          </Link>

          <Link href="/">
            <Image src="" alt="" />
          </Link>
        </div>
      </div>

      <div className="bg-[#a8cec6] w-full h-[750px] flex flex-col items-center  ">
        <h1 className="text-5xl font-semibold pt-8 text-[#f5b041] pb-4">
          KILLO
        </h1>
        <p className="text-white text-xl pb-16">
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
          />
        </div>
      </div>

      <div>
        <p className="flex justify-center  items-center font-normal hover:font-bold text-xl bg-[#f5b041] h-32">
          Contract Renounced | No Taxes | Total Supply 69 Billion | Crowdfunded
          Launch | All Tokens in Circulation
        </p>
      </div>
      <div className="flex w-full h-[800px] bg-slate-200 pt-8 ">
        <div className=" w-1/2 h-[900px] ">
          <KillonomicsPieChart />
        </div>
        <h1 className="flex flex-col justify-center items-center w-1/2 animate-text bg-gradient-to-r from-amber-700 via-brown-500 to-yellow-900 bg-clip-text text-transparent text-3xl font-black">
          <p>
            Legend tells of an ancient prophecy. When the markets crash,
            <span className="text-semi-bold text-slate-700">
              when bulls turn to bears, and FOMO fades to FUD,
            </span>{" "}
            a spectral figure emerges from the shadows.the Grim Reaper arises
            with his scythe.
          </p>
          <p className="text-semi-bold text-slate-700">
            With Every swings cutting away FUDs and Zeroes maintaining the
            balance.
          </p>
        </h1>
      </div>
      <div className="w-full h-[1200px] bg-slate-200">
        <KILLOInfo />
      </div>
      <div className="bg-slate-800 text-white w-full h-64">
        <div>
          <Link href="/" className="flex flex-row w-32 ">
            <h1 className="text-4xl font-semibold pt-8 text-[#f5b041] pb-4">
              KILLO
            </h1>
            <Image src="/img/im.png" alt="h" width={70} height={70} />
          </Link>
        </div>
      </div>
    </div>
  );
}
