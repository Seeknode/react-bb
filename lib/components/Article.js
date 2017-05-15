import React from 'react';
import styles from '../styles/index';

class Article extends React.Component {
  render() {
    const { article, actions } = this.props;
    const author = actions.lookupAuthor(article.authorId);
    return (
        <div style={styles.article}>
          <div style={styles.title}>{article.title}</div>
          <div>{article.date}</div>
          <div>{article.firnName} {author.lastName}</div>
          <div style={styles.body}>{article.body}</div>
        </div>
    );
  }
}

export default Article;