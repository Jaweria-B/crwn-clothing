import { Routes, Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = () => {
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