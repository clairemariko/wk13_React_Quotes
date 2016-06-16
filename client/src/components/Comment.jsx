var React = require('react');

var Comment = React.createClass({


// {/Comments will depend on the data from it parent. Data passed from its parent is known as 'property' on the child component. Data passed from it parent is known as 'property' on the child component./}

// {/We access named attributes passed to the component as keys on [this.props] and any nest element as [this.props.children] ??? not sure about this.props.children/}

handleDelete: function(){
  console.log("button clicked", this.props)
  this.props.onCommentDelete(this.props.id);
},

  render: function(){
    return(
        <div>
        <h2>{this.props.author}</h2>
        {this.props.children}
        <button onClick={this.handleDelete}> delete </button>
        </div>
      )
  }

});


module.exports = Comment;