import { useEffect } from 'react';

const useWebcam = (ref) => {
    useEffect(() => {
        //needs to make a sub-function to run async inside effect
        const handleRequestCamera = async () => {
            try{
                const video = ref.current;
                
                //requests user permission and returns the webcam media 
                video.srcObject = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
                video.play();
            } catch(error){
                console.error(error);
            }
        };
        handleRequestCamera();
    },[ref]);
}

export default useWebcam;