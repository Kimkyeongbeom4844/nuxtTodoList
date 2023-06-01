import { createConnection } from "mysql2/promise";
export default defineEventHandler(async (e) => {
  try {
    const { dbHost, dbUser, dbPw, dbDb } = useRuntimeConfig();
    const data = await readBody(e);
    const connection = await createConnection({
      host: dbHost,
      user: dbUser,
      password: dbPw,
      database: dbDb,
    });
    if (data) {
      const [result] = await connection.query(
        `insert into list (title,created) values ('${data.title}',now())`
      );
      return { message: "add" };
    }
    const query = getQuery(e);
    console.log(query);
    const [result] = await connection.query(
      `delete from list where id=${query.id}`
    );
    return { message: "delete" };
  } catch (error) {
    return { message: "error" };
  }
});
