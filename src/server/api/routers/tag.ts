import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const tagRouter = createTRPCRouter({
  delete: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.tag.delete({
        where: {
          id: input.id,
        },
      });
    }),

  create: protectedProcedure
    .input(z.object({ name: z.string(), content: z.string(), id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.tag.create({
        data: {
          name: input.name,
          id: input.id,
        },
      });
    }),

  getAll: protectedProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.db.tag.findMany({
        where: {
          id: input.id,
        },
      });
    }),
});
