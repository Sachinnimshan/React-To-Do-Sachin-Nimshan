(this.webpackJsonpreactsn=this.webpackJsonpreactsn||[]).push([[0],{14:function(e,t,n){e.exports=n(28)},19:function(e,t,n){},20:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},21:function(e,t,n){},22:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(6),c=n.n(i),o=(n(19),n(11)),s=n(7),l=n(8),u=n(2),m=n(13),d=n(12),h=(n(20),n(21),n(22),n(9));var f=function(e){var t=e.items.map((function(t){return r.a.createElement("div",{className:"list",key:"item.key"},r.a.createElement("p",null,t.text,r.a.createElement("span",null,r.a.createElement(h.a,{className:"faicons",icon:"trash",onClick:function(){return e.deleteItem(t.key)}}))))}));return r.a.createElement("div",null,t)},v=n(3),p=n(10);v.b.add(p.a);var I=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={items:[],currentItem:{text:"",key:""}},e.handleInput=e.handleInput.bind(Object(u.a)(e)),e.addItem=e.addItem.bind(Object(u.a)(e)),e.deleteItem=e.deleteItem.bind(Object(u.a)(e)),e}return Object(l.a)(n,[{key:"handleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}})}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(console.log(t),""!==t.text){var n=[].concat(Object(o.a)(this.state.items),[t]);this.setState({items:n,currentItem:{text:"",key:""}})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("form",{id:"to-do-form",onSubmit:this.addItem},r.a.createElement("input",{type:"text",placeholder:"Enter Text",value:this.state.currentItem.text,onChange:this.handleInput}),r.a.createElement("button",{type:"submit"},"ADD"))),r.a.createElement(f,{items:this.state.items,deleteItem:this.deleteItem}))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.acfa0286.chunk.js.map