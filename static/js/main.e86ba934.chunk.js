(this.webpackJsonptrueexam=this.webpackJsonptrueexam||[]).push([[0],{14:function(e,t,a){e.exports=a(23)},19:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),i=a.n(r),o=(a(19),a(20),a(8)),c=a(11),m=a(3),s=a(4),u=a(1),d=a(6),h=a(5),g=a(12),v=a.n(g),p=(a(21),a(22),function(e){var t=e.dataUri,a=e.isFullscreen,n=e.content,r=a?"demo-image-preview-fullscreen":"";return console.log(n),l.a.createElement("div",{className:"demo-image-preview "+r},l.a.createElement("div",{className:""},l.a.createElement("img",{src:t,width:"500",alt:"",height:"400",style:{border:"2px solid blue",padding:".5rem 1rem"}})),l.a.createElement("h2",null,"About Your Image"),l.a.createElement("h3",null," ",n))}),b=a(13),y=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={photos:[]},e.addImage=function(t){var a={id:Math.floor(100*Math.random()),img:localStorage.getItem("img")},n=[].concat(Object(b.a)(e.state.photos),[a]);e.setState({photos:n})},e}return Object(s.a)(a,[{key:"render",value:function(){console.log(this.state.photos);var e=localStorage.getItem("img")?l.a.createElement("div",{style:{marginTop:"2rem"}},l.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.addImage},"Edit")):l.a.createElement("p",null,"instructor not give any task yet ."),t=this.state.photos.length?this.state.photos.map((function(e){return l.a.createElement("div",{key:e.id,style:{}},l.a.createElement("img",{src:e.img,width:"200",height:"200",alt:"",className:"card",style:{border:"2px solid blue"}}),l.a.createElement("p",null,e.id," "))})):l.a.createElement("p",null,"no photos yet");return l.a.createElement("div",{className:"container"},e,t)}}]),a}(n.Component),E=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e))._removeDeviceImageDiv=function(e){document.querySelector(".info-div").style.display="none"},n.state={file:"",imagePreviewUrl:"",deviceImageContent:""},n._handleImageChange=n._handleImageChange.bind(Object(u.a)(n)),n._handleSubmit=n._handleSubmit.bind(Object(u.a)(n)),n._handleChange=n._handleChange.bind(Object(u.a)(n)),n._removeDeviceImageDiv=n._removeDeviceImageDiv.bind(Object(u.a)(n)),n}return Object(s.a)(a,[{key:"_handleSubmit",value:function(e){e.preventDefault()}},{key:"_handleImageChange",value:function(e){var t=this;e.preventDefault();var a=new FileReader,n=e.target.files[0];a.onloadend=function(){t.setState({file:n,imagePreviewUrl:a.result})},a.readAsDataURL(n)}},{key:"_handleChange",value:function(e){this.setState(Object(c.a)({},e.target.id,e.target.value))}},{key:"render",value:function(){var e=this.state.imagePreviewUrl,t=null;return e&&(t=l.a.createElement("div",null,l.a.createElement("img",{src:e,width:"500",alt:"",height:"400",style:{border:"2px solid blue",padding:".5rem 1rem"}}),");",l.a.createElement("div",{className:"detailPhotoUpload",style:{display:"none123"}},l.a.createElement("h2",null,"About Your Image"),l.a.createElement("h3",null," ",this.state.deviceImageContent),l.a.createElement("div",{className:"container info-div",style:{marginTop:"2rem"}},l.a.createElement("input",{type:"text",id:"deviceImageContent",onChange:this._handleChange}),l.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this._removeDeviceImageDiv},"Add info")))),localStorage.setItem("img",e)),l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this._handleSubmit},l.a.createElement("input",{type:"file",onChange:this._handleImageChange})),l.a.createElement("div",{className:"",style:{marginTop:"2rem",textAlign:"center"}},t))}}]),a}(n.Component);function f(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)(""),m=Object(o.a)(c,2),s=m[0],u=m[1];return l.a.createElement("div",null,r?l.a.createElement("div",null,l.a.createElement(p,{dataUri:r,isFullscreen:!1,content:s}),l.a.createElement("div",{className:"container info-div",style:{marginTop:"2rem"}},l.a.createElement("input",{type:"text",value:s,onChange:function(e){return u(e.target.value)}}),l.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){document.querySelector(".info-div").style.display="none"}},"Add info"))):l.a.createElement(v.a,{onTakePhotoAnimationDone:function(e){console.log("takePhoto"),i(e),localStorage.setItem("img",e)},isFullscreen:!1}))}var C=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={flagCamera:!1,flagPhone:!1,id:null,content:"",studentFlag:!1},e.handleCamera=function(t){e.setState({flagCamera:!0}),document.getElementById("image-id").style.display="none"},e.handlePhotoDevice=function(t){e.setState({flagPhone:!0}),document.getElementById("camuni").style.display="none",document.querySelector(".image-upload-div").classList.add("col-lg-12")},e.handleStudentClick=function(t){e.setState({studentFlag:!0})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.flagCamera?l.a.createElement(f,null):null,t=this.state.flagPhone?l.a.createElement(E,null):null,a=this.state.studentFlag?l.a.createElement(y,null):l.a.createElement("p",null);return l.a.createElement("div",{className:"container"},l.a.createElement("h4",{style:{fontSize:"3rem",textAlign:"center",marginBottom:"1rem"}},"TrueExam"),l.a.createElement("div",{className:"row",style:{marginTop:"3rem"}},l.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 camera-div"},l.a.createElement("button",{type:"button",id:"camuni",className:"btn btn-primary",onClick:this.handleCamera},"Take photo with camera")),l.a.createElement("div",{className:"col-lg- col-md-6 col-sm-6 image-upload-div",id:"image-id"},l.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.handlePhotoDevice},"Take photo with device"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12"},e),l.a.createElement("div",{className:"col-lg-12  col-md-12 col-sm-12"},t)),l.a.createElement("div",{className:"container",style:{marginTop:"3rem"}},l.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.handleStudentClick},"student section"),a))}}]),a}(n.Component);var k=function(){return l.a.createElement("div",null,l.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.e86ba934.chunk.js.map