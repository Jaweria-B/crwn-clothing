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


// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     women: 4,
//     men: 5
// }

// export const sellectCollection = collectionUrlParam => {
//     createSelector(
//         [selectShopData],
//         collections => collections.find(
//             collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//         )
//     )
// }