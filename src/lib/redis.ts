import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://eu2-able-snake-30564.upstash.io",
  token: process.env.REDIS_KEY!,
});
