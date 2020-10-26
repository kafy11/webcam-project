import { useState } from 'react';
import styled from 'styled-components';
import { Card, Radio, Grid } from 'semantic-ui-react';
import WebcamVideo from './WebcamVideo';

const { Column } = Grid;

const StyledCard = styled(Card)`
    max-width: 500px !important;
`;

const WebcamCard = ({ onTakePhoto }) => {
    const [enableCrazyFilter, setEnableCrazyFilter] = useState(false);
    const [enableBWFilter, setEnableBWFilter] = useState(false);

    const handleChangeCrazyFilter = (e, { checked }) => setEnableCrazyFilter(checked);
    const handleChangeBWFilter = (e, { checked }) => setEnableBWFilter(checked);

    return (
        <StyledCard fluid>
            <WebcamVideo 
                onTakePhoto={onTakePhoto}
                enableCrazyFilter={enableCrazyFilter}
                enableBWFilter={enableBWFilter}
            />
            <Card.Content>
                <Grid columns={2}>
                    <Column>
                        <Radio 
                            toggle
                            label="Crazy Filter"
                            onChange={handleChangeCrazyFilter}
                        />
                    </Column>
                    <Column>
                        <Radio 
                            toggle
                            label="Black White Filter"
                            onChange={handleChangeBWFilter}
                        />
                    </Column>
                </Grid>
            </Card.Content>
        </StyledCard>
    );
};

export default WebcamCard;
