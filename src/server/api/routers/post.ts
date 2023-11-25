import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.post.create({
        data: {
          title: input.name,
          author: { connect: { id: ctx.session.user.id } },
          content: "hello world",
        },
      });
    }),

  getAll: publicProcedure
    .input(
      z.object({
        // ageRangeId can be null or number
        ageRangeId: z.number().optional(),
        surfaceId: z.number().optional(),
      }),
    )
    .query(({ ctx, input }) => {
      return ctx.db.post.findMany({
        where: {
          playground: {
            ageRangeId: input.ageRangeId,
            surfaceId: input.surfaceId,
          },
        },
        orderBy: { createdAt: "desc" },
        include: {
          playground: { include: { ageRange: true, Surface: true } },
          photos: true,
        },
      });
    }),
});
