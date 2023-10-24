Task0:
From this HTML:
---Add Bootstrap to reset the CSS styling.
---Your final page must look like this:

<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
        <title>Holberton - Web Stack - Bootstrap</title>
        <meta name="description" content="Bootstrap is a free and open-source CSS framework">

        <style>
            .my-container {
                background-color: #FF0000;
            }
        </style>
    </head>
    <body>

        <div class="my-container">
            <h1>Hello</h1>
            <h2>Holberton</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat eleifend nulla, quis imperdiet lacus. Donec tempor lorem enim, sit amet tempus purus euismod sit amet. Nam laoreet quis purus a consequat. Quisque interdum bibendum varius. Praesent lobortis eros sit amet tortor varius elementum. Fusce eget varius ex. Cras id lectus consectetur, bibendum dolor in, hendrerit lacus. Praesent rutrum, odio id tincidunt fringilla, dolor eros condimentum lacus, blandit molestie massa velit hendrerit risus. Nam ex nunc, ultrices id nisi consectetur, mattis imperdiet purus. Sed tempus ullamcorper nisi, vitae pulvinar nunc varius eu. Maecenas ut volutpat lectus.</p>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Phasellus quis dolor sed ligula porttitor fringilla.</li>
                <li>
                    <ul>
                        <li>Integer vulputate arcu quis luctus condimentum.</li>
                        <li>Integer commodo turpis non ligula viverra, ut sagittis elit ornare.</li>
                    </ul>
                </li>
                <li>Etiam porttitor justo in diam elementum, nec mollis tellus viverra.</li>
                <li>Vivamus non ligula quis dui auctor sagittis.</li>
            </ul>
        </div>

    </body>

</html>

Task1:
Requirements:

You are not allow to define any styling in a CSS file, in head or inline - only Bootstrap classes
You can not change the HTML structure - only adding classes is allowed
Behaviors/styles:

For all cells of all rows:

Padding at .5rem
Background color of the name of the cell
Text centered and white
First line:

Each cell has the same width
Screen >= 992px: display like 4 columns in one line
Screen < 992px: display like 4 lines in one column
Second line:

Each cell has the same width
Screen >= 576px: display like 4 columns in one line
Screen < 576px: display like 4 lines in one column
Third line:

The last cell is taking 50% of the width screen
The middle cell has 2 times the size of the first cell
Screen >= 992px: display like 3 columns in one line
Screen < 992px: display like 3 lines in one column
Fourth line:

Different order (from left to right) based on the size
Screen >= 1200px: Primary -> Success -> Danger -> Warning
Screen between 992px and 1200px: Warning -> Primary -> Success -> Danger
Screen between 768px and 992px: Danger -> Warning -> Primary -> Success
Screen <= 768px: Success -> Danger -> Warning -> Primary
Fifth line:

Each cell has the same width (~16% of the screen)
Screen >= 768px: display like 2 columns on each side of the screen in one line
Screen < 768px: display like 2 lines in one column
Last line:

Each cell has the same width (~16% of the screen)
Screen >= 768px: display like 3 columns in one line with the space between the first and middle cell 2 times bigger than the space between the middle cell and the last cell
Screen < 768px: display like 3 lines in one column

task: 2. Table of chemical elements
Requirements:

You are not allow to define any styling in a CSS file, in head or inline - only Bootstrap classes
You can not change the HTML structure - only adding classes is allowed
Behaviors/styles:

Header:
With border bottom
Padding .5rem and margin bottom 1rem
Background color “light”
Horizontal listing, no margin bottom:
First item aligned on the left with a border rounded image
2 other items aligned on the right with 2 links (aligned vertically in the middle) with a layout of a button of style “secondary”
The link “Chemical elements” is active
The main block has full width, spanning the entire width of the viewport
The first section:
The div inside is an alert of style “info”:
h4 is the header of this alert
The last paragraph (containing the link) should not have any margin bottom
The second section:
h1 has a margin bottom at 1.5rem and margin top at 3rem
Inside the h1, “only 5” has a badge layout of type “info”
The div is able to make the table responsive with a break at 992px
The table has “dark” style and hover on rows

task: 3. Cards
Requirements:

You are not allow to define any styling in a CSS file, in head or inline - only Bootstrap classes
You can not change the HTML structure - only adding classes is allowed
Behaviors/styles:

The first div is a container with a break at 992px and padding of 3rem
Inside, card is in row until 576px where it will switch to column
Each card has a spacing of 1.5rem on top
The text “Coding” is a card header
Language name (card title) and description (card text) are inside a card body
Duration in hour is a card footer
Also, the button “Play with” has the “danger” layout and should open a modal
The second div is the modal:
Centered vertically and horizontally
The form has a border on top and a padding on top of 1rem:
Each items of the form are grouped
The final rendering of the form must be the same as the screen (label on the left, color style, etc..)

Task4:
Requirements:

You are not allow to define any styling in a CSS file, in head or inline - only Bootstrap classes
You can not change the HTML structure - only adding classes is allowed
Behaviors/styles:

Body background is dark
All elements are inside a div container with a break at 960px, background color light and a padding of 1rem
h1 has a margin bottom and top of 1.5rem
ul is a tabs navigation with the first item active by default
The div after the ul is the container of tabs content with a background of color white and padding of 1rem
The switch between tab contents is animated with a fade
In the tab “Discography”:
The list of discs has a grouped layout
Each disc name has a link that extends or collapses description

task5: 5. Show/Hide - screen size
Requirements:

You are not allow to define any styling in a CSS file, in head or inline - only Bootstrap classes
You can not change the HTML structure - only adding classes is allowed
Behaviors/styles:

Big title is displayed only for width screen > 768px
Small title is displayed only for width screen <= 768px
first div should:
be centered as container and take the full width when the width of the screen <= 768px
have “info color” background
have some padding on the 4 directions
have borders of the “info color” and rounded
“Left div” should:
be aligned on the left
have light text color
have light border on the bottom and right
have some padding on the 4 directions
“Middle div” should:
be aligned in the center
have light text color
have light border on the bottom, left and right
have some padding on the 4 directions
have shadow
disappear when the width of the screen <= 768px
“Right div” should:
be aligned on the right
have light text color
have light border on the bottom and left
have some padding on the 4 directions

Task6: 6. Overwrite CSS
Requirements:

You are not allow to define any styling in the head or inline of the HTML
You can not change the HTML
New styles:

btn-primary has as background color set to #E0003C and #BC1340 for hover/focus/active
btn-outline-primary has text and border color set to #E0003C
a link (no matter which color forced) has text color set to #E0003C normally, in hover and in focus
Card (card container, but also header/footer) has border color set to #E0003C and radius to 1rem
.text-muted has text color set to #8C8C8C
