declare namespace NSP {
  export interface SysUser {
    avatar: string;
    createTime: string;
    userId: number;
    tenantId: number;
    username: string;
    phone: string;
    password: string;
  }
  export interface User {
    permissions: string[];
    roles: number[];
    sysUser: SysUser;
  }
}
