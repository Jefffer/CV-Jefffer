import { useEffect, useMemo, useRef, useState } from "react";

const WORLD_SIZE = 100;
const MIN_SPEED = 5;
const MAX_SPEED = 16;
const WALL_RESTITUTION = 0.95;
const COLLISION_RESTITUTION = 0.92;

const randomFromSeed = (seed) => {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
};

const buildInitialBubbles = ({ icons, sectionIndex, bubbleCount }) => {
  if (!icons.length) return [];

  const generated = [];

  for (let i = 0; i < bubbleCount; i += 1) {
    const tech = icons[i % icons.length];
    const radius = i < 3 ? 2.9 : 2.3;
    const size = i < 3 ? 44 : 36;
    const base = (sectionIndex + 1) * 101 + (i + 1) * 37;
    let x = radius + randomFromSeed(base + 1) * (WORLD_SIZE - radius * 2);
    let y = radius + randomFromSeed(base + 2) * (WORLD_SIZE - radius * 2);

    for (let attempts = 0; attempts < 30; attempts += 1) {
      const isOverlapping = generated.some((item) => {
        const dx = item.x - x;
        const dy = item.y - y;
        return Math.hypot(dx, dy) < item.radius + radius + 0.8;
      });

      if (!isOverlapping) break;
      x = radius + randomFromSeed(base + 10 + attempts) * (WORLD_SIZE - radius * 2);
      y = radius + randomFromSeed(base + 30 + attempts) * (WORLD_SIZE - radius * 2);
    }

    const speed = MIN_SPEED + randomFromSeed(base + 3) * (MAX_SPEED - MIN_SPEED);
    const angle = randomFromSeed(base + 4) * Math.PI * 2;

    generated.push({
      id: `${sectionIndex}-${i}`,
      tech,
      x,
      y,
      radius,
      size,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
    });
  }

  return generated;
};

export const useFloatingBubbles = ({
  icons,
  sectionIndex,
  bubbleCount = 10,
  isActive,
}) => {
  const initialBubbles = useMemo(
    () => buildInitialBubbles({ icons, sectionIndex, bubbleCount }),
    [icons, sectionIndex, bubbleCount]
  );

  const [dynamicBubbles, setDynamicBubbles] = useState(initialBubbles);
  const frameRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => {
    setDynamicBubbles(initialBubbles);
  }, [initialBubbles]);

  useEffect(() => {
    if (!isActive || initialBubbles.length === 0) return undefined;

    const tick = (timestamp) => {
      const lastTimestamp = timeRef.current ?? timestamp;
      const deltaSeconds = Math.min((timestamp - lastTimestamp) / 1000, 0.033);
      timeRef.current = timestamp;

      setDynamicBubbles((prev) => {
        const next = prev.map((bubble) => {
          let x = bubble.x + bubble.vx * deltaSeconds;
          let y = bubble.y + bubble.vy * deltaSeconds;
          let vx = bubble.vx;
          let vy = bubble.vy;

          if (x <= bubble.radius) {
            x = bubble.radius;
            vx = Math.abs(vx) * WALL_RESTITUTION;
            vy += (Math.random() - 0.5) * 0.6;
          } else if (x >= WORLD_SIZE - bubble.radius) {
            x = WORLD_SIZE - bubble.radius;
            vx = -Math.abs(vx) * WALL_RESTITUTION;
            vy += (Math.random() - 0.5) * 0.6;
          }

          if (y <= bubble.radius) {
            y = bubble.radius;
            vy = Math.abs(vy) * WALL_RESTITUTION;
            vx += (Math.random() - 0.5) * 0.6;
          } else if (y >= WORLD_SIZE - bubble.radius) {
            y = WORLD_SIZE - bubble.radius;
            vy = -Math.abs(vy) * WALL_RESTITUTION;
            vx += (Math.random() - 0.5) * 0.6;
          }

          return { ...bubble, x, y, vx, vy };
        });

        for (let i = 0; i < next.length; i += 1) {
          for (let j = i + 1; j < next.length; j += 1) {
            const a = next[i];
            const b = next[j];
            const dx = b.x - a.x;
            const dy = b.y - a.y;
            const distance = Math.hypot(dx, dy) || 0.001;
            const minDistance = a.radius + b.radius;

            if (distance < minDistance) {
              const nx = dx / distance;
              const ny = dy / distance;
              const overlap = (minDistance - distance) / 2;

              a.x -= nx * overlap;
              a.y -= ny * overlap;
              b.x += nx * overlap;
              b.y += ny * overlap;

              const relVelX = b.vx - a.vx;
              const relVelY = b.vy - a.vy;
              const velAlongNormal = relVelX * nx + relVelY * ny;

              if (velAlongNormal < 0) {
                const impulse = (-(1 + COLLISION_RESTITUTION) * velAlongNormal) / 2;
                const impulseX = impulse * nx;
                const impulseY = impulse * ny;

                a.vx -= impulseX;
                a.vy -= impulseY;
                b.vx += impulseX;
                b.vy += impulseY;
              }

              const jitterA = (Math.random() - 0.5) * 1.1;
              const jitterB = (Math.random() - 0.5) * 1.1;

              a.vx += jitterA;
              a.vy -= jitterA;
              b.vx -= jitterB;
              b.vy += jitterB;
            }
          }
        }

        return next.map((bubble) => {
          const speed = Math.hypot(bubble.vx, bubble.vy);

          if (speed < MIN_SPEED) {
            const factor = MIN_SPEED / (speed || 0.001);
            return {
              ...bubble,
              vx: bubble.vx * factor,
              vy: bubble.vy * factor,
            };
          }

          if (speed > MAX_SPEED) {
            const factor = MAX_SPEED / speed;
            return {
              ...bubble,
              vx: bubble.vx * factor,
              vy: bubble.vy * factor,
            };
          }

          return bubble;
        });
      });
      frameRef.current = window.requestAnimationFrame(tick);
    };

    frameRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
      frameRef.current = null;
      timeRef.current = null;
    };
  }, [isActive, initialBubbles.length]);

  return dynamicBubbles;
};

export default useFloatingBubbles;