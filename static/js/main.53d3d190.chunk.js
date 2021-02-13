(this["webpackJsonpmosogrean-tradingboard"]=this["webpackJsonpmosogrean-tradingboard"]||[]).push([[0],{237:function(e,t,a){e.exports=a(442)},242:function(e,t,a){},243:function(e,t,a){},244:function(e,t,a){},337:function(e,t,a){},366:function(e,t,a){},442:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(33),r=a.n(c),i=(a(242),a(243),a(106)),o=a(227),u={login:{link:"".concat("/login"),name:"Login"}},m=a(31),s=a(451),d=(a(244),a(165)),b=a.n(d),E=a(203),p=a(455),f=a(48),g=function(e){var t=e.show,a=e.form,n=e.toggle,c=function(){var e=Object(E.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.validateFields();case 2:e.sent,n();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",{style:{display:t?"block":"none"}},l.a.createElement(s.a,{form:a,style:{width:"100%"},name:"basic",layout:"vertical",onFinish:c},l.a.createElement(s.a.Item,{label:"Line Account ID",name:"lineId",rules:[{required:t,message:"Please input your line account id!"}]},l.a.createElement(p.a,null)),l.a.createElement(f.a,{type:"primary",onClick:c},"Send Verify Code")))},y=function(e){var t=e.show,a=e.form,n=e.toggle;return l.a.createElement("div",{style:{display:t?"block":"none"}},l.a.createElement(s.a,{form:a,layout:"vertical"},l.a.createElement(s.a.Item,{label:"Verify Code",name:"code",rules:[{required:t,message:"Please input your code!"}]},l.a.createElement(p.a,null)),l.a.createElement("div",null,l.a.createElement(f.a,{type:"ghost",onClick:function(){n()},style:{float:"left"}},"Back"),l.a.createElement(f.a,{type:"primary",onClick:function(){console.log(1)}},"Verify"))))},v=function(){var e=s.a.useForm(),t=Object(m.a)(e,1)[0],a=Object(n.useState)(!0),c=Object(m.a)(a,2),r=c[0],i=c[1],o=Object(n.useState)(!1),u=Object(m.a)(o,2),d=u[0],b=u[1],E=function(){i(!r),b(!d)};return l.a.createElement("div",{id:"login-form"},l.a.createElement(g,{show:r,form:t,toggle:function(){E()}}),l.a.createElement(y,{show:d,form:t,toggle:function(){E()}}))},h=a(454),j=a(234),O=a(36),k=function(e){var t=e.component,a=e.layout,n=Object(j.a)(e,["component","layout"]);return l.a.createElement(O.b,Object.assign({},n,{render:function(e){return l.a.createElement(a,null,l.a.createElement(t,e))}}))},w=function(e){return e.map((function(e){return l.a.createElement(k,{exact:!0,path:e.link,layout:e.layout,component:e.component,key:Object(h.a)()})}))},x=function(e){var t=e.children;return l.a.createElement(l.a.Fragment,null,t)},S=w([{link:u.login.link,layout:x,component:v}]),_={index:{link:"/",name:"Investor"},cryptoSymbol:{link:"/crypto/symbol/:Symbol",name:"Crypto"},tradingViewer:{link:"/crypto/tradingviewer",name:"TradingViewer"}},C=a(101),T=a(63),I=a(450),B=a(448),N=a(446),V=a(456),F=(a(337),[{title:"\u0e2a\u0e01\u0e38\u0e25\u0e40\u0e07\u0e34\u0e19",dataIndex:"title",key:"title"}]),H=[{key:"1",title:"BITCOIN",crypto:"BTC_THB"},{key:"2",title:"ETHREUM",crypto:"ETH_THB"},{key:"3",title:"XRP",crypto:"XRP_THB"},{key:"4",title:"OMG",crypto:"OMG_THB"}],A=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=(t[0],t[1],Object(n.useState)(!1)),c=Object(m.a)(a,2),r=c[0],i=c[1],o=Object(n.useState)(),u=Object(m.a)(o,2),d=u[0],b=u[1],E=Object(n.useState)(),g=Object(m.a)(E,2),y=g[0],v=g[1],h=s.a.useForm(),j=Object(m.a)(h,1)[0];return Object(n.useEffect)((function(){var e=j.getFieldsValue(),t=e.cash/e.crypto_buy,a=t*e.crypto_sale,n=a-(t*e.fee/100+a*e.fee/100)-e.cash;b({amount:t,receive:a,deposit:n})}),[r]),l.a.createElement(l.a.Fragment,null,y||null,l.a.createElement(C.a,{justify:"space-around",gutter:[16,{xs:8,sm:16,md:24,lg:32}]},l.a.createElement(T.a,{xs:24,sm:24,md:24,lg:12},l.a.createElement(I.a,{title:"CRYPTOCURRENCY",style:{width:"100%"},extra:l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{type:"link",onClick:function(){v(l.a.createElement(O.a,{to:_.tradingViewer.link}))}},"view tradingviwer"))},l.a.createElement(B.a,{className:"table-check",columns:F,dataSource:H,onRow:function(e,t){return{onClick:function(){v(l.a.createElement(O.a,{to:_.cryptoSymbol.link.replace(":Symbol",e.crypto)}))}}}}))),l.a.createElement(T.a,{xs:24,sm:24,md:24,lg:12},l.a.createElement(I.a,{title:"\u0e04\u0e33\u0e19\u0e27\u0e19"},l.a.createElement(N.a,null,"\u0e01\u0e33\u0e44\u0e23"),l.a.createElement(s.a,{layout:"vertical",form:j,onFinish:function(e){var t=e.cash/e.crypto_buy,a=t*e.crypto_sale,n=a-(t*e.fee/100+a*e.fee/100)-e.cash;b({amount:t,receive:a,deposit:n})},initialValues:{fee:.25}},l.a.createElement(s.a.Item,{label:"\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e07\u0e34\u0e19\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e0b\u0e37\u0e49\u0e2d",rules:[{required:!0}],name:"cash"},l.a.createElement(p.a,{type:"number",step:"any",onChange:function(){i(!r)}})),l.a.createElement(s.a.Item,{label:"\u0e23\u0e32\u0e04\u0e32\u0e0b\u0e37\u0e49\u0e2d crypto",rules:[{required:!0}],name:"crypto_buy"},l.a.createElement(p.a,{type:"number",step:"any",onChange:function(){i(!r)}})),l.a.createElement(s.a.Item,{label:"\u0e23\u0e32\u0e04\u0e32\u0e02\u0e32\u0e22 crypto",rules:[{required:!0}],name:"crypto_sale"},l.a.createElement(p.a,{type:"number",step:"any",onChange:function(){i(!r)}})),l.a.createElement(s.a.Item,{label:"fee",name:"fee"},l.a.createElement(p.a,{type:"number",step:"any",onChange:function(){i(!r)}}))),(null===d||void 0===d?void 0:d.amount)?l.a.createElement(I.a,{style:{marginTop:10}},l.a.createElement(V.b,{layout:"vertical"},l.a.createElement(V.b.Item,{label:"\u0e40\u0e2b\u0e23\u0e35\u0e22\u0e0d\u0e17\u0e35\u0e48\u0e44\u0e14\u0e49\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"},(null===d||void 0===d?void 0:d.amount)||null),l.a.createElement(V.b.Item,{label:"\u0e02\u0e32\u0e22\u0e41\u0e25\u0e49\u0e27\u0e08\u0e30\u0e44\u0e14\u0e49"},(null===d||void 0===d?void 0:d.receive)||null),l.a.createElement(V.b.Item,{label:"\u0e40\u0e1b\u0e47\u0e19\u0e01\u0e33\u0e44\u0e23\u0e2a\u0e38\u0e17\u0e18\u0e34"},(null===d||void 0===d?void 0:d.deposit)||null))):null))))},M=a(447),D=a(67),L=(a(366),M.a.Header),Y=M.a.Content,R=M.a.Footer,P=function(e){var t=e.children;return l.a.createElement(M.a,{className:"layout"},l.a.createElement(L,{style:{background:"#FFF"}},l.a.createElement("div",{className:"logo"}),l.a.createElement(D.a,{theme:"light",mode:"horizontal",defaultSelectedKeys:["1"]},l.a.createElement(D.a.Item,{key:"1"},l.a.createElement(i.b,{to:_.index.link},"Investor")),l.a.createElement("div",{style:{float:"right"}},l.a.createElement(f.a,{type:"link"},"Login")))),l.a.createElement("hr",null),l.a.createElement(Y,null,l.a.createElement("div",{className:"site-layout-content"},t)),l.a.createElement(R,{style:{textAlign:"center"}},"MosoLab \xa92021"))},J=a(458),U=a(144),G=a(113),K=a(452),q=a(460),z=a(459),W=a(50),X=a.n(W),$=a(219),Q=a(154),Z=a.n(Q),ee=function(e,t){return Z.a.get("https://tradingview.bitkub.com/tradingview/history?symbol=".concat(e,"&resolution=").concat("15","&from=").concat(t,"&to=").concat(t)).then((function(e){return e.data}))},te=G.a.Option,ae=G.a.OptGroup,ne=K.a.Text,le=function(e){var t=e.symbol,a=Object(n.useState)([]),c=Object(m.a)(a,2),r=c[0],i=c[1],o=Object(n.useState)([]),u=Object(m.a)(o,2),s=u[0],d=u[1],b=Object(n.useState)("15"),E=Object(m.a)(b,2),p=E[0],g=E[1],y=Object(n.useState)(1),v=Object(m.a)(y,2),h=v[0],j=v[1],O=function(){var e=X()().unix();(function(e,t,a,n){return Z.a.get("https://tradingview.bitkub.com/tradingview/history?symbol=".concat(e,"&resolution=").concat(t,"&from=").concat(a,"&to=").concat(n)).then((function(e){return e.data}))})(t,p,e-43200*h,e).then((function(e){i(e.t.map((function(e){return function(e){var t=new Date(1e3*e),a=t.getFullYear(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],l=t.getDate(),c=t.getHours(),r=t.getMinutes(),i=t.getSeconds();return"".concat(l," ").concat(n," ").concat(a," ").concat(c,":").concat(r,":").concat(i)}(e)})).concat([null,null,null,null])),d(e.c)}))};Object(n.useEffect)((function(){O()}),[]);var k={labels:r,datasets:[{label:"Trading Line",fill:!1,lineTension:.5,backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:s}]};return l.a.createElement("div",null,l.a.createElement(q.b,{style:{marginBottom:"2%"}},l.a.createElement(ne,null,"\u0e23\u0e30\u0e22\u0e30\u0e15\u0e48\u0e2d 1 \u0e0a\u0e48\u0e2d\u0e07:"),l.a.createElement(G.a,{defaultValue:"15",style:{width:120},onChange:function(e){g(e)}},l.a.createElement(ae,{label:"\u0e19\u0e32\u0e17\u0e35"},l.a.createElement(te,{value:"1"},"1 \u0e19\u0e32\u0e17\u0e35"),l.a.createElement(te,{value:"5"},"5 \u0e19\u0e32\u0e17\u0e35"),l.a.createElement(te,{value:"15"},"15 \u0e19\u0e32\u0e17\u0e35"),l.a.createElement(te,{value:"30"},"30 \u0e19\u0e32\u0e17\u0e35")),l.a.createElement(ae,{label:"\u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07"},l.a.createElement(te,{value:"60"},"1 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07"),l.a.createElement(te,{value:"240"},"4 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07")),l.a.createElement(ae,{label:"\u0e27\u0e31\u0e19"},l.a.createElement(te,{value:"1D"},"1 \u0e27\u0e31\u0e19"))),l.a.createElement(ne,null,"\u0e0a\u0e48\u0e27\u0e07\u0e40\u0e27\u0e25\u0e32\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14: "),l.a.createElement(z.a,{min:1,max:30,defaultValue:1,onChange:function(e){j(e)}}),l.a.createElement(ne,null,"\u0e27\u0e31\u0e19"),l.a.createElement(f.a,{type:"primary",onClick:function(){O()}},"\u0e1b\u0e23\u0e31\u0e1a\u0e04\u0e48\u0e32")),l.a.createElement($.Line,{data:k,options:{title:{display:!0,text:"Average Price value per Time",fontSize:20},legend:{display:!0,position:"right"}}}))},ce=a(44),re=a(84),ie=a(83),oe=a(453),ue=a(150),me=a(449),se=a(457),de=function(e){var t=e.symbol,a=Object(n.useState)("purchase_price"),c=Object(m.a)(a,2),r=c[0],i=c[1],o=Object(n.useState)("price"),u=Object(m.a)(o,2),s=u[0],d=u[1],b=Object(n.useState)({}),E=Object(m.a)(b,2),g=E[0],y=E[1],v=Object(n.useState)({}),h=Object(m.a)(v,2),j=h[0],O=h[1],k=Object(n.useState)({date:"",unix:0,price:0}),w=Object(m.a)(k,2),x=w[0],S=w[1],_=Object(n.useState)({date:"",unix:0,price:0}),B=Object(m.a)(_,2),F=B[0],H=B[1],A=Object(n.useState)(!1),M=Object(m.a)(A,2),D=M[0],L=M[1],Y=function(e,t){d(t),i(e.target.value)};Object(n.useEffect)((function(){var e=new Date(x.date).getTime()/1e3;if(!isNaN(e)&&0===x.unix){var a=X.a.unix(e).unix();ee(t,a).then((function(e){S(Object(ce.a)(Object(ce.a)({},x),{},{price:e.c[0]}))}))}}),[x.date]),Object(n.useEffect)((function(){var e=new Date(x.date).getTime()/1e3;if(!isNaN(e)&&0===F.unix){var t=X.a.unix(e).unix();ee("BTC_THB",t).then((function(e){H(Object(ce.a)(Object(ce.a)({},F),{},{price:e.c[0]}))}))}}),[x.date]);return l.a.createElement("div",null,l.a.createElement(oe.a,{title:"\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23",visible:D,onOk:function(){},onCancel:function(){L(!D)},okText:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23",cancelText:"\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01",width:"75%"},function(){switch(r){case"purchase_price":return l.a.createElement(l.a.Fragment,null,l.a.createElement(V.b,{title:"\u0e23\u0e32\u0e04\u0e32\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e0b\u0e37\u0e49\u0e2d",bordered:!0},l.a.createElement(V.b.Item,{label:"\u0e23\u0e32\u0e04\u0e32\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",span:3},g.price),l.a.createElement(V.b.Item,{label:"\u0e23\u0e32\u0e04\u0e32\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07",span:3},l.a.createElement(q.b,null,Number(g.price)+Number(g.threshold),",",g.price-g.threshold)),l.a.createElement(V.b.Item,{label:"\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",span:3},j.notification_times),l.a.createElement(V.b.Item,{label:"\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e01\u0e32\u0e23\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19",span:3},j.detail)))}}()),l.a.createElement(N.a,{orientation:"left"},"\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a"),l.a.createElement(C.a,null,l.a.createElement(T.a,{span:24},l.a.createElement(ue.a.Group,{defaultValue:"purchase_price",buttonStyle:"solid"},l.a.createElement(ue.a.Button,{value:"purchase_price",onClick:function(e){Y(e,"price")}},"\u0e23\u0e32\u0e04\u0e32\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23",l.a.createElement("strong",null,"\u0e0b\u0e37\u0e49\u0e2d")),l.a.createElement(ue.a.Button,{value:"selling_price",onClick:function(e){Y(e,"price")}},"\u0e23\u0e32\u0e04\u0e32\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23",l.a.createElement("strong",null,"\u0e02\u0e32\u0e22")),l.a.createElement(ue.a.Button,{value:"support_line",onClick:function(e){Y(e,"point")}},"\u0e40\u0e2a\u0e49\u0e19",l.a.createElement("strong",null,"\u0e41\u0e19\u0e27\u0e23\u0e31\u0e1a")),l.a.createElement(ue.a.Button,{value:"resistance_line",onClick:function(e){Y(e,"point")}},"\u0e40\u0e2a\u0e49\u0e19",l.a.createElement("strong",null,"\u0e41\u0e19\u0e27\u0e15\u0e49\u0e32\u0e19"))))),l.a.createElement(N.a,{orientation:"left"},"\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e23\u0e32\u0e04\u0e32\u0e2b\u0e23\u0e37\u0e2d\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e40\u0e27\u0e25\u0e32"),l.a.createElement(C.a,{style:{display:"price"===s?"block":"none"}},l.a.createElement(T.a,{span:24},l.a.createElement("span",null,"\u0e23\u0e32\u0e04\u0e32\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e15\u0e48\u0e2d\u0e2b\u0e19\u0e48\u0e27\u0e22"),l.a.createElement(p.a,{defaultValue:"0",prefix:l.a.createElement(ie.a,{icon:re.f}),addonAfter:"\u0e1a\u0e32\u0e17",allowClear:!0,type:"number",onChange:function(e){y(Object(ce.a)(Object(ce.a)({},g),{},{price:e.target.value}))}})),l.a.createElement(T.a,{span:24},l.a.createElement("span",null,"\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e23\u0e32\u0e04\u0e32\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19 (+/-)"),l.a.createElement(p.a,{defaultValue:"0",prefix:l.a.createElement(ie.a,{icon:re.a}),addonAfter:"\u0e1a\u0e32\u0e17",allowClear:!0,type:"number",onChange:function(e){y(Object(ce.a)(Object(ce.a)({},g),{},{threshold:e.target.value}))}}))),l.a.createElement(C.a,{style:{display:"point"===s?"block":"none"}},l.a.createElement(T.a,{span:24},l.a.createElement(q.b,null,l.a.createElement("span",null,"\u0e08\u0e38\u0e14\u0e17\u0e35\u0e48 1:"),l.a.createElement(me.a,{showTime:!0,onChange:function(e){S(Object(ce.a)(Object(ce.a)({},x),{},{date:e.format("YYYY-MM-DDTHH:mm:ss")}))}}))),l.a.createElement("br",null),l.a.createElement(T.a,{span:24},l.a.createElement("span",null,l.a.createElement(se.a.Ribbon,{text:"\u0e23\u0e32\u0e04\u0e32 \u0e13 \u0e08\u0e38\u0e14\u0e17\u0e35\u0e48 1"},l.a.createElement(I.a,null,x.price," ","\u0e1a\u0e32\u0e17")))),l.a.createElement("br",null),l.a.createElement(T.a,{span:24},l.a.createElement(q.b,null,l.a.createElement("span",null,"\u0e08\u0e38\u0e14\u0e17\u0e35\u0e48 2:"),l.a.createElement(me.a,{showTime:!0,onChange:function(e){H(Object(ce.a)(Object(ce.a)({},x),{},{date:e.format("YYYY-MM-DDTHH:mm:ss")}))}}))),l.a.createElement("br",null),l.a.createElement(T.a,{span:24},l.a.createElement("span",null,l.a.createElement(se.a.Ribbon,{text:"\u0e23\u0e32\u0e04\u0e32 \u0e13 \u0e08\u0e38\u0e14\u0e17\u0e35\u0e48 2"},l.a.createElement(I.a,null,F.price," ","\u0e1a\u0e32\u0e17")))),l.a.createElement("br",null)),l.a.createElement(N.a,{orientation:"left"},"\u0e01\u0e32\u0e23\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19"),l.a.createElement(C.a,null,l.a.createElement(T.a,{span:24},l.a.createElement(p.a,{defaultValue:3,prefix:l.a.createElement(ie.a,{icon:re.b}),addonAfter:"\u0e04\u0e23\u0e31\u0e49\u0e07",allowClear:!0,type:"number",onChange:function(e){O(Object(ce.a)(Object(ce.a)({},j),{},{notification_times:e.target.value}))}}))),l.a.createElement(N.a,null),l.a.createElement(C.a,null,l.a.createElement(p.a,{prefix:l.a.createElement(ie.a,{icon:re.c}),allowClear:!0,onChange:function(e){O(Object(ce.a)(Object(ce.a)({},j),{},{detail:e.target.value}))}})),l.a.createElement("br",null),l.a.createElement(C.a,{justify:"end"},l.a.createElement(f.a,{type:"primary",onClick:function(){return L(!D)}},"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23")))},be=[{title:"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e2a\u0e23\u0e49\u0e32\u0e07",dataIndex:"date",key:"date"},{title:"\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a",dataIndex:"age",key:"age"},{title:"\u0e23\u0e32\u0e04\u0e32\u0e2b\u0e23\u0e37\u0e2d\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07",dataIndex:"address",key:"address"},{title:"\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14",key:"tags",dataIndex:"tags"},{title:"\u0e08\u0e33\u0e19\u0e27\u0e19\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e17\u0e35\u0e48\u0e40\u0e2b\u0e25\u0e37\u0e2d",key:"tags",dataIndex:"tags"},{title:"Action",key:"action",render:function(e,t){return l.a.createElement(q.b,{size:"middle"},l.a.createElement("a",null,"Invite",t.name),l.a.createElement("a",null,"Delete"))}}],Ee=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}],pe=function(){return l.a.createElement("div",null,l.a.createElement(B.a,{columns:be,dataSource:Ee}))},fe=function(e){var t=Object(O.f)().Symbol,a=Object(n.useState)(!1),c=Object(m.a)(a,2),r=(c[0],c[1],Object(n.useState)("")),i=Object(m.a)(r,2),o=i[0],u=i[1];return setTimeout((function(){u('new TradingView.widget(\n      {\n      "width": "100%",\n      "height": "660",\n      "symbol": "BITKUB:'.concat(t.split("_").join(""),'",\n      "interval": "5", //240\n      "timezone": "Asia/Bangkok",\n      "theme": "light",\n      "style": "1",\n      "locale": "th_TH",\n      "toolbar_bg": "#f1f3f6",\n      "enable_publishing": false,\n      "withdateranges": true,\n      "hide_side_toolbar": false,\n      "allow_symbol_change": true,\n      "details": true,\n      "studies": [\n        "MACD@tv-basicstudies",\n        "RSI@tv-basicstudies"\n      ],\n      "container_id": "tradingview_5a28d"\n    }\n      );'))}),1e3),l.a.createElement(l.a.Fragment,null,l.a.createElement(J.a,{style:{margin:"16px 0"}},l.a.createElement(J.a.Item,null,"Investor"),l.a.createElement(J.a.Item,null,t)),l.a.createElement("div",{className:"investor-content"},l.a.createElement(C.a,null,l.a.createElement(T.a,{span:9},l.a.createElement(I.a,{title:"\u0e23\u0e32\u0e04\u0e32\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e08\u0e30 Ticker \u0e44\u0e1b\u0e22\u0e31\u0e07  Line"},l.a.createElement(de,{symbol:t}))),l.a.createElement(T.a,{span:14,offset:1},l.a.createElement(I.a,{title:"\u0e01\u0e23\u0e32\u0e1f \u0e13\u200b \u0e40\u0e27\u0e25\u0e32\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19"},l.a.createElement(le,{symbol:t})))),l.a.createElement("br",null),l.a.createElement(C.a,null,l.a.createElement(T.a,{span:24},l.a.createElement(U.a,{html:'\n                  <div class="tradingview-widget-container">\n                  <div id="tradingview_5a28d"></div>\n                  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/ETHTHB/?exchange=BITKUB" rel="noopener" target="_blank"></a> by TradingView</div>\n                  <script type="text/javascript" src="https://s3.tradingview.com/tv.js"><\/script>\n                  <script type="text/javascript">\n                      '.concat(o,"\n                  <\/script>\n                </div>\n              ")}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(C.a,null,l.a.createElement(T.a,{span:24},l.a.createElement(I.a,{title:"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23 Ticker"},l.a.createElement(pe,null)))),l.a.createElement("br",null),l.a.createElement("br",null)))},ge=K.a.Title,ye=function(){var e=Object(n.useState)(),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),i=Object(m.a)(r,2),o=i[0],u=i[1],s=Object(n.useState)(),d=Object(m.a)(s,2),b=(d[0],d[1],Object(n.useState)()),E=Object(m.a)(b,2);E[0],E[1];return Object(n.useEffect)((function(){var e=H.map((function(e){var t=e.crypto;return{oldSymbol:t,symbol:t.split("_").join(""),script:""}}));c(e),u(!0)}),[]),Object(n.useEffect)((function(){setTimeout((function(){var e=null===a||void 0===a?void 0:a.map((function(e,t){return Object(ce.a)(Object(ce.a)({},e),{},{script:'\n        new TradingView.widget(\n          {\n          "width": "100%",\n          "height": 610,\n          "symbol": "BITKUB:'.concat(e.symbol,'",\n          "interval": "5", //240\n          "timezone": "Asia/Bangkok",\n          "theme": "light",\n          "style": "1",\n          "locale": "th_TH",\n          "toolbar_bg": "#f1f3f6",\n          "enable_publishing": false,\n          "withdateranges": true,\n          "allow_symbol_change": true,\n          "details": true,\n          "studies": [\n            "MACD@tv-basicstudies",\n            "RSI@tv-basicstudies",\n            "BB@tv-basicstudies",\n            "BollingerBandsWidth@tv-basicstudies"\n          ],\n          "container_id": "tradingview_5a28d').concat(t,'"\n        }\n          );\n        ')})}));c(e)}),1e3)}),[o]),console.log(a),l.a.createElement("div",null,l.a.createElement(C.a,{gutter:[16,24]},null===a||void 0===a?void 0:a.map((function(e,t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(T.a,{span:12},l.a.createElement(ge,{level:2},e.symbol,l.a.createElement(f.a,{type:"link",href:_.cryptoSymbol.link.replace(":Symbol",e.oldSymbol),icon:l.a.createElement(ie.a,{icon:re.e})},l.a.createElement("span",{style:{paddingLeft:12}},"MANAGE")),l.a.createElement(f.a,{type:"link",href:"https://www.bitkub.com/market/".concat(e.oldSymbol.split("_")[0]),target:"_blank",icon:l.a.createElement(ie.a,{icon:re.d})},l.a.createElement("span",{style:{paddingLeft:12}},"BITKUB"))),l.a.createElement(U.a,{html:'\n                    <div class="tradingview-widget-container">\n                    <div id="tradingview_5a28d'.concat(t,'"></div>\n                    <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/').concat(e.symbol,'/?exchange=BITKUB" rel="noopener" target="_blank"><span class="blue-text">').concat(e.symbol,' Chart</span></a> by TradingView</div>\n                    <script type="text/javascript" src="https://s3.tradingview.com/tv.js"><\/script>\n                    <script type="text/javascript">\n                        ').concat(e.script,"\n                    <\/script>\n                  </div>\n                ")})))}))))},ve=w([{link:_.index.link,layout:P,component:A},{link:_.cryptoSymbol.link,layout:P,component:fe},{link:_.tradingViewer.link,layout:P,component:ye}]);Object(o.a)();var he=function(){return l.a.createElement(i.a,null,S,ve)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[237,1,2]]]);
//# sourceMappingURL=main.53d3d190.chunk.js.map