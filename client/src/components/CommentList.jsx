
var Comment = require('./Comment');


// {/not sure how this is working, so it is taking in the data from Comment and returning the autho and the key. it is making it more dynamic rather than takin in sample data. / }

var CommentList = React.createClass({
  render:function(){
    var commentNodes = this.props.data.map(function(comment){
        return(
          <Comment author = {comment.author} key={comment.id} id={comment.id} onCommentDelete={this.props.onCommentDelete}>
          {comment.text}
          </Comment>
      )
    }.bind(this));

    //we had to use bind this and it being excuted within the mar that in an array so it lost what this is. 

    return(
        <div>
        {commentNodes}
        </div>
      )
  }
})

module.exports = CommentList;