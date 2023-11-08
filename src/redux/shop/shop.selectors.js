import { createSelector } from "reselect";

const selectShopReducer = (state) => state.shop;

export const selectShopData = createSelector(
    [selectShopReducer],
    shop => shop.collections
)

export const selectCollectionMap = createSelector(
    [selectShopData],
    (collections) => 
        collections.reduce( (acc, collection) => {
            const { title, items } = collection;
            acc[title.toLowerCase()] = items;
            return acc; 
        },
            {} 
        )
);

export const selectIsLoading = createSelector(
    [selectShopReducer],
    (shop) => shop.isLoading
);