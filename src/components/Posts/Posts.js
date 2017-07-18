import React, { Component } from 'react';

class Posts extends Component {
  componentDidMount() {
    this.props.clearSearch()
  }
  render() {
    return (
      <div>
      <h3> Birthday Posts</h3>
      <p>{this.props.idea}</p>
      // </div>
      // <Router>
      //   <div>
      //       <Link to="/comments">Comments</Link>
      //     <main>
      //       <Route
      //         path="/comments"
      //         render={() => {
      //           return(
      //             <Comments />
      //           )
      //         }}
      //       />
      //       </main>
      //     </div>
      //   </Router>
    );
  }
}



export default Posts
