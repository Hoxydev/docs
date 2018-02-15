webpackJsonp([2394058813013],{413:function(n,a){n.exports={data:{post:{html:'<h1 id="swagger--open-api-support"><a href="#swagger--open-api-support" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Swagger / Open API Support</h1>\n<p>API Platform natively support the <a href="https://www.openapis.org/" target="_blank" rel="nofollow noopener noreferrer">Open API</a> (formerly Swagger) API documentation format.\nIt also integrates a customized version of <a href="https://swagger.io/swagger-ui/" target="_blank" rel="nofollow noopener noreferrer">Swagger UI</a>, a nice tool to display the\nAPI documentation in a user friendly way.</p>\n<p></p>\n<h2 id="overriding-the-swagger-documentation"><a href="#overriding-the-swagger-documentation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Overriding the Swagger Documentation</h2>\n<p>Symfony allows to <a href="https://symfony.com/doc/current/service_container/service_decoration.html" target="_blank" rel="nofollow noopener noreferrer">decorate services</a>, here we\nneed to decorate <code>api_platform.swagger.normalizer.documentation</code>.</p>\n<p>In the following example, we will see how to override the title of the Swagger documentation and add a custom filter for\nthe <code>GET</code> operation of <code>/foos</code> path</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token comment"># api/config/services.yaml</span>\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n    <span class="token key atrule">\'App\\Swagger\\SwaggerDecorator\'</span><span class="token punctuation">:</span>\n        <span class="token key atrule">decorates</span><span class="token punctuation">:</span> <span class="token string">\'api_platform.swagger.normalizer.documentation\'</span>\n        <span class="token key atrule">arguments</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">\'@App\\Swagger\\SwaggerDecorator.inner\'</span> <span class="token punctuation">]</span>\n        <span class="token key atrule">autoconfigure</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// api/src/Swagger/SwaggerDecorator.php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Swagger</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Serializer<span class="token punctuation">\\</span>Normalizer<span class="token punctuation">\\</span>NormalizerInterface</span><span class="token punctuation">;</span>\n\n<span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">SwaggerDecorator</span> <span class="token keyword">implements</span> <span class="token class-name">NormalizerInterface</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token variable">$decorated</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">__construct</span><span class="token punctuation">(</span>NormalizerInterface <span class="token variable">$decorated</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">decorated</span> <span class="token operator">=</span> <span class="token variable">$decorated</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">normalize</span><span class="token punctuation">(</span><span class="token variable">$object</span><span class="token punctuation">,</span> <span class="token variable">$format</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">array</span> <span class="token variable">$context</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token variable">$docs</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">decorated</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">normalize</span><span class="token punctuation">(</span><span class="token variable">$object</span><span class="token punctuation">,</span> <span class="token variable">$format</span><span class="token punctuation">,</span> <span class="token variable">$context</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token variable">$customDefinition</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n            <span class="token string">\'name\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'fields\'</span><span class="token punctuation">,</span>\n            <span class="token string">\'definition\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'Fields to remove of the outpout\'</span><span class="token punctuation">,</span>\n            <span class="token string">\'default\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'id\'</span><span class="token punctuation">,</span>\n            <span class="token string">\'in\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'query\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n\n\t<span class="token comment">// e.g. add a custom parameter</span>\n\t<span class="token variable">$docs</span><span class="token punctuation">[</span><span class="token string">\'paths\'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">\'/foos\'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">\'get\'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">\'parameters\'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$customDefinition</span><span class="token punctuation">;</span>\n\n\t<span class="token comment">// Override title</span>\n\t<span class="token variable">$docs</span><span class="token punctuation">[</span><span class="token string">\'info\'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">\'title\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">\'My Api Foo\'</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">return</span> <span class="token variable">$docs</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">supportsNormalization</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">,</span> <span class="token variable">$format</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">decorated</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">supportsNormalization</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">,</span> <span class="token variable">$format</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2 id="using-the-swagger-context"><a href="#using-the-swagger-context" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using the Swagger Context</h2>\n<p>Sometimes you may want to have additional information included in your Swagger documentation.\nThe following configuration will provide additional context to your Swagger definitions:</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// api/src/Entity/Product.php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Entity</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">ApiPlatform<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Annotation<span class="token punctuation">\\</span>ApiResource</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">ApiPlatform<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Annotation<span class="token punctuation">\\</span>ApiProperty</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Doctrine<span class="token punctuation">\\</span>ORM<span class="token punctuation">\\</span>Mapping</span> <span class="token keyword">as</span> <span class="token constant">ORM</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Validator<span class="token punctuation">\\</span>Constraints</span> <span class="token keyword">as</span> Assert<span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * @ApiResource\n * @ORM\\Entity\n */</span>\n<span class="token keyword">class</span> <span class="token class-name">Product</span> <span class="token comment">// The class name will be used to name exposed resources</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">/**\n     * @ORM\\Column(type="integer")\n     * @ORM\\Id\n     * @ORM\\GeneratedValue(strategy="AUTO")\n     */</span>\n    <span class="token keyword">public</span> <span class="token variable">$id</span><span class="token punctuation">;</span>\n\n    <span class="token comment">/**\n     * @param string $name A name property - this description will be avaliable in the API documentation too.\n     *\n     * @ORM\\Column\n     * @Assert\\NotBlank\n     *\n     * @ApiProperty(\n     *     attributes={\n     *         "swagger_context"={\n     *             "type"="string",\n     *             "enum"={"one", "two"},\n     *             "example"="one"\n     *         }\n     *     }\n     * )\n     */</span>\n    <span class="token keyword">public</span> <span class="token variable">$name</span><span class="token punctuation">;</span>\n\n    <span class="token comment">/**\n     * @ORM\\Column\n     * @Assert\\DateTime\n     *\n     * @ApiProperty(\n     *     attributes={\n     *         "swagger_context"={"type"="string", "format"="date-time"}\n     *     }\n     * )\n     */</span>\n    <span class="token keyword">public</span> <span class="token variable">$timestamp</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Or in YAML:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token comment"># api/config/api_platform/resources.yaml</span>\n<span class="token key atrule">resources</span><span class="token punctuation">:</span>\n    <span class="token key atrule">App\\Entity\\Product</span><span class="token punctuation">:</span>\n      <span class="token key atrule">properties</span><span class="token punctuation">:</span>\n        <span class="token key atrule">name</span><span class="token punctuation">:</span>\n          <span class="token key atrule">attributes</span><span class="token punctuation">:</span>\n            <span class="token key atrule">swagger_context</span><span class="token punctuation">:</span>\n              <span class="token key atrule">type</span><span class="token punctuation">:</span> string\n              <span class="token key atrule">enum</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'one\'</span><span class="token punctuation">,</span> <span class="token string">\'two\'</span><span class="token punctuation">]</span>\n              <span class="token key atrule">example</span><span class="token punctuation">:</span> one\n        <span class="token key atrule">timestamp</span><span class="token punctuation">:</span>\n          <span class="token key atrule">attributes</span><span class="token punctuation">:</span>\n            <span class="token key atrule">swagger_context</span><span class="token punctuation">:</span>\n              <span class="token key atrule">type</span><span class="token punctuation">:</span> string\n              <span class="token key atrule">format</span><span class="token punctuation">:</span> date<span class="token punctuation">-</span>time\n</code></pre>\n      </div>\n<p>Will produce the following Swagger documentation:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">"swagger"</span><span class="token operator">:</span> <span class="token string">"2.0"</span><span class="token punctuation">,</span>\n  <span class="token property">"basePath"</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>\n\n  <span class="token property">"definitions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"Product"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"object"</span><span class="token punctuation">,</span>\n      <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"This is a product."</span><span class="token punctuation">,</span>\n      <span class="token property">"properties"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"integer"</span><span class="token punctuation">,</span>\n          <span class="token property">"readOnly"</span><span class="token operator">:</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span><span class="token punctuation">,</span>\n          <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"This is a name."</span><span class="token punctuation">,</span>\n          <span class="token property">"enum"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"one"</span><span class="token punctuation">,</span> <span class="token string">"two"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n          <span class="token property">"example"</span><span class="token operator">:</span> <span class="token string">"one"</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">"timestamp"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span><span class="token punctuation">,</span>\n          <span class="token property">"format"</span><span class="token operator">:</span> <span class="token string">"date-time"</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2 id="changing-the-name-of-a-definition"><a href="#changing-the-name-of-a-definition" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changing the Name of a Definition</h2>\n<p>API Platform generates a definition name based on the serializer <code>groups</code> defined\nin the (<code>de</code>)<code>normalization_context</code>. It\'s possible to override the name\nthanks to the <code>swagger_definition_name</code> option:</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token comment">/**\n * @ApiResource(\n *      collectionOperations={\n *          "post"={\n *              "denormalization_context"={\n *                  "groups"={"user_read"},\n *                  "swagger_definition_name": "Read",\n *              },\n *          },\n *      },\n * )\n */</span>\n<span class="token keyword">class</span> <span class="token class-name">User</span>\n<span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>It\'s also possible to re-use the (<code>de</code>)<code>normalization_context</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token comment">/**\n * @ApiResource(\n *      collectionOperations={\n *          "post"={\n *              "denormalization_context"=User::API_WRITE,\n *          },\n *      },\n * )\n */</span>\n<span class="token keyword">class</span> <span class="token class-name">User</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token constant">API_WRITE</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n        <span class="token string">\'groups\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span><span class="token string">\'user_read\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token string">\'swagger_definition_name\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'Read\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2 id="changing-the-swagger-ui-location"><a href="#changing-the-swagger-ui-location" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changing the Swagger UI Location</h2>\n<p>Sometimes you may want to have the API at one location, and the Swagger UI at a different location. This can be done by disabling the Swagger UI from the API Platform configuration file and manually adding the Swagger UI controller.</p>\n<h3 id="disabling-swagger-ui"><a href="#disabling-swagger-ui" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Disabling Swagger UI</h3>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token comment"># api/config/packages/api_platform.yaml</span>\n\n<span class="token key atrule">api_platform</span><span class="token punctuation">:</span>\n    <span class="token comment"># ...</span>\n    <span class="token key atrule">enable_swagger_ui</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n</code></pre>\n      </div>\n<h3 id="manually-registering-the-swagger-ui-controller"><a href="#manually-registering-the-swagger-ui-controller" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Manually Registering the Swagger UI Controller</h3>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token comment"># app/config/routes.yaml</span>\n<span class="token key atrule">swagger_ui</span><span class="token punctuation">:</span>\n    <span class="token key atrule">path</span><span class="token punctuation">:</span> /docs\n    <span class="token key atrule">controller</span><span class="token punctuation">:</span> api_platform.swagger.action.ui\n</code></pre>\n      </div>\n<p>Change <code>/docs</code> to your desired URI you wish Swagger to be accessible on.</p>'},navDoc:{edges:[{node:{title:"The Distribution",path:"distribution",items:[{id:"index",title:"Creating a Fully Featured API in 5 Minutes",anchors:null},{id:"testing",title:"Testing and Specifying the API",anchors:null}]}},{node:{title:"The API Component",path:"core",items:[{id:"index",title:"Introduction",anchors:null},{id:"getting-started",title:"Getting Started",anchors:[{id:"installing-api-platform-core",title:"Installing API Platform Core"},{id:"before-reading-this-documentation",title:"Before Reading this Documentation"},{id:"mapping-the-entities",title:"Mapping the Entities"}]},{id:"configuration",title:"Configuration",anchors:null},{id:"operations",title:"Operations",anchors:[{id:"enabling-and-disabling-operations",title:"Enabling and Disabling Operations"},{id:"configuring-operations",title:"Configuring Operations"},{id:"subresources",title:"Subresources"},{id:"creating-custom-operations-and-controllers",title:"Creating Custom Operations and Controllers"}]},{id:"default-order",title:"Overriding Default Order",anchors:null},{id:"filters",title:"Filters",anchors:[{id:"doctrine-orm-filters",title:"Doctrine ORM Filters"},{id:"serializer-filters",title:"Serializer Filters"},{id:"creating-custom-filters",title:"Creating Custom Filters"},{id:"apifilter-annotation",title:"ApiFilter Annotation"}]},{id:"serialization",title:"The Serialization Process",anchors:[{id:"overall-process",title:"Overall Process"},{id:"available-serializers",title:"Available Serializers"},{id:"the-serialization-context-groups-and-relations",title:"The Serialization Context, Groups and Relations"},{id:"using-serialization-groups",title:"Using Serialization Groups"},{id:"using-different-serialization-groups-per-operation",title:"Using Different Serialization Groups per Operation"},{id:"changing-the-serialization-context-dynamically",title:"Changing the Serialization Context Dynamically"},{id:"changing-the-serialization-context-on-a-per-item-basis",title:"Changing the Serialization Context on a Per Item Basis"},{id:"name-conversion",title:"Name Conversion"},{id:"decorating-a-serializer-and-add-extra-data",title:"Decorating a Serializer and Add Extra Data"},{id:"entity-identifier-case",title:"Entity Identifier Case"},{id:"embedding-the-json-ld-context",title:"Embedding the JSON-LD Context"}]},{id:"validation",title:"Validation",anchors:[{id:"using-validation-groups",title:"Using Validation Groups"},{id:"dynamic-validation-groups",title:"Dynamic Validation Groups"},{id:"error-levels-and-payload-serialization",title:"Error Levels and Payload Serialization"}]},{id:"pagination",title:"Pagination",anchors:[{id:"disabling-the-pagination",title:"Disabling the Pagination"},{id:"changing-the-number-of-items-per-page",title:"Changing the Number of Items per Page"},{id:"partial-pagination",title:"Partial Pagination"}]},{id:"events",title:"The Event System",anchors:null},{id:"content-negotiation",title:"Content Negotiation",anchors:[{id:"enabling-several-formats",title:"Enabling Several Formats"},{id:"registering-a-custom-serializer",title:"Registering a Custom Serializer"},{id:"creating-a-responder",title:"Creating a Responder"},{id:"writing-a-custom-normalizer",title:"Writing a Custom Normalizer"}]},{id:"external-vocabularies",title:"Using External JSON-LD Vocabularies",anchors:null},{id:"extending-jsonld-context",title:"Extending JSON-LD context",anchors:null},{id:"data-providers",title:"Data Providers",anchors:[{id:"custom-collection-data-provider",title:"Custom Collection Data Provider"},{id:"custom-item-data-provider",title:"Custom Item Data Provider"},{id:"injecting-the-serializer-in-an-itemdataprovider",title:'Injecting the Serializer in an "ItemDataProvider"'}]},{id:"extensions",title:"Extensions",anchors:[{id:"custom-extension",title:"Custom Extension"},{id:"example",title:"Filter upon the current user"}]},{id:"security",title:"Security",anchors:null},{id:"performance",title:"Performance",anchors:[{id:"enabling-the-builtin-http-cache-invalidation-system",title:"Enabling the Builtin HTTP Cache Invalidation System"},{id:"enabling-the-metadata-cache",title:"Enabling the Metadata Cache"},{id:"using-ppm-php-pm",title:"Using PPM (PHP-PM)"},{id:"doctrine-queries-and-indexes",title:"Doctrine Queries and Indexes"}]},{id:"operation-path-naming",title:"Operation Path Naming",anchors:[{id:"configuration",title:"Configuration"},{id:"create-a-custom-operation-path-resolver",title:"Create a Custom Operation Path Naming"}]},{id:"form-data",title:"Accept application/x-www-form-urlencoded Form Data",anchors:null},{id:"fosuser-bundle",title:"FOSUserBundle Integration",anchors:[{id:"installing-the-bundle",title:"Installing the Bundle"},{id:"enabling-the-bridge",title:"Enabling the Bridge"},{id:"creating-a-user-entity-with-serialization-groups",title:'Creating a "User" Entity with Serialization Groups'}]},{id:"jwt",title:"Adding a JWT authentication using LexikJWTAuthenticationBundle",anchors:[{id:"testing-with-swagger",title:"Testing with Swagger"},{id:"testing-with-behat",title:"Testing with Behat"}]},{id:"nelmio-api-doc",title:"NelmioApiDocBundle integration",anchors:null},{id:"angularjs-integration",title:"AngularJS Integration",anchors:[{id:"restangular",title:"Restangular"},{id:"ng-admin",title:"ng-admin"}]},{id:"swagger",title:"Swagger Support",anchors:[{id:"override-swagger-documentation",title:"Override Swagger documentation"}]},{id:"graphql",title:"GraphQL Support",anchors:[{id:"overall-view",title:"Overall View"},{id:"enabling-graphql",title:"Enabling GraphQL"},{id:"graphiql",title:"GraphiQL"}]},{id:"serialization",title:"The Serialization Process",anchors:[{id:"overall-process",title:"Overall Process"},{id:"available-serializers",title:"Available Serializers"},{id:"decorating-a-serializer-and-add-extra-data",title:"Decorating a Serializer and Add Extra Data"}]},{id:"dto",title:"Handling Data Transfer Objects (DTOs)",anchors:null}]}},{node:{title:"The Schema Generator Component",path:"schema-generator",items:[{id:"index",title:"Introduction",anchors:null},{id:"getting-started",title:"Getting Started",anchors:null},{id:"configuration",title:"Configuration",anchors:null}]}},{node:{title:"The Admin Component",path:"admin",items:[{id:"index",title:"Introduction",anchors:[{id:"features",title:"Features"}]},{id:"getting-started",title:"Getting Started",anchors:[{id:"installation",title:"Installation"},{id:"creating-the-admin",title:"Creating the Admin"},{id:"customizing-the-admin",title:"Customizing the Admin"}]},{id:"authentication-support",
title:"Authentication Support",anchors:null},{id:"handling-relations-to-collections",title:"Handling Relations to Collections",anchors:[{id:"using-an-autocomplete-input-for-relations",title:"Using an Autocomplete Input for Relations"}]}]}},{node:{title:"The Client Generator Component",path:"client-generator",items:[{id:"index",title:"Introduction",anchors:[{id:"features",title:"Features"}]},{id:"react",title:"React generator",anchors:null},{id:"vuejs",title:"Vue.js generator",anchors:null},{id:"troubleshooting",title:"Troubleshooting",anchors:null}]}},{node:{title:"Deployment",path:"deployment",items:[{id:"index",title:"Introduction",anchors:null},{id:"kubernetes",title:"Deploying to a Kubernetes Cluster",anchors:null},{id:"heroku",title:"Deploying an API Platform App on Heroku",anchors:null}]}},{node:{title:"Extra",path:"extra",items:[{id:"philosophy",title:"The Project's Philosophy",anchors:null},{id:"troubleshooting",title:"Troubleshooting",anchors:null},{id:"contribution-guides",title:"Contribution Guides",anchors:null},{id:"conduct",title:"Contributor Code Of Conduct",anchors:null}]}}]}},pathContext:{path:"docs/core/swagger",current:{path:"docs/core/swagger",title:"The API Component - Swagger Support"},prev:{path:"docs/core/angularjs-integration",title:"AngularJS Integration",rootPath:"The API Component"},next:{path:"docs/core/graphql",title:"GraphQL Support",rootPath:"The API Component"}}}}});
//# sourceMappingURL=path---docs-core-swagger-80724a9e44780660e0d4.js.map