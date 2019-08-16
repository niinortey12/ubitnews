{"filter":false,"title":"articles.js","tooltip":"/blog/src/temolates/articles.js","undoManager":{"mark":2,"position":2,"stack":[[{"start":{"row":0,"column":0},"end":{"row":29,"column":1},"action":"insert","lines":["import React from 'react'","import { Link, graphql } from 'gatsby'","import Img from 'gatsby-image'","import Layout from '../components/layout' ","","const ArticleTemplate1 = ({ data }) => (","  <Layout>","    <h1>{data.strapiArticles.title}</h1>","    <Img fixed={data.strapiArticles.image.childImageSharp.fixed}/>","    <p>{data.strapiArticles.content}</p>","  </Layout>",")","","export default ArticleTemplate1","","export const query = graphql`","  query ArticleTemplate($id: String!) {","    strapiArticles(id: {eq: $id}) {","      title","      content","      image {","          childImageSharp {","            fixed(width: 200, height: 125) {","              ...GatsbyImageSharpFixed","            }","          }","        }","    }","  }","`"],"id":1}],[{"start":{"row":13,"column":30},"end":{"row":13,"column":31},"action":"remove","lines":["1"],"id":2}],[{"start":{"row":5,"column":21},"end":{"row":5,"column":22},"action":"remove","lines":["1"],"id":3}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":5,"column":21},"end":{"row":5,"column":21},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":121,"mode":"ace/mode/javascript"}},"timestamp":1565887943482,"hash":"4780c1ed70f2b460d888d948f6c1e9ef4672dbb4"}