const dotenv = require("dotenv");
let env = process.env.NODE_ENV;
env = env == null ? "" : `-${env}`;
dotenv.config({ path: `./.env${env}` });