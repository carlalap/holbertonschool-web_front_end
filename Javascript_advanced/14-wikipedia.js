/*Task14. Simple callback
@createElement - function
@queryWikipedia -  
*/

//function accepts one argument data (String)
function createElement(data) {
    //It creates a paragraph element
    paragraph = document.createElement("p");
    // The content of the paragraph is set to data
    txt = document.createTextNode(data);
    paragraph.appendChild(txt);
    //It appends to the document body the paragraph
    document.body.append(paragraph);
}

// function it accepts one argument callback (function)
function queryWikipedia(callback) {
    //Using XMLHttpRequest, it get the article of Stack Overflow with the URL
    let request = new XMLHttpRequest();
    let URL =
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
    request.open("GET", URL);
    request.responseType = "json";

    request.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          callback(request.response.query.pages["21721040"].extract);
        }
      };
    
      request.send();
    }
    
    document.addEventListener("DOMContentLoaded", function (event) {
      queryWikipedia(createElement);
    });