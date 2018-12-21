import("./wasm/webgl_demo" as any).then(wasmLib => wasmLib.start(createCanvasElement()));

function createCanvasElement():HTMLCanvasElement {
    const canvas = document.createElement("canvas");

    canvas.id = "canvas";
    canvas.className = "canvas";
    document.body.appendChild(canvas)
    
    return canvas;
}
