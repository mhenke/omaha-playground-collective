import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const surfaceRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ name: z.string().min(1), description: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.surface.create({
        data: {
          name: input.name,
          description: input.description,
        },
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.surface.findMany({
      orderBy: { description: "desc" },
    });
  }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string().min(1),
        description: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.surface.update({
        where: { id: input.id },
        data: {
          name: input.name,
        },
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.surface.delete({
        where: { id: input.id },
      });
    }),
});
