const { Pool } = require("@neondatabase/serverless");
const {DB_PGHOST, DB_PGDATABASE, DB_PGUSER, DB_PGPASSWORD} = process.env;
const pool = new Pool({
  host: DB_PGHOST,
  database: DB_PGDATABASE,
  user: DB_PGUSER,
  password: DB_PGPASSWORD,
  port: process.env.PORT,
  ssl: {
    require: true
  }
})

const userExist = async (name) => {
  const client = await pool.connect()
  
  try {
    const result = await client.query(
      `SELECT EXISTS (SELECT 1 FROM users WHERE name = $1) AS "exists"`,
      [name.toUpperCase()]
    );

    if (result.rows[0].exists) {
      return { success: true, message: "Welcome" };
    } else {
      return { success: false, message: "Invalid username" };
    }
  } catch (error) {
    console.log(error);
    return { success: false, message: "Database error" };
  } finally {
    client.release();
  }
}

module.exports = {
  userExist
}