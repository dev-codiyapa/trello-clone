(this["webpackJsonptrello-clone"]=this["webpackJsonptrello-clone"]||[]).push([[0],{62:function(e,t,a){e.exports=a(78)},67:function(e,t,a){},68:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),c=a.n(l),o=(a(67),a(19)),i=a(20),s=a(25),d=a(24),u=a(15),m=(a(68),a(110)),p=a(80),h=a(113),f=function(e){var t=Object(u.a)({},e),a=t.text;t.cardId;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{style:{marginTop:"8px"}},r.a.createElement(h.a,null,r.a.createElement(p.a,{gutterBottom:!0},a))))},E=a(115),b=(a(72),a(55)),g=(a(73),a(114)),v=a(22),O=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).hanldInputChange=function(e){var t=e&&e.target.value;n.setState({cardConent:t})},n.addCardToList=function(){var e=n.props.type,t=n.props.listId,a=n.state.cardConent;"list"==e&&a?n.props.addList(a):"card"==e&&a&&n.props.addCard(t,a),n.props.closeCardForm()},n.closeForm=function(){n.props.closeCardForm(),console.log("close form 1-2-3")},n.renderCardForm=function(){var e=n.props.type,t="list"==e?"Enter list title...":"Enter a title of this card...",a="list"==e?"Add list":"Add Card";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card-form"},r.a.createElement(m.a,null,r.a.createElement(b.a,{placeholder:t,value:n.state.cardConent,className:"card-box",onChange:n.hanldInputChange,autoFocus:!0})),r.a.createElement("div",{className:"card-form__btn_section"},r.a.createElement(g.a,{variant:"contained",className:"card-form__btn",onClick:n.addCardToList},a),r.a.createElement(E.a,{className:"close-card-form",onClick:n.closeForm},"close"))))},n.state={cardConent:""},n}return Object(i.a)(a,[{key:"render",value:function(){return this.renderCardForm()}}]),a}(r.a.Component),y=Object(v.b)((function(e){return{list:e.lists}}),(function(e){return{addList:function(t){return e(function(e){return{type:"ADD_LIST",payload:e}}(t))},addCard:function(t,a){return e(function(e,t){return{type:"ADD_CARD",payload:{listId:e,content:t}}}(t,a))}}}))(O),C=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleAddCard=function(){n.setState({isFormOpen:!0})},n.closeCardForm=function(){n.setState({isFormOpen:!1})},n.cardButton=function(){var e=n.props.type,t="list"==e?"Add another list":"Add another card";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"list"==e?"add-list-btn":"add-card-btn",onClick:n.handleAddCard},r.a.createElement(E.a,null,"add"),r.a.createElement("span",null,t)))},n.state={isFormOpen:!1},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.type,a=e.listId;return this.state.isFormOpen?r.a.createElement(y,{closeCardForm:this.closeCardForm,type:t,listId:a}):this.cardButton()}}]),a}(r.a.Component),k=function(e){var t=Object(u.a)({},e),a=t.title,n=t.cards,l=t.listId;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h4",null,a),n&&n.map((function(e){return r.a.createElement(f,{key:e.id,text:e.text,cardId:e.id})})),r.a.createElement(C,{type:"card",listId:l})))},w=(a(76),a(18)),j=a(45),F=a(120),I=a(117),x=a(118),D=a(116),N=a(122),A=a(121),_=a(44),T=a.n(_),B=a(42),M=a.n(B),S=a(43),L=a.n(S),z=a(54),R=a.n(z),W=a(119);function J(){var e=P(),t=r.a.useState(null),a=Object(j.a)(t,2),n=a[0],l=a[1],c=r.a.useState(null),o=Object(j.a)(c,2),i=o[0],s=o[1],d=Boolean(n),u=Boolean(i),m=function(e){l(e.currentTarget)},h=function(){s(null)},f=function(){l(null),h()},E="primary-search-account-menu",b=r.a.createElement(A.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:E,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:f},r.a.createElement(N.a,{onClick:f},"Profile"),r.a.createElement(N.a,{onClick:f},"My account")),g=r.a.createElement(A.a,{anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:h},r.a.createElement(N.a,null,r.a.createElement(D.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(M.a,null)),r.a.createElement("p",null,"Messages")),r.a.createElement(N.a,null,r.a.createElement(D.a,{"aria-label":"show 11 new notifications",color:"inherit"},r.a.createElement(L.a,null)),r.a.createElement("p",null,"Notifications")),r.a.createElement(N.a,{onClick:m},r.a.createElement(D.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(T.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:e.grow},r.a.createElement(I.a,{position:"static"},r.a.createElement(x.a,null,r.a.createElement(p.a,{className:e.title,variant:"h6",noWrap:!0},"Task Manager"),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.sectionDesktop},r.a.createElement(W.a,{href:"https://www.linkedin.com/in/harekrishna-b8b91b9b/",target:"_blank",color:"inherit"},r.a.createElement(D.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(M.a,null))),r.a.createElement(W.a,{href:"https://twitter.com/a_lostdeveloper",target:"_blank",color:"inherit"},r.a.createElement(D.a,{"aria-label":"show 17 new notifications",color:"inherit"},r.a.createElement(L.a,null))),r.a.createElement(D.a,{edge:"end","aria-label":"account of current user","aria-controls":E,"aria-haspopup":"true",onClick:m,color:"inherit"},r.a.createElement(T.a,null))),r.a.createElement("div",{className:e.sectionMobile},r.a.createElement(D.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},color:"inherit"},r.a.createElement(R.a,null))))),g,b)}var P=Object(F.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(w.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),inputRoot:{color:"inherit"},inputInput:Object(w.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(w.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(w.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})),G=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.list;return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,null),r.a.createElement("div",{className:"list-container"},e&&e.data&&e.data.map((function(e){return r.a.createElement(k,{key:e.id,title:e.title,cards:e.card,listId:e.id})})),r.a.createElement(C,{type:"list",listId:1})))}}]),a}(r.a.Component),$=Object(v.b)((function(e){return{list:e.lists}}))(G);var q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement($,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(21),K={data:[{title:"TO DO",id:0,card:[{id:0,text:"careated first statis card"},{id:1,text:"careatd second static card"}]},{title:"In progress",id:1,card:[{id:0,text:"First task In progress"}]},{title:"Done",id:2,card:[{id:0,text:"First task is done"}]}]},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LIST":var a=e.data&&e.data.length,n={title:t.payload,id:a+1,card:[]},r=e.data;return Object(u.a)(Object(u.a)({},e),r.push(n));case"ADD_CARD":for(var l=t.payload&&t.payload.listId,c=t.payload&&t.payload.content,o=e.data,i=null,s=0;s<o.length;s++)if(l==o[s].id){i=o[s];break}var d=i.card&&i.card.length-1;return i.card.push({id:d,text:c}),Object(u.a)({},e);default:return e}},U=Object(H.b)({lists:Q}),V=Object(H.c)(U);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v.a,{store:V},r.a.createElement(q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.a29811c8.chunk.js.map