import { MikroORM } from "@mikro-orm/core";
import {__prod__,__user__,__password__} from "./const";
import microConfig from "./mikro-orm.config";
import express from "express";
import {ApolloServer} from "apollo-server-express";
import { buildSchema } from "type-graphql";
import HelloResolver from "./resolvers/hello";

const main = async() => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();
    // const users = await orm.em.find(User, {});
    // console.log(users);
    const app = express();

    const apolloServer = new ApolloServer({
        schema : await buildSchema({
            resolvers : [HelloResolver],
            validate : false
        })
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({app});

    app.listen(4000, ()=>{
        console.log("Server started on port 4000")
    });
}

main().catch(err => {
    console.log(err);
});
