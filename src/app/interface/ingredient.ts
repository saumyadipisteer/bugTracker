export interface Ingredient {
    name: string | null,
    quantity: number,
    unit: string | null,
}

export interface Unit {
  name: string;
  code: string;
}

export interface Fields {
  [key: string]: Field;
}

export interface Field {
  label: string;
  field: string;
  required: boolean;
  disabled: boolean;
}
