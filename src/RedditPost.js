const RedditPost = ({ title, selftextHtml, score }) => {
    const decodeHtmlEntities = (html) => {
      const textArea = document.createElement('textarea');
      textArea.innerHTML = html;
      return textArea.value;
    };
    const decodedHtml = decodeHtmlEntities(selftextHtml);
  
    return (
      <div className="col-md-4 mb-4">
        <div className="card h-100 bg-light">
          <div className="card-body">
            <h5 className="card-title text-primary">{title}</h5>
            <div className="card-text" dangerouslySetInnerHTML={{ __html: decodedHtml }} />
          </div>
          <div className="card-footer bg-light">
            <small className="text-muted">Score: {score}</small>
          </div>
        </div>
      </div>
    );
  };

  export default RedditPost;