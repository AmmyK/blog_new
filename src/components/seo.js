import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ title, description }) => {
    return (
        <Helmet
            htmlAttributes={{ lang: "ja-JP" }}
            title={title}
            titleTemplate={`%s`}
            meta={[
                {
                    name: `description`,
                    content: description,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: description,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:site_name`,
                    content: `amam's blog`,
                },
                {
                    property: `og:locale`,
                    content: `ja_JP`,
                },
            ]}
            />
    )
}

export default SEO