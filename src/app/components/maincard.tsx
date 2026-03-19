import "../pages/index.css";
import * as Icons from 'lucide-react';

interface CardProps {
  label: string;
  value: string | number;
  icon: string;
  color: string;
}

export default function Card({ label, value, icon, color }: CardProps) {
  // Dynamically look up the Lucide icon by name string
  const LucideIcon = Icons[icon as keyof typeof Icons] as React.ElementType;

  return (
    // ── Card container ──
    <div
      style={{
        backgroundColor: "#13151B",
        height: 120,
        width: 400.5,
        paddingTop: 18,
        paddingBottom: 18,
        gap: 20,
        display: "flex",
        flexDirection: "column",
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20,
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* ── Top row: label + icon ── */}
      <div
        style={{
          height: 34,
          width: 358.5,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Card label */}
        <span style={{
          fontFamily: "DM Sans, sans-serif",
          fontWeight: 500,
          fontSize: 11.5,
          color: "#7A7F96",
        }}>{label}</span>

        {/* Icon box — background is the card color at 10% opacity */}
        <div style={{
          height: 34,
          width: 34,
          backgroundColor: `${color}1A`, // 1A hex = 10% opacity
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <LucideIcon size={16} color={color} strokeWidth={2.33} />
        </div>
      </div>

      {/* ── Bottom row: value ── */}
      <div
        style={{
          height: 34,
          width: 358.5,
          alignItems: "top-left",
        }}
      >
          <span
              style={{
                color: color,
                fontSize: 28,
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                wordWrap: "normal",
              }}
            >{value}</span>
      </div>

      {/* ── Top accent border line ── */}
      <div
      style={{
        backgroundColor: color,
        height: 2,
        width: 400.5,
        position: "absolute",
        top: 0,
        left: 0
      }}
    ></div>

    </div>
  );
}