import React from 'react';

class Article extends React.Component {
  render() {
    const { article, author } = this.props;
    return (
        <div>
          <div>{article.title}</div>
          <div>{article.date}</div>
          <div>{article.firnName} {author.lastName}</div>
          <div>{article.body}</div>
        </div>
    );
  }
}

export default Article;