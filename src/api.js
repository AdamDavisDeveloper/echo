//Base URL
const base_url =
  "https://api.rawg.io/api/games?key=4fa0e4c08fb54aaaaff103944c7ec89b";

// Get date
//Month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Day
const getCurrentDay = () => {
  const day = new Date().getDay();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${getCurrentMonth}-${currentDay}`;

// Popular Games
const popular_games = "";
