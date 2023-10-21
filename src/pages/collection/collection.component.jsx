import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './collection.styles.scss'; 

import CollectionItem from '../../components/collection-item/collection-item.component';
 
import { selectCollectionMap } from '../../redux/shop/shop.selectors';

const CollectionPage = () => {

    // const collection = useSelector(sellectCollection);

    // console.log(collection);

    const { collection } = useParams();
    const collectionMap = useSelector(selectCollectionMap);
    const [ products, setProducts ] = useState(collectionMap[collection]);

    useEffect(
        () => {
            setProducts(collectionMap[collection]);
        },
        [collection, collectionMap]
    );

    return (
        <Fragment>
            <div className='collection-page'>
                <h2 className='title'> {collection.toUpperCase()} </h2>
                <div className="items">
                    {
                        products && 
                            products.map(
                                (product) => (
                                    <CollectionItem key={product.id} product={product}/>
                                )
                            )
                    }
                </div>
            </div>
        </Fragment>
    );
}

export default CollectionPage;