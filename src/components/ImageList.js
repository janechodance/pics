import React from 'react';

const ImageList = (props) => {
    console.log(props.images)
    return(
        <div>Images
            {props.images.map(({description, id, urls})=> { return <img alt={description} key={id} src={urls.regular}/>} )}
        </div>
    )
}
export default ImageList