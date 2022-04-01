import React from "react";
import Link from "next/link";
import Image from "next/image";

interface EventPreviewProps {
  id: number;
  name: string;
  featuredImage: string;
  date: string;
  time: string;
}

function EventPreview({
  id,
  name,
  featuredImage,
  date,
  time,
}: EventPreviewProps) {
  return (
    <Link href={`/events/${id}`} passHref>
      <a style={{ display: "block" }}>
        <span style={{ float: "left" }}>
          <Image src={featuredImage} width={50} height={50} />
        </span>
        <h5>{name}</h5>
        <span>{date}</span>
        <span> - </span>
        <span>{time}</span>
      </a>
    </Link>
  );
}

export default EventPreview;
