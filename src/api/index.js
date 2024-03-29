const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  try {
    let changeableUrl = url;
    if (country) {
      changeableUrl = `${url}/countries/${country}`;
    }
    const response = await fetch(changeableUrl);
    // api problem with recoveries - response 0
    const { confirmed, recovered, deaths, lastUpdate } = await response.json();

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const grafResponse = await fetch(`${url}/daily`);
    const data = await grafResponse.json();

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};
fetchDailyData();

export const fetchCountries = async () => {
  try {
    const response = await fetch(`${url}/countries`);
    const { countries } = await response.json();

    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
