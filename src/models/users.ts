import connection from './connection';

async function createUser(user:string, classe:string, level:number, pass:string) {
  const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
  VALUES (?, ?, ?, ?)`;
  
  await connection.execute(query, [user, classe, level, pass]);
}

export default createUser;
