"use client";

import React, { useRef, useEffect } from "react";
import { useMousePosition } from "@/lib/mouse";

interface CosmicTechFieldProps {
    className?: string;
    quantity?: number;
    staticity?: number;
    ease?: number;
    refresh?: boolean;
}

export default function Cosmic({
    className = "",
    quantity = 30,
    staticity = 50,
    ease = 50,
    refresh = false,
}: CosmicTechFieldProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasContainerRef = useRef<HTMLDivElement>(null);
    const context = useRef<CanvasRenderingContext2D | null>(null);
    const celestialObjects = useRef<any[]>([]);
    const mousePosition = useMousePosition();
    const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

    const colors = ['#00ffff', '#4169e1', '#1e90ff', '#87cefa', '#e6e6fa'];
    const shapes = ['circle', 'star', 'moon'];

    useEffect(() => {
        if (canvasRef.current) {
            context.current = canvasRef.current.getContext("2d");
        }
        initCanvas();
        animate();
        window.addEventListener("resize", initCanvas);

        return () => {
            window.removeEventListener("resize", initCanvas);
        };
    }, []);

    useEffect(() => {
        onMouseMove();
    }, [mousePosition.x, mousePosition.y]);

    useEffect(() => {
        initCanvas();
    }, [refresh]);

    const initCanvas = () => {
        resizeCanvas();
        drawCelestialObjects();
    };

    const onMouseMove = () => {
        if (canvasRef.current) {
            const rect = canvasRef.current.getBoundingClientRect();
            const { w, h } = canvasSize.current;
            const x = mousePosition.x - rect.left - w / 2;
            const y = mousePosition.y - rect.top - h / 2;
            const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
            if (inside) {
                mouse.current.x = x;
                mouse.current.y = y;
            }
        }
    };

    type CelestialObject = {
        x: number;
        y: number;
        translateX: number;
        translateY: number;
        size: number;
        alpha: number;
        targetAlpha: number;
        dx: number;
        dy: number;
        magnetism: number;
        color: string;
        shape: string;
        rotation: number;
        rotationSpeed: number;
        pulsation: number;
        pulsationSpeed: number;
    };

    const resizeCanvas = () => {
        if (canvasContainerRef.current && canvasRef.current && context.current) {
            celestialObjects.current.length = 0;
            canvasSize.current.w = canvasContainerRef.current.offsetWidth;
            canvasSize.current.h = canvasContainerRef.current.offsetHeight;
            canvasRef.current.width = canvasSize.current.w * dpr;
            canvasRef.current.height = canvasSize.current.h * dpr;
            canvasRef.current.style.width = `${canvasSize.current.w}px`;
            canvasRef.current.style.height = `${canvasSize.current.h}px`;
            context.current.scale(dpr, dpr);
        }
    };

    const celestialObjectParams = (): CelestialObject => {
        const x = Math.floor(Math.random() * canvasSize.current.w);
        const y = Math.floor(Math.random() * canvasSize.current.h);
        const translateX = 0;
        const translateY = 0;
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const size = shape === 'star' ? Math.floor(Math.random() * 2) + 1 : Math.floor(Math.random() * 3) + 2;
        const alpha = 0;
        const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
        const dx = (Math.random() - 0.5) * 0.2;
        const dy = (Math.random() - 0.5) * 0.2;
        const magnetism = 0.1 + Math.random() * 4;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const rotation = Math.random() * Math.PI * 2;
        const rotationSpeed = (Math.random() - 0.5) * 0.02;
        const pulsation = Math.random() * 0.1;
        const pulsationSpeed = 0.01 + Math.random() * 0.02;

        return {
            x, y, translateX, translateY, size, alpha, targetAlpha, dx, dy, magnetism,
            color, shape, rotation, rotationSpeed, pulsation, pulsationSpeed
        };
    };

    const drawStar = (ctx: CanvasRenderingContext2D, cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number) => {
        let rot = Math.PI / 2 * 3;
        let x = cx;
        let y = cy;
        const step = Math.PI / spikes;

        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius);
        for (let i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            ctx.lineTo(x, y);
            rot += step;

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            ctx.lineTo(x, y);
            rot += step;
        }
        ctx.lineTo(cx, cy - outerRadius);
        ctx.closePath();
    };

    const drawMoon = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.moveTo(x + size * 0.5, y);
        ctx.arc(x, y, size * 0.5, 0, Math.PI * 2, false);
        ctx.closePath();
    };

    const drawCelestialObject = (object: CelestialObject, update = false) => {
        if (context.current) {
            const { x, y, translateX, translateY, size, alpha, color, shape, rotation } = object;
            context.current.translate(translateX, translateY);
            context.current.rotate(rotation);
            context.current.beginPath();

            switch (shape) {
                case 'star':
                    drawStar(context.current, x, y, 5, size, size / 2);
                    break;
                case 'moon':
                    drawMoon(context.current, x, y, size);
                    break;
                default:
                    context.current.arc(x, y, size, 0, 2 * Math.PI);
            }

            context.current.fillStyle = `${color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
            context.current.fill();
            context.current.setTransform(dpr, 0, 0, dpr, 0, 0);

            if (!update) {
                celestialObjects.current.push(object);
            }
        }
    };

    const clearContext = () => {
        if (context.current) {
            context.current.clearRect(
                0,
                0,
                canvasSize.current.w,
                canvasSize.current.h,
            );
        }
    };

    const drawCelestialObjects = () => {
        clearContext();
        const objectCount = quantity;
        for (let i = 0; i < objectCount; i++) {
            const object = celestialObjectParams();
            drawCelestialObject(object);
        }
    };

    const remapValue = (
        value: number,
        start1: number,
        end1: number,
        start2: number,
        end2: number,
    ): number => {
        const remapped =
            ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
        return remapped > 0 ? remapped : 0;
    };

    const animate = () => {
        clearContext();
        celestialObjects.current.forEach((object: CelestialObject, i: number) => {
            const edge = [
                object.x + object.translateX - object.size,
                canvasSize.current.w - object.x - object.translateX - object.size,
                object.y + object.translateY - object.size,
                canvasSize.current.h - object.y - object.translateY - object.size,
            ];
            const closestEdge = edge.reduce((a, b) => Math.min(a, b));
            const remapClosestEdge = parseFloat(
                remapValue(closestEdge, 0, 20, 0, 1).toFixed(2),
            );
            if (remapClosestEdge > 1) {
                object.alpha += 0.02;
                if (object.alpha > object.targetAlpha) {
                    object.alpha = object.targetAlpha;
                }
            } else {
                object.alpha = object.targetAlpha * remapClosestEdge;
            }
            object.x += object.dx;
            object.y += object.dy;
            object.translateX +=
                (mouse.current.x / (staticity / object.magnetism) - object.translateX) /
                ease;
            object.translateY +=
                (mouse.current.y / (staticity / object.magnetism) - object.translateY) /
                ease;

            object.rotation += object.rotationSpeed;
            object.size += Math.sin(object.pulsation) * object.pulsationSpeed;
            object.pulsation += 0.1;

            // Add twinkling effect for stars
            if (object.shape === 'star') {
                object.alpha = Math.sin(Date.now() * 0.001 + i) * 0.5 + 0.5;
            }

            if (
                object.x < -object.size ||
                object.x > canvasSize.current.w + object.size ||
                object.y < -object.size ||
                object.y > canvasSize.current.h + object.size
            ) {
                celestialObjects.current.splice(i, 1);
                const newObject = celestialObjectParams();
                drawCelestialObject(newObject);
            } else {
                drawCelestialObject(
                    {
                        ...object,
                        x: object.x,
                        y: object.y,
                        translateX: object.translateX,
                        translateY: object.translateY,
                        alpha: object.alpha,
                        rotation: object.rotation,
                        size: object.size,
                    },
                    true,
                );
            }
        });

        drawConnections();
        window.requestAnimationFrame(animate);
    };

    const drawConnections = () => {
        if (context.current) {
            celestialObjects.current.forEach((object, i) => {
                for (let j = i + 1; j < celestialObjects.current.length; j++) {
                    const otherObject = celestialObjects.current[j];
                    const dx = object.x - otherObject.x;
                    const dy = object.y - otherObject.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        context.current!.beginPath();
                        context.current!.moveTo(object.x + object.translateX, object.y + object.translateY);
                        context.current!.lineTo(otherObject.x + otherObject.translateX, otherObject.y + otherObject.translateY);
                        context.current!.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance / 100)})`;
                        context.current!.stroke();
                    }
                }
            });
        }
    };

    return (
        <div className={className} ref={canvasContainerRef} aria-hidden="true">
            <canvas ref={canvasRef} />
        </div>
    );
}
