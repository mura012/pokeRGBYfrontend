import type { NextApiRequest, NextApiResponse } from "next";
import { PokemonType } from "types/pokemon";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<PokemonType>
) => {
  const data = await fetch(`${process.env.BACKEND_API_URL}api/pokemon`);
  const json = await data.json();
  res.status(200).json(json);
};

export default handler;
