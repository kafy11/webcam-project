import styled from 'styled-components';
import { Image, Segment } from 'semantic-ui-react';

const PhotoSegment = styled(Segment)`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const Photo = ({ data }) => {
    const handleClick = () => {
        var element = document.createElement("a");
        element.href = data;
        element.download = "photo.jpg";
        element.click();
    };

    return (
        <PhotoSegment onClick={handleClick}>
            <Image src={data} size='small' />
        </PhotoSegment>
    );
}

export default Photo;
