# Game streamer

### Getting setup

#### Prerequisites

- A code editor
- A modern-_ish_ version of npm & node. The repo was created using `v18`.
- Docker (but only if you choose to run the app in a [devcontainer](https://code.visualstudio.com/docs/remote/containers))

#### Installation

The application has a [dev-container](./.devcontainer/devcontainer.json) that enables you to get setup quickly if you're familiar with them. Your code editor might automatically find it and ask you to run it when you load the codebase.

Otherwise, you can get setup 'manually' pretty quickly too!

1. In a terminal type `npm install`
2. Type `npm run dev` and wait to see a message like below in the terminal:

```bash
  VITE v3.2.5  ready in 669 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

#### Run commands

- `npm run dev` - Starts the vite server at `localhost:5173` (by default).
- `npm run test` - Runs tests, once.
- `npm run test:watch` - Runs (and watches) the tests.
- `npm run test:coverage` - Runs tests and shows the line coverage.
