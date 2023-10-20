import { useSelector } from 'react-redux';

import './directory.styles.scss';

import MenuItem from "../menu-item/menu-item.component";

import { selectDirectorySections } from '../../redux/directory/directory.selectors';


const Directory = () => {
  const categories = useSelector(selectDirectorySections);
  return (
    <div className="directory-menu"> 
      {
          categories.map((category) => (
            <MenuItem key={category.id} section={category} />
            )    
          )
      }
    </div>
  )
}

export default Directory;