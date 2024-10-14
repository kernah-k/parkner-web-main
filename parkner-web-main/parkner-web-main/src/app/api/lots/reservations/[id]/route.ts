import { db } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";

// Get reservation by id
const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const docRef = doc(db, "reservations", params.id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return Response.json(docSnap.data());
  }

  return Response.json({ message: "Not found" });
};

export { GET };
