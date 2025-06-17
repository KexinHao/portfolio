// Filters
filterSelection("all");

// Adds the "show" class to selected elements, and removes it from unselected
function filterSelection(c) {
  let elements = document.querySelectorAll('.filterDiv');
  elements.forEach((el) => {
    if( c == 'all' || el.classList.contains(c) )
      el.classList.add('show')
    else
      el.classList.remove('show');
  });
}

// w3AddClass and w3RemoveClass is not needed

// Add active class to the current control button (highlight it)
let btns = document.querySelectorAll("#myBtnContainer btn");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    var current = document.querySelector("active");
    current.classList.remove('active');
    this.classList.add('active');
  });
});

$(function(){
   $('.title').hover(function(){
       $('#image' + $(this).attr('id')).show();
       $('.right-column > div').not('#image' + $(this).attr('id')).hide();

      });
   })
