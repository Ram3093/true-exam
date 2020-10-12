import React, { Component } from 'react'
import  { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import ImagePreview from './preview/ImagePreview'; // source code : ./src/demo/AppWithImagePreview/ImagePreview
import Student from './Student'

class Image extends Component {
    constructor(props) {
      super(props);
      this.state = {
        file: '',
        imagePreviewUrl: '',
        deviceImageContent:""
      };
      this._handleImageChange = this._handleImageChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleChange= this._handleChange.bind(this);
      this._removeDeviceImageDiv=this._removeDeviceImageDiv.bind(this);
    }
    _handleSubmit(e) {
      e.preventDefault();
      // TODO: do something with -> this.state.file
    }
  
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
   _handleChange(e){
     this.setState({ [e.target.id]:e.target.value })
   }
  _removeDeviceImageDiv=(e)=>{
    document.querySelector('.info-div').style.display='none';
  }
    render() {
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview =<div>
                           <img src={imagePreviewUrl} width='500'  alt='' height='400' style={{ border:"2px solid blue",
                                       padding:".5rem 1rem"}} />);
                            <div className='detailPhotoUpload' style={{ display:"none123"}}>
                                  <h2>About Your Image</h2>
                                  <h3> { this.state.deviceImageContent }</h3>
                                       <div className='container info-div' style={{ marginTop:"2rem"}}>
                                             <input type='text' id='deviceImageContent' onChange={ this._handleChange } />
                                             <button type='button' className='btn btn-primary' onClick={ this._removeDeviceImageDiv}>Add info</button>
                                       </div>
                            </div>
                        </div>
                            
        localStorage.setItem('img',imagePreviewUrl)
      }
  
      return (
        <div>
          <form onSubmit={this._handleSubmit}>
            <input type="file" onChange={this._handleImageChange} />
            {/* <button type="submit" onClick={this._handleSubmit}>Upload Image</button> */}
          </form>
          <div className='' style={{ marginTop:"2rem",textAlign:"center"}}>
               {$imagePreview}
          </div>
         
        </div>
      )
    }
  
  }

  function Camera1 (props) {
    const [dataUri, setDataUri] = useState('');
    const [content, setContent] = useState('');
   
    function handleTakePhotoAnimationDone (dataUri) {
      console.log('takePhoto');
      setDataUri(dataUri);
      localStorage.setItem('img',dataUri);
    }
    function remove(){
        document.querySelector('.info-div').style.display='none';
    }
    const isFullscreen = false;
    return (
      <div>
        {
          (dataUri)
            ? <div><ImagePreview dataUri={dataUri}
              isFullscreen={isFullscreen} content={content}
            />
            <div className='container info-div' style={{ marginTop:"2rem"}}>
                <input type='text' value={content} onChange={e=> setContent(e.target.value) } />
                <button type='button' className='btn btn-primary' onClick={remove}>Add info</button>
            </div>
            </div>
            : <Camera onTakePhotoAnimationDone = {handleTakePhotoAnimationDone}
              isFullscreen={isFullscreen}
            />
        }
      </div>
    );
  }
   

 class Home extends Component {
     state={
         flagCamera:false,
         flagPhone:false,
         id:null,
         content:'',
         studentFlag:false
     }
     handleCamera=(e)=>{
        this.setState({   flagCamera:true   })
        document.getElementById('image-id').style.display='none';
     }
     handlePhotoDevice=(e)=>{
             this.setState({ flagPhone:true })
             document.getElementById('camuni').style.display='none';
             document.querySelector('.image-upload-div').classList.add('col-lg-12')
     }

     handleStudentClick=(e)=>{
        this.setState({ studentFlag:true })
     }
    render() {
      const show=  (this.state.flagCamera)?(
       <Camera1 />
    ):(null)
    const show1=(this.state.flagPhone)?(<Image />):(null)
    
    const student=(this.state.studentFlag)?(<Student />):<p></p>

        return (
            <div className='container'>
                  <h4 style={{ fontSize:"3rem",textAlign:"center",marginBottom:"1rem"}}>TrueExam</h4>
                <div className='row' style={{ marginTop:"3rem"}}>
                    <div className='col-lg-6 col-md-6 col-sm-6 camera-div' >
                        <button type='button' id='camuni' className='btn btn-primary' onClick={ this.handleCamera }>Take photo with camera</button>
                    </div>
                    <div className='col-lg- col-md-6 col-sm-6 image-upload-div' id='image-id'>
                        <button type='button' className='btn btn-primary' onClick={ this.handlePhotoDevice }>Take photo with device</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12'>
                          { show }
                    </div>
                    <div className='col-lg-12  col-md-12 col-sm-12'>
                        { show1 }
                    </div>
                </div>
               <div className='container' style={{marginTop:"3rem"}}> 
                  <button type='button' className='btn btn-primary' onClick={this.handleStudentClick} >
                              student section</button>
                    {
                       student
                    }
               </div>
               
         
            </div>
        )
    }
}

export default Home
