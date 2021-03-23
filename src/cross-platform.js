function crossPlatform(obj) {
    if (typeof window !== "undefined" && typeof window.Worker !== "undefined") {
        // window.Worker is not available in jsdom
        return run(obj.browser);
    } else {
        return run(obj.node);
    }
}

function run(obj) {
    let required = {};
    if (typeof required !== "undefined")
        for (let dependency in obj.require) {
            required[dependency] = require(obj.require[dependency]);
            // load all dependencies and put them in required
        }
    return obj.run(required);
}

module.exports = crossPlatform;