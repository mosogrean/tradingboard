(this["webpackJsonpmosogrean-tradingboard"]=this["webpackJsonpmosogrean-tradingboard"]||[]).push([[0],{237:function(e,t,a){e.exports=a(441)},242:function(e,t,a){},243:function(e,t,a){},244:function(e,t,a){},337:function(e,t,a){},441:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(32),r=a.n(c),i=(a(242),a(243),a(40)),o=a(106),u=a(227),m={login:{link:"".concat("/login"),name:"Login"}},s=a(35),d=a(450),b=(a(244),a(165)),E=a.n(b),p=a(203),g=a(454),f=a(48),y=function(e){var t=e.show,a=e.form,n=e.toggle,c=function(){var e=Object(p.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.validateFields();case 2:e.sent,n();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",{style:{display:t?"block":"none"}},l.a.createElement(d.a,{form:a,style:{width:"100%"},name:"basic",layout:"vertical",onFinish:c},l.a.createElement(d.a.Item,{label:"Line Account ID",name:"lineId",rules:[{required:t,message:"Please input your line account id!"}]},l.a.createElement(g.a,null)),l.a.createElement(f.a,{type:"primary",onClick:c},"Send Verify Code")))},v=function(e){var t=e.show,a=e.form,n=e.toggle;return l.a.createElement("div",{style:{display:t?"block":"none"}},l.a.createElement(d.a,{form:a,layout:"vertical"},l.a.createElement(d.a.Item,{label:"Verify Code",name:"code",rules:[{required:t,message:"Please input your code!"}]},l.a.createElement(g.a,null)),l.a.createElement("div",null,l.a.createElement(f.a,{type:"ghost",onClick:function(){n()},style:{float:"left"}},"Back"),l.a.createElement(f.a,{type:"primary",onClick:function(){console.log(1)}},"Verify"))))},h=function(){var e=d.a.useForm(),t=Object(s.a)(e,1)[0],a=Object(n.useState)(!0),c=Object(s.a)(a,2),r=c[0],i=c[1],o=Object(n.useState)(!1),u=Object(s.a)(o,2),m=u[0],b=u[1],E=function(){i(!r),b(!m)};return l.a.createElement("div",{id:"login-form"},l.a.createElement(y,{show:r,form:t,toggle:function(){E()}}),l.a.createElement(v,{show:m,form:t,toggle:function(){E()}}))},k=a(453),w=a(234),j=function(e){var t=e.component,a=e.layout,n=Object(w.a)(e,["component","layout"]);return l.a.createElement(i.b,Object.assign({},n,{render:function(e){return l.a.createElement(a,null,l.a.createElement(t,e))}}))},O=function(e){return e.map((function(e){return l.a.createElement(j,{exact:!0,path:e.link,layout:e.layout,component:e.component,key:Object(k.a)()})}))},x=function(e){var t=e.children;return l.a.createElement(l.a.Fragment,null,t)},S=O([{link:m.login.link,layout:x,component:h}]),T={index:{link:"".concat("","/"),name:"Investor"},cryptoSymbol:{link:"".concat("","/crypto/symbol/:Symbol"),name:"Crypto"},tradingViewer:{link:"".concat("","/crypto/tradingviewer"),name:"TradingViewer"}},C=a(101),_=a(449),B=a(447),I=(a(337),[{title:"\u0e2a\u0e01\u0e38\u0e25\u0e40\u0e07\u0e34\u0e19",dataIndex:"title",key:"title"}]),N=[{key:"1",title:"BITCOIN",crypto:"BTC_THB"},{key:"2",title:"ETHREUM",crypto:"ETH_THB"},{key:"3",title:"XRP",crypto:"XRP_THB"},{key:"4",title:"OMG",crypto:"OMG_THB"}],H=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2);t[0],t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(C.a,{justify:"space-around"},l.a.createElement(_.a,{title:"CRYPTOCURRENCY",style:{width:"50%"},extra:l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{type:"link",href:T.tradingViewer.link},"view tradingviwer"))},l.a.createElement(B.a,{className:"table-check",columns:I,dataSource:N,onRow:function(e,t){return{onClick:function(){window.location.href=T.cryptoSymbol.link.replace(":Symbol",e.crypto)}}}}))))},V=a(445),A=a(67),F=V.a.Header,M=V.a.Content,D=V.a.Footer,L=function(e){var t=e.children;return l.a.createElement(V.a,{className:"layout"},l.a.createElement(F,{style:{background:"#FFF"}},l.a.createElement("div",{className:"logo"}),l.a.createElement(A.a,{theme:"light",mode:"horizontal",defaultSelectedKeys:["1"]},l.a.createElement(A.a.Item,{key:"1"},l.a.createElement(o.b,{to:T.index.link},"Investor")),l.a.createElement("div",{style:{float:"right"}},l.a.createElement(f.a,{type:"link"},"Login")))),l.a.createElement("hr",null),l.a.createElement(M,{style:{padding:"0 50px"}},l.a.createElement("div",{className:"site-layout-content"},t)),l.a.createElement(D,{style:{textAlign:"center"}},"MosoLab \xa92021"))},Y=a(457),R=a(63),P=a(144),J=a(113),U=a(451),G=a(459),K=a(458),z=a(50),W=a.n(z),q=a(219),X=a(154),$=a.n(X),Q=function(e,t){return $.a.get("https://tradingview.bitkub.com/tradingview/history?symbol=".concat(e,"&resolution=").concat("15","&from=").concat(t,"&to=").concat(t)).then((function(e){return e.data}))},Z=J.a.Option,ee=J.a.OptGroup,te=U.a.Text,ae=function(e){var t=e.symbol,a=Object(n.useState)([]),c=Object(s.a)(a,2),r=c[0],i=c[1],o=Object(n.useState)([]),u=Object(s.a)(o,2),m=u[0],d=u[1],b=Object(n.useState)("15"),E=Object(s.a)(b,2),p=E[0],g=E[1],y=Object(n.useState)(1),v=Object(s.a)(y,2),h=v[0],k=v[1],w=function(){var e=W()().unix();(function(e,t,a,n){return $.a.get("https://tradingview.bitkub.com/tradingview/history?symbol=".concat(e,"&resolution=").concat(t,"&from=").concat(a,"&to=").concat(n)).then((function(e){return e.data}))})(t,p,e-43200*h,e).then((function(e){i(e.t.map((function(e){return function(e){var t=new Date(1e3*e),a=t.getFullYear(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],l=t.getDate(),c=t.getHours(),r=t.getMinutes(),i=t.getSeconds();return"".concat(l," ").concat(n," ").concat(a," ").concat(c,":").concat(r,":").concat(i)}(e)})).concat([null,null,null,null])),d(e.c)}))};Object(n.useEffect)((function(){w()}),[]);var j={labels:r,datasets:[{label:"Trading Line",fill:!1,lineTension:.5,backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:m}]};return l.a.createElement("div",null,l.a.createElement(G.b,{style:{marginBottom:"2%"}},l.a.createElement(te,null,"\u0e23\u0e30\u0e22\u0e30\u0e15\u0e48\u0e2d 1 \u0e0a\u0e48\u0e2d\u0e07:"),l.a.createElement(J.a,{defaultValue:"15",style:{width:120},onChange:function(e){g(e)}},l.a.createElement(ee,{label:"\u0e19\u0e32\u0e17\u0e35"},l.a.createElement(Z,{value:"1"},"1 \u0e19\u0e32\u0e17\u0e35"),l.a.createElement(Z,{value:"5"},"5 \u0e19\u0e32\u0e17\u0e35"),l.a.createElement(Z,{value:"15"},"15 \u0e19\u0e32\u0e17\u0e35"),l.a.createElement(Z,{value:"30"},"30 \u0e19\u0e32\u0e17\u0e35")),l.a.createElement(ee,{label:"\u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07"},l.a.createElement(Z,{value:"60"},"1 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07"),l.a.createElement(Z,{value:"240"},"4 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07")),l.a.createElement(ee,{label:"\u0e27\u0e31\u0e19"},l.a.createElement(Z,{value:"1D"},"1 \u0e27\u0e31\u0e19"))),l.a.createElement(te,null,"\u0e0a\u0e48\u0e27\u0e07\u0e40\u0e27\u0e25\u0e32\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14: "),l.a.createElement(K.a,{min:1,max:30,defaultValue:1,onChange:function(e){k(e)}}),l.a.createElement(te,null,"\u0e27\u0e31\u0e19"),l.a.createElement(f.a,{type:"primary",onClick:function(){w()}},"\u0e1b\u0e23\u0e31\u0e1a\u0e04\u0e48\u0e32")),l.a.createElement(q.Line,{data:j,options:{title:{display:!0,text:"Average Price value per Time",fontSize:20},legend:{display:!0,position:"right"}}}))},ne=a(44),le=a(84),ce=a(83),re=a(455),ie=a(452),oe=a(446),ue=a(150),me=a(448),se=a(456),de=function(e){var t=e.symbol,a=Object(n.useState)("purchase_price"),c=Object(s.a)(a,2),r=c[0],i=c[1],o=Object(n.useState)("price"),u=Object(s.a)(o,2),m=u[0],d=u[1],b=Object(n.useState)({}),E=Object(s.a)(b,2),p=E[0],y=E[1],v=Object(n.useState)({}),h=Object(s.a)(v,2),k=h[0],w=h[1],j=Object(n.useState)({date:"",unix:0,price:0}),O=Object(s.a)(j,2),x=O[0],S=O[1],T=Object(n.useState)({date:"",unix:0,price:0}),B=Object(s.a)(T,2),I=B[0],N=B[1],H=Object(n.useState)(!1),V=Object(s.a)(H,2),A=V[0],F=V[1],M=function(e,t){d(t),i(e.target.value)};Object(n.useEffect)((function(){var e=new Date(x.date).getTime()/1e3;if(!isNaN(e)&&0===x.unix){var a=W.a.unix(e).unix();Q(t,a).then((function(e){S(Object(ne.a)(Object(ne.a)({},x),{},{price:e.c[0]}))}))}}),[x.date]),Object(n.useEffect)((function(){var e=new Date(x.date).getTime()/1e3;if(!isNaN(e)&&0===I.unix){var t=W.a.unix(e).unix();Q("BTC_THB",t).then((function(e){N(Object(ne.a)(Object(ne.a)({},I),{},{price:e.c[0]}))}))}}),[x.date]);return console.log(p),l.a.createElement("div",null,l.a.createElement(ie.a,{title:"\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23",visible:A,onOk:function(){},onCancel:function(){F(!A)},okText:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23",cancelText:"\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01",width:"75%"},function(){switch(r){case"purchase_price":return l.a.createElement(l.a.Fragment,null,l.a.createElement(re.b,{title:"\u0e23\u0e32\u0e04\u0e32\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e0b\u0e37\u0e49\u0e2d",bordered:!0},l.a.createElement(re.b.Item,{label:"\u0e23\u0e32\u0e04\u0e32\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",span:3},p.price),l.a.createElement(re.b.Item,{label:"\u0e23\u0e32\u0e04\u0e32\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07",span:3},l.a.createElement(G.b,null,Number(p.price)+Number(p.threshold),",",p.price-p.threshold)),l.a.createElement(re.b.Item,{label:"\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",span:3},k.notification_times),l.a.createElement(re.b.Item,{label:"\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e01\u0e32\u0e23\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19",span:3},k.detail)))}}()),l.a.createElement(oe.a,{orientation:"left"},"\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a"),l.a.createElement(C.a,null,l.a.createElement(R.a,{span:24},l.a.createElement(ue.a.Group,{defaultValue:"purchase_price",buttonStyle:"solid"},l.a.createElement(ue.a.Button,{value:"purchase_price",onClick:function(e){M(e,"price")}},"\u0e23\u0e32\u0e04\u0e32\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23",l.a.createElement("strong",null,"\u0e0b\u0e37\u0e49\u0e2d")),l.a.createElement(ue.a.Button,{value:"selling_price",onClick:function(e){M(e,"price")}},"\u0e23\u0e32\u0e04\u0e32\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23",l.a.createElement("strong",null,"\u0e02\u0e32\u0e22")),l.a.createElement(ue.a.Button,{value:"support_line",onClick:function(e){M(e,"point")}},"\u0e40\u0e2a\u0e49\u0e19",l.a.createElement("strong",null,"\u0e41\u0e19\u0e27\u0e23\u0e31\u0e1a")),l.a.createElement(ue.a.Button,{value:"resistance_line",onClick:function(e){M(e,"point")}},"\u0e40\u0e2a\u0e49\u0e19",l.a.createElement("strong",null,"\u0e41\u0e19\u0e27\u0e15\u0e49\u0e32\u0e19"))))),l.a.createElement(oe.a,{orientation:"left"},"\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e23\u0e32\u0e04\u0e32\u0e2b\u0e23\u0e37\u0e2d\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e40\u0e27\u0e25\u0e32"),l.a.createElement(C.a,{style:{display:"price"===m?"block":"none"}},l.a.createElement(R.a,{span:24},l.a.createElement("span",null,"\u0e23\u0e32\u0e04\u0e32\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e15\u0e48\u0e2d\u0e2b\u0e19\u0e48\u0e27\u0e22"),l.a.createElement(g.a,{defaultValue:"0",prefix:l.a.createElement(ce.a,{icon:le.f}),addonAfter:"\u0e1a\u0e32\u0e17",allowClear:!0,type:"number",onChange:function(e){y(Object(ne.a)(Object(ne.a)({},p),{},{price:e.target.value}))}})),l.a.createElement(R.a,{span:24},l.a.createElement("span",null,"\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e23\u0e32\u0e04\u0e32\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19 (+/-)"),l.a.createElement(g.a,{defaultValue:"0",prefix:l.a.createElement(ce.a,{icon:le.a}),addonAfter:"\u0e1a\u0e32\u0e17",allowClear:!0,type:"number",onChange:function(e){y(Object(ne.a)(Object(ne.a)({},p),{},{threshold:e.target.value}))}}))),l.a.createElement(C.a,{style:{display:"point"===m?"block":"none"}},l.a.createElement(R.a,{span:24},l.a.createElement(G.b,null,l.a.createElement("span",null,"\u0e08\u0e38\u0e14\u0e17\u0e35\u0e48 1:"),l.a.createElement(me.a,{showTime:!0,onChange:function(e){S(Object(ne.a)(Object(ne.a)({},x),{},{date:e.format("YYYY-MM-DDTHH:mm:ss")}))}}))),l.a.createElement("br",null),l.a.createElement(R.a,{span:24},l.a.createElement("span",null,l.a.createElement(se.a.Ribbon,{text:"\u0e23\u0e32\u0e04\u0e32 \u0e13 \u0e08\u0e38\u0e14\u0e17\u0e35\u0e48 1"},l.a.createElement(_.a,null,x.price," ","\u0e1a\u0e32\u0e17")))),l.a.createElement("br",null),l.a.createElement(R.a,{span:24},l.a.createElement(G.b,null,l.a.createElement("span",null,"\u0e08\u0e38\u0e14\u0e17\u0e35\u0e48 2:"),l.a.createElement(me.a,{showTime:!0,onChange:function(e){N(Object(ne.a)(Object(ne.a)({},x),{},{date:e.format("YYYY-MM-DDTHH:mm:ss")}))}}))),l.a.createElement("br",null),l.a.createElement(R.a,{span:24},l.a.createElement("span",null,l.a.createElement(se.a.Ribbon,{text:"\u0e23\u0e32\u0e04\u0e32 \u0e13 \u0e08\u0e38\u0e14\u0e17\u0e35\u0e48 2"},l.a.createElement(_.a,null,I.price," ","\u0e1a\u0e32\u0e17")))),l.a.createElement("br",null)),l.a.createElement(oe.a,{orientation:"left"},"\u0e01\u0e32\u0e23\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19"),l.a.createElement(C.a,null,l.a.createElement(R.a,{span:24},l.a.createElement(g.a,{defaultValue:3,prefix:l.a.createElement(ce.a,{icon:le.b}),addonAfter:"\u0e04\u0e23\u0e31\u0e49\u0e07",allowClear:!0,type:"number",onChange:function(e){w(Object(ne.a)(Object(ne.a)({},k),{},{notification_times:e.target.value}))}}))),l.a.createElement(oe.a,null),l.a.createElement(C.a,null,l.a.createElement(g.a,{prefix:l.a.createElement(ce.a,{icon:le.c}),allowClear:!0,onChange:function(e){w(Object(ne.a)(Object(ne.a)({},k),{},{detail:e.target.value}))}})),l.a.createElement("br",null),l.a.createElement(C.a,{justify:"end"},l.a.createElement(f.a,{type:"primary",onClick:function(){return F(!A)}},"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23")))},be=[{title:"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e2a\u0e23\u0e49\u0e32\u0e07",dataIndex:"date",key:"date"},{title:"\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a",dataIndex:"age",key:"age"},{title:"\u0e23\u0e32\u0e04\u0e32\u0e2b\u0e23\u0e37\u0e2d\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07",dataIndex:"address",key:"address"},{title:"\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14",key:"tags",dataIndex:"tags"},{title:"\u0e08\u0e33\u0e19\u0e27\u0e19\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e17\u0e35\u0e48\u0e40\u0e2b\u0e25\u0e37\u0e2d",key:"tags",dataIndex:"tags"},{title:"Action",key:"action",render:function(e,t){return l.a.createElement(G.b,{size:"middle"},l.a.createElement("a",null,"Invite",t.name),l.a.createElement("a",null,"Delete"))}}],Ee=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}],pe=function(){return l.a.createElement("div",null,l.a.createElement(B.a,{columns:be,dataSource:Ee}))},ge=function(e){var t=Object(i.g)().Symbol,a=Object(n.useState)(!1),c=Object(s.a)(a,2),r=(c[0],c[1],Object(n.useState)("")),o=Object(s.a)(r,2),u=o[0],m=o[1];return setTimeout((function(){m('new TradingView.widget(\n      {\n      "width": "100%",\n      "height": "660",\n      "symbol": "BITKUB:'.concat(t.split("_").join(""),'",\n      "interval": "60", //240\n      "timezone": "Asia/Bangkok",\n      "theme": "light",\n      "style": "1",\n      "locale": "th_TH",\n      "toolbar_bg": "#f1f3f6",\n      "enable_publishing": false,\n      "withdateranges": true,\n      "hide_side_toolbar": false,\n      "allow_symbol_change": true,\n      "details": true,\n      "studies": [\n        "MACD@tv-basicstudies",\n        "RSI@tv-basicstudies"\n      ],\n      "container_id": "tradingview_5a28d"\n    }\n      );'))}),1e3),l.a.createElement(l.a.Fragment,null,l.a.createElement(Y.a,{style:{margin:"16px 0"}},l.a.createElement(Y.a.Item,null,"Investor"),l.a.createElement(Y.a.Item,null,t)),l.a.createElement("div",{className:"investor-content"},l.a.createElement(C.a,null,l.a.createElement(R.a,{span:9},l.a.createElement(_.a,{title:"\u0e23\u0e32\u0e04\u0e32\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e08\u0e30 Ticker \u0e44\u0e1b\u0e22\u0e31\u0e07  Line"},l.a.createElement(de,{symbol:t}))),l.a.createElement(R.a,{span:14,offset:1},l.a.createElement(_.a,{title:"\u0e01\u0e23\u0e32\u0e1f \u0e13\u200b \u0e40\u0e27\u0e25\u0e32\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19"},l.a.createElement(ae,{symbol:t})))),l.a.createElement("br",null),l.a.createElement(C.a,null,l.a.createElement(R.a,{span:24},l.a.createElement(P.a,{html:'\n                  <div class="tradingview-widget-container">\n                  <div id="tradingview_5a28d"></div>\n                  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/ETHTHB/?exchange=BITKUB" rel="noopener" target="_blank"></a> by TradingView</div>\n                  <script type="text/javascript" src="https://s3.tradingview.com/tv.js"><\/script>\n                  <script type="text/javascript">\n                      '.concat(u,"\n                  <\/script>\n                </div>\n              ")}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(C.a,null,l.a.createElement(R.a,{span:24},l.a.createElement(_.a,{title:"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23 Ticker"},l.a.createElement(pe,null)))),l.a.createElement("br",null),l.a.createElement("br",null)))},fe=U.a.Title,ye=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),i=Object(s.a)(r,2),o=i[0],u=i[1],m=Object(n.useState)(),d=Object(s.a)(m,2),b=(d[0],d[1],Object(n.useState)()),E=Object(s.a)(b,2);E[0],E[1];return Object(n.useEffect)((function(){var e=N.map((function(e){var t=e.crypto;return{oldSymbol:t,symbol:t.split("_").join(""),script:""}}));c(e),u(!0)}),[]),Object(n.useEffect)((function(){setTimeout((function(){var e=null===a||void 0===a?void 0:a.map((function(e,t){return Object(ne.a)(Object(ne.a)({},e),{},{script:'\n        new TradingView.widget(\n          {\n          "width": "100%",\n          "height": 610,\n          "symbol": "BITKUB:'.concat(e.symbol,'",\n          "interval": "60", //240\n          "timezone": "Asia/Bangkok",\n          "theme": "light",\n          "style": "1",\n          "locale": "th_TH",\n          "toolbar_bg": "#f1f3f6",\n          "enable_publishing": false,\n          "withdateranges": true,\n          "allow_symbol_change": true,\n          "details": true,\n          "studies": [\n            "MACD@tv-basicstudies",\n            "RSI@tv-basicstudies"\n          ],\n          "container_id": "tradingview_5a28d').concat(t,'"\n        }\n          );\n        ')})}));c(e)}),1e3)}),[o]),console.log(a),l.a.createElement("div",null,l.a.createElement(C.a,{gutter:[16,24]},null===a||void 0===a?void 0:a.map((function(e,t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(R.a,{span:12},l.a.createElement(fe,{level:2},e.symbol,l.a.createElement(f.a,{type:"link",href:T.cryptoSymbol.link.replace(":Symbol",e.oldSymbol),icon:l.a.createElement(ce.a,{icon:le.e})},l.a.createElement("span",{style:{paddingLeft:12}},"MANAGE")),l.a.createElement(f.a,{type:"link",href:"https://www.bitkub.com/market/".concat(e.oldSymbol.split("_")[0]),target:"_blank",icon:l.a.createElement(ce.a,{icon:le.d})},l.a.createElement("span",{style:{paddingLeft:12}},"BITKUB"))),l.a.createElement(P.a,{html:'\n                    <div class="tradingview-widget-container">\n                    <div id="tradingview_5a28d'.concat(t,'"></div>\n                    <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/').concat(e.symbol,'/?exchange=BITKUB" rel="noopener" target="_blank"><span class="blue-text">').concat(e.symbol,' Chart</span></a> by TradingView</div>\n                    <script type="text/javascript" src="https://s3.tradingview.com/tv.js"><\/script>\n                    <script type="text/javascript">\n                        ').concat(e.script,"\n                    <\/script>\n                  </div>\n                ")})))}))))},ve=O([{link:T.index.link,layout:L,component:H},{link:T.cryptoSymbol.link,layout:L,component:ge},{link:T.tradingViewer.link,layout:L,component:ye}]),he=Object(u.a)();var ke=function(){return l.a.createElement(i.c,{history:he},l.a.createElement(o.a,null,l.a.createElement(i.d,null,S,ve,l.a.createElement(i.a,{to:"/page/404",exact:!0}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[237,1,2]]]);
//# sourceMappingURL=main.97154029.chunk.js.map