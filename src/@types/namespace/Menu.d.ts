declare namespace NSP {
  export interface Menu {
    id: number;
    label: string;
    name: string;
    parentId: number;
    path: string;
    sort?: number;
    spread?: boolean;
    type?: string;
    children?: Menu[];
    icon?: string | null;
    [key: string]: any;
  }
}
