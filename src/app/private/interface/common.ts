export interface WidgetField {
  [key: string]: Fields;
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
