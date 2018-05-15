/* global cuid */
// eslint-disable-next-line no-unused-vars
const STORE = (function() {
    const items = [
        {name: 'apple', checked: false},
        {name: 'oranges', checked: false},
        {name: 'milk', checked: true},
        {name: 'bread', checked: false}
    ]
    const hideChecked = false;
    const searchItem = '';

    function findById(id) {
        return this.items.find(item => item.id === id);
            }

    function addItem(name) {
        try {
            Item.validateName(name);
            Item.create(name);
            this.items.push({id: cuid(), name, checked: false})
        }
        catch(e) {
        console.log('Cannot add item: ' + e.message);
        }
    }
    function findAndToggleChecked(id) {
        const currentItem = this.findById(id);
        this.item = this.items.map(function(item){
            if (items.checked == false) {
                return true;
            }
            return false;
        })
    }
    
    function findAndUpdateName(id, newName) {
        try {
            Item.validateName(newName);
        }
        catch(e) {
            console.log('Cannot update name: ' + e.message);
        }
        const currentItem = this.findById(id);
        currentItem.name = newName;
        this.items = this.items.map(function(item){
            if (item.id === id) {
                return currentItem;
            }
            return item;
        }); 
    }

    function findAndDelete(id) {
        this.items = this.items.filter(item => {
            return item.id !== id;
        });
    }

    function toggleCheckedFilter() {
        this.hideCheckedItems = !this.hideCheckedItems;
    }

    function setSearchTerm(val) {
        console.log('im here');
        this.searchTerm = val;
        console.log(this.setSearchTerm);
    }
  
    return {
      items,
      hideCheckedItems,
      searchTerm,
      findAndDelete,
      findAndToggleChecked,
      findAndUpdateName,
      findById,
      addItem,
      toggleCheckedFilter,
      setSearchTerm
  }
}());