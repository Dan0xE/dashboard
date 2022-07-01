import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import mikroOrmConfig from "./mikro-orm.config";
import { Post } from "./entities/Post";

const main = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);

  const post = orm.em.create(Post, {
    title: "Hello World",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await orm.em.persistAndFlush(post);
};
console.log("test");

main().catch((err) => console.error(err.stack));
