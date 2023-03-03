# Chat App - Final Assessment Part 4 <!-- omit in toc -->

- [Requirements](#requirements)
- [Installation](#installation)
  - [Client](#client)
  - [Server](#server)
- [Run Project](#run-project)
  - [Client](#client-1)
  - [Server](#server-1)
- [Environment](#environment)
  - [Server](#server-2)
  - [Client](#client-2)
- [Linter](#linter)

---

# Requirements

- [Node JS](https://nodejs.dev)
- [npm](https://pnpm.io)
- [Mongo DB](https://www.mongodb.com) _(Optional)_

---

# Installation

### Client

For Client (or Frontend), just run

```sh
npm install --dir client
```

### Server

For Server (or Backend), just run

```sh
npm install --dir server
```

---

# Run Project

Once the dependencies are installed:

### Client

For Frontend, just run:

```sh
npm run --dir client start
```

### Server

For Backend, just run:

```sh
npm run --dir server dev
```

---

# Environment

Each Project has their own specific environment variables, just go to their specific directory and add `.env` (dot env) file or copy the `.env.example` file and edit their values.

### Server

For the Backend:

| ENV VARIABLE       | DESCRIPTION                 | TYPE               | REQUIRED | DEFAULT VALUE               |
| :----------------- | :-------------------------- | :----------------- | :------- | :-------------------------- |
| `DB_CONNECTION`    | For Mongo DB, usually the   | `string`           | NO       | `mongodb://localhost:27017` |
| `DB_NAME`          | For Mongo DB, the database  | `string`           | YES      | Any                         |
| `PORT`             | The Port of the             | `number`           | NO       | `5000`                      |
| `TOKEN_EXPIRES_IN` | When will the Token expires | `string \| number` | YES      | N/A                         |
| `TOKEN_SECRET`     | The Token Secret for        | `string`           | YES      | N/A                         |

### Client

For the Frontend:

| ENV VARIABLE      | DESCRIPTION     | TYPE     | REQUIRED | DEFAULT VALUE           |
| :---------------- | :-------------- | :------- | -------- | ----------------------- |
|  |  |  |      |  |

---

# Linter

This is make your code consistent by using [ESLint](https://eslint.org).

Before you commit your changes, just make sure to run the linter first

Just run run:

```sh
pnpm run --dir (client|server) lint
```

If you wanted to fix automatically, just run:

```sh
pnpm run --dir (client|server) lint:fix
```

Make sure to change the value of `--dir` flag

⚠️ However, **NOT** all codes are fixable, but the linter will give you hint to fix it

---

###### Created by Renz Jaskin Agmata <!-- omit in toc -->
