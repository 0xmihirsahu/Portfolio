"use client";
import { useState, useEffect, useCallback } from "react";

const texts = [
  "hi, i'm mihir, a buildoor.",
  "hi, i'm mihir, a blockchain dev.",
  "hi, i'm mihir, a rust engineer.",
  "hi, i know how to get things done.",
  "hi, i'm mihir, a web developer.",
  "hi, i'm mihir, a promptoor.",
  "hi, i'm mihir, a smart contract dev.",
  "hi, i'm on founder mode.",
];

const allowedCharacters = ["B", "A", "R", "C", "D", "リ","ス","ト","か","ら", "R", "0", "1", "M", "L", "K", "J", "I", "H", "G", "F", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const getRandomCharacter = () =>
  allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)];

export default function AnimatedText() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState(texts[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const animateText = useCallback(async (nextText: string) => {
    setIsAnimating(true);
    const currentText = displayText;
    const maxLength = Math.max(currentText.length, nextText.length);

    // Scrambling effect
    for (let i = 0; i < 7; i++) {
      const scrambled = Array.from({ length: maxLength }, (_, index) =>
        index < nextText.length && Math.random() > 0.6
          ? nextText[index] // Gradually reveal correct text
          : getRandomCharacter()
      ).join("");

      setDisplayText(scrambled);
      await new Promise((resolve) => setTimeout(resolve, 30));
    }

    // Set new text
    setDisplayText(nextText);
    setIsAnimating(false);
  }, [displayText]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        const nextIndex = (currentTextIndex + 1) % texts.length;
        setCurrentTextIndex(nextIndex);
        animateText(texts[nextIndex]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentTextIndex, isAnimating, animateText]);

  // Initial scramble on mount
  useEffect(() => {
    animateText(texts[0]);
  }, []);

  return (
    <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl transition-all duration-500 max-w-[90vw] break-words text-center">
      {displayText}
    </h1>
  );
}
