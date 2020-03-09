// 判斷是否為空
const isEmpty = (object) => {
  return object === null || object === undefined || Object.keys(object).length === 0
}

//submit 重組資料{} 裝在 陣列裡
const combinSubmitDataToArray = (object, profile) => {
  let submit = [];
  object.forEach(obj => {
    let newData = Object.assign({}, profile);
    Object.keys(newData).forEach(key => {
      newData[key] = obj[key] === undefined ? newData[key] : obj[key];
    });
    submit.push(newData);
  });
  return submit;
};

// 金錢加上小數點跟逗號
const formatAmount = (amount) => {
  const value=formatAmountToNumber(amount);
  if (value) {
    return value
      .toString()
      .replace(/^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/, function (
        all,
        pre,
        groupOf3Digital
      ) {
        return pre + groupOf3Digital.replace(/\d{3}/g, ",$&");
      });
  } else {
    return '';
  }
}

const formatAmountToNumber = (amount) => {
  let value = amount.replace(/,/g, "");
  let numberReg = new RegExp(/^((?!(0))^\d+$)$/);
  let isNumber = numberReg.test(value);
  if (isNumber) {
    return parseInt(value)
  } else {
    return false
  }
}

const randomElement = (arr = []) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const kebab = (str) => {
  return (str || '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

const toggleFullScreen = () => {
  let doc = window.document;
  let docEl = doc.documentElement;

  let requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  let cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  }
  else {
    cancelFullScreen.call(doc);
  }
};

export default {
  randomElement,
  toggleFullScreen,
  kebab,
  isEmpty,
  combinSubmitDataToArray,
  formatAmount,
  formatAmountToNumber
};