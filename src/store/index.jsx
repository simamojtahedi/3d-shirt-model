import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#38D47B",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./shirt_pattern_2.png",
  fullDecal: "./shirt_pattern_2.png",
});

export default state;
