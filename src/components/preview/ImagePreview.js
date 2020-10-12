import React from 'react';
import PropTypes from 'prop-types';

import './imagePreview.css';

export const ImagePreview = ({ dataUri, isFullscreen,content }) => {
  let classNameFullscreen = isFullscreen ? 'demo-image-preview-fullscreen' : '';
  console.log(content)
  return (
    <div className={'demo-image-preview ' + classNameFullscreen}>
     <div className='' >
               <img src={dataUri} width='500' alt='' height='400' style={{ border:"2px solid blue",padding:".5rem 1rem"}} />
        
     </div>
     <h2>About Your Image</h2>
     <h3> { content }</h3>
    </div>
  );
};

ImagePreview.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool
};

export default ImagePreview;