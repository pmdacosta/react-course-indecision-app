Run the `babel.sh` script with the source file and the destination file name as input, example:

```bash
./babel.sh src/app.js app.js
```

Run the `server.sh` script to use the development live-server.

## Dependencies

For the first few modules I installed babel and live-server as global modules with

```
npm install -g babel-cli live-server
```

In module 6 I uninstalled them with

```
npm uninstall -g babel-cli live-sever
```

And installed them as local modules with

```
yarn add babel-cli@6.24.1 live-server
```

Now I can define scripts in `package.json` and run them with yarn with

```
yarn run <script-name>
```
