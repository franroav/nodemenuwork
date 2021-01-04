/**
 * @author Francisco Roa <franroav@webkonce.cl>
 */
const config = {
  service: "https://rickandmortyapi.com/api/",
  db: "http://localhost:3000/",
};

const env = () => {
  const db = config.db;
  const service = config.service;

  return { db, service };
};

export default env;
