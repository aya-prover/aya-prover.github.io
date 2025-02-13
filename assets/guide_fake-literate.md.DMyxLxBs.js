import{_ as a,c as i,o as n,a2 as e}from"./chunks/framework.BV7BAn2o.js";const c=JSON.parse('{"title":"Fake literate mode","description":"","frontmatter":{},"headers":[],"relativePath":"guide/fake-literate.md","filePath":"guide/fake-literate.md","lastUpdated":1717700861000}'),t={name:"guide/fake-literate.md"};function l(p,s,h,k,d,r){return n(),i("div",null,s[0]||(s[0]=[e(`<h1 id="fake-literate-mode" tabindex="-1">Fake literate mode <a class="header-anchor" href="#fake-literate-mode" aria-label="Permalink to &quot;Fake literate mode&quot;">​</a></h1><p>The Aya compiler generates styled (e.g. with colors and text attributes) code snippets for many targets, like HTML, LaTeX, etc., and it&#39;s tempting to use the same tool but for different languages. This is what the <em>fake literate</em> mode is for. Let me know if you want other backend supports.</p><p>To start, install the latest version of Aya, put the following code in a file named <code>hello.flcl</code>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>keyword: data where;</span></span>
<span class="line"><span>symbol: ≃;</span></span>
<span class="line"><span>data: Int;</span></span>
<span class="line"><span>constructor: zero succ;</span></span>
<span class="line"><span>------</span></span>
<span class="line"><span>data Int where</span></span>
<span class="line"><span>  zero : Int</span></span>
<span class="line"><span>  succ : Int ≃ Int</span></span></code></pre></div><p>Then, run the following command to generate literate output, where you replace <code>&lt;AYA&gt;</code> with either <code>java -jar &lt;path-to-aya.jar&gt;</code> or <code>aya</code> depending on your installation:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;AYA&gt; --fake-literate hello.flcl</span></span></code></pre></div><p>Then it will print the following output:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\\AyaKeyword{data}\\hspace{0.5em}\\AyaData{Int}\\hspace{0.5em}\\AyaKeyword{where}~\\\\</span></span>
<span class="line"><span>\\hspace{1.0em}\\AyaConstructor{zero}\\hspace{0.5em}:\\hspace{0.5em}\\AyaData{Int}~\\\\</span></span>
<span class="line"><span>\\hspace{1.0em}\\AyaConstructor{succ}\\hspace{0.5em}:\\hspace{0.5em}\\AyaData{Int}\\hspace{0.5em}≃\\hspace{0.5em}\\AyaData{Int}</span></span></code></pre></div><p>You may add <code>-o hello.tex</code> to let it write to a file instead of printing to the console. With minimal configurations such as below, you can compile it with any LaTeX toolchain:</p><div class="language-tex vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tex</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\usepackage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{newunicodechar}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\newunicodechar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{≃}{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\ensuremath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\mathrel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\simeq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}}}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\usepackage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{xcolor}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">% Aya highlighting</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\definecolor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{AyaFn}{HTML}{00627a}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\definecolor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{AyaConstructor}{HTML}{067d17}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\definecolor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{AyaStruct}{HTML}{00627a}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\definecolor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{AyaGeneralized}{HTML}{00627a}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\definecolor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{AyaData}{HTML}{00627a}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\definecolor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{AyaPrimitive}{HTML}{00627a}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\definecolor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{AyaKeyword}{HTML}{0033b3}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\definecolor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{AyaComment}{HTML}{8c8c8c}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\definecolor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{AyaField}{HTML}{871094}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\newcommand\\AyaFn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[1]{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\textcolor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{AyaFn}{#1}}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\newcommand\\AyaConstructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[1]{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\textcolor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{AyaConstructor}{#1}}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\newcommand\\AyaCall</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[1]{#1}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\newcommand\\AyaStruct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[1]{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\textcolor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{AyaStruct}{#1}}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\newcommand\\AyaGeneralized</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[1]{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\textcolor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{AyaGeneralized}{#1}}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\newcommand\\AyaData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[1]{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\textcolor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{AyaData}{#1}}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\newcommand\\AyaPrimitive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[1]{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\textcolor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{AyaPrimitive}{#1}}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\newcommand\\AyaKeyword</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[1]{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\textcolor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{AyaKeyword}{#1}}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\newcommand\\AyaLocalVar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[1]{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\textit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{#1}}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\newcommand\\AyaComment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[1]{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\textit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\textcolor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{AyaComment}{#1}}}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\newcommand\\AyaField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[1]{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\textcolor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{AyaField}{#1}}</span></span></code></pre></div><p>The following code provides a quick macro to include the generated code:</p><div class="language-tex vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tex</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\newcommand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\includeFlcl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}[1]{{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\vspace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{0.15cm}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\RaggedRight</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">% https://tex.stackexchange.com/a/35936/145304</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\setlength\\parindent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{0pt}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\setlength</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\leftskip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}{1cm}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\input</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{#1}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\setlength</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\leftskip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}{0cm}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\vspace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{0.15cm}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}}</span></span></code></pre></div><p>Use <code>\\includeFlcl{hello}</code> to include the generated code in your document.</p>`,13)]))}const E=a(t,[["render",l]]);export{c as __pageData,E as default};
