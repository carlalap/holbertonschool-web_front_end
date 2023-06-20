
<h1>Advanced CSS </h1>

<h2>Resources</h2>

<p><strong>Read or watch</strong></p>

<ul>
<li><a href="/rltoken/_ktDSjqTMRt3pFaxKYjpmA" title="CSS Reference - A free visual guide to CSS" target="_blank">CSS Reference - A free visual guide to CSS</a></li>
<li><a href="/rltoken/9AX9sdvpIcezSuBnKttlrg" title="Can I use,,, Support tables for HTML5, CSS3, etc" target="_blank">Can I use,,, Support tables for HTML5, CSS3, etc</a></li>
<li><a href="/rltoken/u0-SOhRQ9dSBO9sUs-NAmw" title="CSS Reference" target="_blank">CSS Reference</a></li>
<li><a href="/rltoken/WhK8mrHj9dcxtdnNV--xFQ" title="CSS Properties | HTML Dog" target="_blank">CSS Properties | HTML Dog</a></li>
<li><a href="/rltoken/f74EkDxPwhBsrHymBIiViw" title="Box Sizing" target="_blank">Box Sizing</a></li>
<li><a href="/rltoken/sbPrfJkmYNo9leItBdcCxg" title="CSS Selectors weight" target="_blank">CSS Selectors weight</a></li>
<li><a href="/rltoken/dvVMkmdO3jJj3TYacFJXkw" title="CSS specificity calculator" target="_blank">CSS specificity calculator</a></li>
<li><a href="/rltoken/HhhSyJNnNQPrxzuyDSMAjA" title="Play with CSS selector" target="_blank">Play with CSS selector</a></li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to <a href="/rltoken/nPsQlpN67NEW0f28iD1ABA" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

<ul>
<li>Selectors, properties, and values</li>
<li>The difference between block and inline styling</li>
<li>How to ensure consistency across all browers (CSS reset)</li>
<li>How to setup CSS variables</li>
<li>The differences between inline, embeded and external CSS</li>
<li>How grid systems work (with floats)</li>
<li>The difference between icons webfonts and SVG icons</li>
<li>The difference between pseudo-classes and pseudo-elements</li>
<li>How to make background gradients</li>
<li>How to animate elements in CSS</li>
<li>How to transform (2d, 3d) elements</li>
<li>What vendor prefixes are</li>
</ul>

<h2>Requirements</h2>

<h3>General</h3>

<ul>
<li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code>, <code>VSCode</code>, <code>Atom</code></li>
<li>All your files will be interpreted on Chrome (version 78.x)</li>
<li>All your files should end with a new line</li>
<li>All your files should start by a comment describing the task</li>
<li>A <code>README.md</code> file, at the root of the folder of the project, is mandatory</li>
<li>Your code should be W3C compliant and validate with <a href="/rltoken/ph4Gerj4bQXNwwji76jtZg" title="W3C-Validator" target="_blank">W3C-Validator</a></li>
</ul>

