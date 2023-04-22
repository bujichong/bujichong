import{_ as a,p as e,q as s,J as n}from"./framework-d4dfb5a8.js";const t={},r=n(`<h3 id="前置准备" tabindex="-1"><a class="header-anchor" href="#前置准备" aria-hidden="true">#</a> 前置准备</h3><p>Yapi需要 <strong>nodejs(npm)</strong> 和 <strong>MongoDB</strong></p><h3 id="安装yapi" tabindex="-1"><a class="header-anchor" href="#安装yapi" aria-hidden="true">#</a> 安装yapi</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm install <span class="token operator">-</span>g yapi<span class="token operator">-</span>cli <span class="token operator">--</span>registry https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>registry<span class="token punctuation">.</span>npm<span class="token punctuation">.</span>taobao<span class="token punctuation">.</span>org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>注意node的版本要低于 13（只安装配置时需要，后面可切换回最新版本），不然后面安装配置会报错，</li></ul><p>安装完成后运行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yapi server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行后，会提示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在浏览器打开 http://0.0.0.0:9090 访问。非本地服务器，请将 0.0.0.0 替换成指定的域名或ip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打开地址，按流程进行配置，配置成功后，按要求打开地址： <em><strong>http://127.0.0.1:3000/</strong></em> 进行用户登录即可，默认用户 <em><strong>admin</strong></em> 密码： <em><strong>admin@admin</strong></em>*</p>`,10),i=[r];function o(p,d){return e(),s("div",null,i)}const c=a(t,[["render",o],["__file","20201231-yapiInstall.html.vue"]]);export{c as default};