import React from "react";
import { useSelector } from "react-redux";
import { Loader } from "./Loader";
import { Template } from "./Template";

function Post({ title, body, id }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {body}, {id}
        </p>
      </div>
    </div>
  );
}

export default () => {
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.app.loadingPosts);
  const selectedUser = useSelector((state) => state.users.selectedUserId);

  if (!selectedUser) {
    return (
      <div className="container pt-3">
        <Template text={"You have to select user"} />
      </div>
    );
  } else if (loading || !posts || !posts.length) {
    return (
      <div className="container pt-3">
        <Loader />
      </div>
    );
  } else {
    return (
      <div className="container pt-3">
        <div className="col ">
          {posts.map((post) => (
            <Post
              title={post.title}
              body={post.body}
              id={post.userId}
              key={post.id}
            />
          ))}
        </div>
      </div>
    );
  }
};
