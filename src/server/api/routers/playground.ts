import { z } from "zod";
import {
  adminProcedure,
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const playgroundRouter = createTRPCRouter({
  create: adminProcedure
    .input(
      z.object({
        name: z.string().min(1),
        post: z.number(),
        rating: z.number().nullable(),
        address: z.string().nullable(),
        city: z.string().nullable(),
        state: z.string().nullable(),
        zip: z.string().nullable(),
        latitude: z.number().nullable(),
        longitude: z.number().nullable(),
        restrooms: z.boolean().nullable(),
        picnicAreas: z.boolean().nullable(),
        benches: z.boolean().nullable(),
        shade: z.boolean().nullable(),
        accessibleEquip: z.boolean().nullable(),
        adaCompliance: z.boolean().nullable(),
        // Include other required fields from the Playground model
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.playground.create({
        data: {
          name: input.name,
          post: input.post,
          rating: input.rating,
          address: input.address,
          city: input.city,
          state: input.state,
          zip: input.zip,
          latitude: input.latitude,
          longitude: input.longitude,
          restrooms: input.restrooms,
          picnicAreas: input.picnicAreas,
          benches: input.benches,
          shade: input.shade,
          accessibleEquip: input.accessibleEquip,
          adaCompliance: input.adaCompliance,
          // Map other fields from the input
          authorId: ctx.session.user.id,
        },
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.playground.findMany({
      // You can include orderBy or any other filtering options here
      orderBy: { createdAt: "desc" },
      include: {
        surface: true,
        ageRange: true,
        post: true,
      },
    });
  }),

  update: adminProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string().min(1),
        post: z.number(),
        rating: z.number().nullable(),
        address: z.string().nullable(),
        city: z.string().nullable(),
        state: z.string().nullable(),
        zip: z.string().nullable(),
        latitude: z.number().nullable(),
        longitude: z.number().nullable(),
        restrooms: z.boolean().nullable(),
        picnicAreas: z.boolean().nullable(),
        benches: z.boolean().nullable(),
        shade: z.boolean().nullable(),
        accessibleEquip: z.boolean().nullable(),
        adaCompliance: z.boolean().nullable(),
        // Include other fields that can be updated
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.playground.update({
        where: { id: input.id },
        data: {
          name: input.name,
          post: input.post,
          rating: input.rating,
          address: input.address,
          city: input.city,
          state: input.state,
          zip: input.zip,
          latitude: input.latitude,
          longitude: input.longitude,
          restrooms: input.restrooms,
          picnicAreas: input.picnicAreas,
          benches: input.benches,
          shade: input.shade,
          accessibleEquip: input.accessibleEquip,
          adaCompliance: input.adaCompliance,
          // Map other fields from the input
          authorId: ctx.session.user.id,
        },
      });
    }),

  delete: adminProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.playground.delete({
        where: { id: input.id },
      });
    }),
});
