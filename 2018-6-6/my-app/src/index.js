import React from 'react';
import ReactDOM from 'react-dom';
// import App from './ChildToParent/App/app';
// import App from './todolist/Index';
import App from './classwork/App/App';

ReactDOM.render(
    <App />
    ,
    document.getElementById('root')
)

if(module.hot){
    module.hot.accept();
}
 
