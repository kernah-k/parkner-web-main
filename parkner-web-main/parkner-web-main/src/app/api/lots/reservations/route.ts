import { db } from "@/config/firebase";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

// Create reservation for a parking spot
const POST = async (request: Request) => {
  const data = await request.json();

  const reservation_id = uuidv4();

  await setDoc(doc(db, "reservations", reservation_id), {
    reservation_id: reservation_id,
    lot_id: data.lot_id ?? null,
    lot_name: data.lot_name ?? null,
    lot_address: data.lot_address ?? null,
    reserved_spot: data.reserved_spot ?? null,
    username: data.username ?? null,
    user_email: data.user_email ?? null,
  });

  return Response.json({ reservation_id: reservation_id });
};

export { POST };
