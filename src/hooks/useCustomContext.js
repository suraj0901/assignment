import { useEffect, useState } from "react";

export default (state, { local, name }) => {
  let list = [];
  if (local) {
    const item = localStorage.getItem(name);
    if (!item) localStorage.setItem(name, state);
    else {
      state = parseInt(item);
    }
  }
  const setState = (value) => {
    if (typeof value === "function") value = value(state);
    state = value;
    localStorage.setItem(name, state);
    for (const render of list) {
      render((val) => !val);
    }
  };

  return (shouldListen = true) => {
    const rerender = useState(false)[1];
    useEffect(() => {
      if (shouldListen) {
        list.push(rerender);
        return () => {
          list = list.filter((l) => l !== rerender);
        };
      }
    }, []);
    return [state, setState];
  };
};
