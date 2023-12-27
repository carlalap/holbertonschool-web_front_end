# Project: jQuery advanced

<h2>Resources</h2>

<p><strong>Read or watch:</strong></p>

<ul>
<li><a href="https://releases.jquery.com/" title="jQuery CDN" target="_blank">jQuery CDN</a></li>
<li><a href="https://api.jquery.com/" title="jQuery API Documentation" target="_blank">jQuery API Documentation</a></li>
<li><a href="https://github.com/typicode/json-server" title="Json server" target="_blank">Json server</a></li>
</ul>

<h2>Learning Objectives</h2>

<ul>
<li>Learn how to load jQuery from a CDN in a page</li>
<li>Learn the different ways to create DOM elements with jQuery</li>
<li>Learn how to modify elements</li>
<li>Learn how to add new elements to a page with different positions</li>
<li>Learn how to add a click handler on an element</li>
<li>Learn how to send GET, POST, DELETE or any type of AJAX query with jQuery</li>
<li>Learn how to create a pagination</li>
</ul>

<h2>Requirements</h2>

<ul>
<li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code>, <code>Visual Studio Code</code></li>
<li>All your files should end with a new line</li>
<li>A <code>README.md</code> file, at the root of the folder of the project, is mandatory</li>
</ul>

  </div>
</div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      0. Setup your dev environment
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

  <!-- Task Body -->
  <p>You are given this starter HTML for this task:</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot; dir=&quot;ltr&quot;&gt;

    &lt;head&gt;

        &lt;meta charset=&quot;utf-8&quot; /&gt;
        &lt;title&gt;Task 0&lt;/title&gt;

    &lt;/head&gt;

    &lt;body&gt;

    &lt;/body&gt;

&lt;/html&gt;
</code></pre>

<p><strong>In a file <code>0-index.html</code>:</strong></p>

<ul>
<li>Load the latest version of jQuery using their <code>code.jquery.com</code> CDN</li>
<li>Use the Slim &amp; minified version of jQuery</li>
<li>When the page is being loaded, verify that jQuery is loaded correctly</li>
<li>If jQuery is ready to be used, log to the console <code>jQuery has been loaded correctly</code></li>
<li>If jQuery has not been loaded properly, log to the console <code>jQuery has not been loaded correctly</code></li>
</ul>

<p><strong>Requirements</strong></p>

<ul>
<li>Make sure your code is in a <code>script</code> of type <code>application/javascript</code></li>
</ul>

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      1. Creating a DOM element
    </h3>

  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

<ul>
<li>Remove the code that verifies jQuery loaded and logs messages to the console</li>
<li>Create a function named <code>createTextElement</code>:

<ul>
<li>Within the function, create a <code>p</code> HTML element</li>
<li>The paragraph should display <code>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in diam risus. Nunc sit amet euismod ipsum. Aenean tempus ex sed est volutpat, sed sodales velit tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin auctor sollicitudin eleifend. Vivamus porta enim vitae mauris commodo, vitae tempor tellus elementum. Quisque sed pellentesque nulla, at eleifend nisi. Phasellus eget tincidunt ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</code></li>
<li>Add the paragraph to the <code>body</code> of the page</li>
</ul></li>
<li>Call the <code>createTextElement</code> function</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>You must use jQuery only to generate the HTML tag and attach it to the page</li>
<li>Use the keyword <code>append</code> to attach the element to the page</li>
</ul>

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      2. Creating multiple DOM elements at once
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

  <!-- Task Body -->
  <p><strong>In a file <code>2-index.html</code>, reuse the template you created previously.</strong></p>

<ul>
<li>Remove the function <code>createTextElement</code></li>
<li>Create a function named <code>createFamilyTree</code>:

<ul>
<li>It should create a table element

