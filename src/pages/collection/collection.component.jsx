import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './collection.styles.scss'; 

import CollectionItem from '../../components/collection-item/collection-item.component';
 
import { sellectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = () => {

    // const collection = useSelector(sellectCollection);

    // console.log(collection);

    return (
        <div>
            <h2>COLLECTIONS</h2>
        </div>
    );
}

export default CollectionPage;