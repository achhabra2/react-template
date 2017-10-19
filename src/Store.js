import {observable, computed, action} from 'mobx';

class Store {
  @observable test = 'string';
  @observable menuItems;
  constructor() {
   this.menuItems = [
      {text: 'Test Item 1'},
      {text: 'Test Item 2'},
    ];
  }
}

export default Store;