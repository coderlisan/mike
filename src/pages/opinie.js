import React from 'react';

import Layout from '../components/Layout';
import Ratings from '../components/Ratings';
import ReviewsList from '../components/ReviewsList';
import SEO from '../components/Seo';

const Reviews = () => (
  <Layout>
    <SEO
      title="Kacze Stawy Opinie"
      description="Holiday Park Kacze Stawy od lat cieszy się świetnymi opiniami. Poznaj niektóre z opinii naszych gości"
    />
    <div className="m-t-5 p-l-r-1">
      <h1 className="text-center">Opinie naszych gości</h1>
    </div>
    <div className="m-t-3">
      <Ratings />
    </div>
    <div className="m-t-3">
      <ReviewsList />
    </div>
  </Layout>
);

export default Reviews;
