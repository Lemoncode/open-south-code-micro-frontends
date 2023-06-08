# Broadcast API Example

One major concern in our microfrontends when we are using client composition, is the ability to communicate between them. If we have used `Custom Elements` as microfrontend wrapper, we can use custom events to communicate between children and parents. But what about siblings? What if I'm not using `Custom Elements`? Is there any native JS API on browser that can help?

Lets have a look on [Broadcast Channel API](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API)

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