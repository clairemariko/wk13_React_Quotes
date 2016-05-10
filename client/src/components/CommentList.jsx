var React = require('react');
var Comment = require('./Comment');


// {/not sure how this is working, so it is taking in the data from Comment and returning the autho and the key. it is making it more dynamic rather than takin in sample data. / }

var CommentList = React.createClass({
  render:function(){
    var commentNodes = this.props.data.map(function(comment){
        return(
          <Comment author = {comment.author} key={comment.id}>
          {comment.text}
          </Comment>
      )
    })

    return(
        <div>
        {commentNodes}
        </div>
      )
  }
})

module.exports = CommentList;