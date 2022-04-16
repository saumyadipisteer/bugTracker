import { Ingredient } from './ingredient';

export interface Users {
  [key: string]: User[];
}

export interface User {
  id?: number;
  author: string;
  username: string;
  recipes: Recipe[];
}



export interface UserCredentials {
  id?: string;
  username: string | undefined;
  password: string | undefined;
  timestamp?: string | undefined;
}

export interface Recipe {
  name: string;
  url: string;
  author: string,
  username: string,
  createdOn: string,
  ingredients: Ingredient[];
}

export interface Details {
  name: string | null;
  author: string | null;
  url: string | null;
}

export interface EditableData {
  index: number;
  data: Ingredient;
}
