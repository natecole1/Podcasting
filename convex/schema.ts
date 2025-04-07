import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  podcasts: defineTable({
    user: v.id("users"),
    podcastTitle: v.string(),
    podcastDescription: v.string(),
    imageUrl: v.optional(v.string()),
    imageStorageId: v.optional(v.id("_storage")),
    author: v.union(v.string(), v.null()),
    authorId: v.string(),
    authorImageUrl: v.string(),
   
  })
    .searchIndex("search_author", { searchField: "author" })
    .searchIndex("search_title", { searchField: "podcastTitle" })
    .searchIndex("search_body", { searchField: "podcastDescription" }),

  users: defineTable({
    email: v.string(),
    imageUrl: v.string(),
    clerkId: v.string(),
    name: v.union(v.string(), v.null())
  }),

  episodes: defineTable({
    user: v.id("users"),
    podcastEpisodeTitle: v.string(),
    podcastEpisodeDescription: v.string(),
    audioUrl: v.string(),
    audioStorageId: v.optional(v.id("_storage")),
    author: v.union(v.string(), v.null()),
    authorId: v.string(),
    authorImageUrl: v.string(),
   
  })
    .searchIndex("search_author", { searchField: "author" })
    .searchIndex("search_podcast_title", { searchField: "podcastEpisodeTitle" })
    .searchIndex("search_podcast_body", { searchField: "podcastEpisodeDescription" }),
});
