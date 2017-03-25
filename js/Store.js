import {observable} from 'mobx'
let index = 0

class Store {

  @observable nightMode = false;
  @observable size = 13;
  toggleNightMode () {
    this.nightMode = !this.nightMode;
  }

    changeFontSize (size) {
        this.size = size;
  }


}


const store = new Store()
export default store