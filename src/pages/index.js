import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <h2>Read my blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />

          // To test the data being pulled from filesystem or api
          /* <pre>{JSON.stringify(post, null, 2)}</pre> */
        ))}
      </Layout>
    </>
  );
};
