import './directory.styles.scss';

import MenuItem from "../menu-item/menu-item.component";


const Directory = ({sections}) => {
  return (
    <div className="directory-menu"> 
      {
          sections.map((section) => (
            <MenuItem key={section.id} section={section} />
            )    
          )
      }
    </div>
  )
}

export default Directory;