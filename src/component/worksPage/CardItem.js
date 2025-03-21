import React from 'react'
import './cardItem.css'
import { withRouter } from 'react-router-dom';


class CardItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  

  componentDidMount () {}

  render () {
    
    const { item , history} = this.props
    const { name, text, picture,layout,id } = item
    const imageUrl = picture[0]?.url
    const navigateToDetail = () => {
      if(id===17){
        history.push(`/fashionshow`);

      }else{
        if (layout?.external) {
          // If the item layout specifies an external link, use window.location to navigate
          const externalLink = item?.description; // Adjust the property path as per your actual data structure
          if (externalLink) {
            window.open(externalLink, '_blank'); // Opens in a new tab
          }
        } else{
          // Otherwise, proceed with internal navigation
          history.push(`/work/${item.id}`);
        }
      }
     
    };

    return (
        <div className='card-item' onClick={navigateToDetail}>
          <div className='image-container'>
            <img src={imageUrl} alt={name} />
            <div className='overlay'>
              <div className='text'>
                <p>{name}</p>
                <p>{text}</p>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default withRouter(CardItem)
