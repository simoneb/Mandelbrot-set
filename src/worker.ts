import loader from "@assemblyscript/loader";

interface command {
    action: string,
    data: any
}

const myself: Worker = self as any;
myself.onmessage = (event) => {
    const { action, data } = event.data as command;
    switch (action) {
        case "loadWasm":
            loader.instantiate(data);
            break;
        case "plus1":
            myself.postMessage(data+1);
            break;
    }
}