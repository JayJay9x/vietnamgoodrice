/* Viet Nam Good Rice — shared Tailwind (Play CDN) theme. Indochine palette. */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary:    "#0F4C3A", // jade
        "primary-d": "#0A3629",
        secondary:  "#C8962F", // ochre / gold
        gold:       "#C8962F",
        "gold-l":   "#E0B860",
        terracotta: "#A24E36",
        cream:      "#F5EFE0",
        paper:      "#FBF7EE",
        surface:    "#FFFFFF",
        soft:       "#E8EBDC", // sage
        line:       "#DAD0BC",
        text:       "#2A2017",
        muted:      "#6E6357"
      },
      fontFamily: {
        serif: ["\"Playfair Display\"", "Noto Serif", "serif"],
        sans:  ["Inter", "system-ui", "sans-serif"]
      },
      borderRadius: { xl2: "1.25rem" }
    }
  }
};
