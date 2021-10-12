import { __user__, __password__, __prod__ } from "./const";
import { User } from "./entities/User";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    // default values:
    path: path.resolve(__dirname,"migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },
  entities: [User],
  dbName: "drawdexdb",
  user: __user__,
  password: __password__,
  type: "postgresql",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
