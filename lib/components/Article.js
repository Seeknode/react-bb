import React from 'react';
const spacing = 10;

const styles = {
  article: {
    margin: spacing
  },
  title: {
    fontWeight: 'bold'
  },
  body: {
    paddingLeft: spacing
  }
};

class Article extends React.Component {
  render() {
    const { article, author } = this.props;
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