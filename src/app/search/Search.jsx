import React from 'react'
import searchActions from './searchActions'

const Foo = React.createClass({
  handleSearch(){
    searchActions.search(this.refs.searchText.value)
  },
  render(){

    console.log('this.props.artists', this.props.artists)

    return (
      <div>
        <input type="text" ref="searchText"/>
        <button onClick={this.handleSearch}>Search</button>
        <p>
          Found {this.props.artists.length} artists
        </p>
      </div>
    )
  }
})

export default Foo