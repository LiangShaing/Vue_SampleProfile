export const state = () => ({
  title:"Armitech",
  locales: ['en', 'zh'],
  locale: 'zh',
  drawer: true,
  authData: [{
    id: '',
    password: '',
    routh: 'index'
  }],
  iphoneViewData:{
    title:"",
    child:[]
  }
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },

  addAccount(state, authData) {
    state.authData.push(authData)
  },
  deleteAccount(state, id) {
    let index = null;
    let arr=Object.assign([],state.authData)
    arr.forEach((obj, i) => {
      if (obj.id === id) {
        index = i
      }
    })
    delete arr[index];
    state.authData=arr
  },
  auth(state, val) {
    state.auth = val
  },
  toggleDrawer(state) {
    state.drawer = !state.drawer
  },
  drawer(state, val) {
    state.drawer = val
  },
  // iphoneViewData(state, val) {
  //   state.iphoneViewData.title = val.title
  // },
  // addIphoneViewDataChild(state, val){
  //   state.iphoneViewData.child.push(val);
  // },
  // updateIphoneViewDataChild(state, val){
  //   let obj= JSON.parse(JSON.stringify(state.iphoneViewData));
  //   const match = (object) => object.id == val.id;
  //   let index=obj.child.findIndex(match);
  //   obj.child.splice(index, 1, val);
  //   state.iphoneViewData=obj;
  // },
  // removeIphoneViewDataChild(state, val){
  //   let obj= JSON.parse(JSON.stringify(state.iphoneViewData));
  //   const match = (object) => object.id == val;
  //   let index=obj.child.findIndex(match);
  //   obj.child.splice(index, 1);
  //   state.iphoneViewData=obj;
  // },
  changeIphoneViewData(state, val){
    state.iphoneViewData= JSON.parse(JSON.stringify(val));
  }

}


