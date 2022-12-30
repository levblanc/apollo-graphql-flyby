# apollo-graphql-flyby

### Installation

1. Install NPM packages in client & server folders

   ```bash
   cd client
   yarn install

   cd subgraph-locations
   yarn install

   cd subgraph-reviews
   yarn install
   ```

### Get Started

1. Run subgraphs

```bash
cd subgraph-locations
yarn start

# Result
🚀 Subgraph locations running at http://localhost:4001/

###################

cd subgraph-reviews
yarn start

# Result
🚀 Subgraph reviews running at http://localhost:4002/
```

2. Run router

```bash
cd router
yarn start

# Result
INFO GraphQL endpoint exposed at http://127.0.0.1:4000/ 🚀
```

3. Run client app

```bash
cd client
yarn start

# Result
Compiled successfully!

You can now view client in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.12:3000

Note that the development build is not optimized.
To create a production build, use yarn build.

webpack compiled successfully
```

### Update & publish subgraphs

```bash
# Under subgraph folders
yarn update

# Under project root
yarn update:locations

yarn update:reviews
```
