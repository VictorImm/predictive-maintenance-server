const { Pool } = require("@neondatabase/serverless");
const {PGHOST, PGDATABASE, PGUSER, PGPASSWORD} = process.env;
const pool = new Pool({
  host: PGHOST,
  database: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD,
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