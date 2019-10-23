import React from 'react';
import { render } from 'react-dom';

import {
  MapillaryViewer,
} from '../src';

render(
  <MapillaryViewer
    clientId="QjI1NnU0aG5FZFZISE56U3R5aWN4Zzo3NTM1MjI5MmRjODZlMzc0"
    imageKey="085Gpl_xNxW1Lw2eeEG28w"
    filter={['==', 'userKey', '2PiRXqdqbY47WzG6CRzEIA']}
    onTiltChanged={tilt => console.log(`Tilt: ${tilt}`)}
    onFovChanged={fov => console.log(`FoV: ${fov}`)}
    onNodeChanged={node => console.log(node)}
    onBearingChanged={bearing => console.log(`Bearing: ${bearing}`)}
  />,
  document.getElementById('root'),
);
