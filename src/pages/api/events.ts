import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    if (req.method === "POST") {
      const { title, description, startDate, endDate, image, categories } =
        req.body;

      await prisma.event.create({
        data: {
          title,
          description,
          startDate,
          endDate,
          image,
          categories,
        },
      });
      res.status(200).json({ success: true });
    } else if (req.method === "GET") {
      const events = await prisma.event.findMany({});
      res.status(200).json(events);
    } else {
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
  } catch (err) {
    res.status(500).json({ error: "Error!" });
  }
}
