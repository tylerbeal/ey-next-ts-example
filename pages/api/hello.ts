// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Config from '../../config/config'

type Data = {
  name: string;
  testEnvVar: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe', testEnvVar: Config.SERVER_ONLY_VAR })
}
