import{_ as F,c as Y,a2 as b,j as e,a as t,o as G}from"./chunks/framework.CoXjB5sU.js";const N={mounted(){const p=new Map;function d(c){const a=c.querySelectorAll("a[href]");for(const s of a){const r=s.href,h=p.get(r)??new Set;h.add(s),p.set(r,h)}for(const s of a)s.onmouseover=function(){for(const r of p.get(this.href))r.classList.add("hover-highlight")},s.onmouseout=function(){for(const r of p.get(this.href))r.classList.remove("hover-highlight")}}function I(c){return decodeURIComponent(atob(c).split("").map(function(a){return"%"+("00"+a.charCodeAt(0).toString(16)).slice(-2)}).join(""))}const y=(c=>{const a={};return(...s)=>{const r=JSON.stringify(s);return a[r]=a[r]||c(...s)}})(I);class g{constructor(){this.list=[]}dismiss(a){a&&(a.remove(),this.list=this.list.filter(s=>s!==a))}dismissIfNotUsed(a){a&&(a.markedForDismissal=!0,setTimeout(()=>{!a.userIsThinking&&this.allowAutoDismissal(a)&&this.dismiss(a)},1e3))}allowAutoDismissal(a){return a.markedForDismissal&&!a.userClicked}fireAutoDismissalFor(a){let s=this.list.find(r=>r.userCreatedFrom===a);this.dismissIfNotUsed(s)}createHoverFor(a,s,r){let h=this.list.find(o=>o.userCreatedFrom===a);if(h&&h.userClicked)return h;let P=[];const u=this.list.filter(o=>{if(this.allowAutoDismissal(o))return P.push(o),!1;const n=o.userCreatedFrom,m=a;let l=m;for(;l;){if(l===n)return!0;l=l.parentElement}for(l=n;l;){if(l===m)return!0;l=l.parentElement}return!1});P.forEach(o=>this.dismiss(o));let i=document.createElement("div");i.userCreatedFrom=a,i.innerHTML="<span id='AyaTooltipPopupClose'>&times;</span>"+y(s),i.classList.add("AyaTooltipPopup"),d(i);let v=this;if(i.handleEvent=function(o){if(o.type==="click"){this.userClicked=!0,this.markedForDismissal=!1;let n=this.children[0];if(!n)return;let m=this;n.style.visibility="visible",n.addEventListener("click",l=>v.dismiss(m))}o.type==="mouseover"&&(this.userIsThinking=!0),o.type==="mouseout"&&(this.userIsThinking=!1,v.dismissIfNotUsed(this))},i.addEventListener("click",i),i.addEventListener("mouseover",i),i.addEventListener("mouseout",i),r.appendChild(i),i.style.left=`${a.offsetLeft}px`,u.length===0){const o=a.getBoundingClientRect(),n=i.getBoundingClientRect();o.bottom+n.height+30>window.innerHeight?i.style.top=`calc(${a.offsetTop-n.height+8}px - 3em)`:i.style.top=`${a.offsetTop+a.offsetHeight+8}px`}else{const o=Math.max(...u.map(n=>n.offsetTop+n.offsetHeight));i.style.top=`${o+8}px`}return this.list.push(i),i}}let f=new g;function j(c){return function(){let a=this;const s=a.getAttribute("data-tooltip-text");s&&(c?f.createHoverFor(a,s,document.body):f.fireAutoDismissalFor(a))}}d(document);{let c=document.getElementsByClassName("aya-tooltip");for(let a=0;a<c.length;a++){let s=c[a];s.hasAttribute("data-tooltip-text")&&(s.onmouseover=j(!0),s.onmouseout=j(!1))}}}},z=JSON.parse('{"title":"Binary operators in Aya","description":"","frontmatter":{},"headers":[],"relativePath":"blog/binops.md","filePath":"blog/binops.md","lastUpdated":1733767595000}');function C(p,d,I,w,y,g){return G(),Y("div",null,d[0]||(d[0]=[b('<h1 id="binary-operators-in-aya" tabindex="-1">Binary operators in Aya <a class="header-anchor" href="#binary-operators-in-aya" aria-label="Permalink to &quot;Binary operators in Aya&quot;">​</a></h1><p>We have designed a binary operator system in Aya which happens to be (we didn&#39;t copy!) very similar to <a href="https://plt.cs.northwestern.edu/pkg-build/doc/enforest/Operator_Precedence_and_Associativity.html" target="_blank" rel="noreferrer">Rhombus</a> (a.k.a. Racket 2) and <a href="https://docs.swift.org/swift-book/ReferenceManual/Declarations.html#ID550" target="_blank" rel="noreferrer">Swift 5.7</a>.</p><p>TL;DR: it supports making <em>any</em> identifier a custom operator with precedences specified by a partial ordering. Left and right associativities are supported in addition to that.</p><p>The precedence and associativity information is bound to a name, not a definition. This means we can import a name from another module with changes to its name, associativity, and precedence. Importing with renaming is an established feature, but changing associativity and precedence is not that popular (though implemented in Agda already).</p><p>Here are some code examples (implementations are omitted for simplicity):</p>',5),e("pre",{class:"Aya"},[t(""),e("code",null,[e("span",{class:"Comment"},"// Left-associative"),t(`
`),e("span",{class:"Keyword"},"def"),t(),e("span",{class:"Keyword"},"infixl"),t(),e("a",{id:"Mian-2b",class:"aya-hover","aya-hover-text":"Nat",href:"#Mian-2b"},[e("span",{class:"Fn"},"+")]),t(" ("),e("a",{id:"v303240439",class:"aya-hover","aya-hover-text":"Nat",href:"#v303240439"},[e("span",{class:"LocalVar"},"x")]),t(),e("a",{id:"v319558327",class:"aya-hover","aya-hover-text":"Nat",href:"#v319558327"},[e("span",{class:"LocalVar"},"y")]),t(" : "),e("a",{class:"aya-hover","aya-hover-text":"Type 0",href:"#Mian-Nat"},[e("span",{class:"Data"},"Nat")]),t(") : "),e("a",{class:"aya-hover","aya-hover-text":"Type 0",href:"#Mian-Nat"},[e("span",{class:"Data"},"Nat")]),t(" ⇒ "),e("span",{class:"aya-tooltip","data-tooltip-text":"PHByZSBjbGFzcz0iQXlhIj4KPGNvZGU+R29hbDogR29hbCBvZiB0eXBlCiAgICAgICAgPGEgaHJlZj0iI01pYW4tTmF0Ij48c3BhbiBjbGFzcz0iRGF0YSI+TmF0PC9zcGFuPjwvYT4KICAgICAgICAoTm9ybWFsaXplZDogPGEgaHJlZj0iI01pYW4tTmF0Ij48c3BhbiBjbGFzcz0iRGF0YSI+TmF0PC9zcGFuPjwvYT4pCiAgICAgIENvbnRleHQ6CiAgICAgICAgPGEgaHJlZj0iI3YzMDMyNDA0MzkiPjxzcGFuIGNsYXNzPSJMb2NhbFZhciI+eDwvc3Bhbj48L2E+IDogPGEgaHJlZj0iI01pYW4tTmF0Ij48c3BhbiBjbGFzcz0iRGF0YSI+TmF0PC9zcGFuPjwvYT4KICAgICAgICA8YSBocmVmPSIjdjMxOTU1ODMyNyI+PHNwYW4gY2xhc3M9IkxvY2FsVmFyIj55PC9zcGFuPjwvYT4gOiA8YSBocmVmPSIjTWlhbi1OYXQiPjxzcGFuIGNsYXNzPSJEYXRhIj5OYXQ8L3NwYW4+PC9hPjwvY29kZT4KPC9wcmU+Cg=="},[e("span",{class:"Goal"},[e("span",{class:"aya-tooltip","data-tooltip-text":"PHByZSBjbGFzcz0iQXlhIj4KPGNvZGU+PHNwYW4gY2xhc3M9IkNhbGwiPj88YSBocmVmPSIjdjQ0MzM4NDYxNyI+XzI8L2E+IDxhIGhyZWY9IiN2MzAzMjQwNDM5Ij48c3BhbiBjbGFzcz0iTG9jYWxWYXIiPng8L3NwYW4+PC9hPiA8YSBocmVmPSIjdjMxOTU1ODMyNyI+PHNwYW4gY2xhc3M9IkxvY2FsVmFyIj55PC9zcGFuPjwvYT48L3NwYW4+PC9jb2RlPgo8L3ByZT4K"},"{??}")])]),t(`
`),e("span",{class:"Comment"},"// Left-associative, bind tighter than +"),t(`
`),e("span",{class:"Keyword"},"def"),t(),e("span",{class:"Keyword"},"infixl"),t(),e("a",{id:"Mian-×",class:"aya-hover","aya-hover-text":"Nat",href:"#Mian-×"},[e("span",{class:"Fn"},"×")]),t(" ("),e("a",{id:"v775445710",class:"aya-hover","aya-hover-text":"Nat",href:"#v775445710"},[e("span",{class:"LocalVar"},"x")]),t(),e("a",{id:"v769432223",class:"aya-hover","aya-hover-text":"Nat",href:"#v769432223"},[e("span",{class:"LocalVar"},"y")]),t(" : "),e("a",{class:"aya-hover","aya-hover-text":"Type 0",href:"#Mian-Nat"},[e("span",{class:"Data"},"Nat")]),t(") : "),e("a",{class:"aya-hover","aya-hover-text":"Type 0",href:"#Mian-Nat"},[e("span",{class:"Data"},"Nat")]),t(" ⇒ "),e("span",{class:"aya-tooltip","data-tooltip-text":"PHByZSBjbGFzcz0iQXlhIj4KPGNvZGU+R29hbDogR29hbCBvZiB0eXBlCiAgICAgICAgPGEgaHJlZj0iI01pYW4tTmF0Ij48c3BhbiBjbGFzcz0iRGF0YSI+TmF0PC9zcGFuPjwvYT4KICAgICAgICAoTm9ybWFsaXplZDogPGEgaHJlZj0iI01pYW4tTmF0Ij48c3BhbiBjbGFzcz0iRGF0YSI+TmF0PC9zcGFuPjwvYT4pCiAgICAgIENvbnRleHQ6CiAgICAgICAgPGEgaHJlZj0iI3Y3NzU0NDU3MTAiPjxzcGFuIGNsYXNzPSJMb2NhbFZhciI+eDwvc3Bhbj48L2E+IDogPGEgaHJlZj0iI01pYW4tTmF0Ij48c3BhbiBjbGFzcz0iRGF0YSI+TmF0PC9zcGFuPjwvYT4KICAgICAgICA8YSBocmVmPSIjdjc2OTQzMjIyMyI+PHNwYW4gY2xhc3M9IkxvY2FsVmFyIj55PC9zcGFuPjwvYT4gOiA8YSBocmVmPSIjTWlhbi1OYXQiPjxzcGFuIGNsYXNzPSJEYXRhIj5OYXQ8L3NwYW4+PC9hPjwvY29kZT4KPC9wcmU+Cg=="},[e("span",{class:"Goal"},[e("span",{class:"aya-tooltip","data-tooltip-text":"PHByZSBjbGFzcz0iQXlhIj4KPGNvZGU+PHNwYW4gY2xhc3M9IkNhbGwiPj88YSBocmVmPSIjdjY5NjkzMzkyMCI+XzE8L2E+IDxhIGhyZWY9IiN2Nzc1NDQ1NzEwIj48c3BhbiBjbGFzcz0iTG9jYWxWYXIiPng8L3NwYW4+PC9hPiA8YSBocmVmPSIjdjc2OTQzMjIyMyI+PHNwYW4gY2xhc3M9IkxvY2FsVmFyIj55PC9zcGFuPjwvYT48L3NwYW4+PC9jb2RlPgo8L3ByZT4K"},"{??}")])]),t(),e("span",{class:"Keyword"},"tighter"),t(),e("a",{class:"aya-hover","aya-hover-text":"Nat",href:"#Mian-2b"},[e("span",{class:"Fn"},"+")]),t(`
`),e("span",{class:"Comment"},"// Prefix operator"),t(`
`),e("span",{class:"Keyword"},"def"),t(),e("span",{class:"Keyword"},"fixl"),t(),e("a",{id:"Mian-21",class:"aya-hover","aya-hover-text":"Nat",href:"#Mian-21"},[e("span",{class:"Fn"},"!")]),t(" ("),e("a",{id:"v712974096",class:"aya-hover","aya-hover-text":"Nat",href:"#v712974096"},[e("span",{class:"LocalVar"},"x")]),t(" : "),e("a",{class:"aya-hover","aya-hover-text":"Type 0",href:"#Mian-Nat"},[e("span",{class:"Data"},"Nat")]),t(") : "),e("a",{class:"aya-hover","aya-hover-text":"Type 0",href:"#Mian-Nat"},[e("span",{class:"Data"},"Nat")]),t(" ⇒ "),e("span",{class:"aya-tooltip","data-tooltip-text":"PHByZSBjbGFzcz0iQXlhIj4KPGNvZGU+R29hbDogR29hbCBvZiB0eXBlCiAgICAgICAgPGEgaHJlZj0iI01pYW4tTmF0Ij48c3BhbiBjbGFzcz0iRGF0YSI+TmF0PC9zcGFuPjwvYT4KICAgICAgICAoTm9ybWFsaXplZDogPGEgaHJlZj0iI01pYW4tTmF0Ij48c3BhbiBjbGFzcz0iRGF0YSI+TmF0PC9zcGFuPjwvYT4pCiAgICAgIENvbnRleHQ6CiAgICAgICAgPGEgaHJlZj0iI3Y3MTI5NzQwOTYiPjxzcGFuIGNsYXNzPSJMb2NhbFZhciI+eDwvc3Bhbj48L2E+IDogPGEgaHJlZj0iI01pYW4tTmF0Ij48c3BhbiBjbGFzcz0iRGF0YSI+TmF0PC9zcGFuPjwvYT48L2NvZGU+CjwvcHJlPgo="},[e("span",{class:"Goal"},[e("span",{class:"aya-tooltip","data-tooltip-text":"PHByZSBjbGFzcz0iQXlhIj4KPGNvZGU+PHNwYW4gY2xhc3M9IkNhbGwiPj88YSBocmVmPSIjdjExODc5MDM2NzciPl82PC9hPiA8YSBocmVmPSIjdjcxMjk3NDA5NiI+PHNwYW4gY2xhc3M9IkxvY2FsVmFyIj54PC9zcGFuPjwvYT48L3NwYW4+PC9jb2RlPgo8L3ByZT4K"},"{??}")])]),t(`
`),e("span",{class:"Comment"},"// Postfix operator"),t(`
`),e("span",{class:"Keyword"},"def"),t(),e("span",{class:"Keyword"},"fixr"),t(),e("a",{id:"Mian-3f",class:"aya-hover","aya-hover-text":"Nat",href:"#Mian-3f"},[e("span",{class:"Fn"},"?")]),t(" ("),e("a",{id:"v252480153",class:"aya-hover","aya-hover-text":"Nat",href:"#v252480153"},[e("span",{class:"LocalVar"},"x")]),t(" : "),e("a",{class:"aya-hover","aya-hover-text":"Type 0",href:"#Mian-Nat"},[e("span",{class:"Data"},"Nat")]),t(") : "),e("a",{class:"aya-hover","aya-hover-text":"Type 0",href:"#Mian-Nat"},[e("span",{class:"Data"},"Nat")]),t(" ⇒ "),e("span",{class:"aya-tooltip","data-tooltip-text":"PHByZSBjbGFzcz0iQXlhIj4KPGNvZGU+R29hbDogR29hbCBvZiB0eXBlCiAgICAgICAgPGEgaHJlZj0iI01pYW4tTmF0Ij48c3BhbiBjbGFzcz0iRGF0YSI+TmF0PC9zcGFuPjwvYT4KICAgICAgICAoTm9ybWFsaXplZDogPGEgaHJlZj0iI01pYW4tTmF0Ij48c3BhbiBjbGFzcz0iRGF0YSI+TmF0PC9zcGFuPjwvYT4pCiAgICAgIENvbnRleHQ6CiAgICAgICAgPGEgaHJlZj0iI3YyNTI0ODAxNTMiPjxzcGFuIGNsYXNzPSJMb2NhbFZhciI+eDwvc3Bhbj48L2E+IDogPGEgaHJlZj0iI01pYW4tTmF0Ij48c3BhbiBjbGFzcz0iRGF0YSI+TmF0PC9zcGFuPjwvYT48L2NvZGU+CjwvcHJlPgo="},[e("span",{class:"Goal"},[e("span",{class:"aya-tooltip","data-tooltip-text":"PHByZSBjbGFzcz0iQXlhIj4KPGNvZGU+PHNwYW4gY2xhc3M9IkNhbGwiPj88YSBocmVmPSIjdjE5NDY5ODgwMzgiPl85PC9hPiA8YSBocmVmPSIjdjI1MjQ4MDE1MyI+PHNwYW4gY2xhc3M9IkxvY2FsVmFyIj54PC9zcGFuPjwvYT48L3NwYW4+PC9jb2RlPgo8L3ByZT4K"},"{??}")])])]),t(`
`)],-1),b(`<p>The <code>tighter</code> keyword works like this: when there are expressions like <code>a × b + c</code> which may either mean <code>(a × b) + c</code> or <code>a × (b + c)</code>, we will put the tighter operator in the parenthesis. In case we found the two operators share the same priority, Aya will report an error.</p><p>When importing operators from other modules, we can locally specify additional associativity and precedence information:</p><pre class="Aya"><code><span class="Keyword">open</span> <span class="Keyword">import</span> Primitives <span class="Keyword">using</span> (
  invol       <span class="Keyword">as</span> <span class="Keyword">fixl</span>  ~  <span class="Keyword">tighter</span> =, \\/, /\\,
  intervalMin <span class="Keyword">as</span> <span class="Keyword">infix</span> /\\ <span class="Keyword">tighter</span> \\/,
  intervalMax <span class="Keyword">as</span> <span class="Keyword">infix</span> \\/,
)</code>
</pre><p>This should allow fine-grained control over the precedence and associativity of operators. In case there is a cycle in the graph of operator precedence, Aya will report an error.</p><p>Specifying precedence of operators with a partial ordering is way better than with a number. In Haskell, if we already have <code>infix 3 +</code> and <code>infix 4 ×</code>, and we hope to add a new operator which has higher precedence than <code>+</code> but lower than <code>×</code>, it&#39;s going to be impossible. Agda introduced <a href="https://github.com/agda/agda/issues/3991" target="_blank" rel="noreferrer">float-point precedence</a> levels to address the issue, but I think it does not solve the essential problem: that I have to lookup the numbers (of existing operator precedences) every time I write a new operator.</p><p>In the future, we plan to support mixfix operators as in Agda (the current framework can support mixfix easily, but abusing mixfix notations can harm readability).</p>`,6)]))}const T=F(N,[["render",C]]);export{z as __pageData,T as default};