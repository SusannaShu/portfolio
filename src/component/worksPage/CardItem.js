import React from 'react'
import './cardItem.css'

class CardItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {}

  render () {
    const { item } = this.props
    const { name, text, picture } = item
    const imageUrl = picture[0]?.url

    return (
        <div className='card-item'>
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

export default CardItem
