var React = require('react');
var CommentForm = React.createClass({

  getInitialState:function(){
    return {author: '', text:''};
  },

  handleAuthorChange:function(e){
    this.setState({author: e.target.value});
  },

  handleTextChange:function(e){
    this.setState({text: e.target.value});
  },

  handleSubmit:function(e){
    e.preventDefault();
    console.log('trying to add comment')
    this.props.onCommentSubmit({
      author: this.state.author, 
      text:this.state.text
    });
    
    this.setState({author:"", text:""});
  },


  render:function(){
    return(
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            placeholder="Your name"
            value={this.state.author}
            onChange = {this.handleAuthorChange}
            />
            <input 
              type="text"
              placeholder="Say something..."
              value={this.state.text}
              onChange={this.handleTextChange}
              />
              <input type="submit" value="Post"/>
        </form>
      )
  }
})

module.exports = CommentForm;