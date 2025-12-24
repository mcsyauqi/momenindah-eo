"use client";

import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: string;
  delay: string;
  duration: string;
  color: string;
}

export default function Confetti() {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);
  const colors = ["#7C3AED", "#EC4899", "#F59E0B", "#10B981", "#3B82F6"];

  useEffect(() => {
    const newPieces: ConfettiPiece[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 4}s`,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setPieces(newPieces);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti"
          style={{
            left: piece.left,
            animationDelay: piece.delay,
            animationDuration: piece.duration,
            backgroundColor: piece.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "0",
            width: `${6 + Math.random() * 8}px`,
            height: `${6 + Math.random() * 8}px`,
          }}
        />
      ))}
    </div>
  );
}
