import React from "react"
import "../styles/post.css"
import Layout from "../components/layout"
import Seo from "../components/seo";


export default function Post({ pageContext }) {
    const { title, updatedAt, image }= pageContext.post;
    const description = pageContext.post.description.description;
    const body = pageContext.post.body.childMarkdownRemark.html;

    return (
        <Layout>
            <Seo title={title} description={description} />
            <div className="post-header">
                <h1>{title}</h1>
                <p className="post-dete">{updatedAt}</p>
            </div>
            <img src={image.file.url} className="post-image" alt="post-cover"></img>
            <div dangerouslySetInnerHTML={{ __html: body }} className="post-body" />
        </Layout>
    )
}