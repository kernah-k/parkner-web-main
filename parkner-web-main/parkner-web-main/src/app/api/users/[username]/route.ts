import { db } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";

// Get user by username
const GET = async (
  request: Request,
  { params }: { params: { username: string } }
) => {
  const docRef = doc(db, "users", params.username);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    delete data.password;
    const response = Response.json(data);
    return response;
  }

  return Response.json({ error: "Not found" });
};

export { GET };
