const baseURL = "https://api.unsplash.com/";
const API_KEY = process.env.API_KEY;

export const getTrendingImages = async () => {
  try {
    const res = await fetch(`${baseURL}/photos?per_page=30`, {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });
    if (!res.ok) {
      console.error("failed", res.status);
      return;
    }
    const json = await res.json();
    // console.log(json);
    return json;
  } catch (error) {
    console.error("error in making request", error);
  }
};

/** Return the searched images */
export const getSearchedImages = async (query) => {
  const url = new URL(`${baseURL}/search/photos`);
  url.search = new URLSearchParams({
    per_page: 30,
    query: query,
  });
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });
    if (!res.ok) {
      console.error("failed", res.status);
      return;
    }
    const json = await res.json();
    // console.log(json);
    return json.results;
  } catch (error) {
    console.error("error in making request", error);
  }
};
