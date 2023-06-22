import { createContext, useState } from "react";

export const PostContex = createContext(null);
function Post({ children }) {
  const [postDetails, setPostDetails] = useState();
  return (
    <PostContex.Provider value={{ postDetails, setPostDetails }}>
      {children}
    </PostContex.Provider>
  );
}
export default Post;
