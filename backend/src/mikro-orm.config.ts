import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

// console.log(__dirname);
console.log(__dirname);

export default {
  migrations: {
    path: path.join(__dirname, "./src"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: "dashboard",
  user: "postgres",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
