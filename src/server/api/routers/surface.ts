import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const surfaceRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.surface.create({
        data: {
          name: input.name,
          description: "hello world",
        },
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.surface.findMany({
      orderBy: { description: "desc" },
    });
  }),
});
