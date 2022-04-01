import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import React from "react";
import EventPreview from "../../components/EventPreview";
import { getEvents } from "../api/api";

export interface EventInterface {
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

const events: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      {data.map((event: EventInterface, index: any) => {
        return (
          <EventPreview
            key={index}
            id={event.id}
            name={event.name}
            featuredImage={event.featuredImage}
            date={event.date}
            time={event.time}
          />
        );
      })}
    </>
  );
};

export default events;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const resp = await getEvents();
  const events: any = resp?.data || [];
  return {
    props: {
      data: events,
    },
  };
};
