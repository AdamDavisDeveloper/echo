import axios from "axios";
import { popularGamesURL } from "../api";

//Action Creator
export const loadGames = () => async (dispatch) => {
  //Fetch via Axios
  const proxyURL = "https://thingproxy.freeboard.io/fetch/";
  const url = popularGamesURL();
  const popularData = await axios.get(proxyURL + url);
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData,
    },
  });
};
