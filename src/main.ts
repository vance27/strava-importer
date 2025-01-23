import { AthleteResponse, default as strava } from "strava-v3";
import * as dotenv from "dotenv";

dotenv.config();
dotenv.config({ path: [".env.local"], override: true });

const BASE_URL = "https://www.strava.com/api/v3";
async function main() {
  try {
    const refresh = await strava.oauth.refreshToken(
      process.env.STRAVA_REFRESH_TOKEN
    );
    console.log(refresh);
    // const getToken: { access_token: string } = await strava.oauth.getToken(
    //   process.env.STRAVA_REFRESH_TOKEN
    // );
    const accessToken = refresh.access_token;
    const api: typeof strava = new strava.client(accessToken);
    // const res = await fetch(`${BASE_URL}/athlete`, {
    //   method: "GET",
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    // });
    // if (res.ok) {
    //   const body: AthleteResponse = await res.json();
    //   console.log(body);
    // }

    const athlete = await api.athlete.get({});
    console.log(athlete);
    const lastWeekActivities = await api.athlete.listActivities({});
    // const activities = await api.activities.get({});
    // console.log(activities);
  } catch (e) {
    console.error("Error occurred", e.message);
  }
}

await main();
