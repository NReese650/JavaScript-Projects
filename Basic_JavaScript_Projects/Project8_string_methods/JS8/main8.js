function poem() {                                                       //creating a function that uses the concat method
    var part_1 = "old pond, ";
    var part_2 = "frog leaping, ";
    var part_3 = "splash. ";
    var whole_poem = part_1.concat(part_2, part_3);
    document.getElementById("Concatenate").innerHTML = whole_poem;
}

function slice_Method() {                                               //Creating a function that uses the slice method. 
    var Sentence = "Early to bed and early to rise"                     //Creating a sentence
    var Section = Sentence.slice(6,13);                                 //Targeting which part of the sentence to display
    document.getElementById("Slice").innerHTML = Section;
}

function oldQuote() {                                                   //Creating a function that uses the toUpperCase method
    var quote = "The happiness of your life depends upon the quality of your thoughts.";    //Creating a sentence
    var upperCaseQuote = quote.toUpperCase();                           //Using the toUpperCase method
    document.getElementById("quote").innerHTML = upperCaseQuote;
  }
  

  function anotherOldQuote() {                                          //Creating a function that uses the search method
    var quote = "The secret of getting ahead is getting started.";      //Putting a sentence in the variable
    var word = "ahead";                                                 //Defining which word I want to search for
    var position = quote.search(word);                                  //Using the search method to find the position of the defined word
    document.getElementById("result").innerHTML = "The word '" + word + "' is located at position " + position + " in the quote: " + quote;
  }
  

  function string_method() {                                            //Creating function that uses the tostring method
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
  }


  function precision_method() {                                            //Creating function that uses the toprecision method
    var X = 112938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
  }

  function fixed_method() {                                                 //Creating a function that uses the tofixed method
    var num = 3.14159;
    var result = num.toFixed(2);
    document.getElementById("Fixed").innerHTML = result;
  }
  
  function valueOf_method() {                                             //Creating a function that uses the valueOf method
    var num = 42;
    var result = num.valueOf();
    document.getElementById("ValueOf").innerHTML = result;
}
