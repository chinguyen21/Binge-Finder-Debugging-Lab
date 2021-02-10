import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';
import TVShow from './TVShow'

class TVShowList extends Component {

  mapAllShows = () => {
    if (!!this.props.searchTerm){
      return this.props.shows.filter((s) => s.name.toLowerCase().includes(this.props.searchTerm))
      }
    return this.props.shows
  }

  render() {
    return (
      <div className="TVShowList">
        <Grid>
          {this.mapAllShows().map( (s)=> <TVShow show={s} key={s.id} selectShow={this.props.selectShow}/>)}
        </Grid>
      </div>
    )
  }

}

export default TVShowList;
