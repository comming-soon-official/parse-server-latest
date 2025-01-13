# Parse Server with React Example

## Setup

1. Install MongoDB and ensure it's running
2. Install dependencies:

```bash
# In root directory (server)
npm install

# In react-app directory
cd react-app && npm install
```

## Configuration

Edit these files and replace the parameters with your own:

1. `server/index.js`:

    - `databaseURI`: Your MongoDB connection string
    - `appId`: Your application ID
    - `masterKey`: Your secure master key

2. `react-app/src/service/parse.js`:
    - Make sure `appId` matches server config
    - Update `serverURL` if using different port/host

## Running the App

1. Start Parse Server:

```bash
npm start
```

Access Parse Dashboard at: http://localhost:1337/dashboard

2. Start React app:

```bash
cd react-app
npm start
```

Access the app at: http://localhost:3000
