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
        self.setState({ items: res.data, loading: false })
      } else {
        alert('something went wrong :(')
        this.setState({ loading: false }); // Also update loading state in case of error

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

        <div class='item-group'>
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
