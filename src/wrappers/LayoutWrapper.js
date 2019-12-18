import React from 'react';

const LayoutWrapper = ( props ) =>{
    const className = 'page-view ' + props.pageView;
    return(
        <div className = {className}>
            {props.children}
        </div>
    )
}
export default LayoutWrapper;