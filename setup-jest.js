const fs = require("fs");

global.fetch = jest.fn(path =>
    Promise.resolve({
        arrayBuffer: () => Promise.resolve(
            fs.readFileSync("public/" + path)
        )
    })
);

global.Worker = require("web-worker");
global.testing = true;