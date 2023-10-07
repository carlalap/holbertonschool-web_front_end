# Sass & Scss

<h2>Resources</h2>

<p><strong>Read or watch</strong>:</p>

<ul>
<li><a href="https://sass-lang.com/guide/" title="Sass Basics" target="_blank">Sass Basics</a> </li>
<li><a href="https://sass-lang.com/documentation/at-rules/control/" title="Sass flow control directives: @if, @for, @each and @while" target="_blank">Sass flow control directives: @if, @for, @each and @while</a> </li>
<li><a href="https://sass-lang.com/documentation/" title="Sass references" target="_blank">Sass references</a></li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to <a href="https://fs.blog/feynman-learning-technique/" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

<h3>General</h3>

<ul>
<li>What Sass means</li>
<li>How to write Sass &amp; Scss file</li>
<li>What is the difference between Sass and Scss</li>
<li>What is the Sass preprocessing</li>
<li>How to declare a variable</li>
<li>How to use nested definition</li>
<li>How to import a Sass file</li>
<li>How to use mixins</li>
<li>How to declare extend/inheritance styles</li>
<li>How to manipulate operators</li>
</ul>

<h2>Requirements</h2>

<h3>General</h3>

<ul>
<li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code></li>
<li>All your files will be executed on Ubuntu 18.04 LTS using <code>Sass 3.7.4</code> (or higher)</li>
<li>All your files should end with a new line</li>
<li>All your Scss files should have a comment at the beginning (i.e. syntax above)</li>
<li>All your files should start by a comment describing the task</li>
<li>A <code>README.md</code> file, at the root of the folder of the project, is mandatory</li>
<li>The length of your files will be tested using <code>wc</code></li>
</ul>

<h2>More Info</h2>

<h3>Comments for your Scss file:</h3>

<p><strong>All your Scss file must start with a comment block</strong></p>

<pre><code>$ cat my_styles.scss
/* My style */
body {
    .container {
        color: #3D3D3D;
    }
}
$
</code></pre>

<h3>Install Sass/Scss on Ubuntu 18.04 LTS</h3>

<pre><code>$ sudo apt-get install -y ruby2.5 ruby2.5-dev
$ sudo apt-get install ubuntu-dev-tools
$ gem install sass -v 3.7.4
$ sass --version
Ruby Sass 3.7.4
</code></pre>

<h2 class="gap">Tasks</h2>

<div data-role="task19652" data-position="1" id="task-num-0">
      <div class="panel panel-default task-card " id="task-19652">
  <span id="user_id" data-id="6138"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      0. Always debugging!
    </h3>

<div class="panel-body">
<span id="user_id" data-id="6138"></span>

<!-- Progress vs Score -->

<!-- Task Body -->
<p>Write a Sass file that prints <code>Hello world</code> in the debug output.</p>

<pre><code>guillaume@ubuntu:~/$ sass 0-debug_log.scss | head -n 0
0-debug_log.scss:2 DEBUG: Hello world
guillaume@ubuntu:~/$ 
</code></pre>
  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      1. Color variable
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

<!-- Progress vs Score -->

   <!-- Task Body -->
   <p>Write a Sass file that assigns the text color <code>#3D3D3D</code> to the HTML tags <code>body</code> and <code>p</code>.</p>

<ul>
<li>You must use a Sass variable</li>
</ul>

<pre><code>guillaume@ubuntu:~/$ sass 1-color_variable.scss | tail -n +2
body {
  color: #3D3D3D; }

p {
  color: #3D3D3D; }
guillaume@ubuntu:~/$ 
</code></pre>
  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      2. Colors
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

<!-- Progress vs Score -->

   <!-- Task Body -->
   <p>Write a Sass file that assigns:</p>

<ul>
<li>The text color <code>#3D3D3D</code> to the HTML tags <code>body</code> and <code>p</code></li>
<li>The background color <code>#6D6D6D</code> to the HTML tags <code>body</code> and <code>h2</code></li>
<li>You must use 2 Sass variables</li>
</ul>

<pre><code>guillaume@ubuntu:~/$ sass 2-color_variables.scss | tail -n +2
body {
  color: #3D3D3D;
  background-color: #6D6D6D; }

p {
  color: #3D3D3D; }

h2 {
  background-color: #6D6D6D; }
guillaume@ubuntu:~/$ 
</code></pre>
  </div>

<div>
    <h3 class="panel-title">
      3. Nested tag
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p>Write a Sass file that assigns:</p>

<ul>
<li>No margin or padding in <code>body</code> tags</li>
<li>Margin <code>10px</code> to all of the <code>p</code> tags inside <code>body</code> tags</li>
<li>You must use nested declarations</li>
</ul>

<pre><code>guillaume@ubuntu:~/$ sass 3-nested_tag.scss | tail -n +2
body {
  margin: 0px;
  padding: 0px; }
  body p {
    margin: 10px; }
guillaume@ubuntu:~/$ 
</code></pre>
  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      4. Nested class
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p>Write a Sass file that assigns:</p>

<ul>
<li>Text color <code>#3D3D3D</code> to elements inside <code>body</code> tags</li>
<li>Text color <code>#FF0000</code> to any elements of class <code>.red</code> inside <code>body</code> tags</li>
<li>You must use nested declarations</li>
</ul>

<pre><code>guillaume@ubuntu:~/$ sass 4-nested_class.scss | tail -n +2
body {
  color: #3D3D3D; }
  body .red {
    color: #FF0000; }
guillaume@ubuntu:~/$ 
</code></pre>

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      5. Nested child
    </h3>

  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p>Write a Sass file that assigns:</p>

<ul>
<li>Text color <code>#3D3D3D</code> to elements inside <code>body</code> tags</li>
<li>Text color <code>#FF0000</code> to any elements of class <code>.red</code> that are the first children of the <code>body</code></li>
<li>You must use nested declarations</li>
</ul>

<pre><code>guillaume@ubuntu:~/$ sass 5-nested_child.scss | tail -n +2
body {
  color: #3D3D3D; }
  body &gt; .red {
    color: #FF0000; }
guillaume@ubuntu:~/$ 
</code></pre>

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      4. Nested class
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p>Write a Sass file that assigns:</p>

<ul>
<li>Text color <code>#3D3D3D</code> to elements inside <code>body</code> tags</li>
<li>Text color <code>#FF0000</code> to any elements of class <code>.red</code> inside <code>body</code> tags</li>
<li>You must use nested declarations</li>
</ul>

<pre><code>guillaume@ubuntu:~/$ sass 4-nested_class.scss | tail -n +2
body {
  color: #3D3D3D; }
  body .red {
    color: #FF0000; }
guillaume@ubuntu:~/$ 
</code></pre>
  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      5. Nested child
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p>Write a Sass file that assigns:</p>

<ul>
<li>Text color <code>#3D3D3D</code> to elements inside <code>body</code> tags</li>
<li>Text color <code>#FF0000</code> to any elements of class <code>.red</code> that are the first children of the <code>body</code></li>
<li>You must use nested declarations</li>
</ul>

<pre><code>guillaume@ubuntu:~/$ sass 5-nested_child.scss | tail -n +2
body {
  color: #3D3D3D; }
  body &gt; .red {
    color: #FF0000; }
guillaume@ubuntu:~/$ 
</code></pre>

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      6. Nested hover
    </h3>

  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p>Write a Sass file that assigns:</p>

<ul>
<li>Text color <code>#FF0000</code> to <code>button</code> tags</li>
<li>When the user hovers over <code>button</code> tags, text color should change to <code>#00FF00</code> </li>
<li>You must use nested declarations</li>
</ul>

<pre><code>guillaume@ubuntu:~/$ sass 6-nested_hover.scss | tail -n +2
button {
  color: #FF0000; }
  button:hover {
    color: #00FF00; }
guillaume@ubuntu:~/$ 
</code></pre>

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      7. Nested and nested again
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p>Write a Sass file that assigns:</p>

<ul>
<li>Font size <code>14px</code> to all <code>body</code> tags</li>
<li>Font size <code>16px</code> to all <code>h1</code> tags inside <code>body</code> tags</li>
<li>Font size <code>12px</code> to <code>h1</code> tags of class <code>.smaller</code>  inside  <code>body</code> tags</li>
<li>You must use nested declarations</li>
</ul>

<pre><code>guillaume@ubuntu:~/$ sass 7-nested_deeper.scss | tail -n +2
body {
  font-size: 14px; }
  body h1 {
    font-size: 16px; }
    body h1.smaller {
      font-size: 12px; }
guillaume@ubuntu:~/$ 
</code></pre>

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      8. Margin mixin
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->
   <!-- Task Body -->
   <p>Write a Sass file that assigns:</p>

<ul>
<li>Margin left and right at <code>10px</code> to <code>body</code> tags</li>
<li>Margin left and right at <code>15px</code> to <code>div</code> tags</li>
<li>You must use a mixin</li>
</ul>

<pre><code>guillaume@ubuntu:~/$ sass 8-mixin_margins.scss | tail -n +2
body {
  margin-left: 10px;
  margin-right: 10px; }

div {
  margin-left: 15px;
  margin-right: 15px; }
guillaume@ubuntu:~/$ 
</code></pre>

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      9. Extended
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p>Write a Sass file that assigns:</p>

<ul>
<li>Font size <code>12px</code> to all tags of class <code>.info</code></li>
<li>Text color <code>#00FF00</code> to all tags of class <code>.success</code> and extend style of the class <code>.info</code></li>
<li>Text color <code>#FF0000</code> to all tags of class <code>.warning</code> and extend style of the class <code>.info</code></li>
</ul>

<pre><code>guillaume@ubuntu:~/$ sass 9-extend_list.scss | tail -n +2
.info, .success, .warning {
  font-size: 12px; }

.success {
  color: #00FF00; }

.warning {
  color: #FF0000; }
guillaume@ubuntu:~/$ 
</code></pre>

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      10. Import colors
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p>Write a Sass file that assigns:</p>

<ul>
<li>Text color <code>$red</code> from <code>10-colors.scss</code> to the class <code>.red</code></li>
<li>Text color <code>$green</code> from <code>10-colors.scss</code> to the class <code>.green</code></li>
<li>Text color <code>$blue</code> from <code>10-colors.scss</code> to the class <code>.blue</code></li>
<li>You must use <code>@import</code></li>
</ul>

<pre><code>guillaume@ubuntu:~/$ cat 10-colors.scss
/* All my colors */
$red: #FF0000;
$green: #00FF00;
$blue: #0000FF;
guillaume@ubuntu:~/$ sass 10-import_colors.scss | tail -n +3
.red {
  color: #FF0000; }

.green {
  color: #00FF00; }

.blue {
  color: #0000FF; }
guillaume@ubuntu:~/$ 
</code></pre>

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      11. For each
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p>Write a Sass file that creates a class for each name in the list <code>$list-names</code> and assigns the background image based on the name (example below):</p>

<ul>
<li>You must use <code>@import</code></li>
<li>You must use <code>@each</code> statement</li>
</ul>

<pre><code>guillaume@ubuntu:~/$ cat 11-photos.scss 
/* All names */
$list-names: julien john sam damian;
guillaume@ubuntu:~/$ sass 11-loop_photos.scss | tail -n +3
.photo-julien {
  background: image-url(&quot;photos/julien.jpg&quot;) no-repeat; }

.photo-john {
  background: image-url(&quot;photos/john.jpg&quot;) no-repeat; }

.photo-sam {
  background: image-url(&quot;photos/sam.jpg&quot;) no-repeat; }

.photo-damian {
  background: image-url(&quot;photos/damian.jpg&quot;) no-repeat; }
guillaume@ubuntu:~/$ 
</code></pre>

  </div>

 <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      12. Loop Headers
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p>Write a Sass file that creates <code>H*</code> tags, where &lsquo;*&rsquo; is the size of the font used.</p>

<ul>
<li><code>h1</code> must have font size equal to <code>1px</code>, <code>h2</code> must have font size equal to <code>2px</code>, etc.</li>
<li>You must create <code>H*</code> tags from 1 to 5</li>
<li>You must use <code>@for</code> statement</li>
</ul>

<pre><code>guillaume@ubuntu:~/$ sass 12-loop_header.scss | tail -n +2
h1 {
  font-size: 1px; }

h2 {
  font-size: 2px; }

h3 {
  font-size: 3px; }

h4 {
  font-size: 4px; }

h5 {
  font-size: 5px; }
guillaume@ubuntu:~/$ 
</code></pre>

  </div>
