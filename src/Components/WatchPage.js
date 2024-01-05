import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

function WatchPage() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  });
  return (
    <div className="flex p-10">
      {/* iframe Video container div */}
      <div className="shadow-xl">
        <iframe
          width="1200"
          height="600"
          src={`https://www.youtube.com/embed/${query}?si=gTb4Q69T5cDBK88W`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      {/* Side video contaienr div */}
    </div>
  );
}

export default WatchPage;
