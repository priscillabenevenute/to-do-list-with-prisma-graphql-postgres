
import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient();

export const resolvers = {
    Query: {
      tasks: async () => {
        return prisma.task.findMany();
      },
      task: async (_, { id }) => {
        return prisma.task.findUnique({
          where: { id },
        });
      },
    },
    Mutation: {
      createTask: async (_, { title }) => {
        return prisma.task.create({
          data: { title, taskStatus: false },
        });
      },
      updateTask: async (_, { id, title, taskStatus }) => {
        return prisma.task.update({
          where: { id },
          data: { title, taskStatus},
        });
      },
      deleteTask: async (_, { id }) => {
        return prisma.task.delete({
          where: { id },
        });
      },
    },
}

