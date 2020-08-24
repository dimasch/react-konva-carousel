import React from 'react';
import { Stage, Layer, Image, Rect } from 'react-konva';
import useImage from 'use-image';


const Slider = () => {
    const [imageUrl, setImageUrl] = React.useState('https://konvajs.org/assets/lion.png');
    const [image] = useImage(imageUrl);

    const onChange = event => {
        setImageUrl('http://placekitten.com/g/200/300');
    };

    return (
        <div>
            <button onClick={() => onChange()}>Replace</button>
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <Image image={image} />
                <Rect
                    x={20}
                    y={70}
                    width={150}
                    height={4}
                    fill="red"
                    shadowBlur={10}
                />
            </Layer>
        </Stage>
        </div>
    );
}

export default Slider;