<p>Use the following starter HTML file for your project. </p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot; dir=&quot;ltr&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1, viewport-fit=cover&quot;&gt;
    &lt;title&gt;Homepage - Techium&lt;/title&gt;
    &lt;meta name=&quot;description&quot; content=&quot;Description of the page less than 150 characters&quot;&gt;
    &lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; href=&quot;images/favicon.jpg&quot;&gt;
    &lt;link href=&quot;https://fonts.googleapis.com/css?family=Open+Sans:400,700|Raleway:700&amp;display=swap&quot; rel=&quot;stylesheet&quot;&gt;
    &lt;link rel=&#39;stylesheet&#39; href=&#39;#&#39;&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- Header --&gt;
    &lt;header class=&quot;header&quot; data-section-theme=&quot;dark&quot;&gt;
      &lt;div class=&quot;container&quot;&gt;
        &lt;div class=&quot;header-logo&quot;&gt;
          &lt;a href=&quot;#&quot;&gt;
            &lt;img src=&quot;images/logo-white.png&quot; alt=&quot;Techium logo&quot; width=&quot;160&quot; height=&quot;40&quot;&gt;
          &lt;/a&gt;
        &lt;/div&gt;
        &lt;nav class=&quot;navbar-menu&quot;&gt;
          &lt;ul class=&quot;nav&quot;&gt;
            &lt;li class=&quot;nav-item&quot;&gt;
              &lt;a href=&quot;#&quot; class=&quot;nav-link&quot;&gt;Home&lt;/a&gt;
            &lt;/li&gt;
            &lt;li class=&quot;nav-item&quot;&gt;
              &lt;a href=&quot;#services&quot; class=&quot;nav-link&quot;&gt;Services&lt;/a&gt;
            &lt;/li&gt;
            &lt;li class=&quot;nav-item&quot;&gt;
              &lt;a href=&quot;#works&quot; class=&quot;nav-link&quot;&gt;Works&lt;/a&gt;
            &lt;/li&gt;
            &lt;li class=&quot;nav-item&quot;&gt;
              &lt;a href=&quot;#about&quot; class=&quot;nav-link&quot;&gt;About&lt;/a&gt;
            &lt;/li&gt;
            &lt;li class=&quot;nav-item&quot;&gt;
              &lt;a href=&quot;#latest_news&quot; class=&quot;nav-link&quot;&gt;Latest news&lt;/a&gt;
            &lt;/li&gt;
            &lt;li class=&quot;nav-item&quot;&gt;
              &lt;a href=&quot;#testimonials&quot; class=&quot;nav-link&quot;&gt;Testimonials&lt;/a&gt;
            &lt;/li&gt;
            &lt;li class=&quot;nav-item&quot;&gt;
              &lt;a href=&quot;#contact&quot; class=&quot;nav-link&quot;&gt;Contact&lt;/a&gt;
            &lt;/li&gt;
          &lt;/ul&gt;
        &lt;/nav&gt;
      &lt;/div&gt;
    &lt;/header&gt;
    &lt;!-- Main --&gt;
    &lt;main&gt;
      &lt;h1 class=&quot;visually-hidden&quot;&gt;Homepage&lt;/h1&gt;
      &lt;!-- Hero section --&gt;
      &lt;section class=&quot;section-hero&quot; data-section-theme=&quot;dark&quot;&gt;
        &lt;div class=&quot;container&quot;&gt;
          &lt;div class=&quot;section-body&quot;&gt;
            &lt;section class=&quot;section-inner&quot;&gt;
              &lt;h2 class=&quot;section-title&quot;&gt;We help you build your brand&lt;/h2&gt;
              &lt;a href=&quot;#&quot; class=&quot;button&quot;&gt;Get Started&lt;/a&gt;
            &lt;/section&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;
      &lt;!-- Services section --&gt;
      &lt;section id=&quot;services&quot; class=&quot;section&quot;&gt;
        &lt;div class=&quot;container&quot;&gt;
          &lt;header class=&quot;section-header&quot;&gt;
            &lt;h2 class=&quot;section-title&quot;&gt;Services&lt;/h2&gt;
            &lt;p class=&quot;section-tagline&quot;&gt;We work with you&lt;/p&gt;
          &lt;/header&gt;
          &lt;div class=&quot;section-body&quot;&gt;
            &lt;ul class=&quot;row&quot;&gt;
              &lt;li class=&quot;col-1-3&quot;&gt;
                &lt;div class=&quot;card-services&quot;&gt;
                  &lt;h3 class=&quot;card-title&quot;&gt;&lt;a href=&quot;#&quot;&gt;Design &amp; Concept&lt;/a&gt;&lt;/h3&gt;
                &lt;/div&gt;
              &lt;/li&gt;
              &lt;li class=&quot;col-1-3&quot;&gt;
                &lt;div class=&quot;card-services&quot;&gt;
                  &lt;h3 class=&quot;card-title&quot;&gt;&lt;a href=&quot;#&quot;&gt;Digital Strategy&lt;/a&gt;&lt;/h3&gt;
                &lt;/div&gt;
              &lt;/li&gt;
              &lt;li class=&quot;col-1-3&quot;&gt;
                &lt;div class=&quot;card-services&quot;&gt;
                  &lt;h3 class=&quot;card-title&quot;&gt;&lt;a href=&quot;#&quot;&gt;Content Strategy&lt;/a&gt;&lt;/h3&gt;
                &lt;/div&gt;
              &lt;/li&gt;
            &lt;/ul&gt;
            &lt;ul class=&quot;row&quot;&gt;
              &lt;li class=&quot;col-1-3&quot;&gt;
                &lt;div class=&quot;card-services&quot;&gt;
                  &lt;h3 class=&quot;card-title&quot;&gt;&lt;a href=&quot;#&quot;&gt;UX Design&lt;/a&gt;&lt;/h3&gt;
                &lt;/div&gt;
              &lt;/li&gt;
              &lt;li class=&quot;col-1-3&quot;&gt;
                &lt;div class=&quot;card-services&quot;&gt;
                  &lt;h3 class=&quot;card-title&quot;&gt;&lt;a href=&quot;#&quot;&gt;Web Development&lt;/a&gt;&lt;/h3&gt;
                &lt;/div&gt;
              &lt;/li&gt;
              &lt;li class=&quot;col-1-3&quot;&gt;
                &lt;div class=&quot;card-services&quot;&gt;
                  &lt;h3 class=&quot;card-title&quot;&gt;&lt;a href=&quot;#&quot;&gt;Social Media&lt;/a&gt;&lt;/h3&gt;
                &lt;/div&gt;
              &lt;/li&gt;
            &lt;/ul&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;
      &lt;!-- Works section --&gt;
      &lt;section id=&quot;works&quot; class=&quot;section&quot; data-section-theme=&quot;dark&quot;&gt;
        &lt;div class=&quot;container&quot;&gt;
          &lt;header class=&quot;section-header&quot;&gt;
            &lt;h2 class=&quot;section-title&quot;&gt;Works&lt;/h2&gt;
            &lt;p class=&quot;section-tagline&quot;&gt;Take a look at our portfolio&lt;/p&gt;
          &lt;/header&gt;
          &lt;div class=&quot;section-body&quot;&gt;
            &lt;ul class=&quot;row&quot;&gt;
              &lt;li class=&quot;col-1-3&quot;&gt;
                &lt;article class=&quot;card-work&quot;&gt;
                  &lt;div class=&quot;card-outer&quot;&gt;
                    &lt;div class=&quot;card-image&quot;&gt;
                      &lt;img src=&quot;images/pic-work-01.jpg&quot; alt=&quot;&quot;&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;card-inner&quot;&gt;
                      &lt;h3 class=&quot;card-title&quot;&gt;&lt;a href=&quot;#&quot;&gt;Interior Design&lt;/a&gt;&lt;/h3&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;
                &lt;/article&gt;
              &lt;/li&gt;
              &lt;li class=&quot;col-1-3&quot;&gt;
                &lt;article class=&quot;card-work&quot;&gt;
                  &lt;div class=&quot;card-outer&quot;&gt;
                    &lt;div class=&quot;card-image&quot;&gt;
                      &lt;img src=&quot;images/pic-work-02.jpg&quot; alt=&quot;&quot;&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;card-inner&quot;&gt;
                      &lt;h3 class=&quot;card-title&quot;&gt;&lt;a href=&quot;#&quot;&gt;Web Development&lt;/a&gt;&lt;/h3&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;
                &lt;/article&gt;
              &lt;/li&gt;
              &lt;li class=&quot;col-1-3&quot;&gt;
                &lt;article class=&quot;card-work&quot;&gt;
                  &lt;div class=&quot;card-outer&quot;&gt;
                    &lt;div class=&quot;card-image&quot;&gt;
                      &lt;img src=&quot;images/pic-work-03.jpg&quot; alt=&quot;&quot;&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;card-inner&quot;&gt;
                      &lt;h3 class=&quot;card-title&quot;&gt;&lt;a href=&quot;#&quot;&gt;Personal Development&lt;/a&gt;&lt;/h3&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;
                &lt;/article&gt;
              &lt;/li&gt;
            &lt;/ul&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;
      &lt;!-- About Us section --&gt;
      &lt;section id=&quot;about&quot; class=&quot;section&quot;&gt;
        &lt;div class=&quot;container&quot;&gt;
          &lt;header class=&quot;section-header&quot;&gt;
            &lt;h2 class=&quot;section-title&quot;&gt;About Us&lt;/h2&gt;
            &lt;p class=&quot;section-tagline&quot;&gt;Everything about us&lt;/p&gt;
          &lt;/header&gt;
          &lt;div class=&quot;section-body&quot;&gt;
            &lt;div class=&quot;row&quot;&gt;
              &lt;div class=&quot;col-1-2&quot;&gt;
                &lt;img src=&quot;images/pic-about-01.jpg&quot; alt=&quot;&quot; width=&quot;460&quot; height=&quot;460&quot;&gt;
              &lt;/div&gt;
              &lt;div class=&quot;col-1-2&quot;&gt;
                &lt;h3&gt;Who are we&lt;/h3&gt;
                &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!&lt;/p&gt;
                &lt;h3&gt;Our culture&lt;/h3&gt;
                &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!&lt;/p&gt;
                &lt;h3&gt;How we work&lt;/h3&gt;
                &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!&lt;/p&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div class=&quot;section-footer&quot;&gt;
            &lt;a href=&quot;#&quot; class=&quot;button&quot;&gt;Learn more about us&lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;
      &lt;!-- Latest news section --&gt;
      &lt;section id=&quot;latest_news&quot; class=&quot;section&quot;&gt;
        &lt;div class=&quot;container&quot;&gt;
          &lt;header class=&quot;section-header&quot;&gt;
            &lt;h2 class=&quot;section-title&quot;&gt;Latest News&lt;/h2&gt;
          &lt;/header&gt;
          &lt;div class=&quot;section-body&quot;&gt;
            &lt;ul class=&quot;row&quot;&gt;
              &lt;li class=&quot;col-1-3&quot;&gt;
                &lt;article class=&quot;card-blog&quot;&gt;
                  &lt;div&gt;
                    &lt;img src=&quot;images/pic-article-01.jpg&quot; alt=&quot;&quot; width=&quot;305&quot; height=&quot;305&quot;&gt;
                  &lt;/div&gt;
                  &lt;p class=&quot;card-category&quot;&gt;Career&lt;/p&gt;
                  &lt;h3&gt;&lt;a href=&quot;#&quot;&gt;Hoc loco tenere se Triarius non potuit.&lt;/a&gt;&lt;/h3&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id Sextilius factum negabat. Quo tandem modo? At eum nihili facit; Quae contraria sunt his, malane?&lt;/p&gt;
                  &lt;small&gt;By Kelly D.&lt;/small&gt;
                &lt;/article&gt;
              &lt;/li&gt;
              &lt;li class=&quot;col-1-3&quot;&gt;
                &lt;article class=&quot;card-blog&quot;&gt;
                  &lt;div&gt;
                    &lt;img src=&quot;images/pic-article-02.jpg&quot; alt=&quot;&quot; width=&quot;305&quot; height=&quot;305&quot;&gt;
                  &lt;/div&gt;
                  &lt;p class=&quot;card-category&quot;&gt;Digital Life&lt;/p&gt;
                  &lt;h3&gt;&lt;a href=&quot;#&quot;&gt;Ut alios omittam, hunc appello, quem ille unum secutus est.&lt;/a&gt;&lt;/h3&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum mihi Piso: Quid ergo? Tum ille: Ain tandem? Non autem hoc: igitur ne illud quidem. Sed quod proximum fuit non vidit. Nos commodius agimus. An nisi populari fama?&lt;/p&gt;
                  &lt;small&gt;By William A.&lt;/small&gt;
                &lt;/article&gt;
              &lt;/li&gt;
              &lt;li class=&quot;col-1-3&quot;&gt;
                &lt;article class=&quot;card-blog&quot;&gt;
                  &lt;div&gt;
                    &lt;img src=&quot;images/pic-article-03.jpg&quot; alt=&quot;&quot; width=&quot;305&quot; height=&quot;305&quot;&gt;
                  &lt;/div&gt;
                  &lt;p class=&quot;card-category&quot;&gt;Social&lt;/p&gt;
                  &lt;h3&gt;&lt;a href=&quot;#&quot;&gt;Bestiarum vero nullum iudicium puto.&lt;/a&gt;&lt;/h3&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non igitur bene. Quid enim est a Chrysippo praetermissum in Stoicis? Pugnant Stoici cum Peripateticis. Prioris generis est docilitas, memoria; Apparet statim, quae sint officia, quae actiones.&lt;/p&gt;
                  &lt;small&gt;By Frances J.&lt;/small&gt;
                &lt;/article&gt;
              &lt;/li&gt;
            &lt;/ul&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;
      &lt;!-- Testimonials section --&gt;
      &lt;section id=&quot;testimonials&quot; class=&quot;section&quot;&gt;
        &lt;div class=&quot;container&quot;&gt;
          &lt;header class=&quot;section-header&quot;&gt;
            &lt;h2 class=&quot;section-title&quot;&gt;Testimonials&lt;/h2&gt;
            &lt;p class=&quot;section-tagline&quot;&gt;We are more than a digital company&lt;/p&gt;
          &lt;/header&gt;
          &lt;div class=&quot;section-body&quot;&gt;
            &lt;ul class=&quot;row&quot;&gt;
              &lt;li class=&quot;col-1-3&quot;&gt;
                &lt;article class=&quot;card-testimonial&quot;&gt;
                  &lt;img src=&quot;images/pic-person-01.jpg&quot; alt=&quot;Yuri Y. avatar&quot; width=&quot;100&quot; height=&quot;100&quot; class=&quot;card-avatar&quot;&gt;
                  &lt;blockquote class=&quot;card-quote&quot;&gt;
                    &lt;p&gt;I am completely blown away. Thanks to Techium, we&#39;ve just launched our 5th website!
                      &lt;cite&gt;Yuri Y.&lt;/cite&gt;
                    &lt;/p&gt;
                  &lt;/blockquote&gt;
                &lt;/article&gt;
              &lt;/li&gt;
              &lt;li class=&quot;col-1-3&quot;&gt;
                &lt;article class=&quot;card-testimonial&quot;&gt;
                  &lt;img src=&quot;images/pic-person-02.jpg&quot; alt=&quot;Dorrie S. avatar&quot; width=&quot;100&quot; height=&quot;100&quot; class=&quot;card-avatar&quot;&gt;
                  &lt;blockquote class=&quot;card-quote&quot;&gt;
                    &lt;p&gt;Thank you so much for your help. Techium company is awesome!
                      &lt;cite&gt;Dorrie S.&lt;/cite&gt;
                    &lt;/p&gt;
                  &lt;/blockquote&gt;
                &lt;/article&gt;
              &lt;/li&gt;
              &lt;li class=&quot;col-1-3&quot;&gt;
                &lt;article class=&quot;card-testimonial&quot;&gt;
                  &lt;img src=&quot;images/pic-person-03.jpg&quot; alt=&quot;Sven H. avatar&quot; width=&quot;100&quot; height=&quot;100&quot; class=&quot;card-avatar&quot;&gt;
                  &lt;blockquote class=&quot;card-quote&quot;&gt;
                    &lt;p&gt;I love your system. Definitely worth the investment. I&#39;d be lost without Techium company.
                      &lt;cite&gt;Sven H.&lt;/cite&gt;
                    &lt;/p&gt;
                  &lt;/blockquote&gt;
                &lt;/article&gt;
              &lt;/li&gt;
            &lt;/ul&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;
      &lt;!-- Contact section --&gt;
      &lt;section id=&quot;contact&quot; class=&quot;section&quot;&gt;
        &lt;div class=&quot;container&quot;&gt;
          &lt;header class=&quot;section-header&quot;&gt;
            &lt;h2 class=&quot;section-title&quot;&gt;Contact&lt;/h2&gt;
            &lt;p class=&quot;section-tagline&quot;&gt;We&#39;d love to hear from you!&lt;/p&gt;
          &lt;/header&gt;
          &lt;div class=&quot;section-body&quot;&gt;
            &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id Sextilius factum negabat. Quo tandem modo? At eum nihili facit; Quae contraria sunt his, malane?&lt;/p&gt;
          &lt;/div&gt;
          &lt;div class=&quot;section-footer&quot;&gt;
            &lt;a href=&quot;#&quot; class=&quot;button&quot;&gt;Get in touch&lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;
            &lt;/main&gt;
    &lt;!-- Footer --&gt;
    &lt;footer class=&quot;footer&quot; data-section-theme=&quot;dark&quot;&gt;
      &lt;div  class=&quot;container&quot;&gt;
        &lt;div class=&quot;row&quot;&gt;
          &lt;div class=&quot;col-1-2&quot;&gt;
            &lt;img src=&quot;images/logo-white.png&quot; alt=&quot;Techium logo&quot; width=&quot;160&quot; height=&quot;40&quot;&gt;
            &lt;address class=&quot;footer-address&quot;&gt;
              972 Mission St&lt;br&gt;
              San Francisco, CA&lt;br&gt;
              94103
            &lt;/address&gt;
          &lt;/div&gt;
          &lt;div class=&quot;col-1-2&quot;&gt;
            &lt;ul class=&quot;social nav&quot;&gt;
              &lt;li class=&quot;social-item nav-item&quot;&gt;
                &lt;a href=&quot;https://www.facebook.com/HolbertonSchool/&quot; class=&quot;social-link&quot;&gt;
                  &lt;svg viewbox=&quot;0 0 24 24&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;25&quot; height=&quot;25&quot;&gt;
                    &lt;title&gt;
                      Facebook icon
                    &lt;/title&gt;
                    &lt;path d=&quot;M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z&quot;/&gt;
                  &lt;/svg&gt;
                &lt;/a&gt;
              &lt;/li&gt;
              &lt;li class=&quot;social-item nav-item&quot;&gt;
                &lt;a href=&quot;https://twitter.com/holbertonschool&quot; class=&quot;social-link&quot;&gt;
                  &lt;svg viewbox=&quot;0 0 24 24&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;25&quot; height=&quot;25&quot;&gt;
                    &lt;title&gt;
                      Twitter icon
                    &lt;/title&gt;
                    &lt;path d=&quot;M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z&quot;/&gt;
                  &lt;/svg&gt;
                &lt;/a&gt;
              &lt;/li&gt;
              &lt;li class=&quot;social-item nav-item&quot;&gt;
                &lt;a href=&quot;https://www.instagram.com/holbertonschool/&quot; class=&quot;social-link&quot;&gt;
                  &lt;svg viewbox=&quot;0 0 24 24&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;25&quot; height=&quot;25&quot;&gt;
                    &lt;title&gt;
                      Instagram icon
                    &lt;/title&gt;
                    &lt;path d=&quot;M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z&quot;/&gt;
                  &lt;/svg&gt;
                &lt;/a&gt;
              &lt;/li&gt;
            &lt;/ul&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;hr&gt;
        &lt;div class=&quot;row&quot;&gt;
          &lt;div class=&quot;col-1-2&quot;&gt;
            &lt;p class=&quot;footer-copyright&quot;&gt;© 2020 Techium, made with ♥ by students at Holberton School.&lt;/p&gt;
          &lt;/div&gt;
          &lt;div class=&quot;col-1-2&quot;&gt;
            &lt;ul class=&quot;footer-nav nav&quot;&gt;
              &lt;li class=&quot;footer-nav-item nav-item&quot;&gt;
                &lt;a href=&quot;#&quot; class=&quot;footer-nav-link&quot;&gt;Terms of use&lt;/a&gt;
              &lt;/li&gt;
              &lt;li class=&quot;footer-nav-item nav-item&quot;&gt;
                &lt;a href=&quot;#&quot; class=&quot;footer-nav-link&quot;&gt;Privacy Policy&lt;/a&gt;
              &lt;/li&gt;
              &lt;li class=&quot;footer-nav-item nav-item&quot;&gt;
                &lt;a href=&quot;#&quot; class=&quot;footer-nav-link&quot;&gt;Cookie Policy&lt;/a&gt;
              &lt;/li&gt;
            &lt;/ul&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/footer&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>

<p>You can save it in a <code>index.html</code> file and replace the <code>&lt;link rel=&#39;stylesheet&#39; href=&#39;#&#39;&gt;</code> by the right CSS file.</p>

<h2>End goal of the project</h2>

<p><img src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/10/b9a220ba79af9ede6fc5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230618%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230618T042156Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=9a54dd2fd3a6cfb7064d4e1aad36a4e2c34c1a864c7a65d8efdf5ae44b245b28" alt="" loading='lazy' style="" /></p>

<p>Important note: <strong>details are important!</strong> lowercase vs uppercase / wrong letter&hellip; be careful!</p>




