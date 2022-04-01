import React from "react";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { getEvent } from "../api/api";
import Event from "../../components/Event";

const index: NextPage = ({
  event,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <Event {...event} />;
};

export default index;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const params = { id: Number(context.query.event) };
  const resp = await getEvent(params);
  const event: any = resp?.data || [];
  return {
    props: {
      event,
    },
  };
};
