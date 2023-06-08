# Simple Module Federation Example

This code is just a simple demonstration on how we can use module federation between two simple React applications.

## Running the Code

Open a terminal and run following code:

```bash
cd app-user-support
```

```bash
npm i --legacy-peer-deps
```

```bash
npm run clean && npm run build && npm run serve 
```

Open a new terminal and run following code:

```bash
cd app-shell
```

```bash
npm i --legacy-peer-deps
```

```bash
npm run clean && npm run build && npm run serve 
```