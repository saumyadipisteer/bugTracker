export interface Report {
  subject: string | null;
  severity: string | '--Select--';
  status: string | '--Select--';
  describeTheBug?: string | null;
  user?: string;
  timestamp?: string;
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
