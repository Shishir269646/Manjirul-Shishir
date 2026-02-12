"use client";

import React from "react";

interface GlitchTerminalProps {
    text?: string;
    accentColor?: string;
}

const GlitchTerminal: React.FC<GlitchTerminalProps> = ({
    text = "PARADOX",
    accentColor = "#00B8D4",
}) => {
    return (
        <div className="wrapper">
            <div id="background"></div>

            <div id="terminal">
                <div id="top-border" className="wide-border border"></div>
                <div id="left-border" className="tall-border border"></div>
                <div id="right-border" className="tall-border border"></div>
                <div id="bottom-border" className="wide-border border"></div>

                <h1
                    className="glitch-text"
                    data-text={text}
                    style={{
                        color: accentColor,
                        textShadow: `0 0 0.1em ${accentColor},
                         0 0 0.2em ${accentColor},
                         0 0 0.3em ${accentColor}`,
                    }}
                >
                    {text}
                </h1>
            </div>

            <style jsx>{`
        :root {
          --background: #121212;
        }

        .wrapper {
          position: relative;
          height: 100vh;
          background-color: var(--background);
        }

        #terminal {
          position: absolute;
          background-color: #12121255;
          overflow-y: auto;
          backdrop-filter: blur(10px);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .border {
          position: absolute;
        }

        .wide-border {
          height: 3em;
          width: calc(100% - 6em);
        }

        .tall-border {
          height: calc(100% - 6em);
          width: 3em;
        }

        #top-border {
          top: 0;
          left: 3em;
          border-top: 1px solid #f5f5f555;
        }

        #left-border {
          top: 3em;
          left: 0;
          border-left: 1px solid #f5f5f555;
        }

        #right-border {
          top: 3em;
          right: 0;
          border-right: 1px solid #f5f5f555;
        }

        #bottom-border {
          left: 3em;
          bottom: 0;
          border-bottom: 1px solid #f5f5f555;
        }

        #background {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            0deg,
            #f5f5f577 3em,
            transparent 3em,
            transparent calc(100% - 3em),
            #f5f5f577 calc(100% - 3em)
          );
        }

        .glitch-text {
          font-size: 80px;
          font-family: sans-serif;
          position: relative;
          margin: 0;
          z-index: 2;
        }

        .glitch-text::before {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          animation: glitch 2s infinite;
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
          transform: translate(-0.02em, -0.02em);
        }

        @keyframes glitch {
          0%,
          100% {
            clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
            transform: translate(0);
          }
          33% {
            clip-path: polygon(0 0, 100% 0, 100% 15%, 0 15%);
            transform: translate(-0.05em, -0.05em);
          }
          66% {
            clip-path: polygon(0 85%, 100% 85%, 100% 100%, 0 100%);
            transform: translate(0.05em, 0.05em);
          }
        }

        @media (orientation: landscape) {
          #terminal,
          #background {
            height: 90%;
            width: 95%;
            top: 5%;
            left: 2.5%;
          }

          .wrapper {
            background-image: radial-gradient(
              at 50% 0,
              rgba(0, 184, 212, 0.75),
              var(--background)
            );
          }
        }

        @media (orientation: portrait) {
          #terminal,
          #background {
            height: 95%;
            width: 90%;
            top: 2.5%;
            left: 5%;
          }

          .wrapper {
            background-image: radial-gradient(
              at 0 50%,
              rgba(0, 184, 212, 0.75),
              var(--background)
            );
          }
        }
      `}</style>
        </div>
    );
};

export default GlitchTerminal;
