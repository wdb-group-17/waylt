import { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import Image from "./Image";

type FeedData = {
    username: string,
    album: string,
    song: string,
    artist: string
}

export default function Feed() {
  // const mapStateToProps = () => {
  //   eventBus.on("dataApply", (data: any) => console.log("Got it!"));
  // };
  // console.log(username["username"]);
  // console.log(username["album"]);
  // console.log(username["song"]);
  // console.log(username["artist"]);
    const [data, setData]: [any, any] = useState()
    
    const getJSON = () => {
        axios.get("http:/localhost:3002/posts")
            .then((data) => setData(data.data))
            .catch((error) => console.log(error))
    }

    getJSON()

  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll sm:-mt-24">
      {data && data.map((data: FeedData) => (
        <Image
          username={data.username}
          album={data.album}
          song={data.song}
          artist={data.artist}
        />
      ))}
    </div>
  );
}
