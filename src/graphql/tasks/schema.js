import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Task {
    id: Int!
    userId: Int!
    title: String
    taskStatus: Boolean
  }

  type User {
    id: Int!
    name: String
    email: String
    password: String
    tasks: [Task]
  }

  input UserInput {
    name: String
    email: String
    password: String
  }

  input TaskInput {
    userId: Int!
    title: String
  }

  type Query {
    tasks: [Task!]!
    task(id: Int!, userId: Int!): Task
    users: [User]
    user(id: Int!): User!
    userTasks(userId: Int!):[Task]
  }

  type Mutation {
    createUser(data: UserInput!): User
    createTask(data: TaskInput!): Task
    updateUser(userId: Int!, name: String): User
    updateTask(userId: Int!, id: Int!, title: String!, taskStatus: Boolean!): Task
    deleteTask(userId: Int!, id: Int!): Task
  }`