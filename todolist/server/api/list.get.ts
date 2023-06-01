import { createConnection } from "mysql2/promise";

export default defineEventHandler(async (e) => {
  try {
    const { dbHost, dbUser, dbPw, dbDb } = useRuntimeConfig();
    const connection = await createConnection({
      host: dbHost,
      user: dbUser,
      password: dbPw,
      database: dbDb,
    });
    const [result] = await connection.query(`select * from list`);
    return result;
  } catch (error) {
    console.log(error);
    return { message: "error" };
  }
});
