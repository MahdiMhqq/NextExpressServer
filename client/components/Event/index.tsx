import React from "react";
import Image from "next/image";

interface EventProps {
  id: number;
  name: string;
  category: string;
  description: string;
  featuredImage: string;
  images: string[] | null;
  location: string | null;
  date: string;
  time: string;
}

function Event({
  id,
  name,
  category,
  description,
  featuredImage,
  images,
  location,
  date,
  time,
}: EventProps) {
  return (
    <div>
      <Image src={featuredImage} width={700} height={500} />
      <h1>name: {name}</h1>
      <h6>category: {category}</h6>
      <span>{location}</span>
      <span> - </span>
      <span>{date}</span>
      <span>{time}</span>
      <p>description: {description}</p>
    </div>
  );
}

export default Event;
