import { API_URL, STRAPI_URL } from "../config";

export async function getPlaces () {
  const res = await fetch(`${API_URL}/places?populate=*`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const {data} = await res.json();
  return data;
}

export function getCoverImage ({ attributes }) {
    const { url } = attributes.image.data[0].attributes;

    return `${STRAPI_URL}${url}`
}