"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import ContinuousVideo from "./video";

const SlideBox = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-4 border-2 border-black rounded-lg overflow-hidden">
      <button
        className="w-full text-left p-4 bg-black hover:opacity-90 transition-opacity duration-300 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-semibold text-[#FF0000]">{title}</p>
      </button>
      <div
        className={`bg-[#FF0000] text-black transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="p-4">{content}</div>
      </div>
    </div>
  );
};

const KILLOInfo = () => {
  const buySteps = [
    {
      title: "1. Gather Your Souls",
      content:
        "Ensure your wallet is stocked with SOL. If your supply is depleted, replenish it from your preferred exchange.",
    },
    {
      title: "2. Sacrifice to the Reaper",
      content:
        "Journey to Raydium, the marketplace of the afterlife, and exchange your SOL for $KILLO tokens.",
    },
  ];

  const faqs = [
    {
      title: "Who is KILLO?",
      content: "KILLO is the Grim reaper who hates Zeroes and FUD",
    },
    {
      title: "Which chain KILLO will use?",
      content: "KILLO will emerge from Solana chain",
    },
    {
      title: "How to buy KILLO?",
      content: "Refer How to buy section",
    },
    {
      title: "When will KILLO launch?",
      content: "15th August 2024",
    },
    {
      title: "Which exchanges KILLO will be listed on?",
      content: "KILLO will be listed on all major exchanges over time",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center bg-[#FF0000] px-4 py-6">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Kavoon&family=Oi&display=swap');
          .oi-font {
            font-family: "Kavoon", cursive;
          }
        `}
      </style>
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/2 mx-auto p-6 rounded-lg shadow-md text-black">
        <h2 className="text-3xl font-bold mb-6 text-center text-black oi-font">
          How to buy:
        </h2>
        <p className="mb-4 text-lg text-black oi-font">
          Here is how to summon $KILLO:
        </p>
        <div className="mb-6">
          {buySteps.map((step, index) => (
            <SlideBox key={index} title={step.title} content={step.content} />
          ))}
        </div>
        <p className="text-lg font-bold mb-4 text-center text-black oi-font">
          Finished Already? You&#39;ve Earned Your Rest! That&#39;s right,
          you&#39;ve successfully summoned the Grim Reaper.
        </p>
        <h3 className="text-2xl font-bold mb-4 text-center text-black oi-font">
          FAQs:
        </h3>
        <p className="mb-4 italic text-center text-black oi-font">
          Got Questions, we&#39;ve got answers (and Maybe a few jokes)
        </p>
        <div>
          {faqs.map((faq, index) => (
            <SlideBox key={index} title={faq.title} content={faq.content} />
          ))}
        </div>

        <h3 className="text-2xl font-bold mt-6 text-center text-black oi-font">
          Community:
        </h3>
        <p className="text-center text-black oi-font" id="c">
          Join our gang of zero-haters.
          <span className="flex justify-center mt-2">
            <Link href="https://x.com/Killosol">
              <Image src="/img/x.png" alt="x" width={20} height={20} />
            </Link>
            <Link href="https://t.me/KILLOOFFICIAL" className="ml-2">
              <Image src="/img/t.png" alt="Telegram" width={25} height={25} />
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default KILLOInfo;
