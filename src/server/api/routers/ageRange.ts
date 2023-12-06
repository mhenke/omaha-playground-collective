import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const ageRangeRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.ageRange.create({
        data: {
          name: input.name,
          description: "hello world",
        },
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.ageRange.findMany({
      orderBy: { description: "asc" },
    });
  }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().min(1),
        description: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { id, name, description } = input;
      return ctx.db.ageRange.update({
        where: { id },
        data: { name, description },
      });
    }),

  remove: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { id } = input;
      return ctx.db.ageRange.delete({ where: { id } });
    }),
});
