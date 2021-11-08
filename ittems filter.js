List = ['err', 23, 44, 5, 'err', 66, 23, 55, 'err']
function filter_list(l) {
    const newList = [];
    for (let i = 0; i < l.length; i++) {
      if (typeof l[i] !== 'number') continue;
        newList.push(l[i]);
    }
    return newList;
  }

  const x = filter_list(List);
  console.log(x);