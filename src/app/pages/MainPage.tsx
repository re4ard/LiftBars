"use client"

import React, { useState } from "react";
import {
  LayoutDashboard,
  UsersRound,
  DollarSign,
  Settings,
} from "lucide-react";
import DashboardPage from "./dashbaord";
import MembersPage from "./members";
import PaymentPage from "./payments";
import SettingsPage from "./settings";
import "tailwindcss/tailwind.css";
import "./index.css"


const pages: Record<string, React.ReactNode> = {
  Dashboard: <DashboardPage />,
  Members: <MembersPage />,
  Payment: <PaymentPage />,
  Settings: <SettingsPage />,
};

type NavItem = {
  key: string;
  label: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  { key: "Dashboard", label: "Dashboard", icon: <LayoutDashboard size={16} /> },
  { key: "Members",   label: "Members",   icon: <UsersRound size={16} />      },
  { key: "Payment",   label: "Payments",  icon: <DollarSign size={16} />      },
  { key: "Settings",  label: "Settings",  icon: <Settings size={16} />        },
];

export default function AppSidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>

      {/* ── Sidebar ── */}
      <div
          style={{
            display: "inline-flex",  // ← move flex here instead of className
            flexDirection: "column",
            width: 220,
            height: 1080,
            gap: 6,                 // ← now it will work
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 28,
            paddingBottom: 28,
            background: "#13151B",
            borderRight: "1px solid #242733",
          }}
        >

        {/* Logo / Brand */}
        <div
          className="flex flex-col items-start self-stretch"
          style={{ width: 187, height: 48, paddingBottom: 24, paddingLeft: 12, paddingRight: 12 }}
        >
          <div className="flex flex-col self-stretch justify-center">
            <span
              style={{
                color: "#FF4466",
                fontSize: 20,
                fontFamily: "Syne, sans-serif",
                fontWeight: 800,
                wordWrap: "normal",
              }}
            >
              LIFT
            </span>
            <span
              style={{
                color: "white",
                fontSize: 20,
                fontFamily: "Syne, sans-serif",
                fontWeight: 800,
              }}
            >
              BARS
            </span>
          </div>
        </div>

        {/* Nav items — Dashboard, Members, Payments */}
        {navItems.slice(0, 3).map(({ key, label, icon }) => {
          const isActive = active === key;
          return (
        <button
              key={key}
              onClick={() => setActive(key)}
              style={{
                display: "flex",
                alignItems: "center",  // vertically centers icon + text
                gap: 10,               // space between icon and text
                paddingLeft: 12,
                paddingRight: 12,
                paddingTop: 10,
                paddingBottom: 10,
                width: 187,
                height: 38,
                borderRadius: 12,
                border: "none",
                cursor: "pointer",
                background: isActive ? "rgba(255, 68, 102, 0.08)" : "transparent",
                fontFamily: "DM Sans, sans-serif",
                fontSize: 13.5,
                fontWeight: 500,
                color: isActive ? "#FF4466" : "#7A7F96",
              }}
            >
              {icon}
              {label}
            </button>
          );
        })}

        {/* Divider */}
        <div
          className="flex flex-col items-start self-stretch"
          style={{ height: 21, paddingTop: 10, paddingBottom: 10 }}
        >
          <div
            className="self-stretch"
            style={{ height: 1, background: "#242733" }}
          />
        </div>

        {/* Settings (below divider) */}
        {navItems.slice(3).map(({ key, label, icon }) => {
          const isActive = active === key;
          return (
           <button
              key={key}
              onClick={() => setActive(key)}
              style={{
                display: "flex",
                alignItems: "center",  // vertically centers icon + text
                gap: 10,               // space between icon and text
                paddingLeft: 12,
                paddingRight: 12,
                paddingTop: 10,
                paddingBottom: 10,
                width: 187,
                height: 38,
                borderRadius: 12,
                border: "none",
                cursor: "pointer",
                background: isActive ? "rgba(255, 68, 102, 0.08)" : "transparent",
                fontFamily: "DM Sans, sans-serif",
                fontSize: 13.5,
                fontWeight: 500,
                color: isActive ? "#FF4466" : "#7A7F96",
              }}
            >
              {icon}
              {label}
            </button>
          );
        })}

      </div>

      {/* ── Page content ── */}
      <div style={{ width: "calc(100vw - 220px)", height: "1080px", overflow: "auto" }}>
        {pages[active]}
      </div>

    </div>
    
  );
}