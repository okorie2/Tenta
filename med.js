function myFunction() {
    var select = document.getElementById('search');
    var value = select.options[select.selectedIndex].value;
    console.log(value);
    document.getElementById("myForm").setAttribute("action", value);  
};