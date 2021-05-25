import { useAxios } from "hooks/useAxios";
import { useJwt } from "react-jwt";

function ApiPage() {
  const jsonStringData = JSON.stringify({
    id: 9,
    title: "ratnesh",
    body: "bar",
    userId: 9,
    username: "ratnesh-name",
  });
  // const { loading, response, error } = useAxios("GET", "ping");
  // const { loading, response, error } = useAxios("GET", "login");
  const { loading, response, error } = useAxios(
    "POST",
    "login",
    jsonStringData
  );
  const { decodedToken } = useJwt(
    response && response.data && response.data.accessToken
  );
  // const { loading, response, error } = useAxios(
  //   "PUT",
  //   "posts/9",
  //   jsonStringifiedBody || null
  // );

  // console.log("ApiPage", decodedToken);

  return (
    <div className="App">
      <h1>Posts</h1>

      <h2>decodedToken</h2>
      <p>{JSON.stringify(decodedToken, null, 20)}</p>

      {/* {loading ? (
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
                <span>{response.data.id}</span>
              </p>
            )}
          </>
        </div>
      )} */}
    </div>
  );
}

export default ApiPage;
