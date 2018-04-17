# GraphQL Tutorial

**Resouce**

* Official Site : [GraphQL](http://graphql.org/)
* Tutorial Site : [howtographql](https://www.howtographql.com/)

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

1.  Increased mobile usage creates need for efficient data loading

Increased mobile usage, low-powered devices and sloppy networks were the initial reasons why Facebook developed GraphQL. GraphQL minimizes the amount of data that needs to be transferred over the network and thus majorly improves applications operating under these conditions.

2.  Variety of different frontend frameworks and platforms

The heterogeneous landscape of frontend frameworks and platforms that run client applications makes it difficult to build and maintain one API that would fit the requirements of all. With GraphQL, each client can access precisely the data it needs.

3.  Fast development & expectation for rapid feature development
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

* sandbox environment : [graphql-up](https://github.com/graphcool/graphql-up)

In this chapter, you’ll learn about some fundamental language constructs of GraphQL. That includes a first glimpse at the syntax for defining types as well as sending queries and mutations. We also prepared a sandbox environment for you, based on [graphql-up](https://github.com/graphcool/graphql-up), that you can use to experiment with what you learn.

### The Schema Definition Language (SDL)

GraphQL has its own type system that’s used to define the schema of an API. The syntax for writing schemas is called Schema Definition Language (SDL).

Here is an example how we can use the SDL to define a simple type called `Person`:

```
type Person {
  name: String!
  age: Int!
}
```

This type has two fields, they’re called `name` and `age` and are respectively of type `String` and `Int`. The ! following the type means that this field is required.

It’s also possible to express relationships between types. In the example of a blogging application, a `Person` could be associated with a `Post`:

```
type Post {
  title: String!
  author: Person!
}
```

Conversely, the other end of the relationship needs to be placed on the `Person` type:

```
type Person {
  name: String!
  age: Int!
  posts: [Post!]!
}
```

Note that we just created a one-to-many-relationship between `Person` and `Post` since the `posts` field on `Person` is actually an array of posts.

### Fetching Data with Queries

When working with REST APIs, data is loaded from specific endpoints. Each endpoint has a clearly defined structure of the information that it returns. This means that the data requirements of a client are effectively encoded in the URL that it connects to.

The approach that’s taken in GraphQL is radically different. Instead of having multiple endpoints that return fixed data structures, GraphQL APIs typically only expose a single endpoint. This works because the structure of the data that’s returned is not fixed. Instead, it’s completely flexible and lets the client decide what data is actually needed.

That means that the client needs to send more information to the server to express its data needs - this information is called a query.

#### Basic Queries

Let’s take a look at an example query that a client could send to a server:

```
{
  allPersons {
    name
  }
}
```

The `allPersons` field in this query is called the root field of the query. Everything that follows the root field, is called the payload of the query. The only field that’s specified in this query’s payload is `name`.

This query would return a list of all persons currently stored in the database. Here’s an example response:

```json
{
  "allPersons": [{ "name": "Johnny" }, { "name": "Sarah" }, { "name": "Alice" }]
}
```

Notice that each person only has the `name` in the response, but the `age` is not returned by the server. That’s exactly because `name` was the only field that was specified in the query.

If the client also needed the persons’ `age`, all it has to do is slightly adjust the query and include the new field in the query’s payload:

```
{
  allPersons {
    name
    age
  }
}
```

One of the major advantages of GraphQL is that it allows for naturally querying nested information. For example, if you wanted to load all the `posts` that a `Person` has written, you could simply follow the structure of your types to request this information:

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

In GraphQL, each field can have zero or more arguments if that’s specified in the schema. For example, the `allPersons` field could have a `last` parameter to only return up to a specific number of persons. Here’s what a corresponding query would look like:

```
{
  allPersons(last: 2) {
    name
  }
}
```

### Writing Data with Mutations

Next to requesting information from a server, the majority of applications also need some way of making changes to the data that’s currently stored in the backend. With GraphQL, these changes are made using so-called mutations. There generally are three kinds of mutations:

* creating new data
* updating existing data
* deleting existing data

Mutations follow the same syntactical structure as queries, but they always need to start with the `mutation` keyword. Here’s an example for how we might create a new `Person`:

```
mutation {
  createPerson(name: "Bob", age: 36) {
    name
    age
  }
}
```

Notice that similar to the query we wrote before, the mutation also has a root field - in this case it’s called `createPerson`. We also already learned about the concepts of arguments for fields. In this case, the `createPerson` field takes two arguments that specify the new person’s `name` and `age`.

Like with a query, we’re also able to specify a payload for a mutation in which we can ask for different properties of the new `Person` object. In our case, we’re asking for the `name` and the `age` - though admittedly that’s not super helpful in our example since we obviously already know them as we pass them into the mutation. However, being able to also query information when sending mutations can be a very powerful tool that allows you to retrieve new information from the server in a single roundtrip!

The server response for the above mutation would look as follows:

```json
"createPerson": {
  "name": "Bob",
  "age": "36",
}
```

One pattern you’ll often find is that GraphQL types have unique IDs that are generated by the server when new objects are created. Extending our `Person` type from before, we could add an `id` like this:

```
type Person {
  id: ID!
  name: String!
  age: Int!
}
```

Now, when a new `Person` is created, you could directly ask for the id in the payload of the mutation, since that is information that wasn’t available on the client beforehand:

```
mutation {
  createPerson(name: "Alice", age: 36) {
    id
  }
}
```

### Realtime Updates with Subscriptions

Another important requirement for many applications today is to have a realtime connection to the server in order to get immediately informed about important events. For this use case, GraphQL offers the concept of subscriptions.

When a client subscribes to an event, it will initiate and hold a steady connection to the server. Whenever that particular event then actually happens, the server pushes the corresponding data to the client. Unlike queries and mutations that follow a typical “request-response-cycle”, subscriptions represent a stream of data sent over to the client.

Subscriptions are written using the same syntax as queries and mutations. Here’s an example where we subscribe on events happening on the `Person` type:

```
subscription {
  newPerson {
    name
    age
  }
}
```

After a client sent this subscription to a server, a connection is opened between them. Then, whenever a new mutation is performed that creates a new `Person`, the server sends the information about this person over to the client:

```json
{
  "newPerson": {
    "name": "Jane",
    "age": 23
  }
}
```

### Defining a Schema

Now that you have a basic understanding of what queries, mutations, and subscriptions look like, let’s put it all together and learn how you can write a schema that would allow you to execute the examples you’ve seen so far.

The schema is one of the most important concepts when working with a GraphQL API. It specifies the capabilities of the API and defines how clients can request the data. It is often seen as a contract between the server and client.

Generally, a schema is simply a collection of GraphQL types. However, when writing the schema for an API, there are some special root types:

```
type Query { ... }
type Mutation { ... }
type Subscription { ... }
```

The `Query`, `Mutation`, and `Subscription` types are the entry points for the requests sent by the client. To enable the `allPersons`-query that we saw before, the `Query` type would have to be written as follows:

```
type Query {
  allPersons: [Person!]!
}
```

`allPersons` is called a root field of the API. Considering again the example where we added the `last` argument to the `allPersons` field, we’d have to write the `Query` as follows:

```
type Query {
  allPersons(last: Int): [Person!]!
}
```

Similarly, for the `createPerson`-mutation, we’ll have to add a root field to the `Mutation` type:

```
type Mutation {
  createPerson(name: String!, age: Int!): Person!
}
```

Notice that this root field takes two arguments as well, the `name` and the `age` of the new `Person`.

Finally, for the subscriptions, we’d have to add the `newPerson` root field:

```
type Subscription {
  newPerson: Person!
}
```

Putting it all together, this is the full schema for all the queries and mutation that you have seen in this chapter:

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

* [GraphQL Server Basics (Part I): GraphQL Schemas, TypeDefs & Resolvers Explained](https://blog.graph.cool/graphql-server-basics-the-schema-ac5e2950214e)
* [GraphQL Server Basics (Part II): The Network Layer](https://blog.graph.cool/graphql-server-basics-the-network-layer-51d97d21861)
* [GraphQL Server Basics (Part III): Demystifying the info argument in GraphQL resolvers](https://blog.graph.cool/graphql-server-basics-demystifying-the-info-argument-in-graphql-resolvers-6f26249f613a)

> Q&A

Q : What are GraphQL subscriptions used for? <br>
A : Event-based realtime functionality

---

## Big Picture (Architecture)

Resource

* [GraphQL Document](https://facebook.github.io/graphql/)
* [GraphQL Code](http://graphql.org/code/)
* [Service Graphcool](http://www.graph.cool/)

GraphQL has been released only as a specification. This means that GraphQL is in fact not more than a [long document](https://facebook.github.io/graphql/) that describes in detail the behaviour of a GraphQL server.

If you want to use GraphQL yourself, you’ll have to go and build that GraphQL server yourself. You can do that in any programming language of your choice (e.g. based on one of the [available reference implementations](http://graphql.org/code/)) or by using a service like [Graphcool](http://www.graph.cool/) that provides a powerful GraphQL API out-of-the-box.

### Use Cases

In this section, we’ll walk you through 3 different kinds of architectures that include a GraphQL server:

1.  GraphQL server with a connected database
2.  GraphQL server that is a thin layer in front of a number of third party or legacy systems and integrates them through a single GraphQL API
3.  A hybrid approach of a connected database and third party or legacy systems that can all be accessed through the same GraphQL API
    All three architectures represent major use cases of GraphQL and demonstrate the flexibility in terms of the context where it can be used.

#### 1. GraphQL server with a connected database

This architecture will be the most common for greenfield projects. In the setup, you have a single (web) server that implements the GraphQL specification. When a query arrives at the GraphQL server, the server reads the query’s payload and fetches the required information from the database. This is called resolving the query. It then constructs the response object [as described in the official specification](https://facebook.github.io/graphql/#sec-Response) and returns it to the client.

It’s important to note that GraphQL is actually transport-layer agnostic. This means it can potentially be used with any available network protocol. So, it is potentially possible to implement a GraphQL server based on TCP, WebSockets, etc.

GraphQL also doesn’t care about the database or the format that is used to store the data. You could use a SQL database like [AWS Aurora](https://aws.amazon.com/rds/aurora) or a NoSQL database like [MongoDB](https://www.mongodb.com/).

<figure><img src='https://imgur.com/kC0cFk7.png'><figcaption>A standard greenfield architecture with one GraphQL server that connects to a single database.</figcaption></figure>

#### 2. GraphQL layer that integrates existing systems

Another major use case for GraphQL is the integration of multiple existing systems behind a single, coherent GraphQL API. This is particularly compelling for companies with legacy infrastructures and many different APIs that have grown over years and now impose a high maintenance burden. One major problem with these legacy systems is that they make it practically impossible to build innovative products that need access to multiple systems.

In that context, GraphQL can be used to unify these existing systems and hide their complexity behind a nice GraphQL API. This way, new client applications can be developed that simply talk to the GraphQL server to fetch the data they need. The GraphQL server is then responsible for fetching the data from the existing systems and package it up in the GraphQL response format.

Just like in the previous architecture where the GraphQL server didn’t care about the type of database being used, this time it doesn’t care about the data sources that it needs to fetch the data that’s needed to resolve a query.

<figure><img src='https://imgur.com/168FvP4.png'><figcaption>GraphQL allows you to hide the complexity of existing systems, such as microservices, legacy infrastructures or third-party APIs behind a single GraphQL interface.</figcaption></figure>

#### 3. Hybrid approach with connected database and integration of existing system

Finally, it’s possible to combine the two approaches and build a GraphQL server that has a connected database but still talks to legacy or third—party systems.

When a query is received by the server, it will resolve it and either retrieve the required data from the connected database or some of the integrated APIs.

<figure><img src='https://imgur.com/oOVYriG.png'><figcaption>Both approaches can also be combined and the GraphQL server can fetch data from a single database as well as from an existing system - allowing for complete flexibility and pushing all data management complexity to the server.</figcaption></figure>

### Resolver Functions

But how do we gain this flexibility with GraphQL? How is it that it’s such a great fit for these very different kinds of use cases?

As you learned in the previous chapter, the payload of a GraphQL query (or mutation) consists of a set of fields. In the GraphQL server implementation, each of these fields actually corresponds to exactly one function that’s called a resolver. The sole purpose of a [resolver](http://graphql.org/learn/execution/#root-fields-resolvers) function is to fetch the data for its field.

When the server receives a query, it will call all the functions for the fields that are specified in the query’s payload. It thus resolves the query and is able to retrieve the correct data for each field. Once all resolvers returned, the server will package data up in the format that was described by the query and send it back to the client.

<figure><img src='https://imgur.com/cP2i8Da.png'><figcaption>Each field in the query corresponds to a resolver function. The GraphQL calls all required resolvers when a query comes in to fetch the specified data.</figcaption></figure>

### GraphQL Client Libraries

GraphQL is particularly great for frontend developers since it completely eliminates many of the inconveniences and shortcomings that are experienced with REST APIs, such as over- and underfetching. Complexity is pushed to the server-side where powerful machines can take care of the heavy computation work. The client doesn’t have to know where the data that it fetches is actually coming from and can use a single, coherent and flexible API.

Let’s consider the major change that’s introduced with GraphQL in going from a rather imperative data fetching approach to a purely declarative one. When fetching data from a REST API, most applications will have to go through the following steps:

1.  construct and send HTTP request (e.g. with fetch in Javascript)
2.  receive and parse server response
3.  store data locally (either simply in memory or persistent)
4.  display data in the UI

With the ideal declarative data fetching approach, a client shouldn’t be doing more than the following two steps:

1.  describe data requirements
2.  display data in UI

All the lower-level networking tasks as well as storing the data should be abstracted away and the declaration of data dependencies should be the dominant part.

This is precisely what GraphQL client libraries like Relay or Apollo will enable you to do. They provide the abstraction that you need to be able to focus on the important parts of your application rather than having to deal with the repetitive implementation of infrastructure.

> Q&A

Q : What is a resolver function? <br>
A : A function on a GraphQL server that's responsible for fetching the data for a single field

---

## Advanced Tutorial - Clients

Working with a GraphQL API on the frontend is a great opportunity to develop new abstractions and help implement common functionality on the client-side. Let’s consider some “infrastructure” features that you probably want to have in your app:

* directly sending queries and mutations without constructing HTTP requests
* view-layer integration
* caching
* validating and optimizing queries based on the schema

Of course, nothing stops you from using plain HTTP to fetch your data and then shifting all the bits yourself until the right information ends up in your UI. But GraphQL provides the ability to abstract away a lot of the manual work you’d usually have to do during that process and lets you focus on the real important parts of your app! In the following, we’ll discuss in a bit more detail what these tasks are.

> There are two major GraphQL clients available at the moment. The first one is [Apollo Client](https://github.com/apollographql/apollo-client), which is a community-driven effort to build a powerful and flexible GraphQL client for all major development platforms. The second one is called [Relay](https://facebook.github.io/relay/) and it is Facebook’s homegrown GraphQL client that heavily optimizes for performance and is only available on the web.

### Directly Sending Queries and Mutations

A major benefit of GraphQL is that it allows you to fetch and update data in a declarative manner. Put differently, we climb up one step higher on the API abstraction ladder and don’t have to deal with low-level networking tasks ourselves anymore.

When you previously used plain HTTP (like `fetch` in Javascript or `NSURLSession` on iOS) to load data from an API, all you need to do with GraphQL is write a query where you declare your data requirements and let the system take care of sending the request and handling the response for you. This is precisely what a GraphQL client will do.

### View Layer Integrations & UI updates

Once the server response was received and handled by the GraphQL client, the requested data somehow needs to end up in your UI. Depending on the platforms and frameworks you’re developing with, there will be different approaches how UI updates are handled in general.

Taking React as an example, GraphQL clients use the concept of [higher-order components](https://reactjs.org/docs/higher-order-components.html) to fetch the needed data under the hood and make it available in the props of your components. In general, the declarative nature of GraphQL ties in particularly well with [functional reactive programming](https://en.wikipedia.org/wiki/Functional_reactive_programming) techniques. The two can form a powerful combination where a view simply declares its data dependencies and the UI is wired up with an FRP layer of your choice.

### Caching Query Results: Concepts and Strategies

In the majority of applications, you’ll want to maintain a cache of the data that was previously fetched from the server. Having information cached locally is essential to provide a fluent user experience and takes the load off your users’ data plans.

Generally, when caching data, the intuition is to put information that’s fetched remotely into a local store from where it can be retrieved later on. With GraphQL, the naive approach would be to simply put the results of GraphQL queries into the store and whenever that exact same query is executed again, just return the previously stored data. It turns out that this approach is very inefficient for most applications.

A more beneficial approach is to normalize the data beforehand. That means that the (potentially nested) query result gets flattened and the store will only contain individual records that can be referenced with a globally unique ID. If you want to learn more about this, the [Apollo blog](https://dev-blog.apollodata.com/the-concepts-of-graphql-bc68bd819be3) has a great write-up on the topic.

### Build-time Schema Validation & Optimizations

Since the schema contains all information about what a client can potentially do with a GraphQL API, there is a great opportunity to validate and potentially optimize the queries that a client wants to send already at build-time.

When the build environment has access to the schema, it can essentially parse all the GraphQL code that’s located in the project and compare it against the information from the schema. This catches typos and other errors before an application gets into the hands of actual users where the consequences of an error would be a lot more drastic.

### Colocating Views and Data Dependencies

A powerful concept of GraphQL is that it allows you to have UI code and data requirements side-by-side. The tight coupling of views and their data dependencies greatly improves the developer experience. The mental overhead of thinking about how the right data ends up in the right parts of the UI is eliminated.

How well colocation works depends on the platform you’re developing on. For example in Javascript applications, it’s possible to actually put data dependencies and UI code into the same file. In Xcode, the Assistant Editor can be used to work on view controllers and graphql code at the same time.

> Q&A

Q : What does a GraphQL client usually do before caching the results of a query? <br>
A : Normalizing the data

---

## Server

GraphQL is often explained as a frontend-focused API technology because it enables clients to get data in a much nicer way than before. But the API itself is, of course, implemented on the server side. There are a lot of benefits to be had on the server as well because GraphQL enables the server developer to focus on describing the data available rather than implementing and optimizing specific endpoints.

### GraphQL execution

GraphQL doesn’t just specify a way to describe schemas and a query language to retrieve data from those schemas, but an actual execution algorithm for how those queries are transformed into results. This algorithm is quite simple at its core: The query is traversed field by field, executing “resolvers” for each field. So, let’s say we have the following schema:

```
type Query {
  author(id: ID!): Author
}

type Author {
  posts: [Post]
}

type Post {
  title: String
  content: String
}
```

The following is a query we would be able to send to a server with that schema:

```
query {
  author(id: "abc") {
    posts {
      title
      content
    }
  }
}
```

The first thing to see is that every field in the query can be associated with a type:

```
query: Query {
  author(id: "abc"): Author {
    posts: [Post] {
      title: String
      content: String
    }
  }
}
```

Now, we can easily find the resolvers in our server to run for every field. The execution starts at the query type and goes breadth-first. This means we run the resolver for `Query.author` first. Then, we take the result of that resolver, and pass it into its child, the resolver for `Author.posts`. At the next level, the result is a list, so in that case, the execution algorithm runs on one item at a time. So the execution works like this:

```
Query.author(root, { id: 'abc' }, context) -> author
Author.posts(author, null, context) -> posts
for each post in posts
  Post.title(post, null, context) -> title
  Post.content(post, null, context) -> content
```

At the end, the execution algorithm puts everything together into the correct shape for the result and returns that.

One thing to note is that most GraphQL server implementations will provide “default resolvers” - so you don’t have to specify a resolver function for every single field. In GraphQL.js, for example, you don’t need to specify resolvers when the parent object of the resolver contains a field with the correct name.

Read more in-depth about GraphQL execution in the "[GraphQL Explained](https://dev-blog.apollodata.com/graphql-explained-5844742f195e)" post on the Apollo blog.

### Batched Resolving

One thing you might notice about the execution strategy above is that it’s somewhat naive. For example, if you have a resolver that fetches from a backend API or database, that backend might get called many times during the execution of one query. Let’s imagine we wanted to get the authors of several posts, like so:

```
query {
  posts {
    title
    author {
      name
      avatar
    }
  }
}
```

If these are posts on a blog, it’s likely that many of the posts will have the same authors. So if we need to make an API call to get each author object, we might accidentally make multiple requests for the same one. For example:

```js
fetch("/authors/1");
fetch("/authors/2");
fetch("/authors/1");
fetch("/authors/2");
fetch("/authors/1");
fetch("/authors/2");
```

How do we solve this? By making our fetching a bit smarter. We can wrap our fetching function in a utility that will wait for all of the resolvers to run, then make sure to only fetch each item once:

```js
authorLoader = new AuthorLoader();

// Queue up a bunch of fetches
authorLoader.load(1);
authorLoader.load(2);
authorLoader.load(1);
authorLoader.load(2);

// Then, the loader only does the minimal amount of work
fetch("/authors/1");
fetch("/authors/2");
```

Can we do even better? Yes, if our API supports batched requests, we can do only one fetch to the backend, like so:

```js
fetch("/authors?ids=1,2");
```

This can also be encapsulated in the loader above.

In JavaScript, the above strategies can be implemented using a utility called [DataLoader](https://github.com/facebook/dataloader), and there are similar utilities for other languages.

> Q&A

Q : Which statement about GraphQL servers is correct? <br>
A : Resolvers can be defined on a field granularity

---

## Tooling and Ecosystem

As you probably realized already, the GraphQL ecosystem is growing at an amazing speed right now. One of the reasons that this is happening is because GraphQL makes it really easy for us to develop great tools. In this section, we will see why this is the case, and a few amazing tools we already have in the ecosystem.

If you are familiar with GraphQL basics, you probably know how GraphQL’s Type System allows us to quickly define the surface area of our APIs. It allows developers to clearly define the capabilities of an API, but also to validate incoming queries against a schema.

An amazing thing with GraphQL is that these capabilities are not only known to the server. GraphQL allows clients to ask a server for information about its schema. GraphQL calls this **introspection**.

### Introspection

The designers of the schema already know what the schema looks like but how can clients discover what is accessible through a GraphQL API? We can ask GraphQL for this information by querying the `__schema` meta-field, which is always available on the root type of a Query per the spec.

```
query {
  __schema {
    types {
      name
    }
  }
}
```

Take this schema definition for example:

```
type Query {
  author(id: ID!): Author
}

type Author {
  posts: [Post!]!
}

type Post {
  title: String!
}
```

If we were to send the introspection query mentioned above, we would get the following result:

```json
{
  "data": {
    "__schema": {
      "types": [
        {
          "name": "Query"
        },
        {
          "name": "Author"
        },
        {
          "name": "Post"
        },
        {
          "name": "ID"
        },
        {
          "name": "String"
        },
        {
          "name": "__Schema"
        },
        {
          "name": "__Type"
        },
        {
          "name": "__TypeKind"
        },
        {
          "name": "__Field"
        },
        {
          "name": "__InputValue"
        },
        {
          "name": "__EnumValue"
        },
        {
          "name": "__Directive"
        },
        {
          "name": "__DirectiveLocation"
        }
      ]
    }
  }
}
```

As you can see, we queried for all types on the schema. We get both the object types we defined and scalar types. We can even introspect the introspection types!

There’s much more than name available on introspection types. Here’s another example:

```
{
  __type(name: "Author") {
    name
    description
  }
}
```

In this example, we query a single type using the `__type` meta-field and we ask for its name and description. Here’s the result for this query:

```json
{
  "data": {
    "__type": {
      "name": "Author",
      "description": "The author of a post."
    }
  }
}
```

As you can see, introspection is an extremely powerful feature of GraphQL, and we’ve only scratched the surface. The specification goes into much more detail about what fields and types are available in the introspection schema.

A lot of tools available in the GraphQL ecosystem use the introspection system to provide amazing features. Think of documentation browsers, autocomplete, code generation, everything is possible! One of the most useful tools you will need as you build and use GraphQL APIs uses introspection heavily. It is called **GraphiQL**.

### GraphiQL

GraphiQL is an in-browser IDE for writing, validating, and testing GraphQL queries. It features an editor for GraphQL queries, equipped with autocompletion and validation as well as a documentation explorer to quickly visualize the structure of a schema (Powered by introspection).

It is an incredibly powerful tool for development. It allows you to debug and try queries on a GraphQL server without having to write plain GraphQL queries over curl for example.

Give it a try! [http://graphql.org/swapi-graphql/](http://graphql.org/swapi-graphql/)

> Q&A

Q : What mechanism is used by most tools to discover a GraphQL server's type system? <br>
A : Introspection

---

## Security

GraphQL gives enormous power to clients. But with great power come great responsibilities 🕷.

Since clients have the possibility to craft very complex queries, our servers must be ready to handle them properly. These queries may be abusive queries from evil clients, or may simply be very large queries used by legitimate clients. In both of these cases, the client can potentially take your GraphQL server down.

There are a few strategies to mitigate these risks, which we will cover in this chapter. We will cover them in order of most simple to the most complex, and look at their pros and cons.

#### Timeout

The first strategy and the most simple one is using a simple timeout to defend against large queries. This strategy is the simplest since it does not require the server to know anything about the incoming queries. All the server knows is the maximum of time allowed for a query.

For example, a server configured with a 5 seconds timeout would stop the execution of any query that is taking more than 5 seconds to execute.

#### Timeout Pros

Simple to implement.
Most strategies will still use a timeout as a final protection

#### Timeout Cons

Damage can already be done even when the timeout kicks in.
Sometimes hard to implement. Cutting connections after a certain time may result in strange behaviours.

### Maximum Query Depth

As we covered earlier, clients using GraphQL may craft any complex query they want. Since GraphQL schemas are often cyclic graphs, this means a client could craft a query like this one:

```
query IAmEvil {
  author(id: "abc") {
    posts {
      author {
        posts {
          author {
            posts {
              author {
                # that could go on as deep as the client wants!
              }
            }
          }
        }
      }
    }
  }
}
```

What if we could prevent clients from abusing query depth like this? Knowing your schema might give you an idea of how deep a legitimate query can go. This is actually possible to implement and is often called Maximum Query Depth.

By analyzing the query document’s abstract syntax tree (AST), a GraphQL server is able to reject or accept a request based on its depth.

Take for example a server configured with a Maximum Query Depth of `3`, and the following query document. Everything within the red marker is considered too deep and the query is invalid.

<figure><img src='https://i.imgur.com/6RqfhK8.png'></figure>

Using `graphql-ruby` with the max query depth setting, we get the following result:

```json
{
  "errors": [
    {
      "message": "Query has depth of 6, which exceeds max depth of 3"
    }
  ]
}
```

#### Maximum Query Depth Pros

Since the AST of the document is analyzed statically, the query does not even execute, which adds no load on your GraphQL server.

#### Maximum Query Depth Cons

Depth alone is often not enough to cover all abusive queries. For example, a query requesting an enormous amount of nodes on the root will be very expensive but unlikely to be blocked by a query depth analyzer.

### Query Complexity

Sometimes, the depth of a query is not enough to truly know how large or expensive a GraphQL query will be. In a lot of cases, certain fields in our schema are known to be more complex to compute than others.

Query complexity allows you to define how complex these fields are, and to restrict queries with a maximum complexity. The idea is to define how complex each field is by using a simple number. A common default is to give each field a complexity of `1`. Take this query for example:

```
query {
  author(id: "abc") { # complexity: 1
    posts {           # complexity: 1
      title           # complexity: 1
    }
  }
}
```

A simple addition gives us a total of `3` for the complexity of this query. If we were to set a max complexity of `2` on our schema, this query would fail.

What if the `posts` field is actually much more complex than the `author` field? We can set a different complexity to the field. We can even set a different complexity depending on arguments! Let’s take a look at a similar query, where `posts` has a variable complexity depending on its arguments:

```
query {
  author(id: "abc") {    # complexity: 1
    posts(first: 5) {    # complexity: 5
      title              # complexity: 1
    }
  }
}
```

#### Query Complexity Pros

Covers more cases than a simple query depth.
Reject queries before executing them by statically analyzing the complexity.

#### Query Complexity Cons

Hard to implement perfectly.
If complexity is estimated by developers, how do we keep it up to date? How do we find the costs in the first place?
Mutations are hard to estimate. What if they have a side effect that is hard to measure like queuing a background job?

### Throttling

The solutions we’ve seen so far are great to stop abusive queries from taking your servers down. The problem with using them alone like this is that they will stop large queries, but won’t stop clients that are making a lot of medium sized queries!

In most APIs, a simple throttle is used to stop clients from requesting resources too often. GraphQL is a bit special because throttling on the number of requests does not really help us. Even a few queries might be too much if they are very large.

In fact, we have no idea what amount of requests is acceptable since they are defined by the clients. So what can we use to throttle clients?

#### Throttling Based on Server Time

A good estimate of how expensive a query is the server time it needs to complete. We can use this heuristic to throttle queries. With a good knowledge of your system, you can come up with a maximum server time a client can use over a certain time frame.

We also decide on how much server time is added to a client over time. This is a classic [leaky bucket algorithm](https://en.wikipedia.org/wiki/Leaky_bucket). Note that there are other throttling algorithms out there, but they are out of scope for this chapter. We will use a leaky bucket throttle in the next examples.

Let’s imagine our maximum server time (Bucket Size) allowed is set to `1000ms`, that clients gain `100ms` of server time per second (Leak Rate) and this mutation:

```
mutation {
  createPost(input: { title: "GraphQL Security" }) {
    post {
      title
    }
  }
}
```

takes on average `200ms` to complete. In reality, the time may vary but we’ll assume it always takes `200ms` to complete for the sake of this example.

It means that a client calling this operation more than 5 times within 1 second would be blocked until more available server time is added to the client.

After two seconds (`100ms` is added by second), our client could call the `createPost` a single time.

As you can see, throttling based on time is a great way to throttle GraphQL queries since complex queries will end up consuming more time meaning you can call them less often, and smaller queries may be called more often since they will be very fast to compute.

It can be good to express these throttling constraints to clients if your GraphQL API is public. In that case, server time is not always the easiest thing to express to clients, and clients cannot really estimate what time their queries will take without trying them first.

Remember the Max Complexity we talked about earlier? What if we throttled based on that instead?

#### Throttling Based on Query Complexity

Throttling based on Query Complexity is a great way to work with clients and help them respect the limits of your schema.

Let’s use the same complexity example we used in the Query Complexity section:

```
query {
  author(id: "abc") {    # complexity: 1
    posts {              # complexity: 1
      title              # complexity: 1
    }
  }
}
```

We know that this query has a cost 3 based on complexity. Just like a time throttle, we can come up with a maximum cost (Bucket Size) per time a client can use.

With a maximum cost of `9`, our clients could run this query only three times, before the leak rate forbids them to query more.

The principles are the same as our time throttle, but now communicating these limits to clients is much nicer. Clients can even calculate the costs of their queries themselves without needing to estimate server time!

The GitHub public API actually uses this approach to throttle their clients. Take a look at how they express these limits to users: [https://developer.github.com/v4/guides/resource-limitations/](https://developer.github.com/v4/guides/resource-limitations/).

### Summary

GraphQL is great to use for clients because it gives them so much more power. But that power also gives them the possibility to abuse your GraphQL server with very expensive queries.

There are many approaches to secure your GraphQL server against these queries, but none of them is bullet proof. It’s important to know what options are available and know their limits so we take the best decisions!

> Q&A

Q : Which one of these strategies is not a valid way to defend against abusive or large queries?<br>
A : Calculating query complexity
A : Maximum query depth
(A) : Adding more servers
A : Timeout

---

## Common Questions

### Is GraphQL a Database Technology?

No. GraphQL is often confused with being a database technology. This is a misconception, GraphQL is a query language for APIs - not databases. In that sense it’s database agnostic and can be used with any kind of database or even no database at all.

### Is GraphQL only for React / Javascript Developers?

No. GraphQL is an API technology so it can be used in any context where an API is required.

On the backend, a GraphQL server can be implemented in any programming language that can be used to build a web server. Next to Javascript, there are popular reference implementations for Ruby, Python, Scala, Java, Clojure, Go and .NET.

Since a GraphQL API is usually operated over HTTP, any client that can speak HTTP is able to query data from a GraphQL server.

> Note: GraphQL is actually transport layer agnostic, so you could choose other protocols than HTTP to implement your server.

### How to do Server-side Caching?

One common concern with GraphQL, especially when comparing it to REST, are the difficulties to maintain server-side cache. With REST, it’s easy to cache the data for each endpoint, since it’s sure that the structure of the data will not change.

With GraphQL on the other hand, it’s not clear what a client will request next, so putting a caching layer right behind the API doesn’t make a lot of sense.

Server-side caching still is a challenge with GraphQL. More info about caching can be found on the [GraphQL website](http://graphql.org/learn/caching/).

### How to do Authentication and Authorization?

Authentication and authorization are often confused. Authentication describes the process of claiming an identity. That’s what you do when you log in to a service with a username and password, you authenticate yourself. Authorization on the other hand describes permission rules that specify the access rights of individual users and user groups to certain parts of the system.

Authentication in GraphQL can be implemented with common patterns such as [OAuth](https://oauth.net/).

To implement authorization, it is [recommended](http://graphql.org/learn/authorization/) to delegate any data access logic to the business logic layer and not handle it directly in the GraphQL implementation. If you want to have some inspiration on how to implement authorization, you can take a look [Graphcool’s permission queries](https://www.graph.cool/blog/2017-04-25-graphql-permission-queries-oolooch8oh/).

### How to do Error Handling?
A successful GraphQL query is supposed to return a JSON object with a root field called `"data"`. If the request fails or partially fails (e.g. because the user requesting the data doesn’t have the right access permissions), a second root field called `"errors"` is added to the response:

```json
{
"data": { ... },
"errors": [ ... ]
}
```
For more details, you can refer to the [GraphQL specification](http://facebook.github.io/graphql/#sec-Errors).

### Does GraphQL Support Offline Usage?
GraphQL is a query language for (web) APIs, and in that sense by definition only works online. However, offline support on the client-side is a valid concern. The caching abilities of Relay and Apollo might already be enough for some use cases, but there isn’t a popular solution for actually persisting stored data yet. You can gain some more insights in the GitHub issues of [Relay](https://github.com/facebook/relay/issues/676) and [Apollo](https://github.com/apollographql/apollo-client/issues/424) where offline support is discussed.

> One interesting approach for offline usage and persistence can be found [here](http://www.east5th.co/blog/2017/07/24/offline-graphql-queries-with-redux-offline-and-apollo/).


> Q&A

Q : How does a GraphQL server deal with failures? <br>
A : It returns a dedicated errors object in the server response