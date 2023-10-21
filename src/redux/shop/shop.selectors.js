import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
    [selectShop],
    shop => shop.collections
)


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