const elForm = document.querySelector('.form');
const elInput = elForm.querySelector('.input');
const elInputCost = elForm.querySelector('.cost');
const elList = document.querySelector('.list');
const elSearchForm = document.querySelector('.search-form')
const elSearchInput = document.querySelector('.search-input');

// console.log(elForm, elInput, elInputCost, elList);

var Todos = [
  {
    title: 'Badan tarbiya',
    count: '06:00',
  },
  {
    title: 'Nonushta',
    count: '06:30',
  },
  {
    title: 'Ertalabki sayr',
    count: '07:00',
  },
  {
    title: 'Tushlik',
    count: '13:00',
  },
  {
    title: 'Ishdan qaytish',
    count: '18:00',
  },
  {
    title: 'Kechki ovqat',
    count: '19:00',
  },
  {
    title: 'Madaniy hordiq',
    count: '20:00',
  },
  
];

// console.log(Orders);


function renderTodos(Todos) {
  elList.innerHTML = '';
  
  Todos.forEach(function(item){
    var liElement = document.createElement('li')
    liElement.classList.add('item');
    var costElement = document.createElement('p')
    costElement.classList.add('time')
    
    var titleElement = document.createElement('p')
    
    
    // console.log(liElement, titleElement, costElement);
    
    titleElement.textContent = item.title;
    costElement.textContent = item.count;
    
    liElement.appendChild(titleElement);
    liElement.prepend(costElement);
    
    elList.appendChild(liElement);
  })
}

renderTodos(Todos);


elForm.addEventListener('submit' , function (evt){
  evt.preventDefault();
  
  var inputValue = elInput.value.trim();
  var inputValueCost = elInputCost.value;
  
  var new_obj = {
    title: inputValue,
    count: inputValueCost,
  };
  
  Todos.unshift(new_obj);
  
  renderTodos(Todos);

  elInput.value = '';
	elInputCost.value = '';

});

elSearchForm.addEventListener('submit' , function (evt){
  evt.preventDefault();

	const SearchInputValue = elSearchInput.value.trim().toLowerCase();
  // console.log(SearchInputValue);

  let searchedToDo = Todos.filter(function (item){
    return item.title.toLowerCase() == SearchInputValue
  });

  // console.log(searchedToDo);

  renderTodos(searchedToDo);
});
