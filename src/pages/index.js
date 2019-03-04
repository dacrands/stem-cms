import React from "react"
import Navbar from "../components/Navbar"
import Link from 'gatsby-link'

import 'bootstrap/dist/css/bootstrap.css';

const Index = ({ data }) => (
  <div>
    <Navbar />
    <header className="jumbotron">
      <h1 className="display-4">Bergen S.T.E.M.</h1>
      <p className="lead">Science, Technology, Engineering, Mathematics</p>
      <a className="btn btn-dark" href="#" role="button">Learn more</a>
    </header>
    <div className="container">
      {
        data.allMarkdownRemark.edges.map(blog => (
          <Link style={{ marginBottom: "1rem" }} to={blog.node.frontmatter.path} className="card">
            <div className="card-body">
              <h5 className="card-title">
                {blog.node.frontmatter.title}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {blog.node.frontmatter.date}s
              </h6>
              
            </div>
          </Link>
        ))
      }
    </div>
  </div>
)

export default Index

export const blogInfoQuery = graphql`
  query blogInfoQuery{
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
  }

`