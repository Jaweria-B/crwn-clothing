import { useSelector } from 'react-redux';
import { Fragment } from 'react';

import './collection-overview.styles.scss';

import CollectionPreview from '../collection-preview/collection-preview.component';
import Spinner from '../with-spinner/with-spinner.compnent';

import { selectCollectionMap, selectIsLoading } from '../../redux/shop/shop.selectors';

const CollectionsOverview = () => {
    const collectionsMap = useSelector(selectCollectionMap);
    const isLoading = useSelector(selectIsLoading);

    return (
        <Fragment>
            {
                isLoading ? (
                    <Spinner/>
                ) 
                :
                (
                    <div className="collections-overview">
                    {
                        Object.keys(collectionsMap).map((title) => {
                            const products = collectionsMap[title];
                            return (
                                <CollectionPreview key={title} title={title} items={products} />
                            );
                        })
                        // collections.map( ({id, ...otherCollectionProps} ) => (
                        //     <CollectionPreview key={id} {...otherCollectionProps}/>
                        // ))
                    }
            </div>
                )
            }
            
        </Fragment>
    );
}

export default CollectionsOverview;