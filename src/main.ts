import { AthleteResponse } from "strava-v3";
import * as dotenv from "dotenv";

dotenv.config();
dotenv.config({ path: [".env.local"], override: true });
// console.log(process.env);
// strava.config({
//   access_token: "",
//   client_id: "",
//   client_secret: "",
//   redirect_uri: "",
// });

// const payload = await strava.athlete.get({});
// console.log(payload);
const BASE_URL = "https://www.strava.com/api/v3";
async function main() {
  try {
    // const url: string = await strava.oauth.getRequestAccessURL({
    //   scope: "view_private,write",
    // });
    // console.log(url);
    // const res = await strava.oauth.getToken(url);
    // console.log(res);
    const res = await fetch(`${BASE_URL}/athlete`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.STRAVA_ACCESS_TOKEN}`,
      },
    });
    if (res.ok) {
      const body: AthleteResponse = await res.json();
      console.log(body);
    }
  } catch (e) {
    console.error("Error occurred", e.message);
  }
}

await main();
