import { gql } from "apollo-server-express"

export const typeDefs = gql`

  type Task {
    id: Int!
    title: String!
    taskStatus: Boolean!
  }

  type Query {
    tasks: [Task!]!
    task(id: Int!): Task!
  }

  type Mutation {
    createTask(title: String!): Task!
    updateTask(id: Int!, title: String!, taskStatus: Boolean!): Task!
    deleteTask(id: Int!): Task!
  }
`

