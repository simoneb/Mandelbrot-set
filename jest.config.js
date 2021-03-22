module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: ['/node_modules/', '/assembly/'],
    transform: {
        "^.+\\.svelte$": [
            "svelte-jester",
            { preprocess: true }
        ],
        "^.+\\.ts$": "ts-jest"
    },
    moduleFileExtensions: [
        "js",
        "ts",
        "svelte"
    ]
};