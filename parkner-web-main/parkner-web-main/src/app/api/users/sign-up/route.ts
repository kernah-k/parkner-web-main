import { db } from "@/config/firebase";
import { doc, setDoc } from "firebase/firestore";

// Sign up user
const POST = async (request: Request) => {
  const data = await request.json();

  await setDoc(doc(db, "users", data.username), {
    username: data.username ?? null,
    email: data.email ?? null,
    password: data.password ?? null,
    role: data.role ?? null,
  });

  return Response.json({ status: "success" });
};

export { POST };
