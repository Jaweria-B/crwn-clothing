import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import { fetchCategoriesStartAsync } from '../../redux/shop/shop.actions';

const ShopPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchCategoriesStartAsync());
    }, [dispatch]);

    return(
        <div className='shop-page'>
            <Routes>
                <Route index
                   element={<CollectionsOverview />}
                />
                <Route path=':collection' 
                  element={<CollectionPage />}
                />
            </Routes>
        </div>
    )
}
export default ShopPage;