import React from 'react';

/**
 * Precision Architectural Corner Registration Mark
 * Replaces heavy CSS borders with 1px drafting-table style registration brackets.
 */
interface RegistrationCornerProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  size?: number;
}

export const RegistrationCorner: React.FC<RegistrationCornerProps> = ({
  position,
  className = '',
  size = 20,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`pointer-events-none select-none text-[#248a61]/40 ${className}`}
    >
      {position === 'top-left' && (
        <>
          <path d="M 0 20 L 0 0 L 20 0" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" />
          <circle cx="0" cy="0" r="1.5" fill="#248a61" fillOpacity="0.8" />
        </>
      )}
      {position === 'top-right' && (
        <>
          <path d="M 4 0 L 24 0 L 24 20" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" />
          <circle cx="24" cy="0" r="1.5" fill="#248a61" fillOpacity="0.8" />
        </>
      )}
      {position === 'bottom-left' && (
        <>
          <path d="M 0 4 L 0 24 L 20 24" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" />
          <circle cx="0" cy="24" r="1.5" fill="#248a61" fillOpacity="0.8" />
        </>
      )}
      {position === 'bottom-right' && (
        <>
          <path d="M 24 4 L 24 24 L 4 24" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" />
          <circle cx="24" cy="24" r="1.5" fill="#248a61" fillOpacity="0.8" />
        </>
      )}
    </svg>
  );
};

/**
 * Hero Architectural Backdrop
 * Responsive graphic system carrying the identical visual DNA across Desktop and Mobile:
 *
 * DESKTOP: Generous architectural composition with orbital geometry, datum lines,
 * dot matrix, crosshairs, and faint contour elevation paths.
 *
 * MOBILE: Compressed editorial composition with subtle upper orbital arc,
 * datum hairlines, coordinate stamps, and grounding lower contour paths.
 */
interface HeroBackdropProps {
  isRTL?: boolean;
}

