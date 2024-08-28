"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import KillonomicsPieChart from "@/components/piechart";
import KILLOInfo from "@/components/killoinfo";
import { motion } from "framer-motion";

const links = [
  { name: "About", href: "#About" },
  { name: "Killonomics", href: "#Tokenomics" },
  { name: "How to Buy", href: "#hc" },
  { name: "FAQ", href: "#hc" },
  { name: "Community", href: "#c" },
  { name: "Contact Us", href: "#cu" },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-[#FF0000] text-black">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Kavoon&family=Oi&display=swap');
          .oi-font {
            font-family: "Kavoon", cursive;
          }
        `}
      </style>
      <header className="flex justify-between items-center w-full h-[90px] px-4 oi-font bg-[#CC0000]">
        <Link href="/" className="flex flex-row items-center">
          <h1 className="text-2xl sm:text-4xl font-semibold text-black">
            KILLO
          </h1>
          <Image
            src="/img/Killo1.png"
            alt="KILLO logo"
            width={50}
            height={50}
            className="ml-2"
          />
        </Link>
        <nav className="hidden sm:flex items-center space-x-4">
          <ul className="flex space-x-4">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm sm:text-base text-black hover:text-gray-700"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="https://x.com/Killosol">
            <Image src="/img/x.png" alt="X" width={25} height={25} />
          </Link>
          <Link href="https://t.me/KILLOOFFICIAL">
            <Image src="/img/t.png" alt="Telegram" width={30} height={30} />
          </Link>
        </nav>
        <button
          className="sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Image
            src={menuOpen ? "/img/close.png" : "/img/menu.png"}
            alt={menuOpen ? "Close menu" : "Menu"}
            width={25}
            height={25}
          />
        </button>
      </header>
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="sm:hidden bg-[#CC0000] w-full flex flex-col items-center space-y-4 p-4"
        >
          <ul className="space-y-4">
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-sm sm:text-base text-black hover:text-gray-700">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex space-x-4">
            <Link href="https://x.com/Killosol">
              <Image src="/img/x.png" alt="X" width={25} height={25} />
            </Link>
            <Link href="https://t.me/KILLOOFFICIAL">
              <Image src="/img/t.png" alt="Telegram" width={30} height={30} />
            </Link>
          </div>
        </motion.nav>
      )}

      <main>
        <section className="bg-[#FF0000] min-h-[732px] w-full flex flex-col items-center py-8">
          <h2 className="text-black text-lg sm:text-xl pb-8 text-center px-4 oi-font">
            The Grim reaper of Zeroes
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center items-center w-full"
          >
            <Image
              src="/img/Killo1.png"
              alt="KILLO the Grim Reaper"
              width={800}
              height={800}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
            />
          </motion.div>
        </section>

        <section className="bg-[#FF0000] py-8 text-center px-4" id="About">
          <p className="font-normal hover:font-bold text-lg sm:text-xl oi-font text-black">
            No Taxes | Total Supply 144 Billion | Crowdfunded Launch
          </p>
        </section>

        <section
          className="flex flex-col w-full bg-[#FF0000] py-8"
          id="Tokenomics"
        >
          <div className="flex flex-col justify-center items-center text-center px-4 mt-8 sm:mt-0">
            <p className="text-black text-xl sm:text-3xl font-black">
              Legend tells of an ancient prophecy. When the markets crash,
              <span className="font-semibold">
                when bulls turn to bears, and FOMO fades to FUD,
              </span>
              a spectral figure emerges from the shadows. The Grim Reaper arises
              with his scythe.
            </p>
            <p className="font-semibold text-black mt-4 text-xl sm:text-3xl">
              With Every swing cutting away FUDs and Zeroes maintaining the
              balance.
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <KillonomicsPieChart />
          </div>
        </section>

        <section className="w-full bg-[#FF0000] py-8" id="hc">
          <KILLOInfo />
        </section>
      </main>

      <footer className="bg-[#CC0000] text-black w-full py-8">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 mx-4">
          <Link href="/" className="flex flex-row items-center">
            <h1 className="text-2xl sm:text-4xl font-semibold text-black oi-font">
              KILLO
            </h1>
            <Image
              src="/img/Killo1.png"
              alt="KILLO logo"
              width={50}
              height={50}
              className="ml-2 mr-4"
            />
          </Link>
          <div
            className="text-center text-black sm:text-left sm:ml-8 mx-1 oi-font"
            id="cu"
          >
            <Link href="mailto:contact@killo.xyz">contact@killo.xyz</Link>
          </div>
          <div className="text-center text-black sm:text-left sm:ml-8 mx-2 oi-font text-black  opacity-10">
            <h2 className="text-lg font-semibold m-2">DISCLAIMER</h2>
            <p className="text-sm sm:text-base mt-2 ">
              $KILLO is a fan made speculative digital asset with no intrinsic
              value. The price may go up may go down. Do not invest money you
              cannot afford to lose. We are not responsible for any financial
              loss.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
