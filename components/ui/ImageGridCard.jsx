import Image from "next/image";
import React from "react";

const ImageGridCard = () => {
  const Url = [
    {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-33813267/original/e0c689dd-c8ea-4da8-9c5f-540f38b27c8c.jpeg?im_w=1200",
    },
    {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-33813267/original/418adf00-97e1-4ab5-969d-d48b456eebd9.jpeg?im_w=720",
    },
    {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-33813267/original/5f420280-8123-4c55-b980-f1cdd769c72f.jpeg?im_w=720",
    },
    {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-33813267/original/180be3ba-baef-43dd-b3f8-46cea9e0b834.jpeg?im_w=720",
    },
    {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-33813267/original/f7d019b5-77e1-4b47-91b5-3128c3d844e6.jpeg?im_w=720",
    },
  ];
  return <Image src={url} alt={``} fill className="" />;
};

export default ImageGridCard;
