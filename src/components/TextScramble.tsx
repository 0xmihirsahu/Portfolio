"use client";
import { useState, useEffect, useRef } from "react";

const allowedCharacters = ["B", "A", "R", "C", "D", "リ","ス","ト","か","ら", "R", "0", "1", "M", "L", "K", "J", "I", "H", "G", "F", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const getRandomCharacter = () =>
  allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)];

export default function TextScramble({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrambling, setIsScrambling] = useState(true);
  const originalTexts = useRef<Map<Node, string>>(new Map());

  useEffect(() => {
    if (!containerRef.current || !isScrambling) return;

    // Store original text content
    const textNodes: Node[] = [];
    const walker = document.createTreeWalker(
      containerRef.current,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          if (node.textContent?.trim()) {
            return NodeFilter.FILTER_ACCEPT;
          }
          return NodeFilter.FILTER_REJECT;
        },
      }
    );

    while (walker.nextNode()) {
      const node = walker.currentNode;
      originalTexts.current.set(node, node.textContent || "");
      textNodes.push(node);
    }

    let scrambleCount = 0;
    const scrambleInterval = setInterval(() => {
      textNodes.forEach((node) => {
        const original = originalTexts.current.get(node) || "";
        const scrambled = Array.from(original)
          .map((char) => (char === " " ? char : getRandomCharacter()))
          .join("");
        node.textContent = scrambled;
      });

      scrambleCount++;
      if (scrambleCount > 7) {
        // Restore original text
        textNodes.forEach((node) => {
          node.textContent = originalTexts.current.get(node) || "";
        });
        setIsScrambling(false);
        clearInterval(scrambleInterval);
      }
    }, 100);

    return () => clearInterval(scrambleInterval);
  }, [isScrambling]);

  return (
    <div ref={containerRef} className="transition-all duration-500">
      {children}
    </div>
  );
} 