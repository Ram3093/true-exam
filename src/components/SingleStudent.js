import React, { Component } from 'react'

class Single extends Component { 
    state={
        id:null,
        number:null,
        img:null
    }
    componentDidMount(){
       // console.log(this.props.match.params.id)
       this.setState({ id:Number(this.props.match.params.id)});
        
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleAddButton=(e)=>{
      document.querySelector('.points-div').style.display='none';
     const img1= document.querySelector('img').getAttribute('src');
     this.setState({ img:img1 })
     
    }
    render() {
        const photos=JSON.parse(localStorage.getItem('photos'));
        //console.log(typeof( photos[0].id),typeof(Number(this.state.id)))
        const imageUrl=photos.filter(el=>{
                if( this.state.id===el.id){
                    return el.img
                }else{ return null }
        })
        const showmarks=this.state.number?(
            <p>The marks of student is {this.state.number }</p>
        ):(<p></p>)
       console.log(typeof(imageUrl))
       const img=imageUrl.map(el=> el.img);
       localStorage.setItem('modifyStudent',JSON.stringify(this.state))
      // console.log(img)
        return (
            <div style={{ marginTop:"3rem",textAlign:"center",fontSize:"1rem",color:"blue"}}>
               <h3>student with id : { this.state.id }</h3> 
               <div className='container'>
                   <img src={ img } alt='' width='400' height='400' />
                   <div style={{ padding:"2rem "}} className='points-div'>
                       <input type='number' onChange={this.handleChange} id='number' />
                       <button type='button' className='btn btn-primary ' onClick={ this.handleAddButton }>Add marks</button>
                   </div>
                   <p>{ showmarks }</p>
               </div>
            </div>
        )
    }
}

export default Single;
