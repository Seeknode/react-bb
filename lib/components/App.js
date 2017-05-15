import React from 'react';
import Api from '../data/Api';
import { data } from '../testData';

import ArticleList from './ArticleList';

const api = new Api(data);

class App extends React.Component {
  state = {
    articles: api.getArticles(),
    authors: api.getAuthors(),
  };

  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId]
  };

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    );
  }
}

export default App;