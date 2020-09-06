import React from "react"
import { graphql } from "gatsby"

const Product = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        title
        price
      }
    }
  }
`

export default Product