<ul>
<li>The head of the table should display <code>Firstname</code> and <code>Lastname</code> in two cells</li>
<li>The body of the table should three rows</li>
<li>The first row should contain two cells with <code>Guillaume</code> and <code>Salva</code></li>
<li>The second row should contain two cells with <code>Paulette</code> and <code>Salva</code></li>
<li>The third row should contain two cells with <code>Antoine</code> and <code>Salva</code></li>
</ul></li>
<li>Use the keyword <code>append</code> only once to attach all the elements of the table to the page</li>
</ul></li>
<li>Call the <code>createFamilyTree</code> function</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>You must use jQuery only to generate the HTML tag and attach it to the page</li>
<li>The entire table code should be contained in one string</li>
</ul>

<p><strong>The table created by your script should look like this</strong></p>

![task2. Creating multiple DOM](./images/JQuery0.png)

  </div>

 <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      3. Chain DOM elements
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

  <!-- Task Body -->
  <p><strong>In a file <code>3-index.html</code>, reuse the template you created previously. Reuse also the function named <code>createFamilyTree</code>:</strong></p>

<ul>
<li>The table is containing the exact same values as the previous task</li>
<li>This time, create each element one by one</li>
<li>Use the keywords <code>append</code> for each element and <code>text</code> for the cells</li>
<li>Do not create any intermediate variable</li>
<li>Call the <code>createFamilyTree</code> function</li>
</ul>

<p><strong>Tips:</strong></p>

<ul>
<li>You can append multiple elements at once, by separating the elements with a comma</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>You must use jQuery only to generate the HTML tag and attach it to the page</li>
</ul>

<p><strong>The table created by your script should look like this</strong></p>

![task3. Chain DOM elements](./images/JQuery0.png)

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      4. HTML function
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

  <!-- Task Body -->
  <p><strong>In a file <code>4-index.html</code>, reuse the template you created in the previous task. Reuse also the function named <code>createFamilyTree</code>.</strong></p>

<ul>
<li>Create a new function <code>replaceFamilyTree</code>:

<ul>
<li>It should replace the childrens of the <code>tbody</code> elements with a new <code>tr</code></li>
<li>The <code>tr</code> element should contain two cells with <code>Gerard</code> and <code>Bonissa</code> in each</li>
</ul></li>
<li>Make sure <code>createFamilyTree</code> and <code>replaceFamilyTree</code> are called</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>You must use the keyword <code>html</code> to replace the content of the table</li>
</ul>

<p><strong>The table created by your script should look like this</strong></p>

![task4. HTML function](./images/JQuery1.png)

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      5. Click attribute and remove function
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

  <!-- Task Body -->
  <p><strong>In a file <code>5-index.html</code>, reuse the template you created previously.</strong></p>

<ul>
<li>Remove the <code>createFamilyTree</code> and <code>replaceFamilyTree</code> functions</li>
<li>Create a function <code>createFamilyTree</code>:

<ul>
<li>It should append to the <code>body</code> an empty table, with <code>thead</code> and two cells with text <code>Firstname</code> and <code>Lastname</code>, respectively</li>
<li>It should append an empty <code>tbody</code> element to the <code>table</code> after the <code>thead</code></li>
</ul></li>
<li>Create a function <code>addNewMember</code>:

<ul>
<li>It accepts two arguments <code>firstName</code>(string) and <code>lastName</code>(string)</li>
<li>It appends to the body of the <code>table</code> a new row with three cells</li>
<li>The first cell displays the <code>firstName</code>, the second cell displays the <code>lastName</code></li>
<li>The third cell displays <code>(x)</code></li>
<li>On click on the third cell, it should remove the row</li>
<li>Add CSS to the third cell to have an <code>orange</code> background</li>
</ul></li>
<li>Calls the function <code>createFamilyTree</code></li>
<li>Using <code>addNewMember</code>, generate a fake table with:

