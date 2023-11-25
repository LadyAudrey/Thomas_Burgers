"use client";

const basePath = process.env.NODE_ENV === "production" ? "/thomas_burgers" : "";

export default function myImageLoader({ src }: { src: string }) {
  return basePath + src;
}
