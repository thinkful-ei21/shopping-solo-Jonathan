// 'use strict';
// /* eslint-env jquery */

// // const STORE = {
// //   items: [
// //     {name: 'apple', checked: false},
// //     {name: 'oranges', checked: false},
// //     {name: 'milk', checked: true},
// //     {name: 'bread', checked: false}
// //   ],
// //   hideChecked: false,
// //   searchItem: '',
// // }

// function addNewShoppingListItem(itemName){
//   STORE.push({name: itemName, Checked: false});
// }

// function toggleCheckedForListItem(itemIndex) {
//   STORE[itemIndex].checked = !STORE[itemIndex].checked;
// }

// function deleteListItem(itemIndex){
//   STORE.splice(itemIndex, 1);
// }

// function filterCheckedListItem(){
//   return STORE.filter((item) => !item.checked);
// }

// function filterSearchedListItem(searchItem){
//   //console.log('im here')
//   return STORE.filter((item) => item.name == searchItem);


// }

// function generateItemEl(item, itemIndex, template) {
//   return `
//     <li class="js-item-index-element" data-item-index="${itemIndex}">
//       <span class="shopping-item js-shopping-item ${item.checked ? "shopping-item__checked" : ''}" contenteditable="true">${item.name}</span>
//       <div class="shopping-item-controls">
//         <button class="shopping-item-toggle js-item-toggle">
//           <span class="button-label">check</span>
//         </button>
//         <button class="shopping-item-delete js-item-delete">
//           <span class="button-label">delete</span>
//         </button>
//       </div>
//     </li>`
// }

// function generateShoppingListItemsString(shoppingList) {
//   const items = shoppingList.map(generateItemEl) 
//   return items.join('');
// }

// function getItemIndexFromEl(item) {
//   const itemIndexString = $(item).closest('.js-item-index-element').attr('data-item-index');
//   return parseInt(itemIndexString, 10);
// } 

// function renderShoppingList(data) {
//   const list = data ? data : STORE;
//   const shoppingListItemString = generateShoppingListItemsString(list);
//   $('.shopping-list').html(shoppingListItemString);
//   }

// function handleItemInput(){
//   $('#js-shopping-list-form').submit(function(event){
//     event.preventDefault();
//     const newItem = $('.js-shopping-list-entry').val();
//     $('.js-shopping-list-entry').val('');
//     addNewShoppingListItem(newItem);
//     renderShoppingList();
//   });
// }

// function handleItemToggle() {
//     $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
//     const itemIndex = getItemIndexFromEl(this);
//     toggleCheckedForListItem(itemIndex);
//     renderShoppingList();
//   });
// }

// function handleItemDelete() {
//   $('.shopping-list').on('click', '.shopping-item-delete', function(event){
//     const itemIndex = getItemIndexFromEl(this); 
//     deleteListItem(itemIndex);
//     renderShoppingList();
//   });
// }

// function handleDisplayToggle() {
//   $('#js-shopping-list-form').on('change', '.js-display-toggle', function(event) {
//     const checkBox = $(this).is(':checked');
//     let data = [];
//     if (checkBox) {
//       data = filterCheckedListItem(checkBox);
//     }
//     else{
//       data = STORE;
//     }
//     renderShoppingList(data);
//   });
// }

// function handleDisplaySearch() {
//   $('#js-search-list-form').submit(function(event){
//     event.preventDefault();
//     const searchItem = $('.js-search-entry').val();
//     $('.js-search-entry').val('');
//     filterSearchedListItem(searchItem);
//     let data = [];
//     if (searchItem !== ''){
//       data = filterSearchedListItem(searchItem)
//     }
//     else {
//       data = STORE
//     }
//     renderShoppingList(data);
//    // renderShoppingList();
//   });
// }

// function handleClearSearch() {
//  // $('#js-clear-search-form').submit(function(event){
    
// }

/* global shoppingList, store */
// eslint-disable-next-line no-unused-vars
$(function(){
  shoppingList.bindEventListeners();
  shoppingList.render();
});