declare namespace MKH {
  export interface Response<T> {
    code: number;
    data: T;
    msg: string | boolean | undefined;
  }
  export interface PageResponse<T> {
    code: number;
    msg: string | boolean | undefined;
    data: {
      current: number;
      size: number;
      total: number;
      records: T[];
    };
  }
  export type PageData<T> = PageResponse<T>['data'];

  export interface SystemConfig {
    name: string;
    version: string;
    env: string;
    theme: 'customer' | 'ecology' | 'tech';
    navbar: 'navbar' | 'pagename';
  }
}
