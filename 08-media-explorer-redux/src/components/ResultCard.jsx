import { useDispatch } from "react-redux";
import { addCollection } from "../redux/features/collectionSlice";
import { addedToast } from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCollection = (item) => {
    (dispatch(addCollection(item)), dispatch(addedToast()));
  };

  return (
    <div className="w-[16vw] h-70 relative rounded-xl overflow-hidden bg-white">
      <a target="_blank" className="h-full" href={item.url}>
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            autoplay
            muted
            loop
            src={item.src}
            alt=""
          ></video>
        ) : (
          ""
        )}
      </a>

      <div
        id="bottom"
        className="flex justify-beteen items-center w-full px-4 py-6 gap-3 text-white absolute bottom-0"
      >
        <h2 className="text-lg font-semibold capitalize h-14 overflow-hidden">
          {item.title}
        </h2>
        <button
          onClick={() => {
            addToCollection(item);
          }}
          className="px-3 py-1 bg-blue-600 active:scale-95 rounded text-white cursor-pointer font-medium"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
