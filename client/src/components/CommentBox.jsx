var React = require('react');
var CommentList = require('./CommentList.jsx');
var CommentForm = require('./CommentForm.jsx');

  var sampleData = [
    {id:1, author:'Rick', text:'cool'},
    {id:2, author:'Keith', text:'howdy'},
    {id:3, author:'Beth', text:'heey'}
  ];

// {/The React.createClass has various methods we can pass to it such as the render which is important and this returns a tree of React components/}
  var CommentBox = React.createClass({
   getInitialState:function(){
    return {data: sampleData};
  },

  handleCommentSubmit:function(comment){
    comment.id = Date.now();
    var newComments = this.state.data.concat( [comment] );
    this.setState({data: newComments});
  },

  handleCommentDelete:function(id){
    var filteredData = this.state.data.filter(function(comment){
      return comment.id != id
    })
    this.setState({data: filteredData});
  },

  render: function(){
    return (
      <div>
      <h4>Hello I am the comment box.</h4>

      <CommentList data={this.state.data} onCommentDelete={this.handleCommentDelete}/>
      <CommentForm onCommentSubmit={this.handleCommentSubmit}/>

      </div>
     )
   }
  })

module.exports = CommentBox;