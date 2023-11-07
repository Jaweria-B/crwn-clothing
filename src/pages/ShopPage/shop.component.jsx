import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import { getCategoriesAndDocuments } from '../../firebase/firebase.utils';

import { setCategories } from '../../redux/shop/shop.actions';

const ShopPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      const getCategoriesMap = async () => {
        const collectionsArray = await getCategoriesAndDocuments('collections');
        // console.log(collectionsArray);
        dispatch(setCategories(collectionsArray));
      };
  
      getCategoriesMap();
    }, []);

    return(
        <div className='shop-page'>
            <Routes>
                <Route index element={<CollectionsOverview/>}/>
                <Route path=':collection' element={<CollectionPage/>}/>
            </Routes>
        </div>
    )
}
export default ShopPage;