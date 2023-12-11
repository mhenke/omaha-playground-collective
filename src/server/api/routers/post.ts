import { z } from "zod";
import {
  adminProcedure,
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  create: adminProcedure
    .input(z.object({ title: z.string().min(1), content: z.string() }))
    .mutation(async ({ ctx, input }) => {
      // Simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.post.create({
        data: {
          title: input.title,
          content: input.content,
          authorId: ctx.session.user.id,
        },
      });
    }),

  getAll: publicProcedure
    .input(
      z.object({
        ageRangeId: z.number().optional(),
        surfaceId: z.number().optional(),
        accessibleEquip: z.boolean().optional(),
        shade: z.boolean().optional(),
        restrooms: z.boolean().optional(),
      }),
    )
    .query(({ ctx, input }) => {
      return ctx.db.post.findMany({
        where: {
          playground: {
            ageRangeId: input.ageRangeId,
            surfaceId: input.surfaceId,
            accessibleEquip: input.accessibleEquip,
            shade: input.shade,
            restrooms: input.restrooms,
          },
        },
        orderBy: { createdAt: "desc" },
        include: {
          playground: { include: { ageRange: true, surface: true } },
          photos: true,
        },
      });
    }),

  getOne: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .query(({ ctx, input }) => {
      return ctx.db.post.findFirstOrThrow({
        where: {
          id: input.id,
        },
        include: {
          playground: { include: { ageRange: true, surface: true } },
          photos: true,
        },
      });
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        title: z.string().min(1),
        content: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.update({
        where: {
          id: input.id,
        },
        data: {
          title: input.title,
          content: input.content,
          authorId: ctx.session.user.id,
        },
      });
    }),

  delete: adminProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
