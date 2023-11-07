import { CATEGORIES_ACTION_TYPES } from "./shop.types";
import { createAction } from "../../reducer/reducer.utils";


export const setCategories = (collectionArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, collectionArray);
