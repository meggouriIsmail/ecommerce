(this.webpackJsonpecommerce_sample=this.webpackJsonpecommerce_sample||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(12),i=c.n(a),r=(c(33),c(5)),l=(c(34),c(0)),o=function(e){return Object(l.jsxs)("div",{className:e.className,children:[Object(l.jsx)("div",{className:"s-toggle",onClick:e.toggle}),Object(l.jsxs)("form",{className:"search-box",onSubmit:e.toggle,children:[Object(l.jsx)("img",{src:"/assets/icons/search.png",alt:"like",onClick:e.toggle}),Object(l.jsx)("input",{type:"text",className:"s-text",placeholder:"search..."})]})]})},j=c(24),d=c(25),b=c(28),u=c(27),p=c(44),m=c(3),h=function(e){var t=Object(s.useState)([]),c=Object(r.a)(t,2),n=c[0],a=c[1],i=Object(s.useState)(0),o=Object(r.a)(i,2),j=o[0],d=o[1];return Object(s.useEffect)((function(){var e=localStorage.getItem("likedProduct"),t=JSON.parse(e);t&&a(t);var c=0;t.forEach((function(e){c+=e.price})),d(c)}),[localStorage.getItem("likedProduct")]),Object(l.jsxs)("div",{className:e.className,children:[Object(l.jsxs)("div",{className:"l-head",children:[Object(l.jsx)("h2",{children:"LIKED PRODUCTS"}),Object(l.jsx)("img",{src:"/assets/icons/delete.png",alt:"X",onClick:e.toggle,style:{cursor:"pointer"}})]}),Object(l.jsx)("div",{className:"l-body",children:Object(l.jsx)("ul",{className:"l-products",children:n.map((function(e,t){return Object(l.jsxs)("li",{className:"l-product",children:[Object(l.jsx)("img",{src:e.image,alt:"product-img",className:"l-prod-img"}),Object(l.jsxs)("div",{className:"l-prod-details",children:[Object(l.jsx)("p",{children:e.name}),Object(l.jsxs)("p",{children:["1x$",e.price]})]})]},t)}))})}),Object(l.jsxs)("div",{className:"l-footer",children:[Object(l.jsxs)("h2",{children:["Total: $ ",j.toFixed(2)]}),Object(l.jsx)(m.b,{to:"/cart",children:Object(l.jsx)("input",{type:"button",value:"VIEW CART",className:"prod-btn-more",onClick:e.toggle})})]})]})},O=function(e){Object(b.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(j.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={showModel:!1,showLinks:!1},e.toggleModel=function(){e.setState({showModel:!e.state.showModel})},e.toggleLinks=function(){e.setState({showLinks:!e.state.showLinks})},e}return Object(d.a)(c,[{key:"render",value:function(){var e=this;return Object(l.jsxs)("div",{className:"navBar",children:[Object(l.jsx)(m.b,{to:"/",children:Object(l.jsx)("h2",{children:"Ecommerce"})}),Object(l.jsx)("div",{className:"nav-links ".concat(this.state.showLinks?"active":null),children:Object(l.jsxs)("ul",{className:"page-links",children:[Object(l.jsx)(m.b,{to:"/",children:Object(l.jsx)("li",{onClick:this.toggleLinks,children:"Home"})}),Object(l.jsx)(m.b,{to:"/shop",children:Object(l.jsx)("li",{onClick:this.toggleLinks,children:"Shop"})}),Object(l.jsx)(m.b,{to:"/about",children:Object(l.jsx)("li",{onClick:this.toggleLinks,children:"About"})}),Object(l.jsx)(m.b,{to:"/contact",children:Object(l.jsx)("li",{onClick:this.toggleLinks,children:"Contact"})})]})}),Object(l.jsxs)("ul",{className:"card-links",children:[Object(l.jsx)("li",{onClick:this.props.Click,children:Object(l.jsx)("img",{src:"/assets/icons/search.png",alt:"like"})}),Object(l.jsx)(m.b,{to:"/cart",children:Object(l.jsx)("li",{children:Object(l.jsx)("img",{src:"/assets/icons/shopping_cart.png",alt:"shopping"})})}),Object(l.jsx)("li",{onClick:this.toggleModel,children:Object(l.jsx)("img",{src:"/assets/icons/love.png",alt:"like"})})]}),Object(l.jsx)("img",{src:"/assets/icons/menu.png",alt:"like",className:"menu-sm",onClick:this.toggleLinks}),Object(l.jsx)(p.a,{in:this.state.showModel,timeout:200,children:function(t){return Object(l.jsx)(h,{className:"like like-".concat(t),toggle:e.toggleModel})}})]})}}]),c}(n.a.Component);window.addEventListener("scroll",(function(){window.scrollY>20?document.querySelector(".navBar").classList.add("navBar-sticky"):document.querySelector(".navBar").classList.remove("navBar-sticky")}));var x=O,g=[{pic:"woman2.png",title:"Women",trend:"new trend"},{pic:"man1.png",title:"Men",trend:"new trend"},{pic:"cap.png",title:"Accessories",trend:"new trend"}],f=function(){return Object(l.jsx)("div",{className:"categorie",children:g.map((function(e,t){return Object(l.jsxs)("div",{className:"cat",children:[Object(l.jsx)("img",{src:"/assets/products/".concat(e.pic),alt:"woman",className:"cat-img"}),Object(l.jsx)("div",{className:"overlay",children:Object(l.jsx)("p",{children:"Shop Now"})}),Object(l.jsx)("p",{className:"cat-title",children:e.title}),Object(l.jsx)("p",{className:"cat-sub",children:e.trend})]},t)}))})},v=function(){return Object(l.jsxs)("div",{className:"hero",children:[Object(l.jsx)("img",{src:"".concat("/myEcomme","/assets/products/shirts.jpg"),className:"h-img",alt:"hero"}),Object(l.jsxs)("div",{className:"h-Info",children:[Object(l.jsx)("p",{className:"h-desc",children:"Men Collection 2021"}),Object(l.jsx)("h1",{className:"h-title",children:"NEW ARRIVALS"}),Object(l.jsx)(m.b,{to:"/shop",children:Object(l.jsx)("input",{type:"button",value:"SHOP NOW",className:"h-btn-shop btn-shop "})})]})]})},N=c(10),k=c.n(N),y=c(16),S=c(14),w=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(localStorage.getItem("likedProduct")?JSON.parse(localStorage.getItem("likedProduct")):[]),i=Object(r.a)(a,2),o=i[0],j=i[1];function d(){return b.apply(this,arguments)}function b(){return(b=Object(S.a)(k.a.mark((function e(){var t,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=Object(S.a)(k.a.mark((function e(t){var c,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products/category/"+t);case 2:return c=e.sent,e.next=5,c.json();case 5:s=e.sent,n(s);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(s.useEffect)((function(){var e=JSON.stringify(o);localStorage.setItem("likedProduct",e)}),[o]),Object(s.useEffect)((function(){d()}),[]);var p=function(e){void 0!==o.find((function(t){return t.id===e.id}))?O(e.id):h(e)},h=function(e){var t={id:e.id,name:e.category,price:e.price,image:e.image};j([].concat(Object(y.a)(o),[t]))},O=function(e){var t=o.filter((function(t){return t.id!==e}));j(t)},x=function(e){document.querySelectorAll(".prod-cat-btns").forEach((function(e){e.classList.contains("prod-btns-active")&&e.classList.remove("prod-btns-active")})),e.target.classList.add("prod-btns-active"),function(e){u.apply(this,arguments)}(e.target.name)};return Object(l.jsxs)("div",{style:{margin:"6em auto"},children:[Object(l.jsxs)("div",{className:"prod-cat",children:[Object(l.jsx)("input",{type:"button",className:"prod-cat-btns prod-btns-active",onClick:function(e){x(e),d()},value:"All"}),Object(l.jsx)("input",{type:"button",name:"men's clothing",className:"prod-cat-btns",onClick:x,value:"Men"}),Object(l.jsx)("input",{type:"button",name:"women's clothing",className:"prod-cat-btns",onClick:x,value:"Women"}),Object(l.jsx)("input",{type:"button",name:"jewelery",className:"prod-cat-btns",onClick:x,value:"Jewelery"}),Object(l.jsx)("input",{type:"button",name:"electronics",className:"prod-cat-btns",onClick:x,value:"Electronics"})]}),Object(l.jsx)("div",{className:"product-grid",children:c.map((function(e){return Object(l.jsxs)("div",{className:"product",children:[Object(l.jsx)("img",{src:e.image,alt:"product-pic",className:"prod-img"}),Object(l.jsx)(m.b,{to:"/shop/".concat(e.id),children:Object(l.jsx)("input",{type:"button",value:"SHOP NOW",className:"prod-btn-shop btn-shop"})}),Object(l.jsxs)("div",{className:"prod-description",children:[Object(l.jsxs)("div",{className:"prod-desc",children:[Object(l.jsx)("p",{children:e.category}),Object(l.jsx)("span",{className:"prod-like",onClick:p.bind(undefined,e),children:void 0===o.find((function(t){return t.id===e.id}))?Object(l.jsx)("img",{src:"/assets/icons/love.png",alt:"like",className:"prod-icon"}):Object(l.jsx)("img",{src:"/assets/icons/love_color.png",alt:"like",className:"prod-icon"})})]}),Object(l.jsxs)("p",{className:"prod-price",children:["$",e.price]})]})]},e.id)}))})]})},C=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(v,{}),Object(l.jsx)(f,{}),Object(l.jsx)(w,{})]})},E=c(21),I=function(e){var t=e.match,c=Object(s.useState)({}),n=Object(r.a)(c,2),a=n[0],i=n[1],o=Object(s.useState)(),j=Object(r.a)(o,2),d=j[0],b=j[1],u=Object(s.useState)(localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]),h=Object(r.a)(u,2),O=h[0],x=h[1],g=Object(s.useState)({inProp:!1,text:"",icon:""}),f=Object(r.a)(g,2),v=f[0],N=f[1];function w(e,t){var c={inProp:!v.inProp,text:e,icon:t};N(c),console.log(v)}Object(s.useEffect)((function(){function e(){return(e=Object(S.a)(k.a.mark((function e(){var c,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products/".concat(t.params.id));case 2:return c=e.sent,e.next=5,c.json();case 5:s=e.sent,i(s);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t.params.id]),Object(s.useEffect)((function(){var e=JSON.stringify(O);localStorage.setItem("cart",e)}),[O]);var C=function(e){var t={id:e.id,name:e.title,total:d,price:e.price,quantity:I.value,image:e.image};x([].concat(Object(y.a)(O),[t]))},I=document.getElementById("numProduct"),P=function(){var e=(parseFloat(a.price)*parseInt(I.value)).toFixed(2);b(e)},L={transition:"all ".concat(300,"ms ease-in-out"),opacity:0,transform:"translateY(-100%)"},T={entering:{opacity:1,transform:"translateY(0%)"},entered:{opacity:1,transform:"translateY(0%)"}};return Object(l.jsxs)("div",{className:"product-details",children:[Object(l.jsxs)("div",{className:"prdt-head",children:[Object(l.jsx)(m.b,{to:"/shop",children:"Shop"}),Object(l.jsx)("img",{src:"/assets/icons/more.png",alt:">"}),Object(l.jsx)("p",{children:a.title})]}),Object(l.jsxs)("div",{className:"prdt",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:a.image,style:{height:"500px",maxWidth:"100%"},alt:"product"})}),Object(l.jsxs)("div",{className:"prdt-info",children:[Object(l.jsx)("h3",{children:a.title}),Object(l.jsx)("p",{children:a.description}),Object(l.jsxs)("span",{children:["$",a.price]}),Object(l.jsxs)("div",{className:"plusmin",children:[Object(l.jsx)("input",{type:"button",value:"+",className:"plusmin-btns",onClick:function(){I.stepUp(1),P(I.value)}}),Object(l.jsx)("input",{type:"number",name:"num-product",id:"numProduct",readOnly:!0,className:"plusmin-input",min:"1",max:"10"}),Object(l.jsx)("input",{type:"button",value:"-",className:"plusmin-btns",onClick:function(){I.stepDown(1),P(I.value)}})]}),Object(l.jsxs)("h2",{children:["Total: $",d]}),Object(l.jsx)("input",{type:"button",value:"ADD TO CART",className:"prod-btn-more",onClick:function(e){var t=void 0!==O.find((function(t){return t.id===e.id})),c=e.title;t?w(c+" is already in cart","close"):void 0!==d?(C(e),w(c+" is added to cart","check")):void 0===d&&w("you need to add at least one item of this product to add it to cart","close")}.bind(undefined,a)}),Object(l.jsx)(p.a,{in:v.inProp,timeout:300,children:function(e){return Object(l.jsx)("div",{id:"model",style:Object(E.a)(Object(E.a)({},L),T[e]),children:Object(l.jsxs)("div",{className:"model-block",children:[Object(l.jsx)("img",{src:"/assets/icons/".concat(v.icon,".png"),alt:"like",onClick:function(){w(!v.inProp)}}),Object(l.jsx)("h5",{children:v.text})]})})}})]})]})]})},P=function(){return Object(l.jsxs)("div",{className:"Checkout",children:[Object(l.jsx)("h1",{children:"Cart Totals"}),Object(l.jsx)("div",{className:"br-b p-b-30",children:Object(l.jsx)("div",{children:Object(l.jsx)("i",{children:"Subtotal: $79.65"})})}),Object(l.jsxs)("div",{className:"br-b d-flex p-b-30",children:[Object(l.jsx)("div",{className:"w-35",children:Object(l.jsx)("i",{children:"Shipping:"})}),Object(l.jsxs)("div",{className:"w-65",children:[Object(l.jsx)("p",{className:"f-size-14",children:"There are no shipping methods available. Please double check your address, or contact us if you need any help."}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{children:"Calculate Shipping"}),Object(l.jsx)("div",{children:Object(l.jsxs)("select",{name:"time",tabIndex:"-1","aria-hidden":"true",className:"w-100 shipping-info",children:[Object(l.jsx)("option",{children:"Select a country..."}),Object(l.jsx)("option",{children:"Morocco"}),Object(l.jsx)("option",{children:"USA"})]})}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"text",name:"state",placeholder:"State /  country",className:"w-100 shipping-info"})}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"text",name:"postcode",placeholder:"Postcode / Zip",className:"w-100 shipping-info"})}),Object(l.jsx)("div",{children:Object(l.jsx)("div",{children:"Update Totals"})})]})]})]}),Object(l.jsx)("div",{className:"br-b p-b-30",children:Object(l.jsx)("i",{className:" f-size-24",children:"Total: $79.65"})}),Object(l.jsx)("div",{className:"m-btn",children:Object(l.jsx)("button",{type:"submit",className:"btn-checkout",children:"Proceed to Checkout"})})]})},L=function(){var e=function(e,t,c){var s=(parseFloat(t)*parseInt(e)).toFixed(2);c.innerText="$ ".concat(s)},t=Object(s.useState)(localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]),c=Object(r.a)(t,2),n=c[0],a=c[1];Object(s.useEffect)((function(){var e=localStorage.getItem("cart"),t=JSON.parse(e);t&&a(t)}),[]),Object(s.useEffect)((function(){var e=JSON.stringify(n);localStorage.setItem("cart",e)}),[n]);var i=function(e){var t=n.filter((function(t){return t.id!==e}));a(t)},o=[],j=function(e,t){var c=n.find((function(t){return t.id===e})),s={id:c.id,name:c.name,total:parseFloat(c.price)*t,price:c.price,quantity:t,image:c.image};o.push(s),a([].concat(o))};return Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"Cart",children:[Object(l.jsx)("div",{className:"wrap-table-shopping-cart",children:Object(l.jsx)("table",{className:"table-shopping-cart",children:Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{className:"table_head",children:[Object(l.jsx)("th",{className:"column-1",children:"Product"}),Object(l.jsx)("th",{className:"column-2"}),Object(l.jsx)("th",{className:"column-3",children:"Price"}),Object(l.jsx)("th",{className:"column-4",children:"Quantity"}),Object(l.jsx)("th",{className:"column-5",children:"Total"})]}),n.map((function(t){return Object(l.jsxs)("tr",{className:"table_row",children:[Object(l.jsx)("td",{className:"column-1",children:Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:t.image,alt:"IMG",className:"img-itemcart"})})}),Object(l.jsx)("td",{className:"column-2",children:t.name}),Object(l.jsxs)("td",{className:"column-3",children:["$ ",t.price]}),Object(l.jsx)("td",{className:"column-4",children:Object(l.jsxs)("div",{className:"plusmin",children:[Object(l.jsx)("input",{type:"button",value:"+",className:"plusmin-btns",onClick:function(c){return function(t,c){var s=t.target.parentElement.children.numProduct;s.stepUp(1);var n=t.target.parentElement.parentElement.nextElementSibling;e(s.value,c,n)}(c,t.price)}}),Object(l.jsx)("input",{type:"number",id:"numProduct",name:t.id,defaultValue:t.quantity,readOnly:!0,className:"plusmin-input",min:"0",max:"10"}),Object(l.jsx)("input",{type:"button",value:"-",className:"plusmin-btns",onClick:function(c){return function(t,c){var s=t.target.parentElement.children.numProduct;s.stepDown(1);var n=t.target.parentElement.parentElement.nextElementSibling;e(s.value,c,n)}(c,t.price)}})]})}),Object(l.jsxs)("td",{className:"column-5",children:["$ ",t.total]})]},t.id)}))]})})}),Object(l.jsx)("div",{className:"br-w p-30",children:Object(l.jsx)("input",{className:"btn-update",type:"button",name:"update",value:"Update Cart",onClick:function(){document.querySelectorAll(".plusmin-input").forEach((function(e){"0"===e.value?i(parseInt(e.name)):j(parseInt(e.name),parseInt(e.value))}))}})})]}),Object(l.jsx)(P,{})]})},T=function(){return Object(l.jsxs)("footer",{children:[Object(l.jsxs)("div",{className:"foo-about",children:[Object(l.jsx)("h2",{children:"NEWSLETTER"}),Object(l.jsx)("input",{type:"text",placeholder:"email@example.com",className:"f-text-input"}),Object(l.jsx)("input",{type:"button",value:"SUBSCRIB",className:"f-btn-contact"})]}),Object(l.jsxs)("div",{className:"foo-cat",children:[Object(l.jsx)(m.b,{to:"/shop",children:Object(l.jsx)("h2",{children:"CATEGORIES"})}),Object(l.jsxs)("ul",{className:"f-categorie",children:[Object(l.jsx)("li",{children:"Men"}),Object(l.jsx)("li",{children:"Women"}),Object(l.jsx)("li",{children:"Electronics"}),Object(l.jsx)("li",{children:"Jewelery"})]})]}),Object(l.jsxs)("div",{className:"foo-help",children:[Object(l.jsx)("h2",{children:"GET IN TOUCH"}),Object(l.jsx)("p",{children:"Any questions? Let us know in store at 8th floor, 379 Hassan II St, Rabt, MA 10018 or call us on (+212)6 95874215"}),Object(l.jsxs)("ul",{className:"social",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://ma.linkedin.com/in/ismail-meggouri-7437a71b4",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{src:"/assets/icons/linkedin_64px.png",alt:"linkedin"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://www.instagram.com/ismail_meggouri/?hl=en",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{src:"/assets/icons/instagram_64px.png",alt:"instagram"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://www.facebook.com/el.meggo",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{src:"/assets/icons/facebook_64px.png",alt:"facebook"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://github.com/meggouriIsmail",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{src:"/assets/icons/github_64px.png",alt:"github"})})})]})]})]})},A=c(2);var M=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],n=t[1];function a(){n(!c)}return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(m.a,{children:[Object(l.jsx)(p.a,{in:c,timeout:200,children:function(e){return Object(l.jsx)(o,{className:"search s-".concat(e),toggle:a})}}),Object(l.jsx)(x,{Click:a}),Object(l.jsxs)(A.c,{children:[Object(l.jsx)(A.a,{exact:!0,path:"/",component:C}),Object(l.jsx)(A.a,{exact:!0,path:"/shop",component:w}),Object(l.jsx)(A.a,{path:"/shop/:id",component:I}),Object(l.jsx)(A.a,{exact:!0,path:"/cart",component:L})]}),Object(l.jsx)(T,{})]})})};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(M,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.f2d73638.chunk.js.map