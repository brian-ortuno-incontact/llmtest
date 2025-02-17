import dotenv from "dotenv";
dotenv.config();

import server from "./api/server.js";

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
