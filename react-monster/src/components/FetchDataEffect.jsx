import React, { useEffect } from "react";

const FetchDataEffect = () => {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );

      const data = await response.json();

      if (data && data.length > 0) setData(data);
    }

    loadData();
  }, []);

  return (
    <div>
      <ul style={{ color: "white" }}>
        {data.map((post) => (
          <section key={Math.random()}>
            <li>{post.id}</li>
            <li>--body : {post.body}</li>
          </section>
        ))}
      </ul>
    </div>
  );
};
export default FetchDataEffect;
