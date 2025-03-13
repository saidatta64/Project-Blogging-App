import { session } from "@/lib/neo4j";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const result = await session.run("MATCH (u:User) RETURN u LIMIT 100");
    const users = result.records.map(record => record.get("u").properties);

    return NextResponse.json({ message: "Auth API is working!",users });
  } catch (error) {
    console.error("Neo4j Query Error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
