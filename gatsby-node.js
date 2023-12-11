/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreatePage = async ({ page, actions: { deletePage } }) => {
  if (page.path.match(/^\/kids-week-dzien-dziecka-boze-cialo-nad-morzem/)) {
    deletePage(page);
  }
};
