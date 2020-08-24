import React from 'react';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';

// the first very simple and recommended way:
const LionImage = () => {
  const [image] = useImage('https://konvajs.org/assets/lion.png');
  return <Image image={image} />;
};


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
            </Layer>
        </Stage>
        </div>
    );
}

export default Slider;