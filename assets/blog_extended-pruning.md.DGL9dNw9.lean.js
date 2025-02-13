import{_,c as z,o as w,j as s,a2 as V,a as e}from"./chunks/framework.BV7BAn2o.js";const T={mounted(){const h=new Map;function d(l){const a=l.querySelectorAll("a[href]");for(const n of a){const o=n.href,r=h.get(o)??new Set;r.add(n),h.set(o,r)}for(const n of a)n.onmouseover=function(){for(const o of h.get(this.href))o.classList.add("hover-highlight")},n.onmouseout=function(){for(const o of h.get(this.href))o.classList.remove("hover-highlight")}}function y(l){return decodeURIComponent(atob(l).split("").map(function(a){return"%"+("00"+a.charCodeAt(0).toString(16)).slice(-2)}).join(""))}const f=(l=>{const a={};return(...n)=>{const o=JSON.stringify(n);return a[o]=a[o]||l(...n)}})(y);class m{constructor(){this.list=[]}dismiss(a){a&&(a.remove(),this.list=this.list.filter(n=>n!==a))}dismissIfNotUsed(a){a&&(a.markedForDismissal=!0,setTimeout(()=>{!a.userIsThinking&&this.allowAutoDismissal(a)&&this.dismiss(a)},1e3))}allowAutoDismissal(a){return a.markedForDismissal&&!a.userClicked}fireAutoDismissalFor(a){let n=this.list.find(o=>o.userCreatedFrom===a);this.dismissIfNotUsed(n)}createHoverFor(a,n,o){let r=this.list.find(i=>i.userCreatedFrom===a);if(r&&r.userClicked)return r;let b=[];const x=this.list.filter(i=>{if(this.allowAutoDismissal(i))return b.push(i),!1;const p=i.userCreatedFrom,u=a;let c=u;for(;c;){if(c===p)return!0;c=c.parentElement}for(c=p;c;){if(c===u)return!0;c=c.parentElement}return!1});b.forEach(i=>this.dismiss(i));let t=document.createElement("div");t.userCreatedFrom=a,t.innerHTML="<span id='AyaTooltipPopupClose'>&times;</span>"+f(n),t.classList.add("AyaTooltipPopup"),d(t);let A=this;if(t.handleEvent=function(i){if(i.type==="click"){this.userClicked=!0,this.markedForDismissal=!1;let p=this.children[0];if(!p)return;let u=this;p.style.visibility="visible",p.addEventListener("click",c=>A.dismiss(u))}i.type==="mouseover"&&(this.userIsThinking=!0),i.type==="mouseout"&&(this.userIsThinking=!1,A.dismissIfNotUsed(this))},t.addEventListener("click",t),t.addEventListener("mouseover",t),t.addEventListener("mouseout",t),o.appendChild(t),t.style.left=`${a.offsetLeft}px`,x.length===0){const i=a.getBoundingClientRect(),p=t.getBoundingClientRect();i.bottom+p.height+30>window.innerHeight?t.style.top=`calc(${a.offsetTop-p.height+8}px - 3em)`:t.style.top=`${a.offsetTop+a.offsetHeight+8}px`}else{const i=Math.max(...x.map(p=>p.offsetTop+p.offsetHeight));t.style.top=`${i+8}px`}return this.list.push(t),t}}let v=new m;function g(l){return function(){let a=this;const n=a.getAttribute("data-tooltip-text");n&&(l?v.createHoverFor(a,n,document.body):v.fireAutoDismissalFor(a))}}d(document);{let l=document.getElementsByClassName("aya-tooltip");for(let a=0;a<l.length;a++){let n=l[a];n.hasAttribute("data-tooltip-text")&&(n.onmouseover=g(!0),n.onmouseout=g(!1))}}}},P=JSON.parse('{"title":"Extended pruning for pattern unification","description":"","frontmatter":{"lastUpdated":"2024-12-15T22:37:34.000Z"},"headers":[],"relativePath":"blog/extended-pruning.md","filePath":"blog/extended-pruning.md","lastUpdated":1734302254000}');function C(h,d,y,k,f,m){return w(),z("div",null,d[0]||(d[0]=[s("h1",{id:"extended-pruning-for-pattern-unification",tabindex:"-1"},[e("Extended pruning for pattern unification "),s("a",{class:"header-anchor",href:"#extended-pruning-for-pattern-unification","aria-label":'Permalink to "Extended pruning for pattern unification"'},"​")],-1),s("pre",{class:"Aya"},[e(""),s("code",null,[s("span",{class:"Keyword"},"prim"),e(),s("a",{id:"Mian-I",class:"aya-hover","aya-hover-text":"ISet",href:"#Mian-I"},[s("span",{class:"Primitive"},"I")]),e(`
`),s("span",{class:"Keyword"},"prim"),e(),s("a",{id:"Mian-Path",class:"aya-hover","aya-hover-text":"Type 0",href:"#Mian-Path"},[s("span",{class:"Primitive"},"Path")]),e(" ("),s("a",{id:"v1816725203",class:"aya-hover","aya-hover-text":"I → Type 0",href:"#v1816725203"},[s("span",{class:"LocalVar"},"A")]),e(" : "),s("a",{class:"aya-hover","aya-hover-text":"ISet",href:"#Mian-I"},[s("span",{class:"Primitive"},"I")]),e(" → "),s("span",{class:"Keyword"},"Type"),e(") ("),s("a",{id:"v1038677529",class:"aya-hover","aya-hover-text":"A 0",href:"#v1038677529"},[s("span",{class:"LocalVar"},"a")]),e(" : "),s("a",{class:"aya-hover","aya-hover-text":"Type 0",href:"#v1816725203"},[s("span",{class:"LocalVar"},"A")]),e(" 0) ("),s("a",{id:"v716487794",class:"aya-hover","aya-hover-text":"A 1",href:"#v716487794"},[s("span",{class:"LocalVar"},"b")]),e(" : "),s("a",{class:"aya-hover","aya-hover-text":"Type 0",href:"#v1816725203"},[s("span",{class:"LocalVar"},"A")]),e(" 1) : "),s("span",{class:"Keyword"},"Type")]),e(`
`)],-1),s("p",null,"The vanilla pattern unification is very limited. Consider:",-1),s("pre",{class:"Aya"},[e(""),s("code",null,[e(),s("a",{class:"aya-hover","aya-hover-text":"Type 0",href:"#Mian-Path"},[s("span",{class:"Primitive"},"Path")]),e(" ("),s("span",{class:"Keyword"},"fn"),e(),s("a",{id:"v284686302",href:"#v284686302"},[s("span",{class:"LocalVar"},"i")]),e(" ⇒ "),s("a",{class:"aya-hover","aya-hover-text":"Type 0",href:"#Mian-Vec"},[s("span",{class:"Data"},"Vec")]),e(" ("),s("a",{class:"aya-hover","aya-hover-text":"Nat",href:"#Mian-2b-assoc"},[s("span",{class:"Fn"},"+-assoc")]),e(),s("a",{class:"aya-hover","aya-hover-text":"I",href:"#v284686302"},[s("span",{class:"LocalVar"},"i")]),e(") "),s("a",{class:"aya-hover","aya-hover-text":"Type 0",href:"#v1894369629"},[s("span",{class:"Generalized"},"A")]),e(`)
      ((`),s("a",{class:"aya-hover","aya-hover-text":"Vec n A",href:"#v1719072416"},[s("span",{class:"LocalVar"},"xs")]),e(),s("a",{class:"aya-hover","aya-hover-text":"Vec (?n n A m o xs ys zs + ?m n A m o xs ys zs) (?A n A m o xs ys zs)",href:"#Mian-2b2b"},[s("span",{class:"Fn"},"++")]),e(),s("a",{class:"aya-hover","aya-hover-text":"Vec m A",href:"#v2092801316"},[s("span",{class:"LocalVar"},"ys")]),e(") "),s("a",{class:"aya-hover","aya-hover-text":"Vec ((n + m) + o) A",href:"#Mian-2b2b"},[s("span",{class:"Fn"},"++")]),e(),s("a",{class:"aya-hover","aya-hover-text":"Vec o A",href:"#v376635015"},[s("span",{class:"LocalVar"},"zs")]),e(`)
      (`),s("a",{class:"aya-hover","aya-hover-text":"Vec n A",href:"#v1719072416"},[s("span",{class:"LocalVar"},"xs")]),e(),s("a",{class:"aya-hover","aya-hover-text":"Vec (?n n A m o xs ys zs + ?m n A m o xs ys zs) (?A n A m o xs ys zs)",href:"#Mian-2b2b"},[s("span",{class:"Fn"},"++")]),e(" ("),s("a",{class:"aya-hover","aya-hover-text":"Vec m A",href:"#v2092801316"},[s("span",{class:"LocalVar"},"ys")]),e(),s("a",{class:"aya-hover","aya-hover-text":"Vec (?n n A m o xs ys zs + ?m n A m o xs ys zs) (?A n A m o xs ys zs)",href:"#Mian-2b2b"},[s("span",{class:"Fn"},"++")]),e(),s("a",{class:"aya-hover","aya-hover-text":"Vec o A",href:"#v376635015"},[s("span",{class:"LocalVar"},"zs")]),e("))")]),e(`
`)],-1),V("",26)]))}const L=_(T,[["render",C]]);export{P as __pageData,L as default};
