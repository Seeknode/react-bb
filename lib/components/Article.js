import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/index';

import { convertTimestampIntoDateString } from '../util';

class Article extends React.Component {

  render() {
    const { article, actions } = this.props;
    const author = actions.lookupAuthor(article.authorId);
    return (
        <div style={styles.article}>
          <div style={styles.title}>{article.title}</div>
          <div>{convertTimestampIntoDateString(article.date)}</div>
          <div>{author.firstName} {author.lastName}</div>
          <div style={styles.body}>{article.body}</div>
        </div>
    );
  }
}

export default Article;