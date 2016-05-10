var React = require('react');
var ReactDOM = require('react-dom');
var CommentBox = require('./components/CommentBox.jsx')



// {/this starts the framework, it should typically be at the bottom of the script and it should only be called after the components have been defined./}

window.onload = function(){
  ReactDOM.render(
    <CommentBox/>,
    document.getElementById('app')
  );
}

