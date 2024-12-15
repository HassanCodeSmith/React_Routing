import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((responce) => responce.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="text-center bg-gray-600 m-4 p-4 text-white text-3xl">
      Github Followlers: {data.followers}
      <img src={data.avatar_url} alt="Github Picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const responce = await fetch("https://api.github.com/users/hiteshchoudhary");
  return responce.json();
};