<ul>
<li>the first row <code>Guillaume</code>, <code>Salva</code></li>
<li>the second row <code>Arielle</code>, <code>Snizt</code></li>
<li>the third row <code>Fanette</code>, <code>Snizt</code></li>
<li>the fourth row <code>Gerard</code>, <code>Snizt</code></li>
<li>the fifth row <code>Victor</code>, <code>Salva</code></li>
</ul></li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>You must use the keywords <code>click</code>, <code>css</code>, and <code>remove</code></li>
</ul>

<p><strong>The table created by your script should look like this:</strong></p>

![task5. Click attribute and remove function](./images/JQuery2.png)

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      6. Val, before, and prepend functions
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Task Body -->
   <p><strong>In a file <code>6-index.html</code>, reuse the template you created previously.</strong></p>

<ul>
<li>Reuse the function <code>createFamilyTree</code> you wrote in the previous task</li>
<li>Reuse the function <code>addNewMember</code> you wrote in the previous task, and add the following modification:

<ul>
<li>The function should accept a new argument <code>position</code>(string)</li>
<li>When position is equal to <code>before</code>, it should add the row at the top of the table</li>
<li>Otherwise, it should add the row at the bottom of the table</li>
</ul></li>
<li>Write a function <code>createForm</code>:

<ul>
<li>It should add before the table two <code>input</code> of type <code>text</code></li>
<li>It should add a <code>select</code> with two options as well: <code>before</code> and <code>after</code> with corresponding <code>Before</code> and <code>After</code> text</li>
<li>It should add a <code>input</code> of type <code>submit</code> as well

<ul>
<li>When the user clicks on the submit, it should call the function <code>addNewMember</code> with the value of the two inputs and the value of the select element</li>
</ul></li>
</ul></li>
<li>Call the function <code>createFamilyTree</code></li>
<li>Call the function <code>createForm</code></li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>You must use the keywords <code>first</code>, <code>before</code>, and <code>prepend</code></li>
<li>To select the second input, use the <code>nth-of-type</code> selector</li>
</ul>

<p><strong>The form created by your script should look like this:</strong></p>

![task6. Val, before, and prepend functions](./images/JQuery3.png)

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      7. Query - Setup your dev environment
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

  <!-- Task Body -->
  <p><strong>In a file <code>7-index.html</code>, reuse the template you created in the previous task</strong></p>

<ul>
<li>Remove the functions from the <code>script</code></li>
<li><p>Import jQuery using the CDN and make sure you can access the ajax methods</p></li>
<li><p>Create a form:</p>

<ul>
<li>Create a function <code>createSearchForm</code>, it should append to the body:

<ul>
<li>An empty <code>input</code> of type <code>text</code> without ID, name, or class</li>
<li>An <code>input</code> of type <code>submit</code>

<ul>
<li>When the user clicks on the submit button, it should query the function <code>queryWikipedia</code> that you are going to create with the value of the text <code>input</code></li>
</ul></li>
<li>An empty <code>ul</code> element</li>
</ul></li>
</ul></li>
<li><p>Create a function <code>addNewArticle</code> to add new items to a list</p>

<ul>
<li>It accepts three arguments <code>id</code>(string), <code>title</code>(string), and <code>snippet</code>(string)</li>
<li>It create an element <code>li</code>

<ul>
<li>Within the <code>li</code>, add two <code>paragraph</code> elements

<ul>
<li>The first paragraph contains a <code>span</code> tag with the following text: <code>id -</code>, then a <code>b</code> element with the <code>title</code></li>
<li>The second paragraph, should contain the <code>snippet</code></li>
</ul></li>
</ul></li>
<li>Appends the <code>li</code> to the <code>ul</code> element (created by <code>createSearchForm</code>)</li>
</ul></li>
<li><p>Implement a get function: create a function <code>queryWikipedia</code></p>