export const HeroBackdrop: React.FC<HeroBackdropProps> = ({ isRTL = false }) => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-[1]">
      {/* 1. Large Screen SVG Drafting Grid & Orbital Geometry (Desktop >= 768px - 100% UNCHANGED) */}
      <svg
        className="hidden md:block absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Subtle atmospheric radial emerald bloom */}
          <radialGradient id="hero-orbital-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#248a61" stopOpacity="0.08" />
            <stop offset="70%" stopColor="#248a61" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#248a61" stopOpacity="0" />
          </radialGradient>

          {/* Delicate vertical gradient for datum line */}
          <linearGradient id="datum-fade-v" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#363636" stopOpacity="0" />
            <stop offset="25%" stopColor="#363636" stopOpacity="0.12" />
            <stop offset="75%" stopColor="#363636" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#363636" stopOpacity="0" />
          </linearGradient>

          {/* Delicate horizontal gradient for datum line */}
          <linearGradient id="datum-fade-h" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#248a61" stopOpacity="0" />
            <stop offset="20%" stopColor="#248a61" stopOpacity="0.18" />
            <stop offset="80%" stopColor="#248a61" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#248a61" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* --- ORBITAL GEOMETRY (Upper Right Quadrant) --- */}
        <g opacity="0.85" className="transition-opacity duration-500">
          {/* Soft atmospheric ambient aura */}
          <circle cx="1120" cy="270" r="180" fill="url(#hero-orbital-glow)" />

          {/* Outer dashed orbital ring */}
          <circle
            cx="1120"
            cy="270"
            r="140"
            stroke="#248a61"
            strokeWidth="0.8"
            strokeDasharray="3 5"
            strokeOpacity="0.18"
          />

          {/* Inner concentric ring */}
          <circle
            cx="1120"
            cy="270"
            r="100"
            stroke="#363636"
            strokeWidth="0.6"
            strokeOpacity="0.1"
          />

          {/* Core subtle circle */}
          <circle
            cx="1120"
            cy="270"
            r="60"
            stroke="#248a61"
            strokeWidth="0.6"
            strokeOpacity="0.12"
          />

          {/* Crosshair Horizontal Axis */}
          <line
            x1="940"
            y1="270"
            x2="1300"
            y2="270"
            stroke="#363636"
            strokeWidth="0.6"
            strokeOpacity="0.1"
          />

          {/* Crosshair Vertical Axis */}
          <line
            x1="1120"
            y1="90"
            x2="1120"
            y2="450"
            stroke="#363636"
            strokeWidth="0.6"
            strokeOpacity="0.1"
          />

          {/* Crosshair axis tick marks */}
          <line x1="1080" y1="267" x2="1080" y2="273" stroke="#248a61" strokeWidth="0.8" strokeOpacity="0.25" />
          <line x1="1160" y1="267" x2="1160" y2="273" stroke="#248a61" strokeWidth="0.8" strokeOpacity="0.25" />
          <line x1="1117" y1="230" x2="1123" y2="230" stroke="#248a61" strokeWidth="0.8" strokeOpacity="0.25" />
          <line x1="1117" y1="310" x2="1123" y2="310" stroke="#248a61" strokeWidth="0.8" strokeOpacity="0.25" />

          {/* Tiny emerald coordinate node at orbit center */}
          <circle cx="1120" cy="270" r="2.5" fill="#248a61" fillOpacity="0.75" />
          <circle cx="1120" cy="270" r="5" stroke="#248a61" strokeWidth="0.6" strokeOpacity="0.3" />

          {/* Architectural Coordinate Stamps */}
          <text
            x="1275"
            y="215"
            fill="#363636"
            fillOpacity="0.3"
            fontSize="8.5"
            fontFamily="monospace"
            letterSpacing="0.15em"
          >
            11.9663657° N
          </text>
          <text
            x="1275"
            y="228"
            fill="#363636"
            fillOpacity="0.3"
            fontSize="8.5"
            fontFamily="monospace"
            letterSpacing="0.15em"
          >
            75.2626666° E
          </text>
        </g>

        {/* --- ARCHITECTURAL DATUM LINES & NODES --- */}
        {/* Left vertical datum line with emerald nodes */}
        <g opacity="0.85">
          <line x1="90" y1="180" x2="90" y2="720" stroke="url(#datum-fade-v)" strokeWidth="0.75" strokeDasharray="4 4" />
          <circle cx="90" cy="220" r="2" fill="#248a61" fillOpacity="0.55" />
          <circle cx="90" cy="680" r="2" fill="#248a61" fillOpacity="0.55" />
        </g>

        {/* Top-left editorial metadata marker */}
        <g opacity="0.6" className="hidden lg:block">
          <text
            x="96"
            y="170"
            fill="#363636"
            fillOpacity="0.3"
            fontSize="8"
            fontFamily="monospace"
            letterSpacing="0.25em"
          >
            PORTFOLIO // 2026
          </text>
        </g>

        {/* Subtle dot matrix grid anchor (5x4 dots) */}
        <g opacity="0.35" className="hidden lg:block">
          {[0, 1, 2, 3, 4].map((col) =>
            [0, 1, 2, 3].map((row) => (
              <circle
                key={`dot-${col}-${row}`}
                cx={960 + col * 12}
                cy={150 + row * 12}
                r="1"
                fill="#363636"
              />
            ))
          )}
        </g>

        {/* --- FAINT CONTOUR ELEVATION LINES (Lower Background) --- */}
        <g opacity="0.75">
          {/* Contour Line 1 */}
          <path
            d="M -40 730 C 260 690, 540 780, 880 720 C 1140 670, 1340 750, 1500 710"
            stroke="#248a61"
            strokeWidth="0.8"
            strokeOpacity="0.09"
            fill="none"
          />

          {/* Contour Line 2 */}
          <path
            d="M -40 765 C 220 730, 500 820, 840 750 C 1110 700, 1310 780, 1500 740"
            stroke="#363636"
            strokeWidth="0.75"
            strokeOpacity="0.07"
            fill="none"
          />

          {/* Contour Line 3 */}
          <path
            d="M -40 800 C 240 770, 520 850, 860 790 C 1160 740, 1360 810, 1500 780"
            stroke="#248a61"
            strokeWidth="0.7"
            strokeOpacity="0.06"
            fill="none"
          />
        </g>
      </svg>

      {/* 2. Compressed Mobile Editorial Composition (< 768px) */}
      <svg
        className="block md:hidden absolute inset-0 w-full h-full"
        viewBox="0 0 390 844"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="mobile-orbital-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#248a61" stopOpacity="0.09" />
            <stop offset="65%" stopColor="#248a61" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#248a61" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="mobile-datum-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#363636" stopOpacity="0" />
            <stop offset="20%" stopColor="#363636" stopOpacity="0.10" />
            <stop offset="80%" stopColor="#363636" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#363636" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* --- MOBILE RESTRAINED ORBITAL STRUCTURE (Upper Area/Corner) --- */}
        <g opacity="0.85" className="transition-opacity duration-500">
          {/* Faint atmospheric aura behind the upper area */}
          <circle
            cx={isRTL ? 45 : 345}
            cy={175}
            r={130}
            fill="url(#mobile-orbital-glow)"
          />

          {/* Outer dashed orbital arc */}
          <circle
            cx={isRTL ? 45 : 345}
            cy={175}
            r={105}
            stroke="#248a61"
            strokeWidth="0.75"
            strokeDasharray="3 4"
            strokeOpacity="0.16"
          />

          {/* Inner delicate solid arc */}
          <circle
            cx={isRTL ? 45 : 345}
            cy={175}
            r={72}
            stroke="#363636"
            strokeWidth="0.6"
            strokeOpacity="0.08"
          />

          {/* Core subtle ring */}
          <circle
            cx={isRTL ? 45 : 345}
            cy={175}
            r={40}
            stroke="#248a61"
            strokeWidth="0.5"
            strokeOpacity="0.10"
          />

          {/* Mobile Crosshair Horizontal Axis */}
          <line
            x1={isRTL ? 0 : 210}
            y1={175}
            x2={isRTL ? 180 : 390}
            y2={175}
            stroke="#363636"
            strokeWidth="0.5"
            strokeOpacity="0.09"
          />

          {/* Mobile Crosshair Vertical Axis */}
          <line
            x1={isRTL ? 45 : 345}
            y1={70}
            x2={isRTL ? 45 : 345}
            y2={280}
            stroke="#363636"
            strokeWidth="0.5"
            strokeOpacity="0.09"
          />

          {/* Crosshair axis tick marks */}
          <line
            x1={isRTL ? 15 : 315}
            y1={172}
            x2={isRTL ? 15 : 315}
            y2={178}
            stroke="#248a61"
            strokeWidth="0.75"
            strokeOpacity="0.22"
          />
          <line
            x1={isRTL ? 75 : 375}
            y1={172}
            x2={isRTL ? 75 : 375}
            y2={178}
            stroke="#248a61"
            strokeWidth="0.75"
            strokeOpacity="0.22"
          />
          <line
            x1={isRTL ? 42 : 342}
            y1={145}
            x2={isRTL ? 48 : 348}
            y2={145}
            stroke="#248a61"
            strokeWidth="0.75"
            strokeOpacity="0.22"
          />
          <line
            x1={isRTL ? 42 : 342}
            y1={205}
            x2={isRTL ? 48 : 348}
            y2={205}
            stroke="#248a61"
            strokeWidth="0.75"
            strokeOpacity="0.22"
          />

          {/* Tiny emerald coordinate node at orbit center */}
          <circle
            cx={isRTL ? 45 : 345}
            cy={175}
            r={2}
            fill="#248a61"
            fillOpacity="0.7"
          />
          <circle
            cx={isRTL ? 45 : 345}
            cy={175}
            r={4.5}
            stroke="#248a61"
            strokeWidth="0.5"
            strokeOpacity="0.25"
          />

          {/* Discreet Mobile Coordinate Stamp */}
          <text
            x={isRTL ? 8 : 300}
            y={120}
            fill="#363636"
            fillOpacity="0.26"
            fontSize="7"
            fontFamily="monospace"
            letterSpacing="0.08em"
          >
            11.9663657° N
          </text>
          <text
            x={isRTL ? 8 : 300}
            y={130}
            fill="#363636"
            fillOpacity="0.26"
            fontSize="7"
            fontFamily="monospace"
            letterSpacing="0.08em"
          >
            75.2626666° E
          </text>
        </g>

        {/* --- MOBILE ARCHITECTURAL DATUM & REGISTRATION --- */}
        {/* Margin vertical datum hairline */}
        <g opacity="0.75">
          <line
            x1={isRTL ? 372 : 18}
            y1={150}
            x2={isRTL ? 372 : 18}
            y2={720}
            stroke="url(#mobile-datum-fade)"
            strokeWidth="0.6"
            strokeDasharray="3 3"
          />
          <circle
            cx={isRTL ? 372 : 18}
            cy={180}
            r={1.5}
            fill="#248a61"
            fillOpacity="0.5"
          />
          <circle
            cx={isRTL ? 372 : 18}
            cy={690}
            r={1.5}
            fill="#248a61"
            fillOpacity="0.5"
          />
        </g>

        {/* Subtle top metadata label */}
        <text
          x={isRTL ? 310 : 26}
          y={115}
          fill="#363636"
          fillOpacity="0.28"
          fontSize="7.5"
          fontFamily="monospace"
          letterSpacing="0.18em"
        >
          PORTFOLIO // 2026
        </text>

        {/* Delicate 3x3 dot matrix cluster */}
        <g opacity="0.3">
          {[0, 1, 2].map((col) =>
            [0, 1, 2].map((row) => (
              <circle
                key={`m-dot-${col}-${row}`}
                cx={(isRTL ? 335 : 30) + col * 9}
                cy={132 + row * 9}
                r="0.8"
                fill="#363636"
              />
            ))
          )}
        </g>

        {/* --- MOBILE FAINT GROUNDING CONTOUR LINES (Lower Area, below buttons) --- */}
        <g opacity="0.75">
          <path
            d="M -20 670 C 80 650, 180 690, 280 660 C 330 645, 370 675, 410 665"
            stroke="#248a61"
            strokeWidth="0.7"
            strokeOpacity="0.08"
            fill="none"
          />
          <path
            d="M -20 705 C 70 680, 170 720, 270 690 C 330 675, 380 705, 410 695"
            stroke="#363636"
            strokeWidth="0.6"
            strokeOpacity="0.06"
            fill="none"
          />
          <path
            d="M -20 740 C 90 720, 190 750, 290 725 C 340 710, 385 735, 410 730"
            stroke="#248a61"
            strokeWidth="0.5"
            strokeOpacity="0.05"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
};

/**
 * Section Contour Accent
 * Delicate topographical contour curves for section transitions (e.g. between Philosophy & Workflow).
 */
export const SectionContourLines: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden pointer-events-none select-none opacity-40 ${className}`}>
      <svg
        className="w-full h-12 md:h-16"
        viewBox="0 0 1200 64"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M 0 32 C 300 16, 600 48, 900 24 C 1050 12, 1150 36, 1200 28"
          stroke="#248a61"
          strokeWidth="0.75"
          strokeOpacity="0.12"
          fill="none"
        />
        <path
          d="M 0 44 C 280 28, 580 60, 880 36 C 1030 24, 1130 48, 1200 40"
          stroke="#363636"
          strokeWidth="0.6"
          strokeOpacity="0.08"
          fill="none"
        />
      </svg>
    </div>
  );
};
