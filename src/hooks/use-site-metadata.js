import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            siteUrl
            description
            author
            busDateRange
            animalsAllowed
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
