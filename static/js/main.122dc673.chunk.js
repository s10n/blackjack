(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,n,t){e.exports={container:"Player_container__2J_vY",totals:"Player_totals__3-VM_"}},12:function(e,n,t){e.exports={card:"Card_card__ySpGb",back:"Card_back__3Nhc0"}},18:function(e,n,t){e.exports={button:"Button_button__j85vl"}},19:function(e,n,t){e.exports={hand:"Hand_hand__36MzW"}},21:function(e,n,t){e.exports=t(38)},31:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"startGame",function(){return P}),t.d(r,"resetGame",function(){return I}),t.d(r,"bet",function(){return J}),t.d(r,"win",function(){return U}),t.d(r,"draw",function(){return G}),t.d(r,"set",function(){return T}),t.d(r,"double",function(){return z}),t.d(r,"split",function(){return F});var a=t(0),c=t.n(a),o=t(14),i=t.n(o),l=t(2),u=t(1),s=t(17),d=t(4),f=["A","2","3","4","5","6","7","8","9","10","J","Q","K"].reduce(function(e,n){return Object(d.a)(e).concat(Object(d.a)(Array.from({length:4},function(e){return n})))},[]),y=function(){return function(e){for(var n,t,r=e.length;r;)t=Math.floor(Math.random()*r--),n=e[r],e[r]=e[t],e[t]=n;return e}(f)},p=function(e,n){return function(t,r){return r.player===n||void 0===t?e(t,r):t}},h=Object(u.c)({hand:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"draw":case"hand":return n.hand;case"reset":return[];default:return e}},status:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"stay":case"bust":case"blackjack":case"surrender":return n.type;case"reset":return"";default:return e}},stake:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"bet":return e+n.stake;case"reset":return 0;default:return e}}}),b=Object(u.c)({dealer:p(h,"dealer"),primary:p(h,"primary"),replica:p(h,"replica")}),v=Object(u.c)({status:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"idle";switch((arguments.length>1?arguments[1]:void 0).type){case"start":return"playing";case"reset":return"idle";default:return e}}}),m=Object(u.c)({deck:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y();switch((arguments.length>1?arguments[1]:void 0).type){case"reset":return y();case"draw":return e.slice(1);default:return e}},players:b,coins:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"bet":return e-n.stake;case"win":return e+n.amount;default:return e}},game:v}),g=t(5),k={stake:0,status:"",hand:[]},w={dealer:Object(g.a)({},k,{hand:[]}),primary:Object(g.a)({},k,{hand:[]})},E={deck:void 0,players:w},j=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d)(Object(u.a)(s.a)),O=Object(u.e)(m,E,j),_=(t(31),function(e){return Number(e)||"A"===e&&1||10}),C=function(e){var n=e.reduce(function(e,n){return e+_(n)},0);return e.includes("A")&&n+10<=21?[n,n+10]:[n]},S=function(e,n){var t=e.dealer,r=e[n],a={blackjack:![1,10].includes(_(t.hand[0]))&&"BLACKJACK",bust:"LOSE",surrender:"SURRENDER"},c={blackjack:"blackjack"===r.status?"DRAW":"LOSE",bust:"WIN"};return a[r.status]||c[t.status]||("stay"===t.status?function(){var e=Math.max.apply(Math,Object(d.a)(C(r.hand))),n=Math.max.apply(Math,Object(d.a)(C(t.hand)));return e>n?"WIN":n>e?"LOSE":"DRAW"}():"")},K={BLACKJACK:2.5,WIN:2,DRAW:1,SURRENDER:.5,LOSE:0},x=function(e,n){var t=S(e,n);return e[n].stake*(K[t]||0)},N=S,A=function(e){return!e.status},D=function(e){var n=e.hand,t=e.status;return 2===n.length&&!t},B=function(e){var n=e.hand,t=e.status;return 2===n.length&&!t},W=function(e){var n=e.primary,t=e.replica,r=n.hand,a=n.status,c=!!t.hand.length;return 2===r.length&&r[0]===r[1]&&!a&&!c},R=function(e){var n=e.dealer,t=e.primary,r=e.replica,a=n.status,c=n.hand;return!a&&C(c).every(function(e){return e<=16})&&[t,r].filter(function(e){return e.hand.length}).every(function(e){return e.status})},M=function(e){var n=e.dealer;return!n.status&&C(n.hand).some(function(e){return e>=17})},L=function(e){return["primary","replica"].filter(function(n){return e[n].hand.length}).every(function(n){return N(e,n)})},P=function(){return function(e,n){var t=n().players;e({type:"start"}),Array.from({length:2-t.primary.hand.length}).forEach(function(){return e(G("primary"))}),!t.dealer.hand.length&&e(G("dealer"))}},I=function(){return function(e,n){e({type:"reset",player:"dealer"}),e({type:"reset",player:"primary"}),e({type:"reset",player:"replica"})}},J=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return function(t,r){r().coins>=n&&t({type:"bet",player:e,stake:n})}},U=function(){return function(e,n){e({type:"win",amount:function(e){return["primary","replica"].reduce(function(n,t){return n+x(e,t)},0)}(n().players)})}},G=function(e){return function(n,t){var r=t(),a=r.deck,c=r.players[e],o=a[0],i=Object(d.a)(c.hand).concat([o]);n({type:"draw",player:e,hand:i}),n(H(e))}},T=function(e,n){return function(t,r){t({type:n,player:e})}},z=function(e){return function(n,t){var r=t().players;n(J(e,r[e].stake)),n(T(e,"stay")),n(G(e))}},F=function(){return function(e,n){var t=n().players.primary,r=t.hand,a=t.stake,c=r[0];e({type:"hand",player:"primary",hand:[c]}),e({type:"hand",player:"replica",hand:[c]}),e({type:"bet",player:"replica",stake:a})}},H=function(e){return function(n,t){var r=function(e,n){var t=e[n].hand,r=C(t),a=r.some(function(e){return 21===e}),c=r.every(function(e){return e>21}),o=a&&2===t.length,i="dealer"===n&&M(e);return a?o?"blackjack":"stay":c?"bust":i?"stay":""}(t().players,e);r&&n(T(e,r))}},V=t(6),X=t(18),Y=t.n(X),q=function(e){var n=e.color,t=e.children,r=Object(V.a)(e,["color","children"]);return c.a.createElement("button",Object.assign({className:Y.a.button,style:{backgroundColor:r.disabled?"silver":n}},r),t)},Q=t(8),$=t.n(Q),Z=function(e){var n=e.title,t=e.children;return c.a.createElement("div",{className:$.a.box},n&&c.a.createElement("h1",{className:$.a.title},n),c.a.createElement("p",{className:$.a.content},t))},ee=Object(l.b)(function(e){return{coins:e.coins}})(function(e){var n=e.coins;return c.a.createElement(Z,null,String(n))}),ne=t(11),te=t.n(ne),re=t(19),ae=t.n(re),ce=t(12),oe=t.n(ce),ie=t(20),le=t.n(ie),ue=function(e){var n=e.back,t=e.children,r=e.style,a=void 0===r?{}:r,o=e.onClick;return c.a.createElement("div",{className:le()(oe.a.card,n&&oe.a.back),style:a,onClick:o},t)},se=Object(l.b)(function(e,n){var t=e.players,r=n.playerKey;return{hand:t[r].hand,canDraw:"dealer"===r&&!L(t)&&R(t)}},function(e){return Object(u.b)(r,e)},function(e,n,t){var r=e.hand,a=e.canDraw,c=n.draw,o=t.playerKey;return Object.assign({hand:r,playerKey:o},a&&{onClick:function(){return c(o)}})})(function(e){var n=e.hand,t=e.onClick;e.playerKey;return c.a.createElement("ul",{className:ae.a.hand,onClick:t},n.map(function(e,n){return c.a.createElement(ue,{key:n},e)}),t&&c.a.createElement(ue,{back:!0},"+"))}),de=Object(l.b)(function(e,n){var t=e.players,r=n.playerKey;return{result:N(t,r),prize:x(t,r)}})(function(e){var n=e.result,t=e.prize,r=t?"green":"red",a=t?t+" \ud68d\ub4dd":"";return n&&c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{style:{color:r,fontSize:"200%",fontWeight:"bold"}},n),c.a.createElement("p",null,a))}),fe=Object(l.b)(function(e,n){var t=e.players,r=e.game,a=e.coins,c=n.playerKey,o=t[c],i="replica"!==c||!!t.primary.status;return{players:t,game:r,stake:o.stake,canBet:a>=5,canMinus:o.stake>5,canPlay:!!o.stake,canDraw:i&&A(o),canSplit:i&&W(t),canDouble:i&&D(o),canSurrender:i&&!t.replica.hand.length&&B(o)}},function(e){return Object(u.b)(r,e)})(function(e){e.players;var n=e.game,t=e.playerKey,r=(e.stake,Object(V.a)(e,["players","game","playerKey","stake"])),a=r.canBet,o=r.canMinus,i=r.canPlay,l=r.canDraw,u=r.canDouble,s=r.canSurrender,d={idle:[{color:"green",children:"+",disabled:!a,onClick:function(){return r.bet(t,5)}},{color:"brown",children:"-",disabled:!o,onClick:function(){return r.bet(t,-5)}},{color:"navy",children:"\u2192",disabled:!i,onClick:function(){return r.startGame()}}],playing:[{color:"green",children:"H",disabled:!l,onClick:function(){return r.draw(t)}},{color:"brown",children:"S",disabled:!l,onClick:function(){return r.set(t,"stay")}},{color:"navy",children:"D",disabled:!u,onClick:function(){return r.double(t)}},r.canSplit&&{color:"olive",children:"SP",onClick:function(){return r.split()}},s&&{color:"teal",children:"SU",onClick:function(){return r.set(t,"surrender")}}].filter(Boolean)}[n.status]||[];return c.a.createElement("section",null,d.map(function(e,n){return c.a.createElement(q,Object.assign({},e,{key:n}))}))}),ye=Object(l.b)(function(e,n){var t=e.players,r=n.playerKey,a=t[r],c="dealer"===r;return Object(g.a)({},a,{totals:C(a.hand),isDealer:c})})(function(e){var n=e.playerKey,t=e.stake,r=e.totals,a=e.status,o=e.isDealer;return c.a.createElement("div",{className:te.a.container},c.a.createElement("p",{style:{order:o&&2}},a),c.a.createElement("section",{className:te.a.totals,style:{order:o&&1}},r.filter(Boolean).join(", ")),c.a.createElement(se,{playerKey:n}),!o&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Z,null,t),c.a.createElement(de,{playerKey:n}),c.a.createElement(fe,{playerKey:n})))}),pe={display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",height:"100%",lineHeight:1.6,padding:15,textAlign:"center",players:{display:"flex",justifyContent:"space-around",alignItems:"flex-end",alignSelf:"stretch"}},he=Object(l.b)(function(e){var n=e.players;return{showFinishButton:"playing"===e.game.status&&L(n),playersKeys:[n.replica.hand.length&&"replica","primary"].filter(Boolean)}},function(e){return Object(u.b)(r,e)})(function(e){var n=e.playersKeys,t=e.showFinishButton,r=e.win,a=e.resetGame;return c.a.createElement("main",{style:pe},c.a.createElement(ye,{playerKey:"dealer"}),c.a.createElement("div",{style:n.length>1?pe.players:{}},n.map(function(e){return c.a.createElement(ye,{playerKey:e,key:e})})),t&&c.a.createElement(q,{color:"navy",onClick:function(){r(),a()}},"\u2714\ufe0e"),c.a.createElement(ee,null))}),be=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ve(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(c.a.createElement(l.a,{store:O},c.a.createElement(he,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/blackjack",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/blackjack","/service-worker.js");be?(function(e,n){fetch(e).then(function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ve(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):ve(n,e)})}}()},8:function(e,n,t){e.exports={box:"Box_box__3aPqL",title:"Box_title__1nlTm",content:"Box_content__3HYIJ"}}},[[21,2,1]]]);
//# sourceMappingURL=main.122dc673.chunk.js.map