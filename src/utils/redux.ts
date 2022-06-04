/**
 * redux 的发布订阅模式
 */

export const createStore = (reducer) => {
  const list = [];
  let state = reducer({}, {});

  function subscribe(callback: (any) => void) {
    list.push(callback);
  }

  function dispatch(action: Record<string, any>) {
    state = reducer(state, action);
    list.forEach((cb) => {
      cb?.();
    });
  }

  return {
    dispatch,
    subscribe,
    state
  };
};