<ul>
<li>It accepts one argument <code>search</code>(string)</li>
<li>Create a data object with attributes required to query a search using the string passed in the argument with Wikipedia</li>
<li>For each result returned by the API, call the function <code>addNewArticle</code> with the result&rsquo;s <code>pageid</code>, <code>title</code>, and <code>snippet</code></li>
</ul></li>
<li><p>Call the function <code>createSearchForm</code> when the page loads</p></li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>Look at the documentation from Wikipedia to query the API <code>https://www.mediawiki.org/wiki/API:Search</code></li>
<li>Use the minified only version of jQuery, so you can access the ajax methods</li>
<li>When adding the <code>snippet</code>, make sure that the HTML coming from Wikipedia is correctly displayed</li>
</ul>

<p><strong>The form created by your script should look like this:</strong></p>

![task7. Query - Setup your dev environment](./images/JQuery4.png)

<p><strong>Query results should display like this:</strong></p>

![task7. Query - Setup your dev environment2](./images/JQuery5.png)

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      8. Pagination
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>

  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

    <!-- Progress vs Score -->
      <div class="task_progress_score_bar" data-task-id="21858" data-correction-id="544993">
        <div class="task_progress_bar">
          <div class="task_score_bar">
          </div>
        </div>
        <div class="task_progress_score_text">
          Score: <span class="task_score_value">0%</span> (<span class="task_progress_value">Checks completed: 0%</span>)
        </div>
      </div>

    <!-- Task Body -->
    <p><strong>In a file <code>8-index.html</code>, reuse the code from the previous task</strong></p>

<ul>
<li><p>Modify the function <code>createSearchForm</code>:</p>

<ul>
<li>It should append to the body another list, with the id <code>pagination</code></li>
</ul></li>
<li><p>Modify the function <code>queryWikipedia</code>:</p>

<ul>
<li>Add a new parameter named <code>offset</code>(number)</li>
<li>By default, the offset should be set to <code>0</code></li>
<li>Modify the data object to add the <code>offset</code></li>
<li>When you receive the response from the API, call the function <code>buildPagination</code> that you are going to create below</li>
</ul></li>
<li><p>Create a new function named <code>buildPagination</code>:</p>

<ul>
<li>It accepts three arguments <code>numberOfItems</code>(number), <code>itemsPerPage</code>(number), and <code>currentOffset</code>(number)</li>
<li>When the function is called, reset the pagination list to an empty tag</li>
<li>Write a loop that will display the pagination (using the total number of items divided by the number of items per page)</li>
<li>For each page, create a list item

