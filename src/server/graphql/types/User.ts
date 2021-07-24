import { booleanArg, extendType, intArg, nonNull, objectType, stringArg } from "nexus";
import { v4 as uuid } from "uuid";

export const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.email();
    t.model.password();
    t.model.refreshToken();
    t.model.userId();
    t.model.username();
  },
});
