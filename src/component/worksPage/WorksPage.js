import React from 'react'
import Nav from '../nav/nav.js'
import CardItem from './CardItem.js'
import './workPage.css'
import axios from 'axios'
import Footer from '../footer/Foot.js'
import Loading from '../loader/Loading.js'

class WorksPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      loading: true
    }

  }

  componentDidMount () {
    window.scrollTo(0, 0)
    const self=this
    axios(
      'https://sheyou-backend.herokuapp.com/portfolios?id_gt=1&_sort=id:asc',
      {
        method: 'get'
      }
    ).then(function (res) {
      if (res.status === 200) {
        console.log(res.data)
        const displayItems = res.data.filter(item => item.display !== undefined && item.display !== null && item.display !== '');
        const nonDisplayItems = res.data.filter(item => item.display === undefined || item.display === null || item.display === '');
        const sortedItems = [...displayItems, ...nonDisplayItems];
        self.setState({ items: sortedItems, loading: false });
      } else {
        alert('something went wrong :(')
        self.setState({ loading: false }); // Also update loading state in case of error
      }
    })
  }

  render () {
    const { items, loading } = this.state;
    console.log(items)
    if (loading) {
      return <Loading/>
    }
    return (
      <div>
        <Nav />

        <div className='item-group'>
          {this.state.items.map((item, index) => (
            <CardItem key={index} item={item} />
          ))}
        </div>
        <Footer />
      </div>
    )
  }
}

export default WorksPage
