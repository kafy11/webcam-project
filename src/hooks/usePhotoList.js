import { useState } from 'react';

//handles the photo list data
const usePhotoList = () => {
    const [photos, setPhotos] = useState([]);

    const addPhoto = (photo) => {
        const newPhotos = [...photos, photo];
        setPhotos(newPhotos);
    };

    return [photos, addPhoto];
};

export default usePhotoList;