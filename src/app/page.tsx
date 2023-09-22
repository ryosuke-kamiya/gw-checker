import * as React from 'react';
import Home from '@/layouts/Home/Home';

export default function RootPage() {
  return <Home />;
}
// import { sql } from "@vercel/postgres";

// export default async function Cart({
//   params
// } : {
//   params: { user: string }
// }): Promise<JSX.Element> {
//   const { rows } = await sql`SELECT * from CARTS where user_id=${params.user}`;

//   return (
//     <div>
//       {rows.map((row) => (
//         <div key={row.id}>
//           {row.id} - {row.quantity}
//         </div>
//       ))}
//     </div>
//   );
// }