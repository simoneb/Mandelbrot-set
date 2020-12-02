import loader from "@assemblyscript/loader";

interface command {
    action: string,
    data: any
}

let moduleExports;

const myself: Worker = self as any;

myself.onmessage = async (event) => {

    const { action, data } = event.data as command;

    switch (action) {

        case "loadWasm":
            const module = await loader.instantiate(data, {
                env: {},
                index: {
                    print: console.log
                }
            });
            moduleExports = module.exports;
            myself.postMessage(null);
        break;

        case "generate":
            const [width, height] = data as number[];
            const pointer: number = moduleExports.generate(...data);
            const imageDataArrayView: Uint8ClampedArray = moduleExports.__getUint8ClampedArrayView(pointer);
            const imageDataArray = new Uint8ClampedArray(imageDataArrayView);
            moduleExports.__release(pointer);
            myself.postMessage(imageDataArray);
        break;

        default:
            throw new Error("Unknown action: " + action);
            myself.postMessage(null);
        break;
    }
}
