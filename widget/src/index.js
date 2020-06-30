import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './components/widget';

function RenderWidget(url,appId='container'){
    ReactDOM.render(
        <React.StrictMode>
            <Widget url={url}/>
        </React.StrictMode>,
        document.getElementById(appId)
    );
}

window.RenderWidget=RenderWidget