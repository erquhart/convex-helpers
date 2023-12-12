import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    tokenIdentifier: v.string(),
  }).index("by_token", ["tokenIdentifier"]),
  join_table_example: defineTable({
    userId: v.id("users"),
    presenceId: v.id("presence"),
  }).index("by_userId", ["userId"]),
  join_storage_example: defineTable({
    userId: v.id("users"),
    storageId: v.id("_storage"),
  })
    .index("by_storageId", ["storageId"])
    .index("by_userId", ["userId"]),
  presence: defineTable({
    user: v.string(),
    room: v.string(),
    updated: v.number(),
    data: v.any(),
  })
    // Index for fetching presence data
    .index("by_room_updated", ["room", "updated"])
    // Index for updating presence data
    .index("by_user_room", ["user", "room"]),
  counter_table: defineTable({ name: v.string(), counter: v.number() }),
  sessions: defineTable(v.any()), // Make as specific as you want
});
