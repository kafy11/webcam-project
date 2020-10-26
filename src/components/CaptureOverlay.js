import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const CaptureHover = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFF;
    opacity: 0;
    background: #000;
    z-index: 2;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
    font-size: 2rem;

    &:hover{
        filter: alpha(opacity=50);
        opacity: 0.5;
    }
`;

const TakePhotoText = styled.span`
    margin-top: 1rem;
`;

const CaptureOverlay = ({ onTakePhoto }) => (
    <CaptureHover onClick={onTakePhoto}>
        <Icon name="camera" size="large"></Icon>
        <TakePhotoText>Take Photo</TakePhotoText>
    </CaptureHover>
);

export default CaptureOverlay;
