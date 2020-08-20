import React from "react";


class PostInput extends React.Component{
    state={ val:""}

    v=(e)=>{
this.setState({
val : e.target.value

})


    }
    feed=()=>{
this.props.feeds(this.state.val);
this.setState({
    val : ""
    
    })
    }
render(){
    var style = {
      width:"780px",
      height:"180px",
      
      
      }
return(
    <div>
<div class="nav justify-content-end" > 
<input type="text" style={style}  placeholder="WHAT'S ON YOUR MIND ?"
 value={this.state.val} onChange={this.v}/><br/>

</div>
<button class="btn btn-primary btn-lg btn-block" onClick={this.feed}>Post</button>
</div>
)
}
}

export default PostInput;