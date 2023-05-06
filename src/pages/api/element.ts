import type { NextApiRequest, NextApiResponse } from 'next'
import PeriodicElements from "@/static/newData.json"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Periodic>
) {
  const data: Periodic = PeriodicElements;
  res.status(200).json(data)
}
