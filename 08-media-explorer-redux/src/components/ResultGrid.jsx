import { useEffect } from "react";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import { setLoading, setError, setResults } from "../redux/features/searchedSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  const dispatch = useDispatch();

  useEffect(
    function () {
      if (!query) return
      const getData = async () => {
        try {
          dispatch(setLoading());
          let data = [];
          if (activeTab == "photos") {
            let response = await fetchPhotos(query);
            data = response.results.map((item) => ({
              id: item.id,
              type: "photo",
              title: item.alt_description,
              thumbnail: item.urls.small,
              src: item.urls.full,
              utl:item.links.html
            }));
          }
          if (activeTab == "videos") {
            let response = await fetchVideos(query);
            data = response.videos.map((item) => ({
              id: item.id,
              type: "video",
              title: item.user.name || "video",
              thumbnail: item.image,
              src: item.video_files[0].link,
              url:item.url
            }));
          }

          dispatch(setResults(data));
        } catch (error) {
          dispatch(setError(error.message));
        }
      };

      getData();
    },
    [query, activeTab, dispatch],
  );

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className='flex flex-wrap gap-6 justify-between w-full p-10'>
      {results.map((item, idx) => {
        return <div key={idx}>
            <ResultCard item={item}/>
        </div>
      })}
    </div>
  );
};

export default ResultGrid;
