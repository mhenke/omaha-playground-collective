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
    .input(z.object({ title: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // Simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.post.create({
        data: {
          title: input.title,
          author: { connect: { id: ctx.session.user.id } },
          content: "hello world",
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
        orderBy: { createdAt: "desc" },
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
        content: z.string(), // Assuming content is a string
        authorId: z.string(), // Assuming authorId is a string
        // Add other fields as needed
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
          authorId: input.authorId,
        },
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
