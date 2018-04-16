# GraphQL Tutorial

**Resouce**
- Official Site : [GraphQL](http://graphql.org/)
- Tutorial Site : [howtographql](https://www.howtographql.com/)

## Introduction

[GraphQL](http://www.graphql.org/) is a new API standard that provides a more efficient, powerful and flexible alternative to REST. It was developed and [open-sourced by Facebook](https://facebook.github.io/react/blog/2015/02/20/introducing-relay-and-graphql.html) and is now maintained by a large community of companies and individuals from all over the world.

> APIs have become ubiquitous components of software infrastructures. In short, an **API** defines how a **client** can load data from a **server**.

At its core, GraphQL enables declarative data fetching where a client can specify exactly what data it needs from an API. Instead of multiple endpoints that return fixed data structures, a GraphQL server only exposes a single endpoint and responds with precisely the data a client asked for.

### GraphQL - A Query Language for APIs

Most applications today have the need to fetch data from a server where that data is stored in a database. It’s the responsibility of the API to provide an interface to the stored data that fits an application’s needs.

GraphQL is often confused with being a database technology. This is a misconception, GraphQL is a query language for APIs - not databases. In that sense it’s database agnostic and effectively can be used in any context where an API is used.

#### A more efficient Alternative to REST

> 💡 Learn more about the top reasons to use GraphQL in [this](https://blog.graph.cool/b60cfa683511) blog post.

**REST** has been a popular way to expose data from a server. When the concept of REST was developed, client applications were relatively simple and the development pace wasn’t nearly where it is today. REST thus was a good fit for many applications. However, the API landscape has radically changed over the last couple of years. In particular, there are three factors that have been challenging the way APIs are designed:

1. Increased mobile usage creates need for efficient data loading

Increased mobile usage, low-powered devices and sloppy networks were the initial reasons why Facebook developed GraphQL. GraphQL minimizes the amount of data that needs to be transferred over the network and thus majorly improves applications operating under these conditions.

2. Variety of different frontend frameworks and platforms

The heterogeneous landscape of frontend frameworks and platforms that run client applications makes it difficult to build and maintain one API that would fit the requirements of all. With GraphQL, each client can access precisely the data it needs.

3. Fast development & expectation for rapid feature development
Continuous deployment has become a standard for many companies, rapid iterations and frequent product updates are indispensable. With REST APIs, the way data is exposed by the server often needs to be modified to account for specific requirements and design changes on the client-side. This hinders fast development practices and product iterations.

### History, Context & Adoption

#### GraphQL is not only for React Developers

Facebook started using GraphQL in 2012 in their native mobile apps. Interestingly though, GraphQL has mostly been picked up to be used in the context of web technologies and has gained only little traction in the native mobile space.

The first time Facebook publicly spoke about GraphQL was at React.js Conf 2015 and shortly after announced their [plans to open source](https://reactjs.org/blog/2015/05/01/graphql-introduction.html) it. Because Facebook always used to speak about GraphQL in the context of [React](https://reactjs.org/), it took a while for non-React developers to understand that GraphQL was by no means a technology that was limited to usage with React.

#### A rapidly growing Community
In fact, GraphQL is a technology that can be used everywhere a client communicates with an API. Interestingly, other companies like [Netflix](https://medium.com/netflix-techblog) or [Coursera](https://building.coursera.org/) were working on comparable ideas to make API interactions more efficient. Coursera envisioned a similar technology to let a client specify its data requirements and Netflix even open-sourced their solution called [Falcor](https://github.com/Netflix/falcor). After GraphQL was open-sourced, Coursera completely cancelled their own efforts and hopped on the GraphQL train.

Today, GraphQL is used in production by [lots of different companies](http://graphql.org/users/) such as GitHub, Twitter, Yelp and Shopify - to name only a few.

<figure><img src='https://imgur.com/YZHGCzJ.png'><figcaption>Despite being such a young technology, GraphQL has already been widely adopted. Learn who else is using GraphQL in production.</figcaption></figure>

There are entire conferences dedicated to GraphQL such as [GraphQL Summit](https://summit.graphql.com/) or [GraphQL Europe](https://graphql-europe.org/) and more resources like the [GraphQL Radio](https://graphqlradio.com/) podcast and GraphQL [Weekly newsletter](https://graphqlweekly.com/).

> Q&A

Q : Which of these statements is true? <br>
A : GraphQL was invented by Facebook

---

## GraphQL is the better REST

### Data Fetching with REST vs GraphQL

With a REST API, you would typically gather the data by accessing multiple endpoints. In the example, these could be `/users/<id>` endpoint to fetch the initial user data. Secondly, there’s likely to be a `/users/<id>/posts` endpoint that returns all the posts for a user. The third endpoint will then be the `/users/<id>/followers` that returns a list of followers per user.

![image](https://imgur.com/VIWd5I5.png)

In GraphQL on the other hand, you’d simply send a single query to the GraphQL server that includes the concrete data requirements. The server then responds with a JSON object where these requirements are fulfilled.

![image](https://imgur.com/uY50GHz.png)

> Q&A

Q : What is a benefit of the GraphQL schema and strong type system? <br>
A : Once the schema is defined, frontend and backend teams can work independently from one another

---

## Core Concepts

**Resouce**
- sandbox environment : [graphql-up](https://github.com/graphcool/graphql-up)

### The Schema Definition Language (SDL)

GraphQL has its own type system that’s used to define the schema of an API. The syntax for writing schemas is called Schema Definition Language (SDL).

Here is an example how we can use the SDL to define a simple type called `Person`:

```
type Person {
  name: String!
  age: Int!
}
```

a Person could be associated with a `Post`:

```
type Post {
  title: String!
  author: Person!
}
```

`Person` type:

```
type Person {
  name: String!
  age: Int!
  posts: [Post!]!
}
```

### Fetching Data with Queries

#### Basic Queries

```
{
  allPersons {
    name
  }
}
```

The `allPersons` field in this query is called the root field of the query. Everything that follows the root field, is called the payload of the query. The only field that’s specified in this query’s payload is `name`.

```json
{
  "allPersons": [
    { "name": "Johnny" },
    { "name": "Sarah" },
    { "name": "Alice" }
  ]
}
```

```
{
  allPersons {
    name
    age
  }
}
```

```
{
  allPersons {
    name
    age
    posts {
      title
    }
  }
}
```

#### Queries with Arguments

```
{
  allPersons(last: 2) {
    name
  }
}
```

### Writing Data with Mutations

- creating new data
- updating existing data
- deleting existing data

create new `Person`

```
mutation {
  createPerson(name: "Bob", age: 36) {
    name
    age
  }
}
```

The server response for the above mutation would look as follows:

```json
"createPerson": {
  "name": "Bob",
  "age": "36",
}
```

```
type Person {
  id: ID!
  name: String!
  age: Int!
}
```

mutation new `Person` query

```
mutation {
  createPerson(name: "Alice", age: 36) {
    id
  }
}
```

### Realtime Updates with Subscriptions

Here’s an example where we subscribe on events happening on the Person type:

update new `Person`

```
subscription {
  newPerson {
    name
    age
  }
}
```

the server sends the information about this person over to the client:

```json
{
  "newPerson": {
    "name": "Jane",
    "age": 23
  }
}
```

### Defining a Schema

```
type Query { ... }
type Mutation { ... }
type Subscription { ... }
```
Query `allPersons`

```
type Query {
  allPersons: [Person!]!
}
```

Qeury `allPersons` with `last`

```
type Query {
  allPersons(last: Int): [Person!]!
}
```

`createPerson`-mutation

```
type Mutation {
  createPerson(name: String!, age: Int!): Person!
}
```

subscription

```
type Subscription {
  newPerson: Person!
}
```

full schema

```
type Query {
  allPersons(last: Int): [Person!]!
}

type Mutation {
  createPerson(name: String!, age: Int!): Person!
}

type Subscription {
  newPerson: Person!
}

type Person {
  name: String!
  age: Int!
  posts: [Post!]!
}

type Post {
  title: String!
  author: Person!
}
```

learn more
- [GraphQL Server Basics (Part I): GraphQL Schemas, TypeDefs & Resolvers Explained](https://blog.graph.cool/graphql-server-basics-the-schema-ac5e2950214e)
- [GraphQL Server Basics (Part II): The Network Layer](https://blog.graph.cool/graphql-server-basics-the-network-layer-51d97d21861)
- [GraphQL Server Basics (Part III): Demystifying the info argument in GraphQL resolvers](https://blog.graph.cool/graphql-server-basics-demystifying-the-info-argument-in-graphql-resolvers-6f26249f613a)

> Q&A

Q : What are GraphQL subscriptions used for? <br>
A : Event-based realtime functionality

--- 

## Big Picture (Architecture)

Resource
- [GraphQL Document](https://facebook.github.io/graphql/)
- [GraphQL Code](http://graphql.org/code/)
- [Service Graphcool](http://www.graph.cool/)

Big Picture (Architecture)
GraphQL has been released only as a specification. This means that GraphQL is in fact not more than a long document that describes in detail the behaviour of a GraphQL server.

If you want to use GraphQL yourself, you’ll have to go and build that GraphQL server yourself. You can do that in any programming language of your choice (e.g. based on one of the available reference implementations) or by using a service like Graphcool that provides a powerful GraphQL API out-of-the-box.

### Use Cases
In this section, we’ll walk you through 3 different kinds of architectures that include a GraphQL server:

GraphQL server with a connected database
GraphQL server that is a thin layer in front of a number of third party or legacy systems and integrates them through a single GraphQL API
A hybrid approach of a connected database and third party or legacy systems that can all be accessed through the same GraphQL API
All three architectures represent major use cases of GraphQL and demonstrate the flexibility in terms of the context where it can be used.

1. GraphQL server with a connected database
This architecture will be the most common for greenfield projects. In the setup, you have a single (web) server that implements the GraphQL specification. When a query arrives at the GraphQL server, the server reads the query’s payload and fetches the required information from the database. This is called resolving the query. It then constructs the response object as described in the official specification and returns it to the client.

It’s important to note that GraphQL is actually transport-layer agnostic. This means it can potentially be used with any available network protocol. So, it is potentially possible to implement a GraphQL server based on TCP, WebSockets, etc.

GraphQL also doesn’t care about the database or the format that is used to store the data. You could use a SQL database like AWS Aurora or a NoSQL database like MongoDB.

![img](https://imgur.com/kC0cFk7.png)
A standard greenfield architecture with one GraphQL server that connects to a single database.

2. GraphQL layer that integrates existing systems
Another major use case for GraphQL is the integration of multiple existing systems behind a single, coherent GraphQL API. This is particularly compelling for companies with legacy infrastructures and many different APIs that have grown over years and now impose a high maintenance burden. One major problem with these legacy systems is that they make it practically impossible to build innovative products that need access to multiple systems.

In that context, GraphQL can be used to unify these existing systems and hide their complexity behind a nice GraphQL API. This way, new client applications can be developed that simply talk to the GraphQL server to fetch the data they need. The GraphQL server is then responsible for fetching the data from the existing systems and package it up in the GraphQL response format.

Just like in the previous architecture where the GraphQL server didn’t care about the type of database being used, this time it doesn’t care about the data sources that it needs to fetch the data that’s needed to resolve a query.

![img](https://imgur.com/168FvP4.png) GraphQL allows you to hide the complexity of existing systems, such as microservices, legacy infrastructures or third-party APIs behind a single GraphQL interface.

3. Hybrid approach with connected database and integration of existing system
Finally, it’s possible to combine the two approaches and build a GraphQL server that has a connected database but still talks to legacy or third—party systems.

When a query is received by the server, it will resolve it and either retrieve the required data from the connected database or some of the integrated APIs.

![](https://imgur.com/oOVYriG.png) Both approaches can also be combined and the GraphQL server can fetch data from a single database as well as from an existing system - allowing for complete flexibility and pushing all data management complexity to the server.

### Resolver Functions

But how do we gain this flexibility with GraphQL? How is it that it’s such a great fit for these very different kinds of use cases?

As you learned in the previous chapter, the payload of a GraphQL query (or mutation) consists of a set of fields. In the GraphQL server implementation, each of these fields actually corresponds to exactly one function that’s called a resolver. The sole purpose of a [resolver](http://graphql.org/learn/execution/#root-fields-resolvers) function is to fetch the data for its field.

When the server receives a query, it will call all the functions for the fields that are specified in the query’s payload. It thus resolves the query and is able to retrieve the correct data for each field. Once all resolvers returned, the server will package data up in the format that was described by the query and send it back to the client.

<figure><img src='https://imgur.com/cP2i8Da.png'><figcaption>Each field in the query corresponds to a resolver function. The GraphQL calls all required resolvers when a query comes in to fetch the specified data.</figcaption></figure>

### GraphQL Client Libraries

GraphQL is particularly great for frontend developers since it completely eliminates many of the inconveniences and shortcomings that are experienced with REST APIs, such as over- and underfetching. Complexity is pushed to the server-side where powerful machines can take care of the heavy computation work. The client doesn’t have to know where the data that it fetches is actually coming from and can use a single, coherent and flexible API.

Let’s consider the major change that’s introduced with GraphQL in going from a rather imperative data fetching approach to a purely declarative one. When fetching data from a REST API, most applications will have to go through the following steps:

1. construct and send HTTP request (e.g. with fetch in Javascript)
2. receive and parse server response
3. store data locally (either simply in memory or persistent)
4. display data in the UI

With the ideal declarative data fetching approach, a client shouldn’t be doing more than the following two steps:

1. describe data requirements
2. display data in UI

All the lower-level networking tasks as well as storing the data should be abstracted away and the declaration of data dependencies should be the dominant part.

This is precisely what GraphQL client libraries like Relay or Apollo will enable you to do. They provide the abstraction that you need to be able to focus on the important parts of your application rather than having to deal with the repetitive implementation of infrastructure.

> Q&A

Q : What is a resolver function? <br>
A : A function on a GraphQL server that's responsible for fetching the data for a single field

---

## Advanced Tutorial - Clients

Working with a GraphQL API on the frontend is a great opportunity to develop new abstractions and help implement common functionality on the client-side. Let’s consider some “infrastructure” features that you probably want to have in your app:

- directly sending queries and mutations without constructing HTTP requests
- view-layer integration
- caching
- validating and optimizing queries based on the schema

Of course, nothing stops you from using plain HTTP to fetch your data and then shifting all the bits yourself until the right information ends up in your UI. But GraphQL provides the ability to abstract away a lot of the manual work you’d usually have to do during that process and lets you focus on the real important parts of your app! In the following, we’ll discuss in a bit more detail what these tasks are.

> There are two major GraphQL clients available at the moment. The first one is [Apollo Client](https://github.com/apollographql/apollo-client), which is a community-driven effort to build a powerful and flexible GraphQL client for all major development platforms. The second one is called Relay and it is Facebook’s homegrown GraphQL client that heavily optimizes for performance and is only available on the web.

### Directly Sending Queries and Mutations

A major benefit of GraphQL is that it allows you to fetch and update data in a declarative manner. Put differently, we climb up one step higher on the API abstraction ladder and don’t have to deal with low-level networking tasks ourselves anymore.

When you previously used plain HTTP (like `fetch` in Javascript or `NSURLSession` on iOS) to load data from an API, all you need to do with GraphQL is write a query where you declare your data requirements and let the system take care of sending the request and handling the response for you. This is precisely what a GraphQL client will do.

### View Layer Integrations & UI updates

Once the server response was received and handled by the GraphQL client, the requested data somehow needs to end up in your UI. Depending on the platforms and frameworks you’re developing with, there will be different approaches how UI updates are handled in general.

Taking React as an example, GraphQL clients use the concept of higher-order components to fetch the needed data under the hood and make it available in the props of your components. In general, the declarative nature of GraphQL ties in particularly well with functional reactive programming techniques. The two can form a powerful combination where a view simply declares its data dependencies and the UI is wired up with an FRP layer of your choice.

Caching Query Results: Concepts and Strategies
In the majority of applications, you’ll want to maintain a cache of the data that was previously fetched from the server. Having information cached locally is essential to provide a fluent user experience and takes the load off your users’ data plans.

Generally, when caching data, the intuition is to put information that’s fetched remotely into a local store from where it can be retrieved later on. With GraphQL, the naive approach would be to simply put the results of GraphQL queries into the store and whenever that exact same query is executed again, just return the previously stored data. It turns out that this approach is very inefficient for most applications.

A more beneficial approach is to normalize the data beforehand. That means that the (potentially nested) query result gets flattened and the store will only contain individual records that can be referenced with a globally unique ID. If you want to learn more about this, the Apollo blog has a great write-up on the topic.

Build-time Schema Validation & Optimizations
Since the schema contains all information about what a client can potentially do with a GraphQL API, there is a great opportunity to validate and potentially optimize the queries that a client wants to send already at build-time.

When the build environment has access to the schema, it can essentially parse all the GraphQL code that’s located in the project and compare it against the information from the schema. This catches typos and other errors before an application gets into the hands of actual users where the consequences of an error would be a lot more drastic.

Colocating Views and Data Dependencies
A powerful concept of GraphQL is that it allows you to have UI code and data requirements side-by-side. The tight coupling of views and their data dependencies greatly improves the developer experience. The mental overhead of thinking about how the right data ends up in the right parts of the UI is eliminated.

How well colocation works depends on the platform you’re developing on. For example in Javascript applications, it’s possible to actually put data dependencies and UI code into the same file. In Xcode, the Assistant Editor can be used to work on view controllers and graphql code at the same time.