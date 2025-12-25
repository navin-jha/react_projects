// ** Node.js Common Interview Questions & Answers **

//     ---

// ### 1. What is Node.js ?

//     Node.js is a ** JavaScript runtime ** built on Chrome’s ** V8 engine **.It lets you run JS outside the browser, mainly for building fast, scalable, I / O - driven server - side apps.

// ---

// ### 2. Why is Node.js single - threaded ?

//     Node.js uses a ** single - threaded event loop ** for handling requests, which avoids the overhead of thread management and makes it lightweight.I / O tasks are handled asynchronously via libuv.

// ---

// ### 3. Difference between synchronous and asynchronous in Node ?

// * ** Synchronous **: Code executes line by line and blocks further execution until current task finishes.
// * ** Asynchronous **: Tasks(like I / O, network, DB) don’t block the main thread.They are delegated, and callbacks / promises handle results later.

// ---

// ### 4. What is the Event Loop in Node.js ?

//     The ** event loop ** manages the execution of asynchronous tasks.It checks the ** call stack **, ** callback queues **, and executes tasks in phases(`timers`, `poll`, `check`, etc.).
//         Order: sync code → `process.nextTick` → microtasks(Promises) → timers → I / O callbacks → check(`setImmediate`).

// ---

// ### 5. What is the difference between `process.nextTick()` and`setImmediate()` ?

// * `process.nextTick()` runs ** immediately after current operation ** and before the event loop continues.
// * `setImmediate()` runs in the ** check phase **, i.e., after I / O events in the current loop.

// ---

// ### 6. CommonJS vs ES Modules in Node ?

// * ** CommonJS **: Uses`require()` / `module.exports`, synchronous loading.
// * ** ESM **: Uses`import` / `export`, asynchronous, supported natively with `"type":"module"` in package.json.

// ---

// ### 7. What are Streams in Node.js ?

//     Streams allow ** processing data in chunks ** instead of loading it all at once.Types:

// * Readable(fs.createReadStream)
//     * Writable(fs.createWriteStream)
//     * Duplex(both read / write, like sockets)
//     * Transform(modify data, e.g.zlib for compression)

//     ---

// ### 8. How does Node.js handle CPU - heavy tasks ?

//     Since Node is single - threaded, CPU - heavy tasks block the loop.Solutions:

// * `worker_threads`(parallel JS execution)
//     * `child_process` or `cluster` module
//         * Offloading to external service / microservice

// ---

// ### 9. How does Node.js handle errors ?

// * ** Callbacks **: First parameter is usually`err`.
// * ** Promises / async -await **: Use `.catch()` or`try/catch`.
// * Global error handling: `process.on('uncaughtException', ...)`(but recommended to restart app if triggered).

// ---

// ### 10. Why is Node.js good for I / O apps but not CPU - bound apps ?

//     Because Node’s event - driven architecture allows handling thousands of concurrent I / O requests(DB, file, API calls).But CPU - bound tasks block the single event loop, degrading performance.

// ---

// ### 11. What is clustering in Node.js ?

//     Clustering allows running ** multiple Node.js processes(workers) ** across CPU cores, managed by a master process.It helps scale apps horizontally on a single machine.

// ---

// ### 12. Difference between `setTimeout(fn, 0)` and`setImmediate(fn)` ?

// * `setTimeout(fn, 0)` → executed in the ** timers phase ** (after delay).
// * `setImmediate(fn)` → executed in the ** check phase **.
//   Execution order may differ depending on context.

// ---

// ### 13. Explain middleware in Node.js / Express.

// Middleware functions are functions that have access to`req`, `res`, and`next`.They can modify request / response or end the cycle.Example: logging, authentication, error handling.

// ---

// ### 14. How is Node.js different from traditional server frameworks(like Apache) ?

// * Apache → multi - threaded, blocking I / O, handles fewer concurrent requests.
// * Node.js → single - threaded, non - blocking I / O, handles thousands of concurrent requests efficiently.

// ---

// ### 15. What is NPM ?

//     NPM(Node Package Manager) is the default package manager for Node.js.It manages libraries, dependencies, and scripts in `package.json`.
