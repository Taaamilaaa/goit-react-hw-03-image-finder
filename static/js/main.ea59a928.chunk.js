(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{27:function(e,t,a){e.exports={loader:"Loader_loader__jqv4Q"}},32:function(e,t,a){},33:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(10),r=a.n(o),i=(a(32),a(13)),s=a(4),l=a(5),u=a(7),m=a(6),h=(a(33),a(12)),d=(a(14),a(15),a(0)),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={value:""},e.handleChange=function(t){e.setState({value:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.value.trim())return Object(h.alert)({text:"Please, enter your query!"});e.props.onSubmit(e.state.value),e.setState({value:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)("header",{className:"Searchbar",children:Object(d.jsxs)("form",{onSubmit:this.handleSubmit,className:"SearchForm",children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{className:"SearchForm-input",type:"text",value:this.state.value,name:"value",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})]})})}}]),a}(c.a.Component),b=function(e){var t=e.imgS,a=e.imgL,n=e.onClick;return Object(d.jsx)("li",{className:"ImageGalleryItem",children:Object(d.jsx)("img",{src:t,alt:"",onClick:function(){return n(a)},className:"ImageGalleryItem-image"})})},j=function(e){var t=e.images,a=e.onClick;return Object(d.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,n=e.webformatURL,c=e.largeImageURL;return Object(d.jsx)(b,{imgL:c,imgS:n,onClick:a},t)}))})},p=a(25),f=a.n(p),v=function(e){var t=e.query,a=e.page,n="".concat("https://pixabay.com/api/","?q=").concat(t,"&page=").concat(a,"&key=").concat("23114127-913a50287ab6c0ea340feb686","&image_type=photo&orientation=horizontal&per_page=12");return f.a.get(n).then((function(e){return e.data.hits}))},O=function(e){var t=e.text,a=e.onClick;return Object(d.jsx)("button",{className:"Button",onClick:a,children:t})},y=document.querySelector("#portal"),x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).handleKeyDown=function(t){"Escape"===t.code&&e.props.showModal()},e.handleOverlayClick=function(t){t.currentTarget===t.target&&e.props.showModal()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(d.jsx)("div",{className:"Overlay",onClick:this.handleOverlayClick,children:Object(d.jsx)("div",{className:"Modal",children:this.props.children})}),y)}}]),a}(n.Component),S=(a(24),a(26)),w=a.n(S),k=a(27),C=a.n(k),I=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)(w.a,{type:"Oval",color:"#00BFFF",height:80,width:80,className:C.a.loader})}}]),a}(c.a.Component),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={value:"",page:1,images:[],isLoading:!1,modalIsOpen:!1,bigImg:""},e.formSubmitHandle=function(t){e.setState({value:t,page:1,images:[]})},e.fetchImages=function(){var t={query:e.state.value,page:e.state.page};e.setState({isLoading:!0}),v(t).then((function(t){e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),page:e.page+1}}))})).catch((function(e){return e({text:"No image!",delay:1e3})})).finally((function(){return e.setState({isLoading:!1})}))},e.imgBig=function(t){e.setState({bigImg:t}),e.toggleModal()},e.toggleModal=function(){e.setState((function(e){return{modalIsOpen:!e.modalIsOpen}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.value!==this.state.value&&this.fetchImages(),this.state.modalIsOpen||window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.bigImg,n=e.isLoading,c=e.modalIsOpen;return Object(d.jsxs)("div",{className:"Container",children:[Object(d.jsx)(g,{onSubmit:this.formSubmitHandle}),n&&Object(d.jsx)(I,{}),Object(d.jsx)(j,{images:t,onClick:this.imgBig}),t.length>0&&Object(d.jsx)(O,{text:"load more",onClick:this.fetchImages}),c&&Object(d.jsx)(x,{showModal:this.imgBig,children:Object(d.jsx)("img",{src:a,alt:""})})]})}}]),a}(c.a.Component),L=N;r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(L,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.ea59a928.chunk.js.map