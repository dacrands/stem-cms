import React from "react"
import 'bootstrap/dist/css/bootstrap.css';

export default ({ data }) => (
  <div>
    <header className="jumbotron">
      <h1 className="display-4">Bergen S.T.E.M.</h1>
      <p className="lead">Science, Technology, Engineering, Mathematics</p>
      <a className="btn btn-dark" href="#" role="button">Learn more</a>
    </header>
    {
      data.allMarkdownRemark.edges[0].node.frontmatter.title
    }
  </div>
)

export const blogInfoQuery = graphql`
  query blogInfoQuery{
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
        }
      }
    }
  }

`