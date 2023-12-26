# Project: JavaScript advanced

 <div class="panel panel-default" id="project-description">
  <div class="panel-body">
    <h2>Resources</h2>

<p><strong>Read or watch:</strong></p>

<ul>
<li><a href="https://javascript.info/closure" title="Lexical scoping" target="_blank">Lexical scoping</a></li>
<li><a href="https://www.w3schools.com/js/js_function_closures.asp" title="Closure" target="_blank">Closure</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Glossary/Call_stack" title="Call stack" target="_blank">Call stack</a></li>
<li><a href="https://javascript.info/bind" title="Binding" target="_blank">Binding</a></li>
<li><a href="https://javascript.info/callbacks" title="Callbacks" target="_blank">Callbacks</a></li>
</ul>

<h2>Learning Objectives</h2>

<ul>
<li>What is lexical scoping in JavaScript</li>
<li>What is closure in JavaScript</li>
<li>How to use closure</li>
<li>How to chain different closures</li>
<li>How to simulate private methods with Closure</li>
<li>The execution stack order with JavaScript</li>
<li>How to use binding</li>
<li>How to use callbacks</li>
</ul>

<h2>Requirements</h2>

<ul>
<li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code>, <code>Visual Studio Code</code></li>
<li>All your files should end with a new line</li>
<li>A <code>README.md</code> file, at the root of the folder of the project, is mandatory</li>
<li>Your code should use the <code>js</code> extension</li>
</ul>

  </div>
</div>

<h2 class="gap">Tasks</h2>
  <div data-role="task19773" data-position="1" id="task-num-0">
      <div class="panel panel-default task-card " id="task-19773">
  <span id="user_id" data-id="6138"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      0. Lexical scoping and welcome message
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

<!-- Progress vs Score -->

  <!-- Task Body -->
 <p>Create a function named <code>welcome</code>:</p>

<ul>
<li>It takes two arguments: <code>firstName</code> (string) and <code>lastName</code> (string)</li>
<li>It contains a variable named <code>fullName</code>, that will contains the <code>firstName</code> followed by a space and then the <code>lastName</code></li>
<li>Within the <code>welcome</code> function, write a function named <code>displayFullName</code>:

<ul>
<li>It should display an alert with the message <code>Welcome</code> + the variable <code>fullName</code> + and exclamation mark.</li>
</ul></li>
<li>Call the function <code>displayFullName</code> at the end of the function <code>welcome</code></li>
</ul>

<p><strong>How to test</strong></p>

<ul>
<li>Open your web inspector in the tab &ldquo;Console&rdquo;</li>
<li>Copy paste your code</li>
<li>Run <code>welcome(&#39;Holberton&#39;, &#39;School&#39;);</code> should prompt an alert with this content: <code>Welcome Holberton School!</code></li>
<li><code>alert(fullName)</code>, should return a reference error <code>fullName is not defined</code></li>
</ul>

  </div>

  <div class="list-group">

 <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      1. Closure Scope Chain
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <ul>
<li>Create a variable named <code>globalVariable</code> with value <code>Welcome</code></li>
<li>Create a function <code>outer</code> that:

<ul>
<li>alerts the content of the variable <code>globalVariable</code></li>
<li>creates a variable named <code>course</code> with value <code>Holberton</code></li>
<li>creates a function <code>inner</code> that:

<ul>
<li>alerts the content of the variable <code>globalVariable</code> and <code>course</code> (concatenated)</li>
<li>creates a variable named <code>exclamation</code> with value <code>!</code></li>
<li>creates a function <code>inception</code> that alerts the content of the variable <code>globalVariable</code>, <code>course</code>, and <code>exclamation</code> (concatenated)</li>
<li>calls the function <code>inception</code></li>
</ul></li>
<li>calls the function <code>inner</code></li>
</ul></li>
<li>Call the function <code>outer</code></li>
</ul>

<p><strong>Compose the code:</strong></p>

<ul>
<li>Write the function <code>inception</code> within <code>inner</code></li>
<li>Write the function <code>inner</code> within <code>outer</code></li>
<li>Call the function <code>outer</code> in the main code (outside any function)</li>
<li>Call the function <code>inner</code> within <code>outer</code></li>
<li>Call the function <code>inception</code> within <code>inner</code></li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>Running the script should display three popups one by one with the text <code>Welcome</code>, <code>Welcome Holberton</code>, and <code>Welcome Holberton!</code></li>
</ul>

  </div>

 <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      2. Closure
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p>Write a  function named <code>welcomeMessage</code>:</p>

<ul>
<li>It accepts one argument <code>fullName</code> (string)</li>
<li>It should be a closure for an alert displaying <code>Welcome &lt;fullName&gt;</code></li>
</ul>

<p>After this function definition, create three variables:</p>

<ul>
<li><code>guillaume</code> contains a call <code>welcomeMessage</code> with <code>Guillaume</code> as argument</li>
<li><code>alex</code> contains a call <code>welcomeMessage</code> with <code>Alex</code> as argument</li>
<li><code>fred</code> contains a call <code>welcomeMessage</code> with <code>Fred</code> as argument</li>
</ul>

<p><strong>How to test:</strong></p>

<ul>
<li>In your web console, cop/paste your file</li>
<li>Executing the following in the console:</li>
</ul>

<pre><code>guillaume();
alex();
fred();
</code></pre>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      3. Closure and loops
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
 <p>Write a function named <code>createClassRoom</code>:</p>

<ul>
<li>It takes into argument <code>numbersOfStudents</code> (number)</li>
<li>Inside, it contains a function <code>studentSeat</code>, that takes into argument <code>seat</code> (number) and returns a function that returns the <code>seat</code> number </li>
<li>After the definition of <code>studentSeat</code>, create and populate a variable <code>students</code> (array)

<ul>
<li>Using a loop from 0 to <code>numbersOfStudents</code>, pass the number of iteration + 1 to <code>studentSeat</code> and add its return value to the <code>students</code> array</li>
</ul></li>
<li>Returns the <code>students</code> array</li>
</ul>

<p>Create a closure <code>classRoom</code>, calling <code>createClassRoom</code> with 10 students</p>

<p><strong>Requirements:</strong></p>

<p>Executing the following code:</p>

<pre><code>console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
</code></pre>

<p>Should return</p>

<pre><code>1
4
10
</code></pre>

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      4. Complex Closure
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

  <!-- Progress vs Score -->

  <!-- Task Body -->
  <p>Create a function <code>divideBy</code>:</p>

<ul>
<li>It takes into argument <code>firstNumber</code> (number)</li>
<li>It returns a function that takes into argument <code>secondNumber</code> (number)

<ul>
<li>It returns the second number divided by the first number</li>
</ul></li>
</ul>

<p>Create a function <code>addBy</code>:</p>

<ul>
<li>It takes into argument <code>firstNumber</code> (number)</li>
<li>It returns a function that takes into argument <code>secondNumber</code> (number)

<ul>
<li>It returns the sum of the two numbers</li>
</ul></li>
</ul>

<p>Create four closures:</p>

<ul>
<li><code>addBy100</code>, that uses the function <code>addBy</code> with the number 100</li>
<li><code>addBy1000</code>, that uses the function <code>addBy</code> with the number 1000</li>
<li><code>divideBy10</code>, that uses the function <code>divideBy</code> with the number 10</li>
<li><code>divideBy100</code>, that uses the function <code>divideBy</code> with the number 100</li>
</ul>

<p><strong>Requirements:</strong></p>

<p>Executing the following code:</p>

<pre><code>console.log(addBy100(20));
console.log(divideBy10(20));
console.log(divideBy100(200));
console.log(addBy1000(20));
</code></pre>

<p>Should display in the console:</p>

<pre><code>120
2
2
1020
</code></pre>

  </div>

<div class="panel-heading panel-heading-actions">
  <h3 class="panel-title">
      5. Changing DOM with closure
  </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
<p>Create a function named <code>changeMode</code>:</p>

<ul>
<li>It accepts 5 arguments <code>size</code> (number), <code>weight</code> (string), <code>transform</code> (string), <code>background</code> (string), <code>color</code> (string)</li>
<li>Using closure, it changes the style of the entire page and set the <code>font-size</code>, <code>font-weight</code>, <code>text-transform</code>, <code>background-color</code>, and <code>color</code></li>
</ul>

<p>Write a function named <code>main</code>:</p>

<ul>
<li>Set a variable named <code>spooky</code> that passes the arguments <code>9</code>, <code>bold</code>, <code>uppercase</code>, <code>pink</code>, <code>green</code> to <code>changeMode</code></li>
<li>Set a variable named <code>darkMode</code> that passes the arguments <code>12</code>, <code>bold</code>, <code>capitalize</code>, <code>black</code>, <code>white</code> to <code>changeMode</code></li>
<li>Set a variable named <code>screamMode</code> that passes the arguments <code>12</code>, <code>normal</code>, <code>lowercase</code>, <code>white</code>, <code>black</code> to <code>changeMode</code></li>
<li>Add a paragraph to the body of the page with the text <code>Welcome Holberton!</code></li>
<li>Add a button to the body with the text <code>Spooky</code></li>
<li>Add a button to the body with the text <code>Dark mode</code></li>
<li>Add a button to the body with the text <code>Scream mode</code></li>
<li>When clicking on each button, the page CSS should change to the different themes you created previously</li>
</ul>

<p>Call the <code>main</code> function</p>

<p><strong>Requirements:</strong></p>

<ul>
<li>Use vanilla JavaScript to add the elements to the DOM and change the style of the page</li>
<li>JQuery not allowed!</li>
</ul>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      6. Private methods with closure
    </h3>
  </div>

   <!-- Task Body -->
   <p>Write a module named <code>studentHogwarts</code>:</p>

<ul>
<li>It contains two variables <code>privateScore</code> set to 0, and <code>name</code> set to <code>null</code></li>
<li>It contains one private method <code>changeScoreBy</code>, it takes <code>points</code> in argument and add it to <code>privateScore</code></li>
<li>The module gives access to four public methods (return an object):

<ul>
<li><code>setName</code>, it takes into argument <code>newName</code>, and set the private variable <code>name</code></li>
<li><code>rewardStudent</code>, it calls the method <code>changeScoreBy</code> with 1</li>
<li><code>penalizeStudent</code>, it calls the method <code>changeScoreBy</code> with -1</li>
<li><code>getScore</code>, it returns <code>name: score</code> (ex: <code>Harry: 14</code>)</li>
</ul></li>
</ul>

<p>Create one variable named <code>harry</code>, that is an instance of <code>studentHogwarts</code>:</p>

<ul>
<li>Set the name of the object to <code>Harry</code></li>
<li>Reward the student four times</li>
<li>Log to the console the name and score</li>
</ul>

<p>Create one variable named <code>draco</code>, that is an instance of <code>studentHogwarts</code>:</p>

<ul>
<li>Sets the name of the object to <code>Draco</code></li>
<li>Reward the student one time</li>
<li>Penalize the student three times</li>
<li>Log to the console the name and score</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>Executing the code should display in the console</li>
</ul>

<pre><code>Harry: 4
Draco: -2
</code></pre>

  </div>

 <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      7. Stack order and setTimeout
    </h3>
  </div>

   <!-- Task Body -->
   <p><strong>Write the following commands in the following order:</strong></p>

<ul>
<li>Log to the console <code>Start of the execution queue</code></li>
<li>Log to the console <code>Final code block to be executed</code> using <code>setTimeout</code> (with delay of 0)</li>
<li>Using a loop that iterates 100 times, each iteration logs to the console the iteration number</li>
<li>Log to the console <code>End of the loop printing</code></li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>Your code should log to the console the following:</li>
</ul>

<pre><code>Start of the execution queue
1
2
...
100
End of the loop printing
Final code block to be executed
</code></pre>

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      8. Stack order in functions
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

  <!-- Task Body -->
  <p>Write a function <code>processPayment</code>:</p>

<ul>
<li>It takes one argument <code>amount</code> (number)</li>
<li>It logs to the console <code>Collecting payment of &lt;amount&gt;</code></li>
</ul>

<p>Write a function named <code>processOrder</code>:</p>

<ul>
<li>It takes two arguments <code>orderId</code> (number), and <code>amount</code> (number)</li>
<li>It logs to the console <code>&lt;orderId&gt; is being processed</code></li>
<li>It calls the function <code>processPayment</code></li>
<li>It logs to the console <code>&lt;orderId&gt; has been fully processed</code></li>
</ul>

<p>In the main part of the code:</p>

<ul>
<li>Logs to the console <code>Processing orders</code></li>
<li>Call <code>processOrder</code> with <code>12321</code> and <code>10.99</code></li>
<li>Call <code>processOrder</code> with <code>12322</code> and <code>12.99</code></li>
<li>Call <code>processOrder</code> with <code>12323</code> and <code>15.0</code></li>
<li>Logs to the console <code>All the orders have been processed</code></li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>Your code should log the following to the console</li>
</ul>

<pre><code>Processing orders
12321 is being processed
Collecting payment of 10.99
12321 has been fully processed
12322 is being processed
Collecting payment of 12.99
12322 has been fully processed
12323 is being processed
Collecting payment of 15
12323 has been fully processed
All the orders have been processed
</code></pre>

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      9. Prime numbers &amp; timing execution
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

  <!-- Task Body -->
  <p>Write a function named <code>countPrimeNumbers</code>:</p>

<ul>
<li>It will return the number of prime numbers from 2 to 100</li>
</ul>

<p>Log to the console the time in milliseconds to execute the function in this format: <code>Execution time of printing countPrimeNumbers was &lt;time used&gt; milliseconds.</code></p>

<p><strong>Requirements:</strong></p>

<ul>
<li>You must use <code>performance</code> API to measure the time needed to execute the function (<code>performance.now()</code>)</li>
<li>Your code should display something in the range of <code>Execution time of printing countPrimeNumbers was 0.2700000002514571 milliseconds.</code></li>
</ul>

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      10. Execution stack &amp; timing execution
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

  <!-- Task Body -->
  <p>Reuse the function <code>countPrimeNumbers</code> from <code>9-prime.js</code> (copy/paste)</p>

<ul>
<li>Execute the function <code>countPrimeNumbers</code> 100 times</li>
<li>Log to the console the time in milliseconds to execute the function 100 times</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>Your code should display something in the range of <code>Execution time of calculating prime numbers 100 times was 40.865000002551824 milliseconds.</code></li>
</ul>

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      11. Changing stack order using setTimeout
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

  <!-- Task Body -->
  <p>Reuse the function <code>countPrimeNumbers</code> from <code>10-prime.js</code> (copy/paste)</p>

<ul>
<li>Log to the console the time in milleseconds to execute the function 100 times</li>
<li>Find a way to actually do most of the calculation at the end of the execution stack</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>Your code should display something in the range of <code>Execution time of calculating prime numbers 100 times was 0.03999999910593033 milliseconds.</code></li>
<li>Use <code>setTimeout</code> keyword to change the stack order</li>
</ul>

  </div>

 <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      12. Binding
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

  <!-- Task Body -->
   <p>Create an object named <code>roomDimensions</code> with the following three attributes:</p>

<ul>
<li><code>width</code>: <code>50</code></li>
<li><code>length</code>: <code>100</code></li>
<li><code>getArea</code>: function that returns the surface area of a the object using the <code>width</code> and <code>length</code></li>
</ul>

<p>Create a variable named <code>boundGetArea</code>, that will bind the object <code>roomDimensions</code> to the <code>getArea</code> function</p>

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      13. Binding + Closure
    </h3>

  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

!-- Task Body -->

  <p>Write an object <code>user</code> with the attributes:</p>

<ul>
<li><code>hobby</code>: <code>Calligraphy</code></li>
<li><code>favoriteSport</code>: <code>Hockey</code></li>
<li><code>astrologicalSign</code>: <code>Aries</code></li>
<li><code>firstName</code>: <code>Buillaume</code></li>
<li><code>lastName</code>: <code>Ialva</code></li>
<li><code>location</code>: <code>Telaviv</code></li>
<li><code>occupation</code>: <code>Engineer</code></li>
</ul>

<p>Create a function named <code>logWelcomeUser</code>:</p>

<ul>
<li>It takes one argument <code>welcomeString</code> (String)</li>
<li>It logs to the console <code>&lt;welcomeString&gt;, &lt;firstName&gt;. Your occupation is: &lt;occupation&gt;</code></li>
</ul>

<p>Create a variable named <code>bindLogWelcomeUser</code>. It binds the <code>logWelcomeUser</code> function to the <code>user</code> object.</p>

<p>Call the function with the string <code>Welcome</code></p>

<p><strong>Requirements:</strong></p>

<ul>
<li>Calling <code>bindLogWelcomeUser(&#39;Hello&#39;);</code> should return <code>Hello, Buillaume. Your occupation is: Engineer</code></li>
</ul>

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      14. Simple callback
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

  <!-- Task Body -->
  <p>Write a new function named <code>createElement</code>:</p>

<ul>
<li>It accepts one argument <code>data</code> (String)</li>
<li>It creates a paragraph element</li>
<li>The content of the paragraph is set to <code>data</code></li>
<li>It appends to the document <code>body</code> the paragraph</li>
</ul>

<p>Create a new function named <code>queryWikipedia</code>:</p>

<ul>
<li>It accepts one argument <code>callback</code> (function)<br></li>
<li>Using <code>XMLHttpRequest</code>, it get the article of Stack Overflow with the URL <code>https://en.wikipedia.org/w/api.php?format=json&amp;action=query&amp;prop=extracts&amp;exintro&amp;explaintext&amp;redirects=1&amp;titles=Stack%20Overflow&amp;origin=*</code></li>
<li>Once the fetch is correctly executed, it calls the <code>callback</code> function with the <code>extract</code> of the API response</li>
</ul>

<p>Call <code>queryWikipedia</code> with <code>createElement</code> as callback</p>

<p><strong>Requirements:</strong></p>

<ul>
<li>Use vanilla javascript to run the Ajax query (no jQuery or other framework)</li>
<li>You must not call <code>createElement</code> within <code>queryWikipedia</code> directly</li>
</ul>

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      15. Multiple callbacks
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

  <!-- Task Body -->
   <p>Create a variable named <code>stock</code>:</p>

<ul>
<li>It contains the stock for the items you are selling</li>
<li>It&rsquo;s a dictionary with the values <code>macbook: 2</code> and <code>iphone: 4</code></li>
</ul>

<p>Write a new function named <code>processPayment</code>:</p>

<ul>
<li>It accepts one argument <code>itemName</code> (String)</li>
<li>It change the stock, by removing one item of the stock for the item passed in argument</li>
<li>It logs to the console the text <code>Payment is being processed for item &lt;itemName&gt;</code></li>
</ul>

<p>Write a new function named <code>processError</code>:</p>

<ul>
<li>It accepts one argument <code>itemName</code> (String)</li>
<li>It logs to the console the text <code>No more &lt;itemName&gt; in stock</code></li>
<li>It logs to the console the text <code>Payment is not being processed</code></li>
</ul>

<p>Write a new function named <code>processOrder</code>:</p>

<ul>
<li>It accepts three arguments <code>itemName</code> (String), <code>callbackPayment</code> (function), and <code>callbackError</code> (function)</li>
<li>It logs to the console the text <code>Verifying the stock of &lt;itemName&gt;</code></li>
<li>If there is enough stock for the item, it calls <code>callbackPayment</code></li>
<li>If there is not enough stock for the item, it calls <code>callbackError</code></li>
</ul>

<p>Prompt to the user the message <code>Please enter the item you would like to purchase (Macbook, iPhone)</code> and pass the right callbacks</p>

<p><strong>Requirements:</strong></p>

<ul>
<li>Make sure that the case is not creating a problem (e.g <code>MacBOok</code> should still work)</li>
<li>Make sure that items that are not offered get the correct message</li>
</ul>

  </div>
