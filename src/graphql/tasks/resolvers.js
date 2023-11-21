import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const resolvers = {
    Query: {
      tasks: async () => {
        return prisma.task.findMany();
      },
      userTasks: async (_,{ userId }) => {
        return prisma.task.findMany({
          where: {userId}
        });
      },
      task: async (_, { id, userId }) => {
        return prisma.task.findUnique({
          where: { id, AND: {userId} },
        });
      },
      users: async () => {
        return prisma.user.findMany()
      },
      user: async(_, { id }) => {
        return prisma.user.findUnique({
          where: { id }
        })
      }
    },
    Mutation: {
      createUser: async(_, { data }) => {
        return prisma.user.create({
          data
        })
      },
      updateUser: async(_, { userId, name }) => {
        return prisma.user.update({
          where: { id: userId },
          data: { name }
        })
      },
      createTask: async (_, { data }) => {
        return prisma.task.create({
          data
        });
      },
      updateTask: async (_, { userId, id, title, taskStatus }) => {
        return prisma.task.update({
          where: { id, AND: {userId} },
          data: { title, taskStatus },
        });
      },
      deleteTask: async (_, { id, userId }) => {
        return prisma.task.delete({
          where: { id, AND: {userId} }
        })
      }
    },
  };