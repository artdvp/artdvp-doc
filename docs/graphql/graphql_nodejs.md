# GraphQL + Node.js

## Tutorial - Introduction

> Note: The final project for this tutorial can be found on [GitHub](https://github.com/howtographql/graphql-js). You can always use it as a reference whenever you get lost throughout the course of the following chapters. Also note that each code block is annotated with a filename. These annotations directly link to the corresponding file on GitHub so you can clearly see where to put the code and what the end result will look like.

># Overview

GraphQL is the rising star of backend technologies. It replaces REST as an API design paradigm and is becoming the new standard for exposing the data and functionality of a server.

In this tutorial, you’ll learn how to build an idiomatic GraphQL server entirely from scratch. You are going to use the following technologies:

* [graphql-yoga](https://github.com/graphcool/graphql-yoga): Fully-featured GraphQL server with focus on easy setup, performance & great developer experience. It is built on top of [Express](https://expressjs.com/), [apollo-server](https://github.com/apollographql/apollo-server), [graphql-js](https://github.com/graphql/graphql-js) and more.
  Prisma: GraphQL database proxy that turns your database into a GraphQL API. This API provides powerful, realtime CRUD operations for your data model.
* [graphql-config](https://github.com/graphcool/graphql-config) & [GraphQL CLI](https://github.com/graphql-cli/graphql-cli): Tooling to improve various GraphQL-related worfklows.
* [GraphQL bindings](https://blog.graph.cool/reusing-composing-graphql-apis-with-graphql-bindings-80a4aa37cff5): A convenient way of working with a GraphQL API. The binding generates dedicated JavaScript functions for each API operation.
* [GraphQL Playground](https://github.com/graphcool/graphql-playground): “GraphQL IDE” that allows to interactively explore the functionality of a GraphQL API by sending queries and mutations to it. It’s somewhat similar to [Postman](https://www.getpostman.com/) which offers comparable functionality for REST APIs. Among other things, a GraphQL Playground…

  * … auto-generates a comprehensive documentation for all available API operations.
  * … provides an editor where you can write queries, mutations & subscriptions, with auto-completion(!) and syntax highlighting.
  * … lets you easily share your API operations.

># What to expect

The goal of this tutorial is to build an API for a [Hacker News](https://news.ycombinator.com/) clone. Here is a quick rundown of what to expect in this tutorial.

You’ll start by learning the basics of how a GraphQL server works, simply by defining a [GraphQL schema](https://blog.graph.cool/graphql-server-basics-the-schema-ac5e2950214e) for the server and writing corresponding resolver functions. In the beginning, these resolvers will only work with data that’s stored in-memory - so nothing will be persisted beyond the runtime of the server.

Because nobody wants a server that’s not able to store and persist data, you’re going to add a database layer to it. The database layer is powered by [Prisma](https://www.prisma.io/) and will be connected to your GraphQL server via [Prisma bindings](https://github.com/graphcool/prisma-binding). You can think of these bindings as a “GraphQL ORM” that helps you properly resolve incoming queries.

Once you have the database connected, you are going to add more advanced features to the API.

You’ll start by implementing signup/login functionality that enables users to authenticate against the API. This will also allow you to check the permissions of your users for certain API operations.

The next part of the tutorial is about adding realtime functionality to your API using GraphQL subscriptions.

Lastly, you’ll allow the consumers of the API to constrain the list of items they retrieve from the API by adding filtering and pagination capabalities to it.

> Q&A

Q : What is a GraphQL Playground? <br>
A : A GraphQL IDE to work with a GraphQL API

---

## Getting Started

In this section, you will setup the project for your GraphQL server and implement your first GraphQL query. In the end, we’ll talk theory for a bit and learn about the [GraphQL schema](https://blog.graph.cool/graphql-server-basics-the-schema-ac5e2950214e).

># Creating the project

This tutorial teaches you how to build a GraphQL server from scratch, so the first thing you need to do is create the directory that’ll hold the files for your GraphQL server!

> Open your terminal, navigate to a location of your choice and run the following commands:

```bash
$ mkdir hackernews-node
$ cd hackernews-node
$ yarn init -y
```

> Note This tutorial uses [Yarn](https://yarnpkg.com/en/) to manage your project. If you prefer using npm, you can simply run the equivalent commands using [npm](https://www.npmjs.com/).

In your terminal, first create the src directory and then the empty `index.js` file:

> .../hackernews-node/

```
mkdir src
touch src/index.js
```

To start the app, you can now execute `node src/index.js` inside the `hackernews-node` directory. At the moment, this won’t do anything because `index.js` is still empty

Let’s go and start building the GraphQL server! The first thing you need to is - surprise - add a dependency to the project.

> Run the following command in your terminal:

> .../hackernews-node/

```
$ yarn add graphql-yoga
```

[graphql-yoga](https://github.com/graphcool/graphql-yoga) is a fully-featured GraphQL server. It is based on [Express.js](https://expressjs.com/) and a few other libraries to help you build production-ready GraphQL servers.

Here’s a list of its features:

* GraphQL spec-compliant
* Supports file upload
* Realtime functionality with GraphQL subscriptions
* Works with TypeScript typings
* Out-of-the-box support for GraphQL Playground
* Extensible via Express middlewares
* Resolves custom directives in your GraphQL schema
* Query performance tracing
* Accepts both `application/json` and `application/graphql` content-types
* Runs everywhere: Can be deployed via `now`,`up`, AWS Lambda, Heroku etc.

> Open `src/index.js` and type the following:

> ../hackernews-node/src/index.js

```js
const { GraphQLServer } = require("graphql-yoga");

// 1
const typeDefs = `
type Query {
  info: String!
}
`;

// 2
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`
  }
};

// 3
const server = new GraphQLServer({
  typeDefs,
  resolvers
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
```

> Note: This code block is annotated with a file name. It indicates into which file you need to put the code that’s shown. The annotation also links to the corresponding file on GitHub to help you figure out where in the file you need to put it in case you are not sure about that. Also, while the code block has a button for copying the code, we encourage you to type everything out yourself since that drastically increases your learning experience.

All right, let’s understand what’s going on here by walking through the numbered comments:

1.  The `typeDefs` constant defines your GraphQL schema (more about this in a bit). Here, it defines a simple `Query` type with one field called `info`. This field has the type `String!`. The exclamation mark in the type definition means that this field can never be `null`..

2.  The `resolvers` object is the actual implementation of the GraphQL schema. Notice how its structure is identical to the structure of the type definition inside `typeDefs`: `Query.info`.

3.  Finally, the schema and resolvers are bundled and passed to the `GraphQLServer` which is imported from `graphql-yoga.` This tells the server what API operations are accepted and how they should be resolved.

Go ahead and test your GraphQL server!

># Testing the GraphQL server

> In the root directory of your project, run the following command:

> .../hackernews-node/

```
node src/index.js
```

As indicated by the terminal output, the server is now running on `http://localhost:4000`. To test the API of your server, open a browser and navigate to that URL.

What you’ll then see is a [GraphQL Playground](https://github.com/graphcool/graphql-playground), a powerful “GraphQL IDE” that lets you explore the capabilities of your API in an interactive manner.

![img](https://imgur.com/9RC6x9S.png)

By clicking the green **SCHEMA**-button on the right, you can open the API documentation. This documentation is auto-generated based on your schema definition and displays all API operations and data types of your schema.

![img](https://imgur.com/81Ho6YM.png)

Let’s go and send your very first GraphQL query. Type the following into the editor pane on the left side:

```
query {
  info
}
```

Now send the query to the server by clicking the `Play`-button in the center (or use the keyboard shortcut `CMD+ENTER`).

![img](https://imgur.com/EnW3HE5.png)

Congratulations, you just implemented and successfully tested your first GraphQL query 🎉

Now, remember when we talked about the definition of the `info: String!` field and said the exclamation mark means this field could never be `null`. Well, since you’re implementing the resolver, you are in control of what the value for that field is, right? So, what happens if you return `null` instead of the actual informative string in the resolver implementation? Feel free to try that out!

In `index.js`, update the the definition of `resolvers` as follows:

> .../hackernews-node/src/index.js

```
const resolvers = {
  Query: {
    info: () => null,
  }
}
```

To test the results of this, you need to restart the server: First, stop it using **CTRL+C** on your keyboard, then restart it by running `node src/index.js` again.

Now, send the query from before again. This time, it returns an error: `Error: Cannot return null for non-nullable field Query.info.`

![img](https://imgur.com/VLVE5Vv.png)

What happens here is that the underlying [graphql-js](https://github.com/graphql/graphql-js/) reference implementation ensures that the return types of your resolvers adhere to the type definitions from your GraphQL schema. Put differently, it protects you from making stupid mistakes!

This is in fact one of the core benefits of GraphQL in general: It enforces that the API actually behaves in the way that is promised by the schema definition! This way, everyone who has access to the GraphQL schema can always be 100% sure about the API operations and data structures that are returned by the API.

># A word on the GraphQL schema

At the core of every GraphQL API, there is a GraphQL schema. So, let’s quickly talk about it.

> Note: In this tutorial, we’ll only scratch the surface of this topic. If you want to go a bit more in-depth and learn more about the GraphQL schema as well as its role in a GraphQL API, be sure to check out this excellent article.

GraphQL schemas are usually written in the GraphQL [Schema Definition Language](https://blog.graph.cool/graphql-sdl-schema-definition-language-6755bcb9ce51) (SDL). The SDL has a type system that allows to define data structures (just like other strongly type programming languages such as Java, TypeScript, Swift, Go, …).

But how does that help in defining the API for a GraphQL server? Every GraphQL schema has three special root types, these are called `Query`, `Mutation` and `Subscription`. The root types correspond to the three operation types offered by GraphQL: queries, mutations and subscriptions. The fields on these root types are called root field and define the available API operations.

As an example, consider the simple GraphQL schema we used above:

```
 type Query {
  info: String!
}
```

This schema only has a single root field, called `info`. When sending queries, mutations or subscriptions to a GraphQL API, these always need to start with a root field! In this case, we only have one root field, so there’s really only one possible query that’s accepted by the API.

Let’s now consider a slightly more advanced example:

```
type Query {
    users: [User!]!
    user(id: ID!): User
}

type Mutation {
    createUser(name: String!): User!
}

type User {
    id: ID!
    name: String!
}
```

In this case, we have three root fields: `users` and `user` on `Query` as well as `createUser` on `Mutation`. The additional definition of the `User` type is required because otherwise the schema definition would be incomplete.

What are the API operations that can be derived from this schema definition? Well, we know that each API operation always needs to start with a root field. However, we haven’t learned yet what it looks like when the type of a root field is itself another [object type](http://graphql.org/learn/schema/#object-types-and-fields). This is the case here, where the types of the root fields are `[User!]!`, `User` and `User!`. In the `info` example from before, the type of the root field was a String, which is a scalar type.

When the type of a root field is an object type, you can further expand the query (or mutation/subscription) with fields of that object type. The expanded part is called selection set.

Here are the operations that are accepted by a GraphQL API that implements the above schema:

```
# Query for all users

query {
    users {
        id
        name
    }
}

# Query a single user by their id

query {
    user(id: "user-1") {
        id
        name
    }
}

# Create a new user

mutation {
    createUser(name: "Bob") {
        id
        name
    }
}
```

There are a few things to note:

* In these examples, we always query `id` and `name` of the returned `User` objects. We could potentially omit either of them. Note however when querying an object type, it is required that you query at least one of its field in a selection set.
* For the fields in the selection set, it doesn’t matter whether the type of the root field is required or a list. In the examples schema above, the three root fields all have different [type modifiers](http://graphql.org/learn/schema/#lists-and-non-null) (i.e. different combinations of being a list and/or required) for the `User` type:

  * For the `users` field, the return type `[User!]!` means it returns a list (which itself can not be `null`) of `User` elements. The list can also not contain elements that are null. So, you’re always guaranteed to either receive an empty list or a list that only contains non-null User objects.
  * For the `user(id: ID!)` field, the return type `User` means the returned value could be `null` or a `User` object.
  * For the `createUser(name: String!)` field, the return type `User!` means this operation always returns a `User` object.

> Q&A

Q : What role do the root fields play for a GraphQL API?<br>
A : Root fields define the available API operations

---

## A Simple Query

In this section, you are going to implement the first API operation that provides the functionality for a Hacker News clone: Querying a feed of links that were posted by other users.

># Extending the schema definition

Let’s start by implementing a `feed` query which allows to retrieve a list of `Link` elements. In general, when adding a new feature to the API, the process will look pretty similar every time:

1.  Extend the GraphQL schema definition with a new root field (and new data types, if needed)
2.  Implement corresponding resolver functions for the added fields
    This process is also referred to as schema-driven or schema-first development.

So, let’s go ahead and tackle the first step, extending the GraphQL schema definition.

> In `index.js`, update the `typeDefs` constant to look as follows:

> ../hackernews-node/src/index.js

```js
const typeDefs = `
type Query {
  info: String!
  feed: [Link!]!
}

type Link {
  id: ID!
  description: String!
  url: String!
}
`;
```

Pretty straightforward. You’re defining a new `Link` type that represents the links that can be posted to Hacker News. Each `Link` has an `id`, a `description` and `url`. You’re then adding another root field to the Query type that allows to retrieve a list of `Link` elements. This list is guaranteed to never be null (if anything, it will be empty) and never contain any elements that are `null` - that’s what the two exclamation marks are for.

># Implement resolver functions

The next step is to implement the resolver function for the `feed` query. In fact, one thing we haven’t mentioned yet is that not only root fields, but virtually all fields on the types in a GraphQL schema have resolver functions. So, you’ll add resolvers for the `id`, `description` and `url` fields of the `Link` type as well.

> In `index.js`, add a new list with dummy data as well and update the `resolvers` to look as follows

> ../hackernews-node/src/index.js

```js
// 1
let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL"
  }
];

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    // 2
    feed: () => links
  },
  // 3
  Link: {
    id: root => root.id,
    description: root => root.description,
    url: root => root.url
  }
};
```

Let’s walk through the numbered comments again:

1.  The `links` variable is used to store the links at runtime. For now, everything is stored only in-memory rather than being persisted in a database.
2.  You’re adding a new resolver for the `feed` root field. Notice that a resolver always has to be named after the corresponding field from the schema definition.
3.  Finally, you’re adding three more resolvers for the fields on the Link type from the schema definition. We’ll discuss in a bit what the `root` argument is that’s passed into the resolver here.

Go ahead and test the implementation by restarting the server (first use **CTRL+C** to stop the server if it is still running, then execute `node src/index.js` again) and navigate to `http://localhost:4000` in your browser. If you expand the documentation of the Playground, you’ll notice that another query called `feed` is now available:

![img](https://imgur.com/0EQ5P9p.png)

Try it out by sending the following query:

```
 query {
  feed {
    id
    url
    description
  }
}
```

Awesome, the server responds with the data you defined in `links`:

```json
{
  "data": {
    "feed": [
      {
        "id": "link-0",
        "url": "www.howtographql.com",
        "description": "Fullstack tutorial for GraphQL"
      }
    ]
  }
}
```

Feel free to play around with the query by removing any fields from the selection set and observe the responses sent by the server.

># The query resolution process

Let’s now quickly talk about how a GraphQL server actually resolves incoming queries. As you already saw, a GraphQL query consists of a number of fields that have their source in the type definitions of the GraphQL schema.

Consider again the query from above:

```
 query {
  feed {
    id
    url
    description
  }
}
```

All four fields specified in the query, `feed`, `id`, `url` and `description` can also be found inside the schema definition. Now, you also learned that every field inside the schema definition is backed by one resolver function whose responsibility it is to return the data for precisely that field.

Can you imagine what the query resolution process now looks like? Effectively, everything the GraphQL server has to do is invoke all resolver functions for the fields that are contained in the query and then package up the response according to the query’s shape. Query resolution thus merely becomes a process of orchestrating the invokation of resolver functions!

One thing that’s still a bit weird in the implementation right now are the resolvers for the Link type that all seem to follow a very simple and trivial pattern:

```
 Link: {
  id: (root) => root.id,
  description: (root) => root.description,
  url: (root) => root.url,
}
```

First, it’s important to note that every GraphQL resolver function actually receives four input arguments. As the remaining three are not needed in our scenario right now, we’re simply omitting them. Don’t worry, you’ll get to know them soon.

The first argument, commonly called `root` (or `parent`) is the result of the previous resolver execution level. But what does that mean? 🤔

Well, as you already saw, GraphQL queries can be nested. Each level of nesting (i.e. nested curly braces) corresponds to one resolver execution level. The above query therefore has two of these execution levels.

On the first level, it invokes the `feed` resolver and returns the entire data stored in `links`. For the second execution level, the GraphQL server is smart enough to invoke the resolvers of the `Link` type (because thanks to the schema, it knows that `feed` returns a list of `Link` elements) for each element inside the list that was returned on the previous resolver level. Therefore, in every of the three `Link` resolvers, the incoming `root` object is the element inside the `links` list.

> Note: To learn more about this, check out [this](https://blog.graph.cool/graphql-server-basics-the-schema-ac5e2950214e#9d03) article.

In any case, because the implementation of the `Link` resolvers is trivial, you can actually omit them and the server will work in the same way as it did before

> Q&A

Q : How are GraphQL queries resolved? <br>
A : By invoking the resolver functions for the fields contained in the query

---

## A Simple Mutation

In this section, you’ll learn how to add a mutation to the GraphQL API. This mutation will allow to post new links to the server.

># Extending the schema definition

Like before, you need to start by adding the new operation to your GraphQL schema definition.

> In `index.js`, extend the `typeDefs` string as follows:

> ../hackernews-node/src/index.js

```js
const typeDefs = `
type Query {
  info: String!
  feed: [Link!]!
}

type Mutation {
  post(url: String!, description: String!): Link!
}

type Link {
  id: ID!
  description: String!
  url: String!
}
`;
```

At this point, the schema definition already has grown to be quite large. Let’s refactor the app a bit and pull the schema out into its own file!

> Create a new file inside the `src` directory and call it `schema.graphql`:

> ../hackernews-node/src

```bash
$ touch src/schema.graphql
```

> Next, copy the entire schema definition into the new file:

> ../hackernews-node/src/schema.graphql

```
type Query {
  info: String!
  feed: [Link!]!
}

type Mutation {
  post(url: String!, description: String!): Link!
}

type Link {
  id: ID!
  description: String!
  url: String!
}
```

With that new file in place, you can cleanup `index.js` a bit.

> First, entirely delete the definition of the `typeDefs` constant - it’s not needed any more because the schema definition now lives in its own file. Then, update the way how the `GraphQLServer` is instantiated at the bottom of the file:

> ../hackernews-node/src/index.js

```js
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});
```

One convenient thing about the constructor of the `GraphQLServer` is that `typeDefs` can be provided either directly as a string (as you previously did) or by referencing a file that contains your schema definition (this is what you’re doing now).

># Implementing the resolver function

The next step in the process of adding a new feature to the API is to implement the resolver function for the new field.

> Next, update the `resolvers` functions to look as follows:

> ../hackernews-node/src/index.js

```js
let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL"
  }
];
// 1
let idCount = links.length;
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links
  },
  Mutation: {
    // 2
    post: (root, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url
      };
      links.push(link);
      return link;
    }
  }
};
```

First off, note that you’re entirely removing the `Link` resolvers (as explained before). They are not needed because the GraphQL server infers what they look like.

Also, here’s what’s going on with the numbered comments:

1.  You’re adding a new integer variable that simply serves as a way to generate unique IDs for newly creaded `Link` elements.
2.  The implementation of the `post` resolver first creates a new `link` object, then adds it to the existing links list and finally returns the new `link`.

Now it’s a good time to discuss the second argument that’s passed into all resolver functions: `args`. Any guesses what it’s used for?

Correct! It carries the arguments for the operation - in this case the `url` and `description` of the `Link` to be created. We didn’t need it for the `feed` and `info` resolvers before, because the corresponding root fields don’t specify any arguments in the schema definition.

># Testing the mutation

Go ahead an restart your server so you can test the new API operations. Here is a sample mutation you can send through the Playground:

```
 mutation {
  post(
    url: "www.prisma.io"
    description: "Prisma turns your database into a GraphQL API"
  ) {
    id
  }
}
```

The server response will look as follows:

```json
{
  "data": {
    "post": {
      "id": "link-1"
    }
  }
}
```

With every mutation you send, the `idCount` will increase and the following IDs for created links will be `link-2`, `link-3`, and so forth…

To verify that your mutation worked, you can send the `feed` query from before again - it now returns the additional post that you created with the mutation:

![img](https://imgur.com/l5wOvFI.png)

However, once you kill and restart the server, you’ll notice that the previously added links are now gone and you need to add them again. This is because the links are only stored in-memory, in the `links` array. In the next sections, you will learn how to add a database layer to the GraphQL server in order to persists the data beyond the runtime of the server.

># Exercise

If you want to practice implementing GraphQL resolvers a bit more, here’s a fun little challenge for you. Based on your current implementation, extend the GraphQL API with full CRUD funcionality for the `Link` type. In particular, implement the queries and mutations that have the following definitions:

```
 type Query {
  # Fetch a single link by its `id`
  link(id: ID!): Link
}

type Mutation {
  # Update a link
  updateLink(id: ID!, url: String, description: String): Link

  # Delete a link
  deleteLink(id: ID!): Link
}
```

> Q&A

Q : What is the second argument that's passed into GraphQL resolvers used for?<br>
A : It carries the arguments for the incoming GraphQL operation

---

## Adding a Database

In this section, you’re going to setup a Prisma service along with a connected database to be used by the server.

># Why Prisma

By now, you already understand the basic mechanics of how GraphQL servers work under the hood - surprisingly simple right? That’s part of the beauty of GraphQL, that it actually only follows a few very simple rules. The strongly typed schema and the GraphQL engine that’s resolving the queries inside the server are taking away major pain points commonly dealt with in API development.

So, what’s then the difficulty in building GraphQL servers?

Well, in real-world applications you’re likely to encounter many scenarios where implementing the resolvers can become extremely complex. Especially because GraphQL queries can be nested multiple levels deep, the implementation often becomes tricky and can easily lead to performance problems.

Most of the time, you also need to take care of many additional workflows such as authentication, authorization (permissions), pagination, filtering, realtime, integrating with 3rd-party services or legacy systems…

Typically, when implementing resolvers and connecting to the database, you have two options - both of which are not very compelling:

* Access the database directly (by writing SQL or using another NoSQL database API)
* Use an [ORM](https://en.wikipedia.org/wiki/Object-relational_mapping) that provides an abstraction for your database and lets you access it directly from your programming language

The first option is problematic since dealing with SQL in resolvers is complex and quickly gets out-of-hand. Another issue is that SQL queries are commonly submitted to the database as plain strings. Strings don’t adhere to any structure, they’re just raw sequences of characters. Therefore, your tooling won’t be able to help you finding any issues with them or provide additional perks like autocompletion in editors. Writing SQL queries is thus tedious and error-prone.

The second option is to use an ORM which might seem like a good solution at first. However, this approach usually falls short as well. ORMs typically have the problem that they’re implementing rather simple solutions for database access, which when using GraphQL won’t work due to the complexities of queries and the various edge cases that can arise.

Prisma solves this problem by providing you with a GraphQL query engine which is taking care of resolving queries for you. When using Prisma, you’re implementing your resolvers such that they’re simply delegating incoming queries to the underlying Prisma engine. Thanks to [Prisma bindings](https://github.com/graphcool/prisma-binding), query delegation is a simple process where most resolvers can be implemented as simple one-liners.

> Note: Prisma bindings are based on the idea of schema stitching and schema delegation. We’re not going to cover these techniques in detail in this tutorial. If you want to learn more about them, you can check out the following two articles:

> * [GraphQL Schema Stitching explained: Schema Delegation](https://blog.graph.cool/graphql-schema-stitching-explained-schema-delegation-4c6caf468405)
> * [Reusing & Composing GraphQL APIs with GraphQL Bindings](https://blog.graph.cool/reusing-composing-graphql-apis-with-graphql-bindings-80a4aa37cff5)

># Architecture

Here’s an overview of the architecture that’s used when building GraphQL servers with Prisma:

![img](https://imgur.com/ik5P7RO.png)

What’s important to understand about this architecture that you’re dealing with two(!) GraphQL API layers.

>## The application layer

The first GraphQL API is the one that you already started building in the previous sections of this tutorial. This is the GraphQL API for the **application layer**. It defines the API your client applications are going to talk to. Here is where you implement business logic, common workflows like authentication and authorization or integrate with 3rd-party services (such as Stripe if you want to need to implement a payment process). The API of the application layer is defined by the GraphQL schema in `src/schema.graphql` - we’ll therefore from now on refer to this schema as the **application schema**.

>## The database layer

The second GraphQL API is the one that’s provided by Prisma and provides the **database layer**. This one basically is a GraphQL-based interface to your database that saves you from the intricacies of writing SQL yourself. So, what does that GraphQL API look like?

The Prisma API is mirroring a database API, so it allows you to perform CRUD operations for certain data types. What data types? Well, that’s up to you - you are defining those data types using the familiar SDL. You’ll learn in a bit how that works.

Typically, these data types represent the entities of your application domain. For example, if you’re building car dealership software, you’re like going to have data types such as `Car`, `CarDealer`, `Customer` and so on… The entire collection of these data types is referred to as your data model.

Once your data model is defined in SDL, Prisma translates it into an according database schema and sets up the underlying database accordingly. When you’re then sending queries and mutations to the Prisma GraphQL API, it translates those into database operations and performs these operations for you. Neat, right?

Previously you learned that all GraphQL APIs are backed by a GraphQL schema. So, who is writing the schema for the Prisma GraphQL API? The answer is that it is automatically generated based on the data model you provide. By the way, this schema is called the **Prisma database schema**.

As an example, consider this simple data model with a single `User` type:

```
 type User {
  id: ID! @unique
  name: String!
}
```

> **Note**: Don’t worry about the `@unique` directive yet, we’ll talk about it soon.

Based on this data model, Prisma would generate a GraphQL schema looking like this:

```
 type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  user(where: UserWhereUniqueInput!): User
}

type Mutation {
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deleteUser(where: UserWhereUniqueInput!): User
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}
```

In fact, the actual schema is quite a bit bigger - for brevity we’ve only included the three root types and the simple CRUD operations here. But the API also allows for a variety of other operations (such as batched updates and deletes). If you’re curious, you can check out the entire schema [here](https://gist.github.com/gc-codesnippets/3f4178ad93c51d03195c92ce119d444c).

>## Why not just use the Prisma GraphQL API directly?

Prisma really only is an interface to a database. If you consumed the Prisma API directly from your frontend or mobile applications, this would be similar as directly accessing a database.

In very, very rare cases, this might be an option - but the vast majority of applications do need additional logic that is not covered by CRUD operations (data validation and transformation, authentication, permissions, integration of 3rd-party services or any other sort of custom functionality…).

Another potential concern of directly exposing the Prisma API to your client applications is security. GraphQL works in the way that everyone who has access to the endpoint of a GraphQL API can retrieve the entire GraphQL schema from it - this is called [introspection](http://graphql.org/learn/introspection/). If your clients were talking directly to Prisma, it would be simply a matter of checking the network requests to get access to the endpoint of the Prisma API and everyone would be able to see your entire database schema.

> **Note**: It is currently debated whether it should be possible to limit introspection capabilities, but so far it doesn’t seem a priority in the development of the GraphQL spec. See [this](https://github.com/graphql/graphql-js/issues/113) GitHub issue for more info.

># Creating a Prisma service with a connected database

In this tutorial, you’re going to build everything entirely from scratch! For the Prisma database service, you’re going to start with the most miminal setup that’s possible.

The first thing you need to do is create two files, which you’re going to put into a new directory called `database`.

> First, create the `database` directory and then two files called `prisma.yml` and d`atamodel.graphql` by running the following commands in your terminal:

> .../hackernews-node/

```bash
$ mkdir database
$ touch database/prisma.yml
$ touch database/datamodel.graphql
```

`prisma.yml` is the main configuration file for your Prisma database service. `datamodel.graphql` on the other hand contains the definition of your data model which will be the foundation for the GraphQL CRUD API that’s generated by Prisma.

So far, the data model for your Hacker News app only contains one data type: Link. In fact, you can basically copy the existing Link definition from `schema.graphql` into `datamodel.graphql`.

> Open `datamodel.graphql` and add the following code:

> .../hackernews-node/database/datamodel.graphql

```
type Link {
  id: ID! @unique
  createdAt: DateTime!
  description: String!
  url: String!
}
```

There are two main differences compared to the previous `Link` version from `schema.graphql`.

First, you’re adding the `@unique` directive to the `id: ID!` field. This directive generally tells Prisma that you never want any two `Link` elements in the database that have the same value for that field. In fact, `id: ID!` is a special field in the Prisma data model since Prisma will auto-generate globally unique IDs for the types that have this field.

Second, you’re adding a new field called `createdAt: DateTime!`. This field is also managed by Prisma and will be read-only in the API. It stores the time for when a specific `Link` was created. Note that there’s another similar field provided by Prisma, called `updatedAt: DateTime` - this one stores the time when a Link was last updated.

Now, let’s see what you need to do with `prisma.yml.`

> Add the following contents to `prisma.yml:`

> .../hackernews-node/database/prisma.yml

```yaml
# The service name, this will be part of the endpoint of the Prisma API
service: hackernews-node

# The deployment stage, this will also be part of the API endpoint
stage: dev

# Points to the file that holds your data model
datamodel: datamodel.graphql

# You can only access the API when providing JWTs that are signed with this secret
secret: mysecret123
```

To learn more about the structure of `prisma.yml`, feel free to check out the [documentation](https://www.prisma.io/docs/reference/service-configuration/prisma.yml/yaml-structure-ufeshusai8).

Here’s a quick explanation of each property you see in that file:

* `service`: This can be anything you deem appropriate as a service name.
* `stage`: This property is used to distinguish between different deployment stages of your service. The value can be any string, but it’s common to use values such as `dev`, `staging`, or `prod`.
* `datamodel`: This simply points to the data model which is the foundation for the Prisma CRUD API.
* `secret`: You want to protect your Prisma service and require requests against your Prisma API to be authenticated. This secret is used to sign JWTs which need to be included in the `Authorization` header of any HTTP requests made against the API. Read more about that [here](https://www.prisma.io/docs/reference/prisma-api/concepts-utee3eiquo#authentication).
  The next step is to install the Prisma CLI which is used to manage Prisma services.

> In your terminal, run the following command:

```
$ yarn global add prisma
```

All right, you’re finally ready to deploy your Prisma service and the database that comes along! 🙌

> Navigate into the `database` directory and run `prisma deploy`:

> .../hackernews-node/

```
$ cd database
$ prisma deploy
```

The CLI will now prompt you to select a [cluster](https://www.prisma.io/docs/reference/clusters/overview-eu2ood0she) to which it should deploy the Prisma service. For the purpose of this tutorial, you’re going to use a development cluster which is completely free to use.

Note: Prisma is open-source. It is based on [Docker](http://docker.com/) which means you can deploy it to any cloud provider of your choice (such as Digital Ocean, AWS, Google Cloud, …). If you don’t want to deal with DevOps and the manual configuration of Docker, you can also use [Prisma Cloud](https://blog.graph.cool/introducing-prisma-cloud-a-graphql-database-platform-ed591baa8737) to easily spin up a private cluster to which you can deploy your services. Watch this short [video](https://www.youtube.com/watch?v=jELE4KXJPn4) to learn more about how that works.

> From the CLI prompt, select any of the Development cluster options and hit Enter. (If you have Docker installed, you can also deploy locally.)

Once the command has finished running, the CLI outputs the endpoint for the Prisma GraphQL API. It will look somewhat similar to this: `https://eu1.prisma.sh/public-graytracker-771/hackernews-node/dev`.

Here’s how the URL is composed:

* `eu1.prisma.sh`: The domain of your cluster
* `public-graytracker-771`: A randomly generated ID for your service
* `hackernews-node`: The service name from `prisma.yml`
* `dev`: The deployment stage from `prisma.yml`

Notice that the CLI now also added a `cluster` property to `prisma.yml`. In future deploys (e.g. after you made changes to the data model), you therefore won’t be prompted where to deploy the service any more - the CLI will read the cluster from prisma.yml. If you remove this property, the CLI will prompt you again.

># Exploring the Prisma service

To explore the Prisma database API, open the URL that was printed by the CLI.

> Note: If you ever lose the endpoint, you can get access to it again by running `prisma info` in the terminal.

Unfortunately, if you do so you will be greeted by an error:

```json
{
  "errors": [
    {
      "message":
        " Your token is invalid. It might have expired or you might be using a token from a different project.",
      "code": 3015,
      "requestId": "api:api:cjfcbpal10t6w0b91idqif941"
    }
  ]
}
```

Remember how we said that your Prisma API is protected by the secret from prisma.yml? Well, this is precisely the reason why you’re getting the error right now. The Playground is trying to load the GraphQL schema from the endpoint, but its request is not authenticated. Let’s go ahead and change that.

Inside the `database` directory, run the following command to generate an authentication token (JWT) that’s signed with the `secret` from `prisma.yml`:

> .../hackernews-node/database

```bash
$ prisma token
```

Then copy the token that was printed by the CLI and use it to configure an HTTP header in the Playground. You can do so by opening the **HTTP HEADERS** pane in the bottom-left corner of the Playground - notice that you need to replace the `__TOKEN__` placeholder with the actual token that was printed:

```json
{
  "Authorization": "Bearer __TOKEN__"
}
```

It will look similar to this:

```json
{
  "Authorization":
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJoYWNrZXJuZXdzLW5vZGVAZGV2Iiwicm9sZXMiOlsiYWRtaW4iXX0sImlhdCI6MTUyMjMxNjM2MCwiZXhwIjoxNTIyOTIxMTYwfQ.MUoHGvw61iIq45ZVInOoylcs6_q2ldfD_GjQOVBqEqY"
}
```

After a few seconds, the Playground is going to load the schema and you’re able to send authenticated requests to the Prisma API. Open the documentation to check the available API operations.

![img](https://imgur.com/CK1xXWq.png)

If you like, you can send the following mutation and query to create a new link and then retrieve the list of links:

Create a new `Link`:

```
 mutation {
  createLink(data: {
    url: "www.prisma.io"
    description: "Prisma turns your database into a GraphQL API"
  }) {
    id
  }
}
```

Load all Link elements:

```
 query {
  links {
    id
    url
    description
  }
}
```

![img](https://imgur.com/jq6dOL7.png)

> Q&A

Q : Why is a second GraphQL API (defined by the application schema) needed in a GraphQL server architecture with Prisma?<br>
A : The Prisma API only is an interface to the database, but doesn't allow for any sort of application logic which is needed in most apps

---

## Connecting Server and Database with Prisma Bindings

In this section, you’re going to connect your GraphQL server with the [Prisma](https://www.prisma.io/) database service which provides the interface to your database. The connection is implemented via [Prisma bindings](https://github.com/graphcool/prisma-binding).

># Updating the resolver functions to use Prisma bindings

You’re going to start this section with a bit of cleanup and refactoring.

> Open `index.js` and entirely remove the `links` array as well as the `idCount` variable - you don’t need those any more since the data will now be stored in an actual database.

Next, you need to update the implementation of the resolver functions because they’re now accessing variables that don’t exist. Plus, you now want to return actual data from the database instead of local dummy data.

> Still in `index.js`, update the `resolvers` object to look as follows:

> .../hackernews-node/src/index.js

```js
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: (root, args, context, info) => {
      return context.db.query.links({}, info)
    },
  },
  Mutation: {
    post: (root, args, context, info) => {
      return context.db.mutation.createLink({
        data: {
          url: args.url,
          description: args.description,
        },
      }, info)
    },
  },
}
```

Wow, that looks weird! There’s a bunch of new stuff happening, let’s try to understand what’s going on, starting with the `feed` resolver.

># The `context` and `info` arguments

Previously, the `feed` resolver didn’t take any arguments - now it receives four. In fact, the first two are not needed. But `context` and `info` are.

Remember how we said earlier that all GraphQL resolver functions always receive four arguments. Now you know what the last two are called - but what are they used for?

The `context` argument is a JavaScript object that every resolver in the resolver chain can read from and write to - it thus basically is a means for resolvers to communicate. As you’ll see in a bit, it’s also possible to already write to it at the moment when the GraphQL server itself is being initialized. So, it’s also a way for you to pass arbitrary data or functions to the resolvers. In this case, you’re going to attach this `db` object to the `context` - more about that soon.

The `info` object carries information about the incoming GraphQL query (in the form of a [query AST](https://medium.com/@cjoudrey/life-of-a-graphql-query-lexing-parsing-ca7c5045fad8)). For example, it knows what fields are being requested in the selection set of the query.

> Note: To learn more in-depth about the resolver arguments, read the following two articles:

> * [GraphQL Server Basics: The Schema](https://blog.graph.cool/graphql-server-basics-the-schema-ac5e2950214e)
> * [GraphQL Server Basics: Demystifying the info Argument in GraphQL Resolvers](https://blog.graph.cool/graphql-server-basics-demystifying-the-info-argument-in-graphql-resolvers-6f26249f613a)

Now that you have a basic understanding of the arguments that are passed into the resolver, let’s see how they’re being used inside the implementation of the resolver function.

># Understanding the `feed` resolver

The `feed` resolver is implemented as follows:

.../hackernews-node/src/index.js

```js
feed: (root, args, context, info) => {
  return context.db.query.links({}, info)
},
```

It accesses a `db` object on `context`. As you will see in a bit, this `db` object actually is a `Prisma` binding instance from the `prisma-binding` NPM package.

This Prisma binding instance effectively turns the Prisma database schema into JavaScript functions which you can invoke. When invoking such a function, the `Prisma` binding instance will assemble a GraphQL query under the hood and send it to the Prisma API for you. But what are the two parameters you’re passing to the function?

The first paramater carries any variables you might want to submit along with the query. Since you don’t need any variables for the `links` query right now, it’s just an empty object.

The second parameter is used by the `Prisma` binding instance to generate the selection set for the query it sends to the Prisma API. You learned before that the `info` object carries information about the selection set of the incoming query. What’s happening here is that you’re basically forwarding (i.e. [delegating](https://blog.graph.cool/graphql-schema-stitching-explained-schema-delegation-4c6caf468405)) the incoming query to the Prisma engine. The `info` object needs to be passed along so that Prisma knows what fields are being requested in an incoming query.

In fact, the second argument could also be a string containing a selection set for the query. Consider this exemplary function call:

```js
const selectionSet = `
{
  id
  description
  url
}
`;
context.db.query.links({}, selectionSet);
```

This would correspond to the following GraphQL query being sent to the Prisma API:

```
 query {
  links {
    id
    description
    url
  }
}
```

># Understanding the `post` resolver

The `post` resolver now looks like this:

> .../hackernews-node/src/index.js

```js
post: (root, args, context, info) => {
  return context.db.mutation.createLink({
    data: {
      url: args.url,
      description: args.description,
    },
  }, info)
},
```

Similar to the `feed` resolver, you’re simply invoking a function on the `Prisma` binding instance which is attached to the `context`.

Recall that the Prisma binding instance essentially translates the Prisma database schema into functions which you can invoke from JavaScript. Invoking these functions will send the corresponding query/mutation to the underlying Prisma API.

In this case, you’re sending the `createLink` mutation from Prisma’s GraphQL schema. As arguments, you’re passing the data that the resolvers receive via the `args` parameter.

Again, the second argument to the function call is the `info` object which contains the selection set of the incoming mutation - and again, this could be replaced by a string:

```js
 const selectionSet = `
{
  id
}
`
context.db.mutation.createLink({
  data: {
    url: "www.prisma.io"
    description: "Prisma turns your database into a GraphQL API"
  }
}, selectionSet)
```

This would correspond to the following mutation being sent to the API:

```
 mutation {
  createLink(data: {
    url: "www.prisma.io"
    description: "Prisma turns your database into a GraphQL API"
  }) {
    id
  }
}
```

So, to summarize, Prisma bindings let you invoke functions that correspond to operations that are defined in the GraphQL schema. The functions have the same names as the operations and the same structure with respect to the arguments they receive and the values they return.

But, how do you make sure your resolvers actually get access to that magical and often-mentioned `Prisma` binding instance?

># Creating the `Prisma` binding instance

Before doing anything else, go ahead and do what JavaScript developers love most: Add a new dependency to your project 😑

> In the root directory of your project (not inside `database`), run the following command:

> .../hackernews-node

```bash
$ yarn add prisma-binding
```

Cool! Now you can attach the `Prisma` binding instance to the `context` so that your resolvers get access to it.

> In `index.js`, update the instantiation of the `GraphQLServer` to look as follows (note that you need to replace the value for `endpoint` with your own Prisma endpoint!):

> .../hackernews-node/src/index.js

```js
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: "src/generated/prisma.graphql",
      endpoint:
        "https://eu1.prisma.sh/public-graytracker-771/hackernews-node/dev",
      secret: "mysecret123",
      debug: true
    })
  })
});
```

So, here’s the trick. You’re instantiating `Prisma` with the following pieces of information:

* `typeDefs`: This points to the Prisma database schema which defines the full CRUD GraphQL API of Prisma. Note that you actually don’t have this file yet - we’ll tell you in a bit how to get it.
* `endpoint`: This is the endpoint of your Prisma API. Don’t forget to replace it with the endpoint of your own Prisma service here!
* `secret`: Recall that all requests against the Prisma API need to be authenticated by including a JWT in the `Authorization` header of the HTTP request? This JWT needs to be signed with the `secret` defined in `prisma.yml`. As you’re not making any direct requests against the Prisma API, but these requests are being made for you by the `Prisma` binding instance, you need to tell it what that secret is so it can generate a JWT which it attaches to the requests.
* `debug`: Setting the `debug` flag to true means that all requests, made by the `Prisma` binding instance to the Prisma API will be logged to the console. It’s a convenient way to observe the actual GraphQL queries and mutations that are sent to Prisma.

> Finally, to make this work you need to import Prisma` into index.js. At the top of the file, add the following import statement:

> .../hackernews-node/src/index.js

```js
const { Prisma } = require("prisma-binding");
```

You’re almost done! There’s is only one piece left to the puzzle, and that’s downloading the Prisma database schema which referenced in the Prisma constructor call.

># Downloading the Prisma database schema

There are various ways how to get access to the schema of a GraphQL API. In this tutorial. you’ll use the [GraphQL CLI](https://github.com/graphql-cli/graphql-cli) in combination with [graphql-config](https://github.com/graphcool/graphql-config). This also leads with a few more improvements regarding your general workflows.

> First, create a `.graphqlconfig` file:

> .../hackernews-node

```bash
$ touch .graphqlconfig.yml
```

This file is the major source of information for the GraphQL CLI.

> Add the following contents to `.graphqlconfig.yml`:

> .../hackernews-node/.graphqlconfig.yml

```yaml
projects:
  app:
    schemaPath: src/schema.graphql
    extensions:
      endpoints:
        default: http://localhost:4000
  database:
    schemaPath: src/generated/prisma.graphql
    extensions:
      prisma: database/prisma.yml
```

So, what’s going on here? You’re defining two `projects`. As you might guess, each project represents one of your GraphQL APIs - the application layer (`graphql-yoga`) and the database layer (Prisma).

For each project, you’re specifying a `schemaPath`. This is simply the path to the GraphQL schema that defines each API.

For the `app` project, you’re further specifying an `endpoint` which is the URL where the GraphQL server is running when it’s started.

The `database` project on the other hand only points to the `prisma.yml` file. In fact, pointing to this file also provides information about the endpoint of the Prisma service, since all the information that’s needed to compose the endpoint can be found in there.

There are two main benefits you now get from this setup:

* You can interact with both GraphQL APIs in a Playgroundn side-by-side.
* When deploying the Prisma service with `prisma deploy`, the Prisma CLI downloads the generated Prisma database schema into the
  specified location.

The Prisma CLI also uses information that’s provided in `.graphqlconfig.yml`. Therefore, you can now run prisma commands from the root directory rather than from the `database` directory.

> Inside the root directory of your project, run `prisma deploy` to download the Prisma database schema into location that’s specified in `.graphqlconfig.yml`:

> .../hackernews-node

```bash
$ prisma deploy
```

Observing the output of the command, you can see it prints the following line this time:

```
Writing database schema to `src/generated/prisma.graphql` 1ms
```

And voilà, there is the Prisma database schema in `src/generated/prisma.graphql` 😮

Okay, one last minor change before you can start and test the server!

> Open `src/schema.graphql` and delete the `Link` type.

Ehm, what? Why would you do that? Where does the `Link` definition now come from that’s used in the definition of the `feed` and `post` fields. Answer: You’ll import it.

> Still in `src/schema.graphql`, add the following import statement to the top of the file:

> .../hackernews-node/src/schema.graphql

```
# import Link from "./generated/prisma.graphql"
```

This import syntax used here is not part of the official GraphQL specification (yet!). It comes from the [graphql-import](https://github.com/graphcool/graphql-import) package which is being used by `graphql-yoga` to resolve any dependencies across `.graphql` files.

Note that in this case, it wouldn’t actually make a difference if you left the `Link` type as it was. However, it is a lot more convenient to only define the `Link` type once and then reuse that definition. Otherwise you’d have to update multiple definitions whenever you’re changing the `Link` type.

Great, that’s it! You can finally start the server now and test the API now!

># Accessing both GraphQL APIs inside the same Playground

Let’s now look at how you can leverage the information in `.graphqlconfig.yml` to work with both GraphQL APIs side-by-side.

> First, go ahead and install the GraphQL CLI.: `

```
yarn global add graphql-cli
```

Now you can run the `graphql playground` command to open both APIs at once. Before that, you need to start the GraphQL server (otherwise the Playground for the `app` project won’t work).

> Next, start the GraphQL server:

> .../hackernews-node

```bash
$ node src/index.js
```

> Now, open a new terminal tab (or window) and run the followign command to open both GraphQL APIs inside the same GraphQL Playground:

> hackernews-node/

```bash
$ graphql playground
```

> **Note**: You can also download the [Desktop app](https://github.com/graphcool/graphql-playground/releases) of the GraphQL Playground instead of using it in the browser.

![img](https://imgur.com/uEPCMs5.png)

Here’s what the Playground with both projects looks like:

Using the left side-bar, you can now switch between the different projects and either send requests to the application layer or the database layer ✌️ ️

All right, that was a lot of configuration and only very little coding! Let’s change that and implement a few more features.

> Q&A

Q : What is the main responsibility of the Prisma binding instance that's attached to the 'context'? <br>
A : Translate the GraphQL operations from the Prisma API into JavaScript functions

---

## Authentication

In this section, you’re going to implement signup and login functionality that allows your users to authenticate against your GraphQL server.

># Adding a `User` type to your data model

The first thing you need is a way to represent user data in the database. You can achieve that by adding a `User` type to the data model.

You also want to add a relation between the `User` and the already existing `Link` type to express that `Links` are posted by `Users`.

> Open `database/datamodel.graphql` and replace its current contents with the following:

> .../hackernews-node/database/datamodel.graphql

```
type Link {
  id: ID! @unique
  description: String!
  url: String!
  postedBy: User
}

type User {
  id: ID! @unique
  name: String!
  email: String! @unique
  password: String!
  links: [Link!]!
}
```

You’re adding a new relation field called `postedBy` to the `Link` type that points to a `User` instance. The `User` type then has a `links` field that’s a list of `Links`. This is how you express a one-to-many relationship using SDL.

After every change you’re making to the data model, you need to redeploy the Prisma service to apply your changes.

> In the root directory of the project, run the following command:

> .../hackernews-node

```bash
$ prisma deploy
```

The Prisma database schema in `src/generated/prisma.graphql` and along with it the API of the Prisma service have been updated. The API now also exposes CRUD operations for the `User` type as well operations to connect and disconnect `User` and `Link` elements according to the specified relation.

># Extending the application schema
Remember the process of schema-driven development? It all starts with extending your schema definition with the new operations that you want to add to the API - in this case a `signup` and login `mutation`.

> Open the application schema in `src/schema.graphql` and update the `Mutation` type as follows:

> .../hackernews-node/src/schema.graphql

```
type Mutation {
  post(url: String!, description: String!): Link!
  signup(email: String!, password: String!, name: String!): AuthPayload
  login(email: String!, password: String!): AuthPayload
}
```

> Next, go ahead and add the `AuthPayload` along with a `User` type definition to the file.

> Still in `src/schema.graphql`, add the following type definitions:

> .../hackernews-node/src/schema.graphql

```
type AuthPayload {
  token: String
  user: User
}

type User {
  id: ID!
  name: String!
  email: String!
  links: [Link!]!
}
```

So, effectively the `signup` and `login` mutations behave very similarly. Both return information about the User who’s signing up (or logging in) as well as a `token` which can be used to authenticate subsequent requests against the API. This information is bundled in the `AuthPayload` type.

But wait a minute Why are you redefining the `User` type this time. Isn’t this a type that could also be imported from the Prisma database schema? It sure is!

However, in this case you’re using it to hide certain information of the `User` type in the application schema. Namely, the `password` field (though you’re going to store a hashed version of the password as you’ll see soon - so even if it was exposed here clients wouldn’t be able to directly query it).

># Implementing the resolver functions

After extending the schema definition with the new operations, you need to implement the resolver functions for them. Before doing so, let’s actually refactor your code a bit to keep it a bit more modular!

You’ll pull out the resolvers for each type into their own files.

> First, create a new directory called `resolvers` and add three files to it: `Query.js`, `Mutation.js` and `AuthPayload.js`. You can do so with the following commands:

> .../hackernews-node

```bash
$ mkdir src/resolvers
$ touch src/resolvers/Query.js
$ touch src/resolvers/Mutation.js
$ touch src/resolvers/AuthPayload.js
```

> Next, move the implementation of the `feed` resolver into `Query.js`.

> In `Query.js`, add the following function definition:

> .../hackernews-node/src/resolvers/Query.js

```js
function feed(parent, args, context, info) {
  return context.db.query.links({}, info)
}

module.exports = {
  feed,
}
```

This is pretty straighforward. You’re just reimplementing the same functionality from before with a dedicated function in a different file. The `Mutation` resolvers are next.

> Open `Mutation.js` and add the new login and signup resolvers (you’ll add the post resolver afterwards):

> .../hackernews-node/src/resolvers/Muation.js

```js
async function signup(parent, args, context, info) {
  // 1
  const password = await bcrypt.hash(args.password, 10)
  // 2
  const user = await context.db.mutation.createUser({
    data: { ...args, password },
  }, `{ id }`)

  // 3
  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  // 4
  return {
    token,
    user,
  }
}

async function login(parent, args, context, info) {
  // 1
  const user = await context.db.query.user({ where: { email: args.email } }, ` { id password } `)
  if (!user) {
    throw new Error('No such user found')
  }

  // 2
  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  // 3
  return {
    token,
    user,
  }
}

module.exports = {
    signup,
    login,
    post,
}
```

Let’s use the good ol’ numbered comments again to understand what’s going on here - starting with `signup`.

1. In the `signup` mutation, the first thing to do is encrypting the `User’s` password using the `bcryptjs` library which you’ll install later.
2. The next step is to use the `Prisma` binding instance to store the new `User` in the database. Notice that you’re hardcoding the id in the selection set - nothing else. We’ll discuss this in more in detail soon.
3. You’re then generating a JWT which is signed with an `APP_SECRET`. You still need to create this `APP_SECRET` and also install the `jwt` library that’s used here.
4. Finally, you return the `token` and the `user`.

Now on the `login` mutation:

1. Instead of creating a new `User` object, you’re now using the `Prisma` binding instance to retrieve the existing `User` record by the `email` address that was sent along in the `login` mutation. If no `User` with that email address was found, you’re returning a corresponding error. Notice that this time you’re asking for the `id` and the `password` in the selection set. The `password` is needed because it needs to be compared with the one provided in the `login` mutation.
2. The next step is to compare the provided password with the one that is stored in the database. If the two don’t match up, you’re returning an error as well.
3. In the end, you’re returning `token` and `user` again.
 
The implementation of both resolvers is relatively straighforward - nothing too surpring. The only thing that’s not clear right now is the hardcoded selection set containing only the id field. What happens if the incoming mutation requests more information about the User?

># Adding the `AuthPayload` resolver

For example, consider this mutation that should be possible according to the GraphQL schema definition:

```
 mutation {
  login(
    email: "sarah@graph.cool"
    password: "graphql"
  ) {
    token
    user {
      id
      name
      links {
        url
        description
      }
    }
  }
}
```

This is a normal login mutation where a bit of information about the `User` that’s logging in is being requested. How does the selection set for that mutation get resolved?

With the current resolver implementation, this mutation actually wouldn’t return any user data because all that could be returned about the `User` is their `id` (since that’s everything that is requested from Prisma). The way how to solve this is by implementing the additional `AuthPayload` resolver and retrieve the field from the mutation’s selection set there.

> Open `AuthPayload.js` and add the following code to it:

> .../hackernews-node/src/resolvers/AuthPayload.js

```js
function user(root, args, context, info) {
  return context.db.query.user({ where: { id: root.user.id } }, info)
}

module.exports = { user }
```

Here is where the selection set of the incoming `login` mutation is actually resolved and the requested fields are retrieved from the database.

> **Note**: This is a bit tricky to understand at first. To learn more about this topic a bit more in-depth check out the explanation in [this](https://github.com/graphcool/prisma/issues/1737) GitHub issue and read [this](https://blog.graph.cool/graphql-server-basics-demystifying-the-info-argument-in-graphql-resolvers-6f26249f613a) blog article about the info object.

Now let’s go and finish up the implementation.

> First, add the required dependencies to the project:

> .../hackernews-node/

```bash
$ yarn add jsonwebtoken bcryptjs
```

Next, you’ll create a few utilities that are being reused in a few places.

> Create a new file inside the `src` directory and call it `utils.js`:

> .../hackernews-node/

```bash
$ touch src/utils.js
```

> Now, paste the following code into it:

> .../hackernews-node/src/utils.js

```js
const jwt = require('jsonwebtoken')
const APP_SECRET = 'GraphQL-is-aw3some'

function getUserId(context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, APP_SECRET)
    return userId
  }

  throw new Error('Not authenticated')
}

module.exports = {
  APP_SECRET,
  getUserId,
}
```

The `APP_SECRET` is used to sign the JWTs which you’re issuing for your users. It is completely independent to the `secret` that’s specified in `prisma.yml`. In fact, it has nothing to do with Prisma at all, i.e. if you were to swap out the implementation of your database layer, the `APP_SECRET` would continue to be used in exactly the same way.

The `getUserId` function is a helper function that you’ll call in resolvers that require authentication (such as `post`). It first retrieves the `Authorization` header (which contains the `User’s` JWT) from the incoming HTTP request. It then verifies the JWT and retrieves the user’s ID from it. Notice that if that process is not successful for any reason, the function will throw an exception. You can therefore use it to “protect” the resolvers which require authentication.

Finally, you need to import everything into `Mutation.js`.

> Add the following import statements to the top of `Mutation.js`:

> .../hackernews-node/src/resolvers/Mutation.js

```js
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')
```

># Requiring authentication for the `post` mutation

Before you’re going to test your authentication flow, make sure to complete your schema/resolver setup. Right now the `post` resolver is still missing.

> In `Mutation.js`, add the following resolver implementation for `post`:

> .../hackernews-node/src/resolvers/Mutation.js

```js
function post(parent, args, context, info) {
  const userId = getUserId(context)
  return context.db.mutation.createLink(
    {
      data: {
        url: args.url,
        description: args.description,
        postedBy: { connect: { id: userId } },
      },
    },
    info,
  )
}
```

Two things have changed in the implementation compared to the previous implementation in `index.js`:

1. You’re now using the `getUserId` function to retrieve the ID of the `User` that is stored in the JWT that’s set at the `Authorization` header of the incoming HTTP request. Therefore, you know which `User` is creating the `Link` here. Recall that an unsuccessfull retrieval of the `userId` will lead to an exception and the function scope is exited before the `createLink` mutation is invoked.
2. You’re then also using that `userId` to connect the `Link` to be created with the `User` who is creating it. This is happening through the `connect`-mutation.

Awesome! The last thing you need to do now is using the new resolver implementations in index.js.

> Open `index.js` and import the modules which now contain the resolvers at the top of the file:

> .../hackernews-node/src/index.js

```js
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const AuthPayload = require('./resolvers/AuthPayload')
```

> Then, update the definition of the `resolvers` object to looks as follows:

> .../hackernews-node/src/index.js

```js
const resolvers = {
  Query,
  Mutation,
  AuthPayload
}
```

That’s it, you’re ready to test the authentication flow! 🔓

># Testing the authentication flow

The very first thing you’ll do is test the `signup` mutation and thereby create a new `User` in the database.

> If you haven’t done so already, stop and restart the server by first killing it with **CTRL+C**, then run node `src/index.js`. Afterwards, open a new Playground with the GraphQL CLI by running `graphql playground`.

Note that you can “reuse” your Playground from before if you still have it open - it’s only important that you’re restarting the server so the changes you made to the implementation are actually applied.

> Now, send the following mutation to create a new `User`:

```
 mutation {
  signup(
    name: "Alice"
    email: "alice@graph.cool"
    password: "graphql"
  ) {
    token
    user {
      id
    }
  }
}
```

> From the server’s response, copy the authentication `token` and open another tab in the Playground. Inside that new tab, open the **HTTP HEADERS** pane in the bottom-left corner and specify the `Authorization` header - similar to what you did with the Prisma Playground before. Again, replace the `__TOKEN__` with the actual token:

```json
 {
  "Authorization": "Bearer __TOKEN__"
}
```

Whenever you’re now sending a query/mutation from that tab, it will carry the authentication token.

> With the `Authorization` header in place, send the following to your GraphQL server:

```
 mutation {
  post(
    url: "www.graphql-europe.org"
    description: "Europe's biggest GraphQL conference"
  ) {
    id
  }
}
```

![img](https://imgur.com/jEToi1S.png)

When your server receives this mutation, it invokes the `post` resolver and therefore validates the provided JWT. Additionally, the new `Link` that was created is now connected to the `User` for which you previously sent the `signup` mutation.

To verify everything worked, you can send the following `login` mutation:

```
 mutation {
  login(
    email: "alice@graph.cool"
    password: "graphql"
  ) {
    token
    user {
      email
      links {
        url
        description
      }
    }
  }
}
```

> Q&A 

Q : Why was the 'User' type redefined in the application schema when it's already part of the Prisma database schema and could be imported from there?<br>
A : To hide potentially sensitive information from client applications

---

## Realtime GraphQL Subscriptions

In this section, you’ll learn how you can bring realtime functionality into your app by implementing GraphQL subscriptions. The goal is to implement two subscriptions to be exposed by your GraphQL server:

- Send realtime updates to subscribed clients when a new `Link` element is created
- Send realtime updates to subscribed clients when an existing `Link` element is upvoted

># What are GraphQL subscriptions?

Subscriptions are a GraphQL feature that allows a server to send data to its clients when a specific event happens. Subscriptions are usually implemented with [WebSockets](https://en.wikipedia.org/wiki/WebSocket). In that setup, the server maintains a steady connection to its subscribed client. This also breaks the “Request-Response-Cycle” that were used for all previous interactions with the API.

Instead, the client initially opens up a long-lived connection to the server by sending a subscription query that specifies which event it is interested in. Every time this particular event happens, the server uses the connection to push the event data to the subscribed client(s).

># Subscriptions with Prisma

Luckily, Prisma comes with out-of-the-box support for subscriptions. In fact, if you take a look at the Prisma schema in `src/generated/prisma.graphql`, you’ll notice that the `Subscription` type is already there and currently looks as follows:

> .../hackernews-node/src/generated/prisma.graphql

```
type Subscription {
  link(where: LinkSubscriptionWhereInput): LinkSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}
```

These subscriptions can fire for the following events:

- A new node is created
- An existing node updated
- An existing node is deleted

Notice that you can constrain for which events exactly a subscription should fire. For example, if you only want to subscribe to updates made to one specific `Link` or when a specific `User` is deleted, you can do so as well by providing the `where` argument to the subscription query.

GraphQL subscriptions follow the same syntax as queries and mutations, so you could for example subscribe to events of existing `Link` elements being updated with the following subscription:

```
 subscription {
  link(where: {
    mutation_in: [UPDATED]
  }) {
    node {
      id
      url
      description
    }
  }
}
```

This subscription fires everytime an existing Link is updated and the server would send along the (potentially updated) `url` and `description` values for the updated Link.

Let’s also quickly consider the `LinkSubscriptionPayload` type from `src/generated/prisma.graphql`:

```
 type LinkSubscriptionPayload {
  mutation: MutationType!
  node: Link
  updatedFields: [String!]
  previousValues: LinkPreviousValues
}
```

Here’s what the individual fields are being used for:

># `mutation: MutationType!`

`MutationType` is an `enum` with three values:

```
 enum MutationType {
  CREATED
  UPDATED
  DELETED
}
```

The `mutation` field on the `LinkSubscriptionPayload` type therefore carries the information what kind of mutation happened.

># `node: Link`

This field represents the `Link` element which was created, updated or deleted and allows to retrieve more information about it.

Notice that for `DELETED`-mutations, `node` will always be `null`! If you need to know more details about the Link that was deleted, you can use the `previousValues` field instead (more about that soon).

> **Note**: The terminology of a node is sometimes used in GraphQL to refer to single elements. A node essentially corresponds to a record in the database.

># `updatedFields: [String!]`

One piece of information you might be interested in for `UPDATED`-mutations is which fields have been updated inside a mutation. That’s what this field is used for.

Assume a client has subscribed with the following subscription query:

```
 subscription {
  link {
    updatedFields
  }
}
```

Now, assume the ser`zver receives the following mutation:

```
 mutation {
  updateLink(
    where: {
      id: "..."
    }
    data: {
      description: "An even greater website"
    }
  )
}
```

The subscribed client will then receive the following payload:

```json
 {
  "data": {
    "link": {
      "updatedFields": ["description"]
    }
  }
}
```

This is because the mutation only updated the `Link`’s `description` field - not the url.

># `previousValues: LinkPreviousValues`

The `LinkPreviousValues` type looks very similar to Link itself:

```
 type LinkPreviousValues {
  id: ID!
  description: String!
  url: String!
}
```

It basically is a helper type that mirrors the fields from `Link`.

`previousValues` is only used for `UPDATED`- and `DELETED`-mutations. For `CREATED`-mutations, it will always be `null` (for the same reason that node is null for `DELETED`-mutations).

># Putting everything together

Consider the sample `updateLink`-mutation from the previous section again. But let’s now assume, the subscription query includes all the fields we just discussed:

```
 subscription {
  link {
    mutation
    updatedFields
    node {
      url
      description
    }
    previousValues {
      url
      description
    }
  }
}
```

Here’s what the payload will look like that the server pushes to the client after it performed the mutation:

```json
 {
  "data": {
    "link": {
      "mutation": "UPDATED",
      "updatedFields": ["description"],
      "node": {
        "url": "www.example.org",
        "description": "An even greater website"
      },
      "previousValues": {
        "url": "www.example.org",
        "description": "A great website"
      }
    }
  }
}
```

Note that this assumes the updated Link had the following values before the mutation was performed:

- `url: www.example.org`
- `description: A great website`


># Subscribing to new `Link` elements

Enough with the talking, more of the coding! Let’s implement the subscription that allows your clients to subscribe to newly created `Link` elements.

Just like with queries and mutations, the first step to implement a subscription is to extend your GraphQL schema definition.

> Open your application schema and add the `Subscription` type:

> .../hackernews-node/src/schema.graphql

```
type Subscription {
  newLink: LinkSubscriptionPayload
}
```

> Because you’re referencing `LinkSubscriptionPayload` from the Prisma schema, you also need to adjust your import statement on top of the file and import that type as well:

> .../hackernews-node/src/schema.graphql

```
# import Link, LinkSubscriptionPayload from "./generated/prisma.graphql"
```

Next, go ahead and implement the resolver for the `newLink` field. Resolvers for subscriptions are slightly different than the ones for queries and mutations:

1. Rather than returning any data directly, they return an `AsyncIterator` which subsequently is used by the GraphQL server to push the event data to the client.
2. Subscription resolvers are wrapped inside an object and need to be provided as the value for a `subscribe` field.
To adhere to the modular structure of your resolver implementation, first create a new file called Subscription.js:

> .../hackernews-node

```bash
$ touch src/resolvers/Subscription.js
```

> Here’s how you need to implement the subscription resolver in that new file:

```js
 function newLinkSubscribe (parent, args, context, info) {
  return context.db.subscription.link(
    { where: { mutation_in: ['CREATED'] } },
    info,
  )
}

const newLink = {
  subscribe: newLinkSubscribe
}

module.exports = {
  newLink,
}
```

The code seems pretty straightforward. As mentioned before, the subscription resolver is provided as the value for a `subscribe` field inside a plain JavaScript object.

The `Prisma` binding instance on the `context` also exposes a `subscription` object which proxies the subscriptions from the Prisma GraphQL API. This function is used to resolve subscriptions and push the event data to subscribed clients. Prisma is taking care of all the complexity of handling the realtime functionality under the hood.

> Open `index.js` and import the Subscription module at the top of the file:

> .../hackernews-node/src/index.js

```js
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const AuthPayload = require('./resolvers/AuthPayload')
const Subscription = require('./resolvers/Subscription')
```

> Then, update the definition of the `resolvers` object to looks as follows:

> .../hackernews-node/src/index.js

```js
const resolvers = {
  Query,
  Mutation,
  AuthPayload,
  Subscription,
}
```

># Testing subscriptions

With all the code in place, it’s time to test your realtime API ⚡️ You can do so, by using two instances (i.e. windows) of the GraphQL Playground at once.

- If you haven’t already, restart the server by first killing it with **CTRL+C**, then run `node src/index.js` again.

- Next, open two browser windows and navigate both to the endpoint of your GraphQL server: `http://localhost:4000`.

As you might guess, you’ll use one Playground to send a subscription query and thereby create a permanent websocket connection to the server. The second one will be used to send a `post` mutation which triggers the subscription.

> In one Playground, send the following subscription:

```
 subscription {
  newLink {
    node {
      id
      url
      description
      postedBy {
        id
        name
        email
      }
    }
  }
}
```
In contrast to what happens when sending queries and mutations, you’ll not immediately see the result of the operation. Instead, there’s a loading spinner indicating that it’s waiting for an event to happen.

 ![img](https://imgur.com/wSkSXZE.png)

Time to trigger a subscription event.

> Send the following post mutation inside a GraphQL Playground. Remember that you need to be authenticated for that (see the previous chapter to learn how that works):

```
 mutation {
  post(
    url: "www.graphqlweekly.com"
    description: "Curated GraphQL content coming to your email inbox every Friday"
  ) {
    id
  }
}
```

Now observe the Playground where the subscription was running:

![img](https://imgur.com/V89gYLE.png)

># Adding a voting feature

The next feature to be added is a voting feature which lets users upvote certain links. The very first step here is to extend your Prisma data model to represent votes.

> Open `database/datamodel.graphql` and addjust it to look as follows:

> .../hackernews-node/database/datamodel.graphql

```
type Link {
  id: ID! @unique
  createdAt: DateTime!
  description: String!
  url: String!
  postedBy: User
  votes: [Vote!]!
}

type User {
  id: ID! @unique
  name: String!
  email: String! @unique
  password: String!
  links: [Link!]!
  votes: [Vote!]!
}

type Vote {
  id: ID! @unique
  link: Link!
  user: User!
}
```
As you can see, you added a new `Vote` type to the data model. It has one-to-many relationships to the `User` and the `Link` type.

To apply the changes and update your Prisma GraphQL API so it includes CRUD operations for the new `Vote` type, you need to deploy the service again.

> Run the following command in your terminal:

> .../hackernews-node

```bash
$ prisma deploy
```

Now, with the process of schema-driven development in mind, go ahead and extend the schema definition of your application schema so that your GraphQL server also exposes a `vote` mutation:

> .../hackernews-node/src/schema.graphql

```
type Mutation {
  post(url: String!, description: String!): Link!
  signup(email: String!, password: String!, name: String!): AuthPayload
  login(email: String!, password: String!): AuthPayload
  vote(linkId: ID!): Vote
}
```

> The referenced `Vote` type also needs to be imported from the Prisma database schema:

> .../hackernews-node/src/schema.graphql

```
# import Link, LinkSubscriptionPayload, Vote from "./generated/prisma.graphql"
```

You know what’s next: Implementing the corresponding resolver function.

> Add the following function to `src/resolvers/Mutation.js`:

> .../hackernews-node/src/resolvers/Mutation.js

```js
async function vote(parent, args, context, info) {
  // 1
  const userId = getUserId(context)

  // 2
  const linkExists = await context.db.exists.Vote({
    user: { id: userId },
    link: { id: args.linkId },
  })
  if (linkExists) {
    throw new Error(`Already voted for link: ${args.linkId}`)
  }

  // 3
  return context.db.mutation.createVote(
    {
      data: {
        user: { connect: { id: userId } },
        link: { connect: { id: args.linkId } },
      },
    },
    info,
  )
}
```

Here is what’s going on:

1. Similar to what you’re doing in the `post` resolver, the first step is to validate the incoming JWT with the `getUserId` helper function. If it’s valid, the function will return the `userId` of the `User` who is making the requests. If the JWT is not valid, the function will throw an exception.
2. The `db.exists.Vote(...)` function call is new for you. The `Prisma` binding object not only exposes functions that mirror the queries, mutations and subscriptions from the Prisma database schema. It also generates one `exists` function per type from your data model. The `exists` function takes a where filter object that allows to specify certain conditions about elements of that type. Only if the condition applies to at least one element in the database, the `exists` function returns `true`. In this case, you’re using it to verify that the requesting `User` has not yet voted for the `Link` that’s identified by `args.linkId`.
3. If `exists` returns `false`, the `createVote` will be used to create a new Vote element that’s connected to the `User` and the `Link`.
Also, don’t forget to adjust the export statement to include the vote resolver in the module:

> .../hackernews-node/src/resolvers/Mutation.js

```js
module.exports = {
  post,
  signup,
  login,
  vote,
}
```

The last task in this chapter is to add a subscription that fires when new Votes are being created. You’ll use an analogous approach as for the newLink query for that.

> Add a new field to the Subscription type of your application schema:

> .../hackernews-node/src/schema.graphql

```
type Subscription {
  newLink: LinkSubscriptionPayload
  newVote: VoteSubscriptionPayload
}
```

Next, import the VoteSubscriptionPayload from the GraphQL schema of the Prisma API into the application schema:

> .../hackernews-node/src/schema.graphql

```
# import Link, LinkSubscriptionPayload, Vote, VoteSubscriptionPayload from "./generated/prisma.graphql"
```

Finally, you need to add the subscription resolver function.

> Add the following code to `Subscription.js`:

> .../hackernews-node/src/schema.graphql

```
function newVoteSubscribe (parent, args, context, info) {
  return context.db.subscription.vote(
    { where: { mutation_in: ['CREATED'] } },
    info,
  )
}

const newVote = {
  subscribe: newVoteSubscribe
}
```
> And update the export statement of the file accordingly:

> .../hackernews-node/src/resolvers/Subscription.js

```js
module.exports = {
  newLink,
  newVote,
}
```

All right, that’s it! You can now test the implementation of your `newVote` subscription.

You can use the following subscription for that:

```
 subscription {
  newVote {
    node {
      link {
        url
        description
      }
      user {
        name
        email
      }
    }
  }
}
```

If you’re unsure about writing one yourself, here’s a sample `vote` mutation you can use. You’ll need to replace the `__LINK_ID__` placeholder with the `id` of an actual `Link` from your database. Also, make sure that you’re authenticated when sending the mutation.

```
 mutation {
  vote(linkId: "__LINK_ID__") {
    link {
      url
      description
    }
    user {
      name
      email
    }
  }
}
 ```

![img](https://imgur.com/ii2X4Yc.png)

 > Q&A 

 Q : Which of the following statements is true? <br>
 A : The 'node' field of a subscription is always null for DELETED-mutations

 --- 

## Filtering, Pagination & Sorting

This is the last section of the tutorial where you’ll implement the finishing touches on your API. The goal is to allow clients to constrain the list of `Link` elements returned by the `feed` query by providing filtering and pagination parameters.

># Filtering

Thanks to Prisma, you’ll be able to implement filtering capabilities to your API without major effort. Similar to the previous chapters, the heavy-lifting of query resolution will be performed by the powerful Prisma engine. All you need to do is delegate incoming queries to it.

The first step is to think about the filters you want to expose through your API. In your case, the feed query in your API will accept a filter string. The query then should only return the Link elements where the url or the `description` contain that filter string.

> Go ahead and add the `filter` string to the `feed` query in your application schema:

> .../hackernews-node/src/schema.graphql

```
type Query {
  info: String!
  feed(filter: String): [Link!]!
}
```

Next, you need to update the implementation of the `feed` resolver to account for the new parameter clients can provide.

> Open `src/resolvers/Query.js` and update the `feed` resolver to look as follows:

> .../hackernews-node/src/resolvers/Query.js

```js
function feed(parent, args, context, info) {
  const where = args.filter
    ? {
        OR: [
          { url_contains: args.filter },
          { description_contains: args.filter },
        ],
      }
    : {}

  return context.db.query.links({ where }, info)
}
```

If no `filter` string is provided, then the `where` object will be just an empty object and no filtering conditions will be applied by the Prisma engine when it returns the response for the `links` query.

In case there is a `filter` carried by the incoming `args`, you’re constructing a `where` object that expresses our two filter conditions from above. This `where` argument is used by Prisma to filter out those Link elements that don’t adhere to the specified conditions.

Notice that the the `Prisma` binding object translates the above function call into a GraphQL query that will look somewhat similar to this. This query is sent by the Yoga server to the Prisma API and resolved there:

```
 query ($filter: String) {
  links(where: {
    OR: [{ url_contains: $filter }, { description_contains: $filter }]
  }) {
    id
    url
    description
  }
}
```

> **Note**: You can learn more about Prisma’s filtering capabilities in the [docs](https://www.prisma.io/docs/reference/prisma-api/queries-ahwee4zaey#filtering-by-field). Another way explore those is to use the Playground of the Prisma API and read the schema documentation for the `where` argument or experiment directly by using the autocompletion features of the Playground.
> ![img](https://imgur.com/PjyLATP.png)


That’s it already for the filtering functionality! Go ahead and test your filter API - here’s a sample query you can use:

```
 query {
  feed(filter: "Prisma") {
    id
    description
    url
  }
}
```
![img](https://imgur.com/1EQsPKc.png)

> Pagination

Pagination is a tricky topic in API design. On a high-level, there are two major approaches how it can be tackled:

- **Limit-Offset**: Request a specific chunk of the list by providing the indices of the items to be retrieved (in fact, you’re mostly providing the start index (offset) as well as a count of items to be retrieved (limit)).
- **Cursor-based**: This pagination model is a bit more advanced. Every element in the list is associated with a unique ID (the cursor). Clients paginating through the list then provide the cursor of the starting element as well as a count of items to be retrieved.

Prisma supports both pagination approaches (read more in the [docs](https://www.prisma.io/docs/reference/prisma-api/queries-ahwee4zaey#pagination)). In this tutorial, you’re going to implement limit-offset pagination.

> Note: You can read more about the ideas behind both pagination approaches [here](https://dev-blog.apollodata.com/understanding-pagination-rest-graphql-and-relay-b10f835549e7).

Limit and offset are called differently in the Prisma API:

- The limit is called `first`, meaning you’re grabbing the first x elements after a provided start index. Note that you also have a `last` argument available which correspondingly returns the last x elements.
- The start index is called `skip`, since you’re skipping that many elements in the list before collecting the items to be returned. If `skip` is not provided, it’s 0 by default. The pagination then always starts from the beginning of the list (or the end in case you’re using `last`).


So, go ahead and add the skip and last arguments to the feed query.

> Open your application schema and adjust the `feed` query to accept `skip` and `first` arguments:

> .../hackernews-node/src/schema.graphql

```
type Query {
  info: String!
  feed(filter: String, skip: Int, first: Int): [Link!]!
}
```
Now, on to the resolver implementation.

> In `src/resolvers/Query.js`, adjust the implementation of the `feed` resolver:

> .../hackernews-node/src/resolvers/Query.js

```js
function feed(parent, args, context, info) {
  const where = args.filter
    ? {
        OR: [
          { url_contains: args.filter },
          { description_contains: args.filter },
        ],
      }
    : {}

  return context.db.query.links(
    { where, skip: args.skip, first: args.first },
    info,
  )
}
```

Really all that’s changing here is that the invokation of the `links` query now receives two additional arguments which might be carried by the incoming `args` object. Again, Prisma will do the hard work for us 🙏

You can test the pagination API with the following query which returns the second `Link` from the list:

```
 query {
  feed(
    first: 1
    skip: 1
  ) {
    id
    description
    url
  }
}
```

![img](https://imgur.com/fhkKct7.png)

> Sorting

With Prisma, it is possible to return lists of elements that are sorted (ordered) according to specific criteria. For example, you can order the list of `Links` alphabetically by their `url` or `description`. For the Hackernews API, you’ll leave it up to the client to decide how exactly it should be sorted and thus include all the ordering options from the Prisma API in the API of your Yoga server. You can do so by directly referencing the LinkOrderByInput enum from the Prisma database schema. Here is what it looks like:

> .../hackernews-node/src/generated/prisma.graphql

```
enum LinkOrderByInput {
  id_ASC
  id_DESC
  description_ASC
  description_DESC
  url_ASC
  url_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}
```

It represents the various ways how the list of Link elements can be sorted.

> Open your application schema and import the `LinkOrderByInput` enum from the Prisma database schema:

> .../hackernews-node/src/schema.graphql

```
# import Link, LinkSubscriptionPayload, Vote, VoteSubscriptionPayload, LinkOrderByInput from "./generated/prisma.graphql"
```

Then, adjust the `feed` query again to include the `orderBy` argument:

> .../hackernews-node/src/schema.graphql

```
type Query {
  info: String!
  feed(filter: String, skip: Int, first: Int, orderBy: LinkOrderByInput): [Link!]!
}
```

The implementation of the resolver is similar to what you just did with the pagination API.

> Update the implementation of the `feed` resolver in `src/resolvers/Query.js` and pass the `orderBy` argument along to Prisma:

> .../hackernews-node/src/resolvers/Query.js

```js
function feed(parent, args, context, info) {
  const where = args.filter
    ? {
        OR: [
          { url_contains: args.filter },
          { description_contains: args.filter },
        ],
      }
    : {}

  return context.db.query.links(
    { where, skip: args.skip, first: args.first, orderBy: args.orderBy },
    info,
  )
}
```

Awesome! Here’s a query that sorts the returned links by their creation dates:

```
 query {
  feed(orderBy: createdAt_ASC) {
    id
    description
    url
  }
}
```

> Returning the total amount of `Link` elements

The last thing you’re going to implement for your Hackernews API is the information how many `Link` elements are currently stored in the database. To do so, you’re going to refactor the `feed` query a bit and create a new type to be returned by your API: `Feed`.

> Add the new `Feed` type to your application schema. Then also adjust the return type of the `feed` query accordingly:

> .../hackernews-node/src/schema.graphql

```
type Query {
  info: String!
  feed(filter: String, skip: Int, first: Int, orderBy: LinkOrderByInput): Feed!
}

type Feed {
  links: [Link!]!
  count: Int!
}
```

> Now, go ahead and adjust the `feed` resolver again:

> .../hackernews-node/src/resolvers/Query.js
```js
async function feed(parent, args, context, info) {
  const where = args.filter
    ? {
        OR: [
          { url_contains: args.filter },
          { description_contains: args.filter },
        ],
      }
    : {}

  // 1
  const queriedLinks = await context.db.query.links(
    { where, skip: args.skip, first: args.first, orderBy: args.orderBy },
    `{ id }`,
  )

  // 2
  const countSelectionSet = `
    {
      aggregate {
        count
      }
    }
  `

  const linksConnection = await context.db.query.linksConnection({}, countSelectionSet)

  // 3
  return {
    count: linksConnection.aggregate.count,
    linkIds: queriedLinks.map(link => link.id),
  }
}
```

1. You’re first using the provided filtering, ordering and pagination arguments to retrieve a number of Link elements. This is similar to what you did before except that you’re now hardcoding the selection set of the query again and only retrieve the `id` fields of the queried `Links`. In fact, if you tried to pass info here, the API would throw an error (read [this](https://imgur.com/fhkKct7.png) article to understand why).
2. Next, you’re using the `linksConnection` query from the Prisma database schema to retrieve the total number of `Link` elements currently stored in the database. You’re hardcoding the selection set to return the `count` of elements which can be retrieved via the `aggregate` field.
3. The `count` can be returned directly. The `links` that are specified on the `Feed` type are not yet returned - this will only happen at the next resolver level that you still need to implement. Notice that because you’re returning the `linkIds` from this resolver level, the next resolver in the resolver chain will have access to these.

The last step now is to implement the resolver for the `Feed` type.

> Create a new file inside `src/resolvers` and call it `Feed.js`:

> .../hackernews-node
```bash
$ touch src/resolvers/Feed.js
```

> Now, add the following code to it:

> .../hackernews-node/src/resolvers/Feed.js

```js
function links(parent, args, context, info) {
  return context.db.query.links({ where: { id_in: parent.linkIds } }, info)
}

module.exports = {
  links,
}
```

Here is where the `links` field from the `Feed` type actually gets resolved. As you can see, the incoming parent argument is carrying the `linkIds` which were returned on the previous resolver level.

The last step is to include that new resolver when instantiating the `GraphQLServer`.

> In `index.js`, first import the `Feed` resolver at the top of the file:

> .../hackernews-node/src/index.js

```js
const Feed = require('./resolvers/Feed')
```

> Then, include it in the `resolvers` object:

> .../hackernews-node/src/index.js
```js
const resolvers = {
  Query,
  Mutation,
  AuthPayload,
  Subscription,
  Feed
}
```
You can now test the revamped feed query as follows:

```
 query {
  feed {
    count
    links {
      id
      description
      url
    }
  }
}
```

![img](https://imgur.com/x2z3lLU.png)

> Q&A

Q : Which arguments are typically used to paginate through a list in the Prisma API using limit-offset pagination?<br>
A : skip & first

--- 

## Summary

In this tutorial, you learned how to build a GraphQL server from scratch. The stack you used was based on [Node.js](https://nodejs.org/en/), [graphql-yoga](https://github.com/graphcool/graphql-yoga) and [Prisma](https://www.prisma.io/).

`graphql-yoga` is a fast and simple GraphQL server library built on top of [Express.js](https://expressjs.com/). It comes with several features, such as out-of-the-box support for [GraphQL Playgrounds](https://github.com/graphcool/graphql-playground) and realtime GraphQL subscriptions.

The Yoga server is consuming a database layer that’s provided by Prisma. The connection between Prisma and the Yoga server is implemented via `Prisma bindings`.

You also learned how to leverage additional tools to improve your development workflows, such as [graphql-config](https://github.com/graphcool/graphql-config) or the [GraphQL CLI](https://github.com/graphql-cli/graphql-cli).

If you want to dive deeper and become part of the awesome GraphQL community, here are a few resource and community recommendations for you:

- [GraphQL Boilerplates](https://github.com/graphql-boilerplates/node-graphql-server): Starter kits for your next project (backend-only and fullstack)
- [Prisma Blog](https://blog.graph.cool/): The blog regularly features new and interesting content about GraphQL, from community news to technical deep dives and various tutorials.
- [GraphQL Weekly](https://graphqlweekly.com/): A weekly GraphQL newsletter with news from the GraphQL ecosystem
- [GraphQL Radio](https://graphqlradio.com/): A podcast where active members from the GraphQL community are interviewed about their work
- [GraphQL Europe](https://www.graphql-europe.org/): Europe’s biggest gathering of GraphQL enthusiasts happening in the heart of Berlin
- [Prisma Slack](https://slack.graph.cool/): A Slack team with vivid discussions around everything GraphQL & Prisma
- [Graphcool](https://www.graph.cool/)