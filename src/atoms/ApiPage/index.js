import { useAxios } from "hooks/useAxios";

function ApiPage() {
  const { response, loading, error } = useAxios({
    method: "GET",
    // body: JSON.stringify({
    //   title: "foo",
    //   body: "bar",
    //   userId: 1,
    // }),
    url: "/posts?userId=10",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

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
          <div>
            {response && (
              <p>
                {response.map((dataObj) => (
                  <div>
                    <span>{dataObj.id}</span>
                    <span>{dataObj.title}</span>
                  </div>
                ))}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ApiPage;
