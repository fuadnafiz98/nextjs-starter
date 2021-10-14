import { booleanArg, extendType, intArg, nonNull, objectType, stringArg } from "nexus";
import { v4 as uuid } from "uuid";

export const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.email();
    t.model.password();
    t.model.username();
    t.model.refreshToken();
    t.model.userId();
  },
});

export const UserQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("users", {
      type: "User",
      async resolve(_, __, ctx) {
        let results = await ctx.database.user.findMany();
        return results;
      },
    });
  },
});
