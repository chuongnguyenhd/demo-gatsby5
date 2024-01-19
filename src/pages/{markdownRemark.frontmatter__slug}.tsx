import * as React from "react"
import {graphql} from "gatsby"

interface Props {
    data: {
        markdownRemark: {
            frontmatter: {
                title: string,
                date: string
            },
            html: string
        }
    }
}

export default function Template({data}: Props) {
    const {markdownRemark} = data // data.markdownRemark holds your post data
    const {html} = markdownRemark
    return (
        <div
            dangerouslySetInnerHTML={{__html: html}}
        />
    )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`