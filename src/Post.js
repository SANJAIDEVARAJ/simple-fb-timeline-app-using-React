import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Cmnt from "./cmnt.js";
import LikeDisLike from "./likedislike.js";



class Post extends React.Component{
  

render(){


        var style1={
            width: "100%",
            border: "2px solid green",
            padding: "50px",
            margin: "20px"


        }
 
return(
<div>
{this.props.P.fed.map((a)=>{ 
  return(  
      <>
<div class="container" style={style1} >
<p>{a}</p>
<LikeDisLike/>
<Cmnt/>
</div>
</>
  )
})

}

</div>

)

}

}

export default Post;