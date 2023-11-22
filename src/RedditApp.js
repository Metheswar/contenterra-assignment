import { useEffect, useState } from "react";
import RedditPost from "./RedditPost";
const RedditApp = () => {
    const [redditPosts, setRedditPosts] = useState([]);
  
    useEffect(() => {

      const fetchData = async () => {
        try {
          const response = await fetch('https://www.reddit.com/r/reactjs.json');
          const data = await response.json();
          const posts = data.data.children;
          setRedditPosts(posts);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div className="reddit-app container mt-4">
      
        <div className="row">
          {redditPosts.map((post) => (
            <RedditPost
              key={post.data.id}
              title={post.data.title}
              selftextHtml={post.data.selftext_html}
              score={post.data.score}
            />
          ))}
        </div>
      </div>
    );
  };
export default RedditApp;  