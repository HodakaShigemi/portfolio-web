type CanvasProps = {
    id: string;
    width: number;
    height: number;
};

const Canvas = (props: CanvasProps) => {
    const { id, width, height } = props;
    return (
      <canvas id={id} width={width} height={height}></canvas>
    );
};

export default Canvas;
