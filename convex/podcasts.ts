import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getUrl = mutation({
  args: {
    storageId: v.id("_storage"),
  },
  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(args.storageId);
  },
});


export const createPodcast = mutation({
  args: {
    podcastTitle: v.string(),
    podcastDescription: v.string(),
    imageUrl: v.string(),
    imageStorageId: v.id('_storage'),

  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new ConvexError("User not authenticated");
    }

    const user = await ctx.db.query("users").filter((q) => q.eq(q.field("email"), identity.email)).collect();
    
    const podcast = await ctx.db.insert("podcasts", {
      ...args,
      user: user[0]._id,
      podcastTitle: args.podcastTitle,
      podcastDescription: args.podcastDescription,
      imageUrl: args.imageUrl,
      imageStorageId: args.imageStorageId,
      author: user[0].name,
      authorId: user[0].clerkId,
      authorImageUrl: user[0].imageUrl,
    })
    
    return podcast;

  }
})

export const createEpisode = mutation({
  args: {
    podcastEpisodeTitle: v.string(),
    podcastEpisodeDescription: v.string(),
    audioUrl: v.string(),
    audioStorageId: v.id('_storage')
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new ConvexError("User not authenticated");
    }

    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), identity.email))
      .collect();

    const podcastEpisode = await ctx.db.insert("episodes", {
      ...args,
      user: user[0]._id,
      podcastEpisodeTitle: args.podcastEpisodeTitle,
      podcastEpisodeDescription: args.podcastEpisodeDescription,
      audioUrl: args.audioUrl,
      audioStorageId: args.audioStorageId,
      author: user[0].name,
      authorId: user[0].clerkId,
      authorImageUrl: user[0].imageUrl,
    });

    return podcastEpisode;
  }
})

export const getPodcasts = query({
  handler: async (ctx) => {
    const podcasts = await ctx.db.query("podcasts").collect();

    return podcasts;
  }
})

export const getEpisodes = query({
  handler: async (ctx) => {
    const episodes = await ctx.db.query("episodes").collect();

    return episodes;
  }
})