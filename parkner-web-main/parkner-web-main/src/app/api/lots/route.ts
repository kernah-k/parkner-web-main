import { db } from "@/config/firebase";
import { collection, getDocs } from "firebase/firestore";

// Get a list of all parking lots
const GET = async (request: Request) => {
  const parkingLotsCol = collection(db, "parking_lots");
  const parkingLotSnapshot = await getDocs(parkingLotsCol);
  const parkingLots = parkingLotSnapshot.docs.map((doc) => doc.data());
  return Response.json(parkingLots);
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export { GET };
