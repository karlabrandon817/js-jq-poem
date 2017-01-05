var hughesPoem = ['Like', 'a', 'welcome', 'summer', 'rain,', 'humor',
    'may', 'suddenly', 'cleanse', 'and', 'cool', 'the', 'earth,', 'the', 'air',
    'and', 'you.'
];
var currentIndex = 0;

$(document).ready(function() {
    $('#poemButton').on('click', function() {
        addWord(hughesPoem);
    }); //end poemButton click function
}); //end doc ready function

var addWord = function(array) {
    var i = (currentIndex++) % array.length;
    if (currentIndex == array.length + 1) {
        currentIndex = 0;
        $('#poemDiv').html('');
        alert("You have reached the end of the poem...Click \'ok'\ to start over.");
        //sets index to 0 and clears DOM when end of poem is reached
    } //end if
    else {
        $('#poemDiv').append(array[i] + ' ');
    } //end else
}; //end addWord function
