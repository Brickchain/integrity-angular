import { Injectable } from '@angular/core';

@Injectable()
export class ParentService {

  private _referer: string = '';
  private _listener: Function | undefined;

  private resolvers: { [id: string]: Function; } = {};
  private rejectors: { [id: string]: Function; } = {};
  private timers: { [id: string]: any; } = [];

  constructor() {
    window.addEventListener('message', (event) => this.receiveMessage(event.data), false);
  }

  set referer(value: string) {
    this._referer = value;
  }

  get referer(): string {
    return this._referer;
  }

  set listener(value: Function | undefined) {
    this._listener = value;
  }

  get listener(): Function | undefined {
    return this._listener;
  }

  public sendMessage(message: any, timeout: number = 0): Promise<any> {
    console.log(`${this.constructor.name}.sendMessage -> ${this.referer}`, message);
    return new Promise((resolve, reject) => {
      if (typeof (message) === 'object') {
        const id = Math.random().toString(36).substring(2);
        this.resolvers[id] = resolve;
        this.rejectors[id] = reject;
        if (timeout) {
          const timeoutMessage: any = {};
          timeoutMessage['@correlationId'] = id;
          timeoutMessage['error'] = 'timeout';
          this.timers[id] = setTimeout(() => this.receiveMessage(timeoutMessage), timeout);
        }
        message['@correlationId'] = id;
        window.parent.postMessage(message, this.referer);
      } else {
        window.parent.postMessage(message, this.referer);
        resolve(message);
      }
    });
  }

  private receiveMessage(message: any) {
    console.log(`${this.constructor.name}.receiveMessage <- ${this.referer}`, message);
    const id = message['@correlationId'];
    if (id) {
      if (this.timers[id]) {
        clearTimeout(this.timers[id]);
        delete this.timers[id];
      }
      if (message.hasOwnProperty('data') && this.resolvers[id]) {
        this.resolvers[id](message.data);
      } else if (message.hasOwnProperty('error') && this.rejectors[id]) {
        this.rejectors[id](message.error);
      }
      delete this.resolvers[id];
      delete this.rejectors[id];
    } else if (this.listener) {
      this.listener(message);
    }
  }

}
