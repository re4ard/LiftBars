"use client";

import "tailwindcss/tailwind.css";
import "./index.css"
import Card from "../components/maincard";
import { useEffect, useState } from "react";
import { Clock, Search } from 'lucide-react';

export default function DashboardPage() {
  // Track whether the page has mounted for animation
  const [loaded, setLoaded] = useState(false);

  // Trigger animation after mount
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Base transition style reused on every animated element
  const fadeUp = (delay: number) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0px)" : "translateY(16px)",
    transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
  });

  return (
    <div style={{
      paddingTop: 32,
      paddingBottom: 32,
      paddingLeft: 28,
      paddingRight: 28,
      gap: 24,
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      background: "#0B0C10",
    }}>

      {/* ── Header ── */}
      <div
        style={{
          ...fadeUp(0), // ← header animates in first
          display: "inline-flex",
          flexDirection: "row",
          width: 1644,
          height: 50,
          gap: 1445.08,
        }}
      >
        {/* ── Header - Text and Date ── */}
        <div
          style={{
            width: 164,
            height: 50,
            gap: 4,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* ── Header - Text ── */}
          <h1
            style={{
              color: "#F0F1F5",
              fontSize: 24,
              fontFamily: "Syne, sans-serif",
              fontWeight: 700,
            }}
          >
            Dashboard
          </h1>

          {/* ── Header - Date ── */}
          <div
            style={{
              width: 164,
              height: 17,
              display: "flex",
              position: "relative",
              overflow: "visible",
            }}
          >
            <svg style={{ position: "relative", left: -6 }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_60_915)">
                <rect x="6" y="6" width="6" height="6" rx="3" fill="#00FF88"/>
              </g>
              <defs>
                <filter id="filter0_d_60_915" x="0" y="0" width="18" height="18" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="3"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.533333 0 0 0 1 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_915"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_915" result="shape"/>
                </filter>
              </defs>
            </svg>
            <span style={{
              color: "#7A7F96",
              fontSize: 12,
              fontFamily: "DM Sans, sans-serif",
              width: 150,
              height: 17,
              fontWeight: 400,
              position: "absolute",
              left: 12,
            }}>
              Saturday, March 14, 2026
            </span>
          </div>
        </div>

        {/* ── Account ── */}
        <div style={{
          width: 36,
          height: 36,
          borderRadius: 18,
          position: "relative",
          background: 'linear-gradient(135deg, rgba(255, 68, 102, 0.37) 0%, rgba(255, 68, 102, 0.21) 100%)',
        }}>
          <span style={{
            color: "#ffffffff",
            fontSize: 13,
            fontFamily: "DM Sans, sans-serif",
            width: 17,
            height: 17,
            fontWeight: 700,
            position: "absolute",
            left: 9.5,
            top: 9.5,
          }}>
            PB
          </span>
        </div>
      </div>

      {/* ── Cards — each card staggers in 100ms after the previous ── */}
      <div
        style={{
          display: "inline-flex",
          flexDirection: "row",
          width: 1644,
          height: 120,
          gap: 14,
        }}
      >
        <div style={fadeUp(100)}><Card label="Active Members" value="214" icon="Users" color="#00FF88" /></div>
        <div style={fadeUp(200)}><Card label="Expired Members" value="38" icon="CircleAlert" color="#FF4466" /></div>
        <div style={fadeUp(300)}><Card label="Checked In Today" value="47" icon="UserCheck" color="#4488FF" /></div>
        <div style={fadeUp(400)}><Card label="Revenue This Month" value="$5,214" icon="Wallet" color="#FFAA00" /></div>
      </div>
      <div
        style={{
          display: "inline-flex",
          flexDirection: "row",
          width: 1644,
          height: 432,
          gap: 20,
        }}
      >
    {/* ── Recent Check-Ins ── */}
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          width: 812,
          height: 432,
          gap: 1,
          backgroundColor: "#13151B",
          borderRadius: 20,
          paddingTop: 20,
          paddingLeft: 20,
          paddingRight: 20,
          ...fadeUp(500),
        }}
      >
        <div
        style={{
          display: "inline-flex",
          flexDirection: "row",
          width: 770,
          height: 17,
          justifyContent: "space-between",
        }}
      >
        <span
            style={{
              color: "#F0F1F5",
              fontSize: 14,
              fontFamily: "Syne, sans-serif",
              fontWeight: 600,
              wordBreak: "normal",
            }}
          >
            Recent Check-Ins
          </span>

          <Clock size={16} color="#7A7F96" strokeWidth={2} />
      </div>
      </div>
      {/* ── Member Search ── */}
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          width: 812,
          height: 432,
          gap: 1,
          backgroundColor: "#13151B",
          borderRadius: 20,
          paddingTop: 20,
          paddingLeft: 20,
          paddingRight: 20,
          ...fadeUp(550),
        }}
      >
        <div
        style={{
          display: "inline-flex",
          flexDirection: "row",
          width: 770,
          height: 17,
          justifyContent: "space-between",
        }}
      >
        <span
            style={{
              color: "#F0F1F5",
              fontSize: 14,
              fontFamily: "Syne, sans-serif",
              fontWeight: 600,
              wordBreak: "normal",
            }}
          >
            Member Search
          </span>

          <Search size={16} color="#7A7F96" strokeWidth={2} />
      </div>
      </div>
      
       
      </div>

    </div>
  );
}