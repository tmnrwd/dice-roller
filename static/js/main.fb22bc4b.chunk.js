(this["webpackJsonpdice-roller"]=this["webpackJsonpdice-roller"]||[]).push([[0],{22:function(e,t,a){e.exports=a(33)},27:function(e,t,a){},29:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(5),o=a.n(r),s=(a(27),a(9)),c=a(13),i=a(18),d=a(19),u=a(21),m=a(20),v=a(11),h=a(10),g=a(6),E=a(14),b=a(8),f=a(15),y=a(37),R=(a(28),a(29),1),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var l;return Object(i.a)(this,a),(l=t.call(this,e)).saveStateToLocalStorage=function(){for(var e in l.state)localStorage.setItem(e,JSON.stringify(l.state[e]))},l.setStateFromLocalStorage=function(){for(var e in l.state)if(localStorage.hasOwnProperty(e)){var t=localStorage.getItem(e);try{t=JSON.parse(t),l.setState(Object(c.a)({},e,t))}catch(a){l.setState(Object(c.a)({},e,t))}}l.setState({advantage:!1,saveRollAdvantage:!1,disadvantage:!1,saveRollDisadvantage:!1})},l.clearLocalStorage=function(){localStorage.clear(),window.location.reload()},l.resetHistory=function(){l.setState({history:[{max:20,result:1,mod:0,diceRolled:1,rolledArrayString:"1",key:Date.now()}]})},l.diceRoll=function(e,t,a,r,o,c,i){e.preventDefault(),a||(a=l.state.diceRolled),r||(r=l.state.modifier),o||(o=l.state.advantage),i||(i=l.state.disadvantage);for(var d,u,m,h,g=[],E=[],b=0;b<a;)d=l.getRandomInt(t),u=l.getRandomInt(t),o?u>d?(m=u,h=d):(m=d,h=u):i&&u<d?(m=u,h=d):(m=d,h=u),g.push(m),E.push(" ".concat(m,", ").concat(h)),b++;var f=g.reduce((function(e,t){return e+t})),y=parseInt(f)+parseInt(r),p=g.join(", ");if(r>-1)Object(v.b)(n.a.createElement("div",null,a,"d",t," result: ",y,n.a.createElement("br",null),"(",p," + ",r,")",n.a.createElement("br",null),o&&!i?" Advantage rolls: ".concat(m,", ").concat(h):""," ",o&&i?" Advantage rolls: ".concat(m,", ").concat(h):""," ",i&&!o?"Disadvantage rolls: ".concat(m,", ").concat(h):""));else{var k=Math.abs(r);Object(v.b)(n.a.createElement("div",null,a,"d",t," result: ",y,n.a.createElement("br",null),"(",p," - ",k," )",n.a.createElement("br",null),o&&!i?" Advantage rolls: ".concat(m,", ").concat(h):""," ",o&&i?" Advantage rolls: ".concat(m,", ").concat(h):""," ",i&&!o?"Disadvantage rolls: ".concat(m,", ").concat(h):""))}var D={max:t,result:y,mod:r,diceRolled:a,rolledArrayString:p};if(o||i){var S=E.join("; ");D.advantageRolls=S,o&&(D.advantage="advantage"),i&&(D.advantage="disadvantage")}c&&(D.label=c),l.searchHistory(),D.key=R;var C=[].concat(Object(s.a)(l.state.history),[D]).sort((function(e,t){return e.key-t.key}));l.setState({history:C}),l.scrollToTop()},l.pushDie=function(){l.setState({dice:[].concat(Object(s.a)(l.state.dice),[{sides:l.state.addDie,diceRolled:l.state.diceRolled,key:Object(y.a)()}]),addDie:2,diceRolled:1})},l.deleteDie=function(e,t){e.preventDefault();var a=l.state.dice.indexOf(t);l.state.dice.splice(a,1),l.setState({dice:l.state.dice})},l.saveRoll=function(){l.setState({savedRolls:[].concat(Object(s.a)(l.state.savedRolls),[{saveDiceRolled:l.state.saveDiceRolled,sides:l.state.saveRollSides,modifier:l.state.saveRollModifier,advantage:l.state.saveRollAdvantage,disadvantage:l.state.saveRollDisadvantage,label:l.state.saveLabel,key:Date.now()}]),addDie:2,saveLabel:""})},l.deleteRoll=function(e,t){e.preventDefault();var a=l.state.savedRolls.indexOf(t);l.state.savedRolls.splice(a,1),l.setState({savedRolls:l.state.savedRolls})},l.scrollToTop=function(){l.historyRef.current.scrollTop=0},l.handleChange=function(e){var t={};"advantage"===e.target.name?t[e.target.name]=!l.state.advantage:"saveRollAdvantage"===e.target.name?t[e.target.name]=!l.state.saveRollAdvantage:t[e.target.name]=e.target.value,l.setState(t)},l.handleSubmit=function(e){e.preventDefault(),l.setState({dice:[].concat(Object(s.a)(l.state.dice),[l.state.addDie])})},l.historyRef=n.a.createRef(),l.state={dice:[{sides:4,diceRolled:1,key:Object(y.a)()},{sides:6,diceRolled:1,key:Object(y.a)()},{sides:8,diceRolled:1,key:Object(y.a)()},{sides:10,diceRolled:1,key:Object(y.a)()},{sides:12,diceRolled:1,key:Object(y.a)()},{sides:20,diceRolled:1,key:Object(y.a)()},{sides:100,diceRolled:1,key:Object(y.a)()}],addDie:2,modifier:0,diceRolled:1,history:[{max:20,result:1,mod:0,diceRolled:1,rolledArrayString:"1",key:0,label:"My d20 Roll"}],savedRolls:[{saveDiceRolled:2,sides:4,modifier:2,label:"Healing Potion"},{saveDiceRolled:1,sides:20,modifier:5,label:"Attack",advantage:"advantage"}],saveLabel:"",saveDiceRolled:1,saveRollSides:2,saveRollModifier:0,advantage:!1,saveRollAdvantage:!1,disadvantage:!1,saveRollDisadvantage:!1},l}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.setStateFromLocalStorage()}},{key:"getRandomInt",value:function(e){return Math.round(Math.random()*(e-1)+1)}},{key:"searchHistory",value:function(){for(var e=0;e<this.state.history.length;e++)this.state.history[e].key===R&&R++}},{key:"renderDice",value:function(){var e=this;return this.state.dice.map((function(t){return n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{key:t.key},n.a.createElement("tbody",{className:"text-center"},n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("button",{className:"buttons",onClick:function(a){return e.diceRoll(a,t.sides,t.diceRolled)}},t.diceRolled,"d",t.sides)),n.a.createElement("td",null,n.a.createElement("button",{className:"buttons",onClick:function(a){return e.deleteDie(a,t)}},"Remove"))))))}))}},{key:"showHistory",value:function(){var e=this;return this.state.history.reverse().map((function(t){return n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{key:e.state.history.findIndex((function(e){return e.key===t.key}))},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,t.label),n.a.createElement("td",null,t.diceRolled,"d",t.max," roll:"),n.a.createElement("td",null,t.result),n.a.createElement("td",{className:"wide-td"},"(",t.rolledArrayString," + ",t.mod,")"),n.a.createElement("td",{className:"wide-td"},"advantage"===t.advantage?"Advantage rolls: ".concat(t.advantageRolls):""," ","disadvantage"===t.advantage?"Disadvantage rolls: ".concat(t.advantageRolls):"")))))}))}},{key:"showSavedRolls",value:function(){var e=this;return this.state.savedRolls.map((function(t){return n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{key:t.key},n.a.createElement("tbody",{className:"fixed-width-columns text-center"},n.a.createElement("tr",null,n.a.createElement("td",null,t.label),n.a.createElement("td",null,n.a.createElement("button",{className:"buttons",onClick:function(a){return e.diceRoll(a,t.sides,t.saveDiceRolled,t.modifier,t.advantage,t.label)}},t.saveDiceRolled,"d",t.sides," + ",t.modifier)),n.a.createElement("td",null,t.advantage?"Advantage":n.a.createElement("i",null,"       ")," ",t.disadvantage?"Disadvantage":n.a.createElement("i",null,"       ")),n.a.createElement("td",null,n.a.createElement("button",{className:"buttons",onClick:function(a){return e.deleteRoll(a,t)}},"Remove"))))))}))}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(E.a,{fluid:!0},n.a.createElement(v.a,null),n.a.createElement(E.a,{size:"sm"},n.a.createElement(f.a,null,n.a.createElement(b.a,{xs:12,s:12,md:4},n.a.createElement(g.a,{bordered:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Dice"))),n.a.createElement("div",{className:"rolls-container"},this.renderDice())),n.a.createElement(h.a,null,n.a.createElement("label",null,n.a.createElement("br",null),"Modifier: ",n.a.createElement("br",null),n.a.createElement("input",{type:"number",name:"modifier",step:"1",value:this.state.modifier,onChange:function(t){return e.handleChange(t)}}),n.a.createElement("br",null),"Advantage: ",n.a.createElement("input",{type:"checkbox",name:"advantage",value:this.state.advantage,onChange:function(t){return e.handleChange(t)}}),n.a.createElement("br",null),"Disadvantage: ",n.a.createElement("input",{type:"checkbox",name:"disadvantage",value:this.state.disadvantage,onChange:function(t){return e.handleChange(t)}}),n.a.createElement("hr",null),n.a.createElement("u",null,"Add Custom Die"),n.a.createElement("br",null),"Number of dice to roll: ",n.a.createElement("br",null),n.a.createElement("input",{type:"number",name:"diceRolled",step:"1",value:this.state.diceRolled,onChange:function(t){return e.handleChange(t)}}),n.a.createElement("br",null),"Custom die sides:",n.a.createElement("br",null),n.a.createElement("input",{type:"number",name:"addDie",min:"1",step:"1",value:this.state.addDie,onChange:function(t){return e.handleChange(t)}})),n.a.createElement("br",null),n.a.createElement("input",{type:"button",onClick:this.pushDie,value:"Add Custom Die"})),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement(b.a,{xs:12,s:12,md:8},n.a.createElement(g.a,{bordered:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Saved Rolls"))),n.a.createElement("div",{className:"saved-rolls-container"},this.showSavedRolls())),n.a.createElement(h.a,null,n.a.createElement("label",null,n.a.createElement("u",null,"Save roll"),n.a.createElement("br",null),"Label:",n.a.createElement("br",null)," ",n.a.createElement("input",{type:"text",name:"saveLabel",value:this.state.saveLabel,onChange:function(t){return e.handleChange(t)}}),n.a.createElement("br",null),"Number of dice to roll:",n.a.createElement("br",null)," ",n.a.createElement("input",{type:"number",name:"saveDiceRolled",min:"1",step:"1",value:this.state.saveDiceRolled,onChange:function(t){return e.handleChange(t)}}),n.a.createElement("br",null),"Die sides:",n.a.createElement("br",null)," ",n.a.createElement("input",{type:"number",name:"saveRollSides",min:"1",step:"1",value:this.state.saveRollSides,onChange:function(t){return e.handleChange(t)}}),n.a.createElement("br",null),"Modifier:",n.a.createElement("br",null)," ",n.a.createElement("input",{type:"number",name:"saveRollModifier",step:"1",value:this.state.saveRollModifier,onChange:function(t){return e.handleChange(t)}}),n.a.createElement("br",null),"Advantage: ",n.a.createElement("input",{type:"checkbox",name:"saveRollAdvantage",value:this.state.saveRollAdvantage,onChange:function(t){return e.handleChange(t)}}),this.state.saveRollAdvantage,n.a.createElement("br",null),"Disadvantage: ",n.a.createElement("input",{type:"checkbox",name:"saveRollDisadvantage",value:this.state.saveRollDisadvantage,onChange:function(t){return e.handleChange(t)}}),this.state.saveRollDisadvantage),n.a.createElement("br",null),n.a.createElement("input",{type:"button",onClick:this.saveRoll,value:"Save Roll"})),n.a.createElement("br",null))),n.a.createElement(f.a,null,n.a.createElement(b.a,{xs:12},n.a.createElement(g.a,{bordered:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"History"))),n.a.createElement("div",{className:"history-container",ref:this.historyRef},this.showHistory())),n.a.createElement(h.a,null,n.a.createElement("label",null,n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("input",{type:"button",onClick:this.saveStateToLocalStorage,value:"Save rolls, dice, and history"}),n.a.createElement("br",null),"If you save your custom dice, custom rolls, and roll history, they will be here when you come back to this page. Otherwise, you'll start afresh.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("input",{type:"button",onClick:this.resetHistory,value:"Reset History"}),n.a.createElement("br",null),"This button resets the roll history to its original state.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("input",{type:"button",onClick:this.clearLocalStorage,value:"Reset to Default"}),n.a.createElement("br",null),"This button resets your custom dice, custom rolls, and roll history to their original states.")))))))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.fb22bc4b.chunk.js.map