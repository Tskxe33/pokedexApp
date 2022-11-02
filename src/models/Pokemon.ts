export interface PokeItem {
  name: string;
  url: string;
}

export type TypeItem = Pick<PokeItem, 'name' | 'url'>;

export interface PickerItem {
  value: string;
  label: string;
}
