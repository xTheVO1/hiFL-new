import React from "react";
import PostsLayout from "../../components/layout/PostsLayout";
import axios from "axios";

const News = ({ data }) => {
  return <PostsLayout name="news" posts={data} />;
};

export default News;

export async function getStaticProps() {
  try {
    const baseURL = process.env.CMS_URL;
    const { data, errors } = await axios(
      `${baseURL}/posts?sort=PublishDate:DESC&filters[$and][0][categories][CategoryName][$eq]=News&populate=*`
    );

    if (errors || !data) {
      return { notFound: true };
    }

    return {
      props: {
        data: data.data,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}
