const myself: Worker = self as any;
myself.onmessage = (event) => {
    myself.postMessage(event.data + 2);
}