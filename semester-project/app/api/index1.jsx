import { createClient } from "contentful";

export default async function fetchData(contentType) {
  try {
    const client = createClient({
      space:'lv21i4ufsmol',
      accessToken: 'mV7wmfH8PugFBv9-_GaXzVuATZcU4W5JpfO0knmkRok'
    });

    const res = await client.getEntries({ content_type: contentType });
    console.log("odgovor", res)
    return res.items;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []
  }
}
