import { ReactNode } from 'react';

export enum Category {
  BREAKFAST = 'Pequeno-Almoço',
  RED_MEAT = 'Carnes Vermelhas',
  POULTRY = 'Aves',
  FISH = 'Peixes e Marisco',
  SNACKS = 'Snacks',
  DESSERT = 'Sobremesas',
  KIDS = 'Crianças',
  EXTRAS = 'Extras & Molhos'
}

export interface Ingredient {
  item: string;
  quantity?: string;
}

export interface Recipe {
  id: string;
  title: string;
  category: Category;
  prepTime: string;
  calories: number; // approximate
  protein?: number; // grams
  fat?: number; // grams
  ingredients: string[]; // Simplification for list display
  instructions: string[];
  tips?: string;
  image: string; // Direct image URL specifically matching the recipe
  isFavorite?: boolean; // UI state
}

export type ViewState = 'recipes' | 'guide' | 'plan' | 'favorites' | 'shopping';

export interface GuideSection {
  id: string;
  title: string;
  content: string | ReactNode;
}

export interface ShoppingItem {
  id: string;
  text: string;
  checked: boolean;
  recipeTitle?: string;
}