<ul>
<li>Add some CSS for each item (<code>cursor: &#39;pointer&#39;</code>, <code>10px</code> margin left, and bold when this is the current page)</li>
<li>The text of the item should be the page number</li>
<li>When clicking on a page number, it should call the function <code>queryWikipedia</code> with the right offset</li>
</ul></li>
</ul></li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>Use the <code>totalhits</code> value from Wikipedia to define the total number of items</li>
<li>Display 10 items per page</li>
<li>Make sure your pages are displayed in an horizontal line</li>
</ul>

<p><strong>The form created by your script should look like this:</strong></p>

![task8. Pagination](./images/JQuery6.png)

<p><strong>The query results should display like this, notice how the <code>12</code> is in bold, because that is the current page</strong></p>

![task8. Pagination2](./images/JQuery7.png)

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      9. Wrap/unwrap
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

  <!-- Task Body -->
  <p><strong>In a file <code>9-index.html</code>, reuse the code from the previous task</strong></p>

<ul>
<li><p>In the header, add some CSS, with the <code>style</code> tag:</p>

<ul>
<li>Add a new class named <code>loading</code>

<ul>
<li>Set the opacity at 0.2 within that class</li>
</ul></li>
</ul></li>
<li><p>In your <code>script</code> with your other functions, create a function named <code>displayLoading</code>:</p>

<ul>
<li>It accepts one argument <code>loading</code></li>
<li>It select the first <code>ul</code> element of the page</li>
<li>If <code>loading</code> is true, it wraps the element with a <code>div</code> tag and the class <code>loading</code></li>
<li>If <code>loading</code> is false, it unwrap the <code>ul</code> from the <code>div</code></li>
</ul></li>
<li><p>Modify the <code>queryWikipedia</code> function:</p>

<ul>
<li>It should call the function <code>displayLoading</code> before querying the API</li>
<li>Once the API returns the value, it should remove the opacity by calling the function again</li>
</ul></li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>You must use the <code>wrap</code> and <code>unwrap</code> functions of Jquery</li>
</ul>

<p><strong>How the page should look when results are loading</strong></p>

![task9. Wrap/unwrap](./images/JQuery8.png)

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      10. Another Get API
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

  <!-- Task Body -->
  <p><strong>Setup your dev environment</strong></p>

<ul>
<li>Install <code>json-server</code> within your projects using <code>npm</code>:</li>
<li>Run the server using <code>node_modules/.bin/json-server --watch db.json</code></li>
</ul>

<p><strong>You are provided with this <code>db.json</code>, don&rsquo;t forget to push it, you can change the values of the <code>id</code>, <code>title</code>, <code>author</code>, <code>postId</code>, <code>name</code> as you like</strong></p>

<pre><code>{
  &quot;posts&quot;: [
    {
      &quot;id&quot;: 1,
      &quot;title&quot;: &quot;json-server&quot;,
      &quot;author&quot;: &quot;typicode&quot;
    },
    {
      &quot;title&quot;: &quot;fd&quot;,
      &quot;author&quot;: &quot;fffff&quot;,
      &quot;id&quot;: 2
    },
    {
      &quot;title&quot;: &quot;fd&quot;,
      &quot;author&quot;: &quot;fffff&quot;,
      &quot;id&quot;: 3
    },
    {
      &quot;title&quot;: &quot;f&quot;,
      &quot;author&quot;: &quot;f&quot;,
      &quot;id&quot;: 4
    },
    {
      &quot;title&quot;: &quot;&quot;,
      &quot;author&quot;: &quot;&quot;,
      &quot;id&quot;: 5
    },
    {
      &quot;title&quot;: &quot;&quot;,
      &quot;author&quot;: &quot;&quot;,
      &quot;id&quot;: 6
    },
    {
      &quot;title&quot;: &quot;&quot;,
      &quot;author&quot;: &quot;&quot;,
      &quot;id&quot;: 7
    },
    {
      &quot;title&quot;: &quot;&quot;,
      &quot;author&quot;: &quot;&quot;,
      &quot;id&quot;: 8
    },
    {
      &quot;title&quot;: &quot;&quot;,
      &quot;author&quot;: &quot;&quot;,
      &quot;id&quot;: 9
    },
    {
      &quot;title&quot;: &quot;&quot;,
      &quot;author&quot;: &quot;&quot;,
      &quot;id&quot;: 10
    }
  ],
  &quot;comments&quot;: [
    {
      &quot;id&quot;: 1,
      &quot;body&quot;: &quot;some comment&quot;,
      &quot;postId&quot;: 1
    }
  ],
  &quot;profile&quot;: {
    &quot;name&quot;: &quot;typicode&quot;
  }
}
</code></pre>

<p><strong>In a file <code>10-index.html</code>:</strong></p>

<ul>
<li>Reuse your template from the previous task, remove the functions in your <code>script</code> and the <code>style</code> in the head</li>
<li><p>Make sure you import jQuery using the CDN and make sure you can access the ajax methods</p></li>
<li><p>Create a function <code>addPostRow</code>:</p>

<ul>
<li>It takes into argument <code>data</code> (object)</li>
<li>It append to the body a paragraph</li>
<li>The paragraph should contain a <code>span</code> element with the text <code>Post created with id ID, title: TITLE, author: AUTHOR</code>

<ul>
<li>Each variable is contained in the <code>data</code> object</li>
</ul></li>
</ul></li>
<li><p>Create a function named <code>listPosts</code>:</p>

<ul>
<li>It should query your local server on the <code>posts</code> endpoint</li>
<li>When the server return a 200 response, it should call the function <code>addPostRow</code> for each element in the response</li>
<li>When the server is unavailable, display an alert with the message <code>Server Error</code></li>
</ul></li>
<li><p>Call the function <code>listPosts</code> when your page loads</p></li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>You must use the <code>get</code> function from jQuery</li>
</ul>
  </div>

 <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      11. Post query
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

  <!-- Task Body -->
  <p><strong>In a file <code>11-index.html</code>, reuse the code you previously wrote</strong></p>

<ul>
<li><p>Create a new function <code>buildForm</code>:</p>

<ul>
<li>It appends to the body a <code>form</code> element</li>
<li>Inside the form, add a <code>div</code> element, with a <code>label</code> for <code>author</code> with text <code>Author</code> and an <code>input</code> of type <code>text</code> with id <code>author</code></li>
<li>Inside the form, add a <code>div</code> element, with a <code>label</code> for <code>title</code> with text <code>Title</code> and a <code>textarea</code> with id <code>title</code></li>
<li>Inside the form, add an <code>input</code> of type <code>submit</code></li>
<li>When clicking on the submit button, call the function <code>sendForm</code> detailed below</li>
</ul></li>
<li><p>Create a new function <code>sendForm</code>:</p>

<ul>
<li>It should add after the <code>form</code>, the text <code>About to send the query to the API</code></li>
<li>It should create a data object, with the <code>title</code> and <code>author</code> attributes. The values are the ones within the inputs</li>
<li>It should send a <code>POST</code> query to your server endpoint <code>posts</code> with the data</li>
<li>If the query succeed, call the function <code>addPostRow</code> with the data coming back from the API</li>
<li>If the query does not succeed, it should display an alert with the message <code>Error sending the POST query</code></li>
</ul></li>
<li><p>Call the functions <code>listPosts</code> and <code>buildForm</code> when your page loads</p></li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>When clicking on the label, the input text should be selected by the browser</li>
<li>When pressing enter on the input text, the form should be submitted without reloading the page</li>
<li>You must use the <code>after</code> function from jQuery</li>
</ul>

<p><strong>With the JSON server running, your <code>11-index.html</code> should look something like this in your browser (does not have to be exactly the same, rows and values depend on what&rsquo;s in your <code>db.json</code>)</strong></p>

![task11. Post query](./images/JQuery9.png)

</div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      12. Delete query
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

  <!-- Task Body -->
  <p><strong>In a file <code>12-index.html</code>, reuse your code from the previous task</strong></p>

<ul>
<li><p>Modify the function <code>addPostRow</code>:</p>

<ul>
<li>Add an id attribute to the paragraph with <code>row-ID</code> (the ID being the one of the post)</li>
<li>Append a <code>span</code> element with the text <code>(delete)</code> to the <code>p</code>, this <code>span</code> should come before the <code>span</code> with the post information

<ul>
<li>On click, call the function <code>deletePost</code> with the post id</li>
</ul></li>
</ul></li>
<li><p>Create a function <code>deletePost</code>:</p>

<ul>
<li>It accepts one argument <code>id</code>(number)</li>
<li>Send a <code>DELETE</code> query to the <code>posts</code> endpoint with the id of the post</li>
<li>If the query is successful, remove the row from the body</li>
<li>If the query is not successful, display an alert with the message <code>Post was not deleted</code></li>
</ul></li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>You must use the function <code>remove</code> from jQuery</li>
</ul>

<p><strong>With your JSON server running, <code>12-index.html</code> should look like this in your browser, actual rows and values depend on what&rsquo;s in your <code>db.json</code></strong></p>

![task12. Delete query](./images/JQuery10.png)

  </div>
