import dark from "./Dark.jsx";
import normal from "./Normal.jsx";

const themes = {
  normal,
  dark,
};

export default function getTheme(theme) {
  return themes[theme];
}
