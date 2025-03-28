import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";
import { WebhookEvent } from "@clerk/nextjs/server";
import { Webhook } from "svix";
import { headers } from "next/headers";

const handleClerkWebhook = httpAction(async (ctx, request) => {
  const event = await validateRequest(request);
  if (!event) {
    return new Response("Error occurred", {
      status: 400,
    });
  }
  switch (event.type) {
    case "user.created":
      await ctx.runMutation(internal.users.createUser, {
        clerkId: event.data.id,
        email: event.data.email_addresses[0].email_address,
        imageUrl: event.data.image_url,
        name: event.data.username!,
      });
      break;
    case "user.updated":
      await ctx.runMutation(internal.users.updateUser, {
        clerkId: event.data.id,
        imageUrl: event.data.image_url,
        email: event.data.email_addresses[0].email_address,
      });
      break;
    case "user.deleted":
      await ctx.runMutation(internal.users.deleteUser, {
        clerkId: event.data.id as string,
      });
      break;
  }
  return new Response(null, {
    status: 200,
  });
});

const http = httpRouter();

http.route({
  path: "/clerk-users-webhook",
  method: "POST",
  handler: handleClerkWebhook,
});

 async function validateRequest(
  req: Request
) {
  const webhookSecret = process.env.SIGNING_SECRET;
  if (!webhookSecret) {
    throw new Error("SIGNING_SECRET is not defined");
  }



 const payloadString = await req.text();
 const headerPayload = req.headers;
 const svixHeaders = {
   "svix-id": headerPayload.get("svix-id")!,
   "svix-timestamp": headerPayload.get("svix-timestamp")!,
   "svix-signature": headerPayload.get("svix-signature")!,
 };
 const wh = new Webhook(webhookSecret);
 const event = wh.verify(payloadString, svixHeaders);
 return event as unknown as WebhookEvent;
  

  // const headerPayload = headers();
  // const svix_id = headerPayload.get('svix-id');
  // const svix_timestamp = headerPayload.get('svix-timestamp');
  // const svix_signature = headerPayload.get('svix-signature')
  
  // if (!svix_id || !svix_timestamp || !svix_signature) {
  //   return new Response("Error: Missing Svix headers", {
  //     status: 400,
  //   });
  // }
  
  // const payload = await req.json();
  // const body = JSON.stringify(payload);
  
  // let evt: WebhookEvent;

  // try {
  //   evt = wh.verify(body, {
  //     'svix-id': svix_id,
  //     'svix-timestamp': svix_timestamp,
  //     'svix-signature': svix_signature,
  //   }) as WebhookEvent;
  // } catch (err) {
  //   console.error("Error: Could not verify webhook:", err);
  //   return new Response('Error: Verification error', {
  //     status: 400,
  //   });
  // }

  // return evt as unknown as WebhookEvent;
}

export default http;
