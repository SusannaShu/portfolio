import React from 'react'
import Nav from '../nav/nav.js'
import CardItem from './CardItem.js'
import './workPage.css'
import axios from 'axios'
import Footer from '../footer/Foot.js'
import Loading from '../loader/Loading.js'
import { Label, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class WorksPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      workTags: [],
      loading: true,
      selectedTags: []
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({ loading: true });
    try {
      const [portfoliosResponse, workTagsResponse] = await Promise.all([
        axios.get(
          'https://sheyou-backend.herokuapp.com/portfolios?id_gt=1&_sort=id:asc'
        ),
        axios.get('https://sheyou-backend.herokuapp.com/work-tags')
      ])

      if (
        portfoliosResponse.status === 200 &&
        workTagsResponse.status === 200
      ) {
        const displayItems = portfoliosResponse.data.filter(
          item =>
            item.display !== undefined &&
            item.display !== null &&
            item.display !== ''
        )
        const nonDisplayItems = portfoliosResponse.data.filter(
          item =>
            item.display === undefined ||
            item.display === null ||
            item.display === ''
        )
        const sortedItems = [...displayItems, ...nonDisplayItems]

        this.setState({
          items: sortedItems,
          workTags: workTagsResponse.data,
          loading: false
        })
      } else {
        throw new Error('Failed to fetch data')
      }
    } catch (error) {
      console.error('Error fetching data:', error)
      alert('Something went wrong :(')
      this.setState({ loading: false })
    }
  }

  handleTagClick = async (tagName) => {
    const { selectedTags } = this.state;
    let newSelectedTags;

    if (selectedTags.includes(tagName)) {
      newSelectedTags = selectedTags.filter(tag => tag !== tagName);
    } else {
      newSelectedTags = [...selectedTags, tagName];
    }

    this.setState({ selectedTags: newSelectedTags, loading: true });

    if (newSelectedTags.length === 0) {
      // If no tags are selected, fetch all data
      await this.fetchData();
    } else {
      try {
        const queryString = newSelectedTags.map(tag => `tagName=${tag}`).join('&');
        const response = await axios.get(`https://sheyou-backend.herokuapp.com/work-tags?${queryString}`);
        
        if (response.status === 200) {
          const filteredItems = response.data.flatMap(tag => tag.portfolios);
          // Remove duplicates based on item id
          const uniqueFilteredItems = Array.from(new Set(filteredItems.map(item => item.id)))
            .map(id => filteredItems.find(item => item.id === id));
          this.setState({ items: uniqueFilteredItems, loading: false });
        } else {
          throw new Error('Failed to fetch filtered data');
        }
      } catch (error) {
        console.error('Error fetching filtered data:', error);
        alert('Something went wrong while filtering :(');
        this.setState({ loading: false });
      }
    }
  }

  render() {
    const { items, workTags, loading, selectedTags } = this.state;
    
    if (loading) {
      return <Loading />
    }
    
    return (
      <div>
        <Nav />
        
        <div className='work-tags' style={{
          display: 'flex',
          flexWrap: 'wrap',
          paddingTop: '80px',
          gap: '8px',
          backgroundColor: 'pink',
          justifyContent: 'center'
        }}>
          {workTags.map((tag) => (
            <Label 
              key={tag.id} 
              as='a' 
              color={selectedTags.includes(tag.tagName) ? 'pink' : null}
              onClick={() => this.handleTagClick(tag.tagName)}
            >
              {selectedTags.includes(tag.tagName) && <Icon name='close' style={{marginRight: '5px'}}/>}
              {tag.tagName}
            </Label>
          ))}
        </div>

        <div className='item-group'>
          {items.map((item, index) => (
            <CardItem key={index} item={item} />
          ))}
        </div>
        <Footer />
      </div>
    )
  }
}

export default WorksPage
