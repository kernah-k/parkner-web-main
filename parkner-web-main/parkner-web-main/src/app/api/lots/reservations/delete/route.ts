import { db } from "@/config/firebase";
import { deleteDoc, doc } from "firebase/firestore";

// Delete a reservation by id
const POST = async (request: Request) => {
  const data = await request.json();
  console.log(data);
  await deleteDoc(doc(db, "reservations", data["id"]));
  return Response.json({ message: "Successfully deleted" });
};

export { POST };
