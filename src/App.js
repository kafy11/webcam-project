import styled from 'styled-components';
import WebcamCard from './components/WebcamCard';
import { Container, Grid, Segment } from 'semantic-ui-react';
import usePhotoList from './hooks/usePhotoList';
import Photo from './components/Photo';

const { Column } = Grid;

const AppContainer = styled(Container)`
  margin-top: 2rem;
  margin-left: 2rem;
`;

const InfoColumn = styled.div`
  width: 100%;
`;

const WebcamColumn = styled(Column)`
  display: flex !important;
  justify-content: center;
`;

const App = () => {
  const [photos, addPhoto] = usePhotoList();

  const renderPhotos = () => {
    if(photos.length){
      return photos.map((photo, i) => (
        <Column key={`${i}`} computer={3} mobile={5} tablet={5}>
          <Photo data={photo} />
        </Column>
      ));
    }
    
    return (
      <InfoColumn>
        <Segment textAlign="center">Click in the video to take a photo</Segment>
      </InfoColumn>
    );
  };

  return (
    <AppContainer>
      <Grid centered>
        <WebcamColumn>
          <WebcamCard onTakePhoto={addPhoto}/>
        </WebcamColumn>
      </Grid>
      <Grid columns={15}>
        {renderPhotos()}
      </Grid>
    </AppContainer>
  );
}

export default App;
