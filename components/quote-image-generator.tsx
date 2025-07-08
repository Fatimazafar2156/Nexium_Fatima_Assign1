"use client";

import React, { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Palette, Type, Image as ImageIcon } from "lucide-react";
import { Quote } from "@/data/quotes";

interface QuoteImageGeneratorProps {
  quote: Quote;
  isVisible: boolean;
  onClose: () => void;
}

const gradientBackgrounds = [
  {
    name: "Sunset",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    name: "Ocean",
    gradient: "linear-gradient(135deg, #667db6 0%, #0082c8 100%)",
  },
  {
    name: "Forest",
    gradient: "linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)",
  },
  {
    name: "Rose",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  },
  {
    name: "Purple",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
  },
  {
    name: "Gold",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
];

const fontStyles = [
  { name: "Elegant", family: "serif", weight: "400" },
  { name: "Modern", family: "sans-serif", weight: "300" },
  { name: "Bold", family: "sans-serif", weight: "700" },
  { name: "Script", family: "cursive", weight: "400" },
];

export function QuoteImageGenerator({
  quote,
  isVisible,
  onClose,
}: QuoteImageGeneratorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedGradient, setSelectedGradient] = useState(0);
  const [selectedFont, setSelectedFont] = useState(0);
  const [imageSize, setImageSize] = useState({ width: 800, height: 600 });

  useEffect(() => {
    if (isVisible && canvasRef.current) {
      generateImage();
    }
  }, [isVisible, selectedGradient, selectedFont, quote]);

  const generateImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = imageSize.width;
    canvas.height = imageSize.height;

    // Create gradient background
    const gradient = ctx.createLinearGradient(
      0,
      0,
      canvas.width,
      canvas.height,
    );
    const currentGradient = gradientBackgrounds[selectedGradient];

    // Parse gradient colors (simplified)
    if (currentGradient.name === "Sunset") {
      gradient.addColorStop(0, "#667eea");
      gradient.addColorStop(1, "#764ba2");
    } else if (currentGradient.name === "Ocean") {
      gradient.addColorStop(0, "#667db6");
      gradient.addColorStop(1, "#0082c8");
    } else if (currentGradient.name === "Forest") {
      gradient.addColorStop(0, "#74b9ff");
      gradient.addColorStop(1, "#0984e3");
    } else if (currentGradient.name === "Rose") {
      gradient.addColorStop(0, "#fa709a");
      gradient.addColorStop(1, "#fee140");
    } else if (currentGradient.name === "Purple") {
      gradient.addColorStop(0, "#a8edea");
      gradient.addColorStop(1, "#fed6e3");
    } else {
      gradient.addColorStop(0, "#f093fb");
      gradient.addColorStop(1, "#f5576c");
    }

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add subtle pattern overlay
    ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
    for (let i = 0; i < canvas.width; i += 40) {
      for (let j = 0; j < canvas.height; j += 40) {
        ctx.fillRect(i, j, 2, 2);
      }
    }

    // Set font style
    const currentFont = fontStyles[selectedFont];
    const fontSize = Math.min(canvas.width / 15, 36);
    ctx.font = `${currentFont.weight} ${fontSize}px ${currentFont.family}`;
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Add text shadow
    ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;

    // Draw quote text (with word wrapping)
    const maxWidth = canvas.width - 120;
    const lineHeight = fontSize * 1.4;
    const words = quote.text.split(" ");
    const lines = [];
    let currentLine = "";

    for (const word of words) {
      const testLine = currentLine + word + " ";
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && currentLine !== "") {
        lines.push(currentLine.trim());
        currentLine = word + " ";
      } else {
        currentLine = testLine;
      }
    }
    lines.push(currentLine.trim());

    // Draw quote text
    const startY = canvas.height / 2 - (lines.length * lineHeight) / 2;
    lines.forEach((line, index) => {
      ctx.fillText(
        `"${index === 0 ? "" : ""}${line}${index === lines.length - 1 ? '"' : ""}"`,
        canvas.width / 2,
        startY + index * lineHeight,
      );
    });

    // Draw author
    ctx.font = `300 ${fontSize * 0.6}px ${currentFont.family}`;
    ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
    ctx.fillText(
      `— ${quote.author}`,
      canvas.width / 2,
      startY + lines.length * lineHeight + 40,
    );

    // Add decorative elements
    ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 50, startY - 30);
    ctx.lineTo(canvas.width / 2 + 50, startY - 30);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 50, startY + lines.length * lineHeight + 80);
    ctx.lineTo(canvas.width / 2 + 50, startY + lines.length * lineHeight + 80);
    ctx.stroke();
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = `quote-${quote.author.replace(/\s+/g, "-").toLowerCase()}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-4xl w-full max-h-[90vh] overflow-auto">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">Create Quote Image</h3>
            <Button variant="ghost" onClick={onClose}>
              ×
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Preview */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold flex items-center gap-2">
                <ImageIcon className="h-5 w-5" />
                Preview
              </h4>
              <div className="border rounded-lg p-4 bg-gray-50">
                <canvas
                  ref={canvasRef}
                  className="w-full h-auto border rounded shadow-lg"
                  style={{ maxHeight: "300px" }}
                />
              </div>
              <Button onClick={downloadImage} className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download Image
              </Button>
            </div>

            {/* Customization */}
            <div className="space-y-6">
              {/* Background Selection */}
              <div>
                <h4 className="text-lg font-semibold flex items-center gap-2 mb-3">
                  <Palette className="h-5 w-5" />
                  Background Style
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {gradientBackgrounds.map((bg, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedGradient(index)}
                      className={`h-16 rounded-lg border-2 transition-all ${
                        selectedGradient === index
                          ? "border-primary ring-2 ring-primary/20"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      style={{ background: bg.gradient }}
                    >
                      <div className="w-full h-full rounded-md flex items-center justify-center">
                        <span className="text-white text-xs font-medium drop-shadow">
                          {bg.name}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Font Selection */}
              <div>
                <h4 className="text-lg font-semibold flex items-center gap-2 mb-3">
                  <Type className="h-5 w-5" />
                  Font Style
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {fontStyles.map((font, index) => (
                    <Button
                      key={index}
                      variant={selectedFont === index ? "default" : "outline"}
                      onClick={() => setSelectedFont(index)}
                      className="h-12"
                    >
                      <span
                        style={{
                          fontFamily: font.family,
                          fontWeight: font.weight,
                        }}
                      >
                        {font.name}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h4 className="text-lg font-semibold mb-3">Image Size</h4>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant={imageSize.width === 800 ? "default" : "outline"}
                    onClick={() => setImageSize({ width: 800, height: 600 })}
                  >
                    Social (800×600)
                  </Button>
                  <Button
                    variant={imageSize.width === 1080 ? "default" : "outline"}
                    onClick={() => setImageSize({ width: 1080, height: 1080 })}
                  >
                    Square (1080×1080)
                  </Button>
                </div>
              </div>

              {/* Quote Info */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <h5 className="font-semibold mb-2">Quote Details</h5>
                <p className="text-sm text-gray-600 mb-2">"{quote.text}"</p>
                <p className="text-sm font-medium">— {quote.author}</p>
                {quote.tags && quote.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {quote.tags.slice(0, 3).map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
