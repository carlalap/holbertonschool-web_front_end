# Cookies & local storage

<h2>Resources</h2>

<p><strong>Read or watch:</strong></p>

<ul>
<li><a href="https://www.w3schools.com/js/js_cookies.asp" title="Cookies and Javascript" target="_blank">Cookies and Javascript</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies" title="HTTP Cookies" target="_blank">HTTP Cookies</a></li>
<li><a href="https://github.com/js-cookie/js-cookie" title="js-cookie" target="_blank">js-cookie</a></li>
<li><a href="https://www.w3schools.com/html/html5_webstorage.asp" title="Web storage" target="_blank">Web storage</a></li>
</ul>

<h2>Learning Objectives</h2>

<ul>
<li>Understand how to create cookies using Javascript</li>
<li>Learn how to set specific settings for the cookie</li>
<li>Learn how to read cookies with Javascript</li>
<li>How to use js-cookie for easy cookie manipulation</li>
<li>How to use the browser web storage</li>
<li>The differences between local storage and session storage</li>
</ul>

<h2>Requirements</h2>

<ul>
<li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code>, <code>Visual Studio Code</code></li>
<li>All your files should end with a new line</li>
<li>A <code>README.md</code> file, at the root of the folder of the project, is mandatory</li>
<li>Your code should use the <code>js</code> extension</li>
<li>All of your code will be compiled/executed on Ubuntu 18.04 using Node 12.x and npm 6.x</li>
<li><code>src/index.js</code> should stay empty - all your Javascript must be in your HTML, inside <code>&lt;script&gt;</code> tag</li>
</ul>

  </div>
</div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      0. Create basic cookie
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

<ul>
<li>Install<code>webpack-dev-server</code> by running <code>npm install webpack-dev-server --save-dev</code> (if you have some errors of missing dependencies, install these packages: <code>npm i -D webpack</code> and <code>npm i -D webpack-cli</code>)</li>
<li>Create an empty file <code>src/index.js</code></li>
<li>Run your server with <code>node_modules/.bin/webpack-dev-server</code></li>
</ul>

<p><strong>In a file <code>0-index.html</code>, create a basic html template:</strong></p>

<ul>
<li>Add two text inputs, with the id <code>firstname</code> and <code>email</code></li>
<li>Add one button with the text &ldquo;Log me in&rdquo; that will call the function <code>setCookies</code></li>
<li>Add one button with the text &ldquo;Show the cookies&rdquo; that will call the function <code>showCookies</code></li>
<li><p>Create a function <code>setCookies</code>:</p>

<ul>
<li>It should set the cookie <code>firstname</code> with the value in the <code>firstname</code> input</li>
<li>It should set the cookie <code>email</code> with the value in the <code>email</code> input</li>
</ul></li>
<li><p>Create a function <code>showCookies</code>:</p>

<ul>
<li>It should create a DOM element <code>p</code></li>
<li>It should set the inner html with <code>Cookies:</code> and the value of the cookie</li>
<li>It should append the paragraph at the bottom of the page</li>
</ul></li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>Try to make your page to look as close to the image below as possible</li>
</ul>

<p>![Basic Cookie](/images/cookies0.png)</p>

<ul>
<li>Access your code with <code>http://localhost:8080/0-index.html</code></li>
<li>Use vanilla javascript to complete the task</li>
</ul>

<p><strong>Tips:</strong></p>

<ul>
<li>If you are using <a href="/rltoken/zyjkz8CiQ7Vfel_VnLs2jA" title="VSCode" target="_blank">VSCode</a>, you can use the plugin <a href="/rltoken/4cMfP21rc68xTBH-v3CVqQ" title="live server" target="_blank">live server</a> </li>
</ul>

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      1. Create cookie with expiration date and specific path
    </h3>

<ul>
<li>Reuse the code of the previous task</li>
<li>Modify the way you are setting cookies to expire in 10 days</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>Access your code with <code>http://localhost:8080/1-index.html</code></li>
<li>Use vanilla javascript to complete the task</li>
</ul>

  </div>

 <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      2. Read cookie
    </h3>

<ul>
<li><p>Reuse the code of the previous task</p></li>
<li><p>Create a function <code>getCookie</code>:</p>

<ul>
<li>It accepts <code>name</code> as argument</li>
<li>It should return the value of the cookie with the <code>name</code> passed in argument</li>
<li>If the cookie does not exist, it should return an empty string</li>
</ul></li>
<li><p>Modify the function <code>showCookies</code>:</p>

<ul>
<li>It should display the paragraph <code>Email: EMAIL - Firstname: FIRSTNAME</code></li>
</ul></li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>Access your code with <code>http://localhost:8080/2-index.html</code></li>
<li>Use vanilla javascript to complete the task</li>
</ul>
  </div>
