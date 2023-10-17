"use client";

import "./globals.css";
import { Inter } from "next/font/google";

import { Web3OnboardProvider, init } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import NavMenu from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const chains = [
  {
    id: "0x44D",
    token: "ETH",
    label: "Polygon zkEvm",
    rpcUrl: "https://zkevm-rpc.com",
  },
  {
    id: "0x5A2",
    token: "ETH",
    label: "zkEVM Testnet",
    rpcUrl: "https://rpc.public.zkevm-test.net",
  },
  {
    id: "0x1388",
    token: "MNT",
    label: "Mantle",
    rpcUrl: "https://rpc.mantle.xyz/",
  },
  {
    id: "0x1389",
    token: "MNT",
    label: "Mantle Testnet",
    rpcUrl: "https://rpc.testnet.mantle.xyz/",
  },
  {
    id: "0x8274F",
    token: "ETH",
    label: "Scroll Sepolia",
    rpcUrl: "https://sepolia-rpc.scroll.io",
  },
];

const wallets = [injectedModule()];
const web3Onboard = init({
  wallets,
  chains,
  appMetadata: {
    name: "401Chain",
    icon: "<svg>App Icon</svg>",
    description: "Securing your retirement, on-chain.",
  },
});

// export const metadata = {
//   description: "Securing your retirement, on-chain.",
//   title: "401Chain",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Web3OnboardProvider web3Onboard={web3Onboard}>
        <body className={inter.className}>
          <NavMenu />
          {children}
          <Footer />
        </body>
      </Web3OnboardProvider>
    </html>
  );
}
