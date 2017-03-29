import {observable} from 'mobx'
let index = 0

class Store {

  @observable nightMode = false;
  @observable size = 13;
   @observable FavChange = false;
   @observable favDataSet = {};
  toggleNightMode () {
    this.nightMode = !this.nightMode;
  }

    changeFontSize (size) {
        this.size = size;
  }
  isFavChange(bool) {
    this.FavChange = bool;
  }


}


const store = new Store()
export default store