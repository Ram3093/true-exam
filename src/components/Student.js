import React, { Component } from 'react'
class Student extends Component {
    state={
        photos:[]
    }
    addImage=(e)=>{
         const newItem={
             id:Math.floor(Math.random()*100),
             img:localStorage.getItem('img')
         }
         let pics=[...this.state.photos,newItem]
         this.setState({
             photos:pics
         })
        // this.state.photos.push('gfadsf')
        // console.log('dfsd')
    }
    render() {
        console.log(this.state.photos)
        const img=localStorage.getItem('img');
        const studentSection=(img)?(          
            <div style={{marginTop:"2rem"}}>
                  <button type='button' className='btn btn-primary' onClick={ this.addImage }>Edit</button>
            </div>
        ):(<p>instructor not give any task yet .</p>)
        const showAllImage=(this.state.photos.length)?(
            this.state.photos.map(el=>{
                return(
                    <div key={el.id} style={{ }}>
                         <img src={el.img} width='200' height='200' alt='' className='card' style={{ border:"2px solid blue"}}/>
                         <p>{el.id} </p>
                    </div>
                )
            })
          
        ):(<p>no photos yet</p>)
      //  this.state.photos.push(img);
        return (
            <div className='container'>
               { studentSection }
               { showAllImage }
            </div>
        )
    }
}
export default Student
