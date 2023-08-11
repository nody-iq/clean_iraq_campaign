import React, { useEffect, useState } from "react";

export default function ReadMore() {
  // const [slides, setSlides] = useState([]); // State to store the photo URLs
  // this is a fack API 👇👇👇
  const slides = [
    {
      url: "https://thepeninsulaqatar.com/get/maximage/20210203_1612330514-271882.JPG?1635250003",
    },
    {
      url: "https://dohanews.co/wp-content/uploads/2020/12/campaign-clean.jpeg",
    },
    {
      url: "https://www.zowaa.org/wp-content/uploads/2017/10/1-4.jpg",
    },

    {
      url: "https://www.zowaa.org/wp-content/uploads/2017/10/22237089_10213217649292022_1786033284_n.jpg",
    },
    {
      url: "https://www.zowaa.org/wp-content/uploads/2017/10/22237063_10213217649612030_1771968641_n.jpg",
    },
  ];
  // this is to git the photos from the d API 👇👇👇
  // useEffect(()=>{
  //   fetch("https://clean-iraq-campaigns.murtadha-altameemi2156.workers.dev")
  //   .then(res => res.json())
  //   .then(data => {
  //     const photoURLs = data.map(item => item.Photos[0]?.large.url); // Extracting large photo URLs
  //       setSlides(photoURLs)
  //       console.log(slides)
  //   })
  //   .catch(error => console.log("error",error))
  // },[])

  
  return (
    <>
      <main>
        <div className="mainContainerForReadMore">
          <div className="CardText">
            <h2>Lorem ipsum dolor, sit amet consectetur</h2>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
            sint? Qui impedit illo, eveniet esse sint nemo repellat magnam sequi
            architecto, corporis, odit dolorum dolor. Veritatis mollitia beatae
            ipsum blanditiis? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nam consectetur pariatur eligendi, amet quae sint nihil minus,
            ea nesciunt magnam velit earum ansmi dolore consequatur a hic. Ea,
            quisquam ex. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Perspiciatis, laudantium? consectetur
            adipisicing elit. Nobis, nesciunt, aspernatur ullam esse quidem iste
            placeat nam numquam maiores rerum dolores. Accusantium quo,
            consectetur maiores iure animi cumque aliquid atque Lorem ipsum
            dolor, sit amet consectetu
          </p>
          <div className="w-full mx-0 my-4 ">
            <img
              className="rounded-[15px]"
              src="https://www.zowaa.org/wp-content/uploads/2017/10/22237089_10213217649292022_1786033284_n.jpg"
            />
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
            sint? Qui impedit illo, eveniet esse sint nemo repellat magnam sequi
            architecto, corporis, odit dolorum dolor. Veritatis mollitia beatae
            ipsum blanditiis? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nam consectetur pariatur eligendi, amet quae sint nihil minus,
            ea nesciunt magnam velit earum ansmi dolore consequatur a hic. Ea,
            quisquam ex. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Perspiciatis, laudantium? consectetur
            adipisicing elit. Nobis, nesciunt, aspernatur ullam esse quidem iste
            placeat nam numquam maiores rerum dolores. Accusantium quo,
            consectetur maiores iure animi cumque aliquid atque Lorem ipsum
            dolor, sit amet consectetu
          </p>
          <div className="w-full mx-0 my-4 ">
            <img
              className="rounded-[15px]"
              src="https://www.zowaa.org/wp-content/uploads/2017/10/22237063_10213217649612030_1771968641_n.jpg"
            />
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
            sint? Qui impedit illo, eveniet esse sint nemo repellat magnam sequi
            architecto, corporis, odit dolorum dolor. Veritatis mollitia beatae
            ipsum blanditiis? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nam consectetur pariatur eligendi, amet quae sint nihil minus,
            ea nesciunt magnam velit earum ansmi dolore consequatur a hic. Ea,
            quisquam ex. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Perspiciatis, laudantium? consectetur
            adipisicing elit. Nobis, nesciunt, aspernatur ullam esse quidem iste
            placeat nam numquam maiores rerum dolores. Accusantium quo,
            consectetur maiores iure animi cumque aliquid atque Lorem ipsum
            dolor, sit amet consectetu
          </p>
        </div>
      </main>
    </>
  );
}
