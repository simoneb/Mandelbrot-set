import crossPlatform from "cross-platform.js";

interface CrossPlatformOptions {
    require?: { [dependencyName: string]: string },
    run: (required: { [dependency: string]: any }) => any
}

declare export default (obj: {
    browser: CrossPlatformOptions,
    node: CrossPlatformOptions
}) => any;