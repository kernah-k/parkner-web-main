import { db } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";

// Login user
const POST = async (request: Request) => {
  const data = await request.json();

  const docRef = doc(db, "users", data.username);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    if (data.password == docSnap.data().password) {
      return Response.json(docSnap.data());
    }
    return Response.json({ message: "Invalid credentials" });
  }

  return Response.json({ message: "User not found" });
};

export { POST };
