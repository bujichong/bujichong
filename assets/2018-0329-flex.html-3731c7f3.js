import{_ as l,p as t,q as c,w as o,s as n,G as s,t as a,P as i,J as r,n as d}from"./framework-d4dfb5a8.js";const p="/images/flex/00-basic-terminology.svg",u="/images/flex/01-container.svg",m="/images/flex/flex-direction.svg",v="/images/flex/flex-wrap.svg",g="/images/flex/justify-content.svg",x="/images/flex/align-items.svg",f="/images/flex/align-content.svg",h="/images/flex/02-items.svg",k="/images/flex/order.svg",b="/images/flex/flex-grow.svg",_="/images/flex/rel-vs-abs-flex.svg",w="/images/flex/align-self.svg",y={},j=n("blockquote",null,[n("p",null,"2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着在现代浏览器里可以放心使用这个布局方式。")],-1),N=r(`<h2 id="flex盒子" tabindex="-1"><a class="header-anchor" href="#flex盒子" aria-hidden="true">#</a> flex盒子</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-flex<span class="token punctuation">;</span> <span class="token comment">/* Safari */</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-flex<span class="token punctuation">;</span> <span class="token comment">/*行内元素*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+'" alt=""></p><ul><li>容器水平的主轴叫做 <strong>main axis</strong>， 垂直的交叉叫做 <strong>cross axis</strong>。</li><li>主轴的开始位置（与边框的交叉点）叫做 <strong>main start</strong>，结束位置叫做<strong>main end</strong>；</li><li>交叉轴的开始位置叫做 <strong>cross start</strong>，结束位置叫做 <strong>cross end</strong>。</li><li>项目默认沿主轴排列。单个项目占据的主轴空间叫做 <strong>main size</strong>，占据的交叉轴空间叫做 <strong>cross size</strong>。</li></ul><h2 id="容器属性" tabindex="-1"><a class="header-anchor" href="#容器属性" aria-hidden="true">#</a> 容器属性</h2><p><img src="'+u+`" alt=""></p><ul><li>flex-direction</li><li>flex-wrap</li><li>flex-flow</li><li>justify-content</li><li>align-items</li><li>align-content</li></ul><h3 id="flex-direction" tabindex="-1"><a class="header-anchor" href="#flex-direction" aria-hidden="true">#</a> flex-direction</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> row | row-reverse | column | column-reverse<span class="token punctuation">;</span> <span class="token comment">/*主轴方向*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>row</code>（默认值）：主轴为水平方向，起点在左端。</li><li><code>row-reverse</code>：主轴为水平方向，起点在右端。</li><li><code>column</code>：主轴为垂直方向，起点在上沿。</li><li><code>column-reverse</code>：主轴为垂直方向，起点在下沿。</li></ul><p><img src="`+m+`" alt=""></p><h3 id="flex-wrap" tabindex="-1"><a class="header-anchor" href="#flex-wrap" aria-hidden="true">#</a> flex-wrap</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> nowrap | wrap | wrap-reverse<span class="token punctuation">;</span> <span class="token comment">/*如果一条轴线排不下，如何换行*/</span>
  <span class="token comment">/* 不换行  | 换行，第一行在上方 | 换行，第一行在下方 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+v+`" alt=""></p><h3 id="flex-flow" tabindex="-1"><a class="header-anchor" href="#flex-flow" aria-hidden="true">#</a> flex-flow</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">flex-flow</span><span class="token punctuation">:</span> &lt;flex-direction&gt; || &lt;flex-wrap&gt;<span class="token punctuation">;</span>
  <span class="token comment">/* flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="justify-content" tabindex="-1"><a class="header-anchor" href="#justify-content" aria-hidden="true">#</a> justify-content</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-start | flex-end | center | space-between | space-around<span class="token punctuation">;</span> <span class="token comment">/* 项目在主轴上的对齐方式 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>flex-start</code>：左对齐（默认值）</li><li><code>flex-end</code>：右对齐</li><li><code>center</code>： 居中</li><li><code>space-between</code>：两端对齐，项目之间的间隔都相等。</li><li><code>space-around</code>：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。</li><li><code>space-evenly</code>：每个项目和两侧的间隔都相等</li></ul><p><img src="`+g+`" alt=""></p><h3 id="align-items" tabindex="-1"><a class="header-anchor" href="#align-items" aria-hidden="true">#</a> align-items</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start | flex-end | center | baseline | stretch<span class="token punctuation">;</span> <span class="token comment">/* 项目在交叉轴上如何对齐 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>flex-start</code>：交叉轴的起点对齐。</li><li><code>flex-end</code>：交叉轴的终点对齐。</li><li><code>center</code>：交叉轴的中点对齐。</li><li><code>baseline</code>: 项目的第一行文字的基线对齐。</li><li><code>stretch</code>（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。</li></ul><p><img src="`+x+`" alt=""></p><h3 id="align-content" tabindex="-1"><a class="header-anchor" href="#align-content" aria-hidden="true">#</a> align-content</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> flex-start | flex-end | center | space-between | space-around | stretch<span class="token punctuation">;</span> <span class="token comment">/* 项目在多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>flex-start</code>：与交叉轴的起点对齐。</li><li><code>flex-end</code>：与交叉轴的终点对齐。</li><li><code>center</code>：与交叉轴的中点对齐。</li><li><code>space-between</code>：与交叉轴两端对齐，轴线之间的间隔平均分布。</li><li><code>space-around</code>：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。</li><li><code>stretch</code>（默认值）：轴线占满整个交叉轴</li></ul><p><img src="`+f+'" alt=""></p><h2 id="项目属性" tabindex="-1"><a class="header-anchor" href="#项目属性" aria-hidden="true">#</a> 项目属性</h2><ul><li><code>order</code></li><li><code>flex-grow</code></li><li><code>flex-shrink</code></li><li><code>flex-basis</code></li><li><code>flex</code></li><li><code>align-self</code></li></ul><p><img src="'+h+`" alt=""></p><h3 id="order" tabindex="-1"><a class="header-anchor" href="#order" aria-hidden="true">#</a> order</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">order</span><span class="token punctuation">:</span> &lt;integer&gt;<span class="token punctuation">;</span> <span class="token comment">/* 定义项目的排列顺序。数值越小，排列越靠前，默认为0 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+k+`" alt=""></p><h3 id="flex-grow" tabindex="-1"><a class="header-anchor" href="#flex-grow" aria-hidden="true">#</a> flex-grow</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">flex-grow</span><span class="token punctuation">:</span> &lt;number&gt;<span class="token punctuation">;</span> <span class="token comment">/* 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+b+`" alt=""></p><h3 id="flex-shrink" tabindex="-1"><a class="header-anchor" href="#flex-shrink" aria-hidden="true">#</a> flex-shrink</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">flex-shrink</span><span class="token punctuation">:</span> &lt;number&gt;<span class="token punctuation">;</span> <span class="token comment">/* 项目的缩小比例，默认为1，即如果空间不足，该项目将缩小 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flex-basis" tabindex="-1"><a class="header-anchor" href="#flex-basis" aria-hidden="true">#</a> flex-basis</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">flex-basis</span><span class="token punctuation">:</span> &lt;length&gt; | auto<span class="token punctuation">;</span>  <span class="token comment">/* 定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto 即项目的本来大小 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+_+`" alt=""></p><h3 id="flex" tabindex="-1"><a class="header-anchor" href="#flex" aria-hidden="true">#</a> flex</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> none | [ &lt;<span class="token string">&#39;flex-grow&#39;</span>&gt; &lt;<span class="token string">&#39;flex-shrink&#39;</span>&gt;? || &lt;<span class="token string">&#39;flex-basis&#39;</span>&gt; ]
   <span class="token comment">/* flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选 ,该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto) */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="align-self" tabindex="-1"><a class="header-anchor" href="#align-self" aria-hidden="true">#</a> align-self</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> auto | flex-start | flex-end | center | baseline | stretch<span class="token punctuation">;</span>
   <span class="token comment">/* align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+w+'" alt=""></p>',47);function V(C,z){const e=d("RouterLink");return t(),c("div",null,[j,o(" more "),N,n("p",null,[s("顺手做了个2例子 ： 瀑布流："),a(e,{to:"/my/flex/index.html"},{default:i(()=>[s("猛击这里")]),_:1}),s(" 自适应布局："),a(e,{to:"/my/flex/layout.html"},{default:i(()=>[s("猛击这里")]),_:1})])])}const q=l(y,[["render",V],["__file","2018-0329-flex.html.vue"]]);export{q as default};