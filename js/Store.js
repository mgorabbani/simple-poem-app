import {observable} from 'mobx'
let index = 0

class Store {

  @observable nightMode = false;
  @observable size = 13;
   @observable love = true;
   @observable favDataSet = {};
  toggleNightMode () {
    this.nightMode = !this.nightMode;
  }

    changeFontSize (size) {
        this.size = size;
  }
  onLovePress() {
    this.love = !this.love;
  }


}


const store = new Store()
export default store