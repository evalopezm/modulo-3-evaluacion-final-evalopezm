(this["webpackJsonprick-and-morty-characters"]=this["webpackJsonprick-and-morty-characters"]||[]).push([[0],[,,,function(e,t,n){e.exports=n.p+"static/media/logo.75509f2e.png"},,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),i=(n(10),n(4)),s=n(3),l=n.n(s);n(11);var u=function(e){return r.a.createElement("li",{className:"character-card"},r.a.createElement("img",{src:e.photo}),r.a.createElement("p",null,"Name: ",e.name),r.a.createElement("p",null,"Species: ",e.species))};n(12);var m=function(e){var t=e.characters.map((function(e){return r.a.createElement(u,{key:e.id,photo:e.photo,name:e.name,species:e.species})}));return r.a.createElement("ul",{className:"character-list"},t)};var p=function(){return r.a.createElement("form",null,r.a.createElement("input",null))},h=(n(13),function(){return fetch("https://rickandmortyapi.com/api/character/1,2,3,7,8,13").then((function(e){return e.json()})).then((function(e){return e.map((function(e){return{id:e.id,name:e.name,spieces:e.species,photo:e.image,status:e.status,origin:e.origin.name,episodes:e.episode.length}}))}))});var f=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){h().then((function(e){c(e)}))}),[]),console.log(n),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:l.a,alt:"Logo de Rick and Morty"})),r.a.createElement("main",null,r.a.createElement(p,null),r.a.createElement(m,{characters:n})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.2a1a41b7.chunk.js.map