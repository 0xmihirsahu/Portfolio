"use client";
import { useState, useCallback, useEffect } from "react";

const allowedCharacters = ["B", "A", "R", "C", "D", "リ","ス","ト","か","ら", "R", "0", "1", "M", "L", "K", "J", "I", "H", "G", "F", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const getRandomCharacter = () =>
  allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)];

interface ScrambleLinkProps {
  name: string;
  url: string;
  desc: string;
}

export default function ScrambleLink({ name, url, desc }: ScrambleLinkProps) {
  const [displayName, setDisplayName] = useState(name);
  const [displayDesc, setDisplayDesc] = useState(desc);
  const [isScrambling, setIsScrambling] = useState(false);

  const scrambleText = useCallback(async () => {
    if (isScrambling) return;
    setIsScrambling(true);

    for (let i = 0; i < 5; i++) {
      const scrambledName = Array.from(name).map(() => getRandomCharacter()).join("");
      const scrambledDesc = Array.from(desc).map(char => 
        char === " " ? char : getRandomCharacter()
      ).join("");
      
      setDisplayName(scrambledName);
      setDisplayDesc(scrambledDesc);
      await new Promise(resolve => setTimeout(resolve, 50));
    }

    setDisplayName(name);
    setDisplayDesc(desc);
    setIsScrambling(false);
  }, [name, desc, isScrambling]);

  // Scramble on mount
  useEffect(() => {
    scrambleText();
  }, []);

  return (
    <a
      href={url}
      className="group border-2 p-4 transition-colors bg-neutral-800/30 border-neutral-800 hover:border-gray-200 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-700/50"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={scrambleText}
    >
      <h2 className="mb-3 text-2xl font-semibold">
        {displayName}
      </h2>
      <p className="font-mono text-sm opacity-50">{displayDesc}</p>
    </a>
  );
} 