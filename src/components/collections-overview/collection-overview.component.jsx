import { useSelector } from 'react-redux';

import './collection-overview.styles.scss';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { selectShopData } from '../../redux/shop/shop.selectors';

const CollectionsOverview = () => {
    const collections = useSelector(selectShopData);

    return (
        <div className="collections-overview">
            {
                collections.map( ({id, ...otherCollectionProps} ) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
        </div>
    );
}

export default CollectionsOverview;