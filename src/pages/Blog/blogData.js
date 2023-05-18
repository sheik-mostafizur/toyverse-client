export default [
  {
    id: 1,
    question:
      "What is an access token and refresh token? How do they work and where should we store them on the client-side?",
    answer: `
      An access token is a credential that authenticates and authorizes a user's access to protected resources. It is issued after successful login or consent and contains user information and permissions. Access tokens are used to make authorized API requests.
      
      A refresh token is a long-lived credential used to obtain a new access token when the current one expires. It allows users to stay logged in without re-authenticating. Refresh tokens are securely stored on the client-side.
      
      To store them securely, options include using cookies with "httpOnly" and "secure" flags, or browser local storage. These methods protect against cross-site scripting (XSS) attacks and prevent unauthorized access to tokens.
      
      The storage approach depends on application requirements and security considerations, ensuring sensitive tokens are kept secure to prevent unauthorized access and token leakage.`,
  },
  {
    id: 2,
    question: "Compare SQL and NoSQL databases?",
    answer: `SQL databases are structured, use predefined schemas, and are ideal for structured data and complex queries. NoSQL databases are flexible, schema-less, and suitable for unstructured or rapidly changing data, offering high scalability and performance. The choice depends on data structure and application requirements.`,
  },
  {
    id: 3,
    question: "What is express js? What is Nest JS?",
    answer: `Express.js is a minimal and flexible web application framework for Node.js. It simplifies the development of web applications and APIs by providing a set of features and utilities. With Express.js, developers can handle HTTP requests and responses, define routes, implement middleware, and integrate with various modules and databases.

    NestJS is a progressive Node.js framework built on top of Express.js. It focuses on scalability and maintainability while incorporating concepts from object-oriented programming, functional programming, and reactive programming. NestJS promotes the use of TypeScript and provides features like decorators and dependency injection to enhance code organization and modularity. It offers a modular architecture, robust dependency injection system, built-in testing support, and integrates well with various libraries and databases.`,
  },
  {
    id: 4,
    question: "What is MongoDB aggregate and how does it work?",
    answer:
      "The MongoDB aggregate framework is a data processing tool that allows you to perform advanced operations and transformations on MongoDB collections. It works by defining a pipeline of stages, each representing a specific data manipulation step. These stages can include filtering, grouping, sorting, projecting, joining, and more. The output of each stage becomes the input for the next, enabling powerful data analysis and manipulation capabilities.",
  },
];
