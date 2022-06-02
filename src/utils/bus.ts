type List = Array<(any) => void>;

class Bus {
  list: Record<string, List>;
  constructor() {
    this.list = {};
  }
  on(name: string, callback: (any) => void) {
    this.list[name] = (this.list[name] || []).concat(callback);
  }
  emit(name: string, ...args: Array<any>) {
    const callbacks = this.list[name] || [];
    callbacks.forEach((fn) => {
      fn.apply(this, args);
    });
  }
}

const $bus = new Bus();

export default $bus;
