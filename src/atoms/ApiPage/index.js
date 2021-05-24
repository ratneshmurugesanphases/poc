import { useAxios } from "hooks/useAxios";

function ApiPage() {
  const { loading, response, error } = useAxios("GET", "posts");
  // const jsonStringifiedBody = JSON.stringify({
  //   id: 9,
  //   title: "ratnesh",
  //   body: "bar",
  //   userId: 9,
  // });
  // const { loading, response, error } = useAxios(
  //   "POST",
  //   "posts/9",
  //   jsonStringifiedBody || null
  // );
  // const { loading, response, error } = useAxios(
  //   "PUT",
  //   "posts/9",
  //   jsonStringifiedBody || null
  // );

  console.log("ApiPage");

  return (
    <div className="App">
      <h1>Posts</h1>

      {loading ? (
        <p>loading...</p>
      ) : (
        <div>
          {error && (
            <div>
              <p>{error}</p>
            </div>
          )}
          <>
            {Object.keys(response).length && response.data.length ? (
              <p>
                {response.data.map((dataObj) => (
                  <div>
                    <span>{dataObj.id}</span>
                    <span>{dataObj.title}</span>
                  </div>
                ))}
              </p>
            ) : (
              <p>
                <div>Updated Id</div>
                {/* <span>{response.data.id}</span> */}
              </p>
            )}
          </>
        </div>
      )}
    </div>
  );
}

export default ApiPage;
