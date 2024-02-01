// import type { NextApiRequest, NextApiResponse } from 'next'

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const API_URL =
//     process.env.NODE_ENV === "production"
//       ? "https://mood-x-production.up.railway.app/"
//       : "http://localhost:5000/"

//       try {
//         const response = await fetch(`${API_URL}/playlists`);
//         const data = await response.json();
//         return res.status(200).json(data);
//       } catch (error) {
//         console.error('Error:', error);
//         return res.status(500).json({ error: 'Internal Server Error' });
//       }
// }
