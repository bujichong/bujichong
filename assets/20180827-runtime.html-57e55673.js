import{_ as s,p as a,q as t,w as p,s as n,J as e}from"./framework-d4dfb5a8.js";const o={},c=n("blockquote",null,[n("p",null,"这种纯浪费时间的代码网上还找不到，啥都要自己写")],-1),l=e(`<p>先在freemarker模板里获取一下当前时间</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> sysNowTime <span class="token operator">=</span> <span class="token string">&#39;\${.now?string(&quot;yyyy-MM-dd HH:mm:ss&quot;)}&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">rzero</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//转数值为双位显示</span>
	<span class="token keyword">return</span> v<span class="token operator">&lt;</span><span class="token number">10</span><span class="token operator">?</span><span class="token punctuation">(</span><span class="token string">&#39;0&#39;</span><span class="token operator">+</span>v<span class="token punctuation">)</span><span class="token operator">:</span>v<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">toDateVal</span><span class="token punctuation">(</span><span class="token parameter">dateS</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//根据时间戳返回 yyyy-mm-dd hh:mm:ss时间</span>
	<span class="token keyword">var</span> dt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>dateS<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">var</span> y <span class="token operator">=</span> dt<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    			<span class="token comment">//获取完整的年份(4位,1970-????)</span>
	<span class="token keyword">var</span> mo <span class="token operator">=</span> <span class="token function">rzero</span><span class="token punctuation">(</span>dt<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    	<span class="token comment">//获取当前月份(0-11,0代表1月)</span>
	<span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token function">rzero</span><span class="token punctuation">(</span>dt<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        	<span class="token comment">//获取当前日(1-31)</span>
	<span class="token comment">// var da = dt.getDay();         		//获取当前星期X(0-6,0代表星期天)</span>
	<span class="token comment">// var t = myDate.getTime();       	//获取当前时间(从1970.1.1開始的毫秒数)</span>
	<span class="token keyword">var</span> h <span class="token operator">=</span> <span class="token function">rzero</span><span class="token punctuation">(</span>dt<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       	<span class="token comment">//获取当前小时数(0-23)</span>
	<span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token function">rzero</span><span class="token punctuation">(</span>dt<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     	<span class="token comment">//获取当前分钟数(0-59)</span>
	<span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token function">rzero</span><span class="token punctuation">(</span>dt<span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     	<span class="token comment">//获取当前秒数(0-59)</span>

	<span class="token keyword">return</span> y<span class="token operator">+</span><span class="token string">&#39;-&#39;</span><span class="token operator">+</span>mo<span class="token operator">+</span><span class="token string">&#39;-&#39;</span><span class="token operator">+</span>d<span class="token operator">+</span><span class="token string">&#39; &#39;</span><span class="token operator">+</span>h<span class="token operator">+</span><span class="token string">&#39;:&#39;</span><span class="token operator">+</span>m<span class="token operator">+</span><span class="token string">&#39;:&#39;</span><span class="token operator">+</span>s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> timestamp <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>sysNowTime<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> nowtimeV <span class="token operator">=</span> <span class="token function">toDateVal</span><span class="token punctuation">(</span>timestamp<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#sysTime&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>nowtimeV<span class="token punctuation">)</span><span class="token punctuation">;</span>
	timestamp <span class="token operator">=</span> timestamp<span class="token operator">*</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">1000</span><span class="token punctuation">;</span><span class="token comment">//时间戳+1000到下一秒</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function u(i,k){return a(),t("div",null,[c,p(" more "),l])}const d=s(o,[["render",u],["__file","20180827-runtime.html.vue"]]);export{d as default};