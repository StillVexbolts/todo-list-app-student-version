const db = require("../db");

//This function is asynchronus and it retrieves tasks from a database, and it will return a promise
const getTasks = async () => {
  const res = await db.query(
    //correct this SQL query to select all tasks from the database
    'SELECT * FROM getTask ORDER BY created_at DESC';
  
  );
  return res.rows;
};

//asynchronous function that inserts a new task into a tasks table in a database and returns the newly inserted task.
const addTask = async (title, description) => {
  const res = await db.query(
    "INSERT INTO tasks (title, description, is_complete, created_at) VALUES ($1, $2, false, NOW()) RETURNING *",
    [title, description]
  );
  return res.rows[0];
};

module.exports = { getTasks, addTask };
