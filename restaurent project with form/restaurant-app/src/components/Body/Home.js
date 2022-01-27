import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from './Loading';

const mapStateToProps = state => {
      console.log("Home mapStateToProps", state)
      return {
            a: state.dishes,
            c: state.comments

      }
}

class Home extends Component {
      componentDidMount() {
            // console.log('Home State: ', this.state);
            // console.log("Home Props: ", this.props);
      }
      render() {
            document.title = "Restaurent";
            return (
                  <div>
                        <Loading />

                  </div>
            );
      }
}
export default connect(mapStateToProps)(Home);