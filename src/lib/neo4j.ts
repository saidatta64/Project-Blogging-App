import neo4j from "neo4j-driver";

const NEO4J_URI = process.env.NEO4J_URI as string || "neo4j://localhost";
const NEO4J_USER = process.env.NEO4J_USER as string || "neo4j";
const NEO4J_PASSWORD = process.env.NEO4J_PASSWORD as string || "password";

const driver = neo4j.driver(
  NEO4J_URI,
  neo4j.auth.basic(NEO4J_USER, NEO4J_PASSWORD)
);

const session = driver.session();

process.on("exit", async () => {
  await session.close();
  await driver.close();
});

export { driver, session };
