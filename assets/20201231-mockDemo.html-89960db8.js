import{_ as n,p as s,q as a,J as p}from"./framework-d4dfb5a8.js";const t={},e=p(`<h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install mockjs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="书写示例" tabindex="-1"><a class="header-anchor" href="#书写示例" aria-hidden="true">#</a> 书写示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> Mock <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mockjs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> Random <span class="token operator">=</span> Mock<span class="token punctuation">.</span>Random<span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> Random<span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 身份证号</span>
    <span class="token literal-property property">guid</span><span class="token operator">:</span> Random<span class="token punctuation">.</span><span class="token function">guid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> Random<span class="token punctuation">.</span><span class="token function">cname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> Random<span class="token punctuation">.</span><span class="token function">integer</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">asset</span><span class="token operator">:</span> Random<span class="token punctuation">.</span><span class="token function">float</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">500000</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">married</span><span class="token operator">:</span> Random<span class="token punctuation">.</span><span class="token function">boolean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">birth</span><span class="token operator">:</span> Random<span class="token punctuation">.</span><span class="token function">datetime</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">// 值是指定格式的日期字符串</span>
    <span class="token comment">// birth2: new Date(Random.datetime(&quot;yyyy-MM-dd HH:mm:ss&quot;)),  // 值是 Date 类型</span>
    <span class="token literal-property property">addr</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Random<span class="token punctuation">.</span><span class="token function">province</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Random<span class="token punctuation">.</span><span class="token function">city</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Random<span class="token punctuation">.</span><span class="token function">county</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span> Random<span class="token punctuation">.</span><span class="token function">email</span><span class="token punctuation">(</span><span class="token string">&quot;qq.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// word: Random.cword(2, 5),</span>
    <span class="token comment">// string: Random.string(),</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> Random<span class="token punctuation">.</span><span class="token function">ctitle</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// senetence: Random.csentence(15, 20),</span>
    <span class="token comment">// paragraph: Random.cparagraph(),</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="样例数据" tabindex="-1"><a class="header-anchor" href="#样例数据" aria-hidden="true">#</a> 样例数据</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;130000198405266751&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">guid</span><span class="token operator">:</span> <span class="token string">&#39;4eAD105F-77F2-BccD-dB1d-3C70bFC71fE8&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;萧娜&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">37</span><span class="token punctuation">,</span>
  <span class="token literal-property property">asset</span><span class="token operator">:</span> <span class="token number">336507.64</span><span class="token punctuation">,</span>
  <span class="token literal-property property">married</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">birth</span><span class="token operator">:</span> <span class="token string">&#39;2008-12-23 18:39:11&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">birth2</span><span class="token operator">:</span> <span class="token number">1983</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span>01T22<span class="token operator">:</span><span class="token number">18</span><span class="token operator">:</span><span class="token number">52</span><span class="token punctuation">.</span>000Z<span class="token punctuation">,</span>
  <span class="token literal-property property">addr</span><span class="token operator">:</span> <span class="token string">&#39;贵州省-重庆市-巴南区&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;u.mbht@qq.com&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">&#39;族现制万类&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">string</span><span class="token operator">:</span> <span class="token string">&#39;AH6H&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;期对油状已边自划现新龙&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">senetence</span><span class="token operator">:</span> <span class="token string">&#39;二号究克共或党县团或革亲事离容却进压今。&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">paragraph</span><span class="token operator">:</span> &#39;任派十专层件离想相样构支边八代取还展。反与但角量及亲矿元加节做改经动存。成总节江上对山型儿除土价比两。严书广由京江家养专员将即革土眼如快。律
林近信使后八好铁世相任是原题出。平例每热难区着世老个济造格斯。&#39;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体所有写法，官方参考： http://mockjs.com/examples.html</p>`,7),o=[e];function c(l,i){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","20201231-mockDemo.html.vue"]]);export{u as default};