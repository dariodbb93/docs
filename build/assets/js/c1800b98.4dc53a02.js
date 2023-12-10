"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9662],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(a),b=r,k=c["".concat(p,".").concat(b)]||c[b]||m[b]||l;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=b;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},4912:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:2},i="Vincoli di integrit\xe0 referenziale",o={unversionedId:"basi-dati/foreign-key",id:"basi-dati/foreign-key",title:"Vincoli di integrit\xe0 referenziale",description:"1. Principi generali",source:"@site/docs/basi-dati/foreign-key.md",sourceDirName:"basi-dati",slug:"/basi-dati/foreign-key",permalink:"/basi-dati/foreign-key",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Basi di dati relazionali",permalink:"/basi-dati/sql"},next:{title:"C#",permalink:"/category/c"}},p={},u=[],d={toc:u},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vincoli-di-integrit\xe0-referenziale"},"Vincoli di integrit\xe0 referenziale"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Principi generali")),(0,r.kt)("p",null,"Nell'ambito delle basi di dati relazionali, possiamo definire particolari vincoli di integrit\xe0 referenziale tra le diverse tabelle che compongono la nostra base dati.\nPi\xf9 nello specifico, \xe8 possibile esplicitare delle relazioni tra le varie entit\xe0 della base dati.\nVediamo quindi un esempio."),(0,r.kt)("p",null,"Tabella auto (A)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MARCA"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"AUDI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"CHEVROLET")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"BMW")))),(0,r.kt)("p",null,"Tabella modello (M)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MARCA"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"CAMARO SS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"CRUZE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"CAPTIVA")))),(0,r.kt)("p",null,"Tabella carburante (C)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MARCA"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"BENZINA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"DIESEL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"ELETTRICA")))),(0,r.kt)("p",null,"Auto configurata (AC)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Marca_Id"),(0,r.kt)("th",{parentName:"tr",align:null},"Modello_Id"),(0,r.kt)("th",{parentName:"tr",align:null},"Carburante_Id"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("p",null,"La tabella Auto configurata contiene le referenze alle tabelle precedenti, ossia l'Id specifico del record che identifica:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"la marca dell'automobile;"),(0,r.kt)("li",{parentName:"ul"},"il modello dell'automobile;"),(0,r.kt)("li",{parentName:"ul"},"il tipo di carburante.")),(0,r.kt)("p",null,"Nel nostro caso specifico si tratta di una CHEVROLET CAMARO SS BENZINA.\nDiremo quindi che gli indici della tabella Auto configurata sono delle Foreign-Key (chiavi esterne) delle rispettive tabelle che precedono.\nOra per\xf2 la tabella Auto configurata contiene solamente le referenze alle altre tabelle, e non, i rispettivi valori.\nVolendo recupare i valori dobbiamo utilizzare delle istruzioni di JOIN."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Codice SQL")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'SELECT AC.ID, \n       A.MARCA AS MARCA_AUTO, \n       M.MARCA AS MODELLO_AUTO, \n       C.MARCA AS CARBURANTE_AUTO\nFROM "Auto configurata" AC\nJOIN "Tabella auto" A ON AC.Marca_Id = A.ID\nJOIN "Tabella modello" M ON AC.Modello_Id = M.ID\nJOIN "Tabella carburante" C ON AC.Carburante_Id = C.ID;\n\n\n')),(0,r.kt)("p",null,"Il risultato di questa query sar\xe0 una tabella che mostra tutti i valori (propriet\xe0) dell'auto configurata."))}m.isMDXComponent=!0}}]);