module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-styled-components"
  ],
  plugins: ["stylelint-order"],
  processors: ["stylelint-processor-styled-components"],
  rules: {
    "color-no-hex": true,
    "font-family-no-missing-generic-family-keyword": null,
    "order/properties-alphabetical-order": true
  }
};
