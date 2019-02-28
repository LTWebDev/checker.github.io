let button = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul1 = document.getElementById("ul1");

//function to return the length of the input to make sure its not empty
function inputLength() {
    return document.getElementById('userInput').value.length;
}

//MAIN FUNCTION
function createListElement() {
        
    //Add list item
    let li = document.createElement("li");
    li.classList.add('list-group-item');
    li.appendChild(document.createTextNode(input.value));
    ul1.appendChild(li);
    input.value = "";
    
    //function to add a class to li element that will add a cross over red
    function toggleDone() {
        li.classList.toggle('done');
    }
    //event to cross a list item on click
    li.addEventListener('click', toggleDone);
    
    //Add a delete button
    let delBtn = document.createElement('button');
    let delX = document.createElement('i');
    delX.classList.add('fas', 'fa-times');
    delBtn.classList.add('custBtn');
    delBtn.appendChild(delX);
    delBtn.addEventListener('click', delItem);
    li.append(delBtn);
    
    // Delete item
    function delItem() {
        li.remove();
    }
}


//if add is clicked it create list, list created from input value
function addListAfterClick () {
    if(inputLength() > 0) {
        createListElement();
    }
}
//if enter is pressed it create list, list created from input value
function addListAfterKeyPress(event) {
    if(inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress); 

$(function()
{
    $(document).on('click', '.btn-add', function(e)
    {
        e.preventDefault();

        var controlForm = $('.controls form:first'),
            currentEntry = $(this).parents('.entry:first'),
            newEntry = $(currentEntry.clone()).appendTo(controlForm);

        newEntry.find('input').val('');
        controlForm.find('.entry:not(:last) .btn-add')
            .removeClass('btn-add').addClass('btn-remove')
            .html('<span>-</span>');
    }).on('click', '.btn-remove', function(e)
    {
		$(this).parents('.entry:first').remove();

		e.preventDefault();
		return false;
	});
});
