
const getURL = id => `https://store.steampowered.com/api/appdetails/?appids=${id}`;
const getJSON = (res) => {
  if (res.status !== 200) {
    throw new Error('Failed to get data from Steam');
  }
  return res.json();
};

const fetchFromSteam = async (id) => {
  const url = getURL(id);
  const res = await fetch(url);
  const json = await getJSON(res);
  return json;
};

class SteamService {
  static async getById(id) {
    const json = await fetchFromSteam(id);
    console.log(Object.keys(json[id].data))
    if (json[id].success) {
      return json[id].data.price_overview;
    }
    return json;
  }
}

export default SteamService;
