import { db } from "@/config/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

// Get one parking lot by id
const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const docRef = doc(db, "parking_lots", params.id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return Response.json(docSnap.data());
  }

  return Response.json({ error: "Not found" });
};

// Update or create parking lot by id
const POST = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const data = await request.json();

  await setDoc(doc(db, "parking_lots", params.id), {
    lot_id: params.id,
    name: data.name ?? null,
    address: data.address ?? null,
    gate_open: data.gate_open ?? false,
    img_url: data.img_url ?? null,
    reservable: data.reservable ?? null,
    reservation_required: data.reservation_required ?? null,
    reservation_price: data.reservation_price ?? null,
    spots: data.spots ?? null,
  });

  return Response.json({ status: "success" });
};

export { GET, POST };
