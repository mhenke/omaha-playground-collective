import { z } from "zod";
import {
  adminProcedure,
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const surfaceRouter = createTRPCRouter({
  create: adminProcedure
    .input(z.object({ name: z.string().min(1), description: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.surface.create({
        data: {
          name: input.name,
          description: input.description,
          authorId: ctx.session.user.id,
        },
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.surface.findMany({
      orderBy: { description: "desc" },
    });
  }),

  update: adminProcedure
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
          description: input.description,
          authorId: ctx.session.user.id,
        },
      });
    }),

  delete: adminProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.surface.delete({
        where: { id: input.id },
      });
    }),
});
