import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import useWebcam from '../hooks/useWebcam';
import { crazyFilter, startCanvasUpdate, blackWhiteFilter } from '../libs/webcam';
import CaptureOverlay from './CaptureOverlay';

const VideoContainer = styled.div`
    position: relative;
`;

const Video = styled.video`
    display: none;
`;

const Canvas = styled.canvas`
    width: 100%;
    height: 100%;
`;

const WebcamVideo = ({ onTakePhoto, enableCrazyFilter, enableBWFilter }) => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [updateInterval, setUpdateInterval] = useState(false);

    //requests webcam media
    useWebcam(videoRef);

    //handles the filters props and returns an array with all the filter functions
    const handleFilters = () => {
        const filters = [];

        if(enableCrazyFilter){
            filters.push(crazyFilter);
        }

        if(enableBWFilter){
            filters.push(blackWhiteFilter);
        }
        return filters;
    };

    //start the canvas
    const paintToCanvas = () => {
        const filters = handleFilters();
        const interval = startCanvasUpdate(videoRef.current, canvasRef.current, filters);
        setUpdateInterval(interval);
    };

    //checks for filters changes and updates the canvas
    useEffect(() => {
        if(updateInterval){
            clearInterval(updateInterval);
        }

        paintToCanvas();
    },[enableCrazyFilter, enableBWFilter]);

    //converts the canvas to an image
    const handleTakePhoto = () => {
        //take the data out of the canvas
        const data = canvasRef.current.toDataURL('image/jpeg');
        onTakePhoto(data);
    };

    return (
        <VideoContainer>
            <Video  
                ref={videoRef}
                onCanPlay={paintToCanvas}
            />
            <Canvas 
                className="photo" 
                ref={canvasRef}
            />
            <CaptureOverlay onTakePhoto={handleTakePhoto} />
        </VideoContainer>
    );
};

export default WebcamVideo;
