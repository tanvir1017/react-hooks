import axios from "../../apis/dadJokes";
import useAxios from "../hooks/useAxios";

const Jokes = () => {
  const [joke, error, loading] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "/",
    requestConfigObj: {
      headers: {
        "Content-language": "en-us",
      },
    },
  });

  return (
    <article>
      <h2>Random Dad Joke</h2>

      {loading && <p>Loading...</p>}

      {!loading && error && !error === "canceled" && (
        <p style={{ color: "red" }}>{error}</p>
      )}

      {!loading && error === "canceled" && joke && <p>{joke?.joke}</p>}
      {!loading && !error && !joke && <p>No dad joke to display</p>}
    </article>
  );
};

export default Jokes;
