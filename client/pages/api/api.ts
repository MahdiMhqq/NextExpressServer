// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios, { Axios } from "axios";

// API ATTENTION
export const wallet = axios.create({
  baseURL: "http://localhost:5000/api/",
});

//Events request
interface eventInterface {
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

interface eventResInterface {
  events: eventInterface[] | null;
}

interface EventsResponse {
  success: boolean | undefined;
  error: string | null | undefined;
  data: eventResInterface | null | undefined;
}

export const getEvents = async (): Promise<EventsResponse> => {
  const resp: any = await wallet({
    method: "GET",
    url: `/events`,
  }).catch((reason) => {
    console.error("Request failed!", reason);
  });

  if (resp) {
    if (resp.status && resp.status >= 200 && resp.status < 300) {
      const data = {
        success: true,
        error: resp?.error,
        data: resp.data,
      };
      return data;
    } else {
      const data = {
        success: false,
        error: resp?.error,
        data: null,
      };
      return data;
    }
  } else {
    const data = {
      success: false,
      error: "500",
      data: null,
    };
    return data;
  }
};

interface EventReqParams {
  id: number;
}
interface EventResponse {
  success: boolean | undefined;
  error: string | null | undefined;
  data: eventInterface | null | undefined;
}

export const getEvent = async (
  params: EventReqParams
): Promise<EventResponse> => {
  const resp: any = await wallet({
    method: "GET",
    url: `/events/${params.id}`,
  }).catch((reason) => {
    console.error("Request failed!", reason);
  });

  if (resp) {
    if (resp.status && resp.status >= 200 && resp.status < 300) {
      const data = {
        success: true,
        error: resp?.error,
        data: resp.data,
      };
      return data;
    } else {
      const data = {
        success: false,
        error: resp?.error,
        data: null,
      };
      return data;
    }
  } else {
    const data = {
      success: false,
      error: "500",
      data: null,
    };
    return data;
  }
};
