/**
 * eventBus 的发布订阅模式
 */

type List = Array<(any) => void>;
interface IBus {
  list: Record<string, List>;
  on: (name: string, callback: (any) => void) => void;
  emit: (name: string, args: Array<any>) => void;
}

class Bus implements IBus {
  list = {};
  constructor() {
    this.list = {};
  }
  on(name, callback) {
    this.list[name] = (this.list[name] || []).concat(callback);
  }
  emit(name, ...args) {
    const callbacks = this.list[name] || [];
    callbacks.forEach((fn) => {
      fn.apply(this, args);
    });
  }
}

const $bus = new Bus();

export default $bus;
