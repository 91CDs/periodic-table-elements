import type { NextApiRequest, NextApiResponse } from 'next'
import PeriodicElements from "@/static/newData.json"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChemicalElement>
) {
  const { id } = req.query;
  const isNumber = typeof id !== "undefined" && typeof id !== "object" && Number.isFinite(Number(id))

  if (isNumber) {    
    const element: ChemicalElement = PeriodicElements.elements[+id];
    res.status(200).json(element);
  } else {
    res.status(400).end("Not a valid query: Must be a number");
  }
}
