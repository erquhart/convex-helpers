import { crud } from "convex-helpers/server";
import { query, mutation } from "../convex/_generated/server";
import { Users } from "./validatorsExample";

// These are now accessible from the client.
export const { Create, Read, Update, Delete } = crud(Users, query, mutation);
