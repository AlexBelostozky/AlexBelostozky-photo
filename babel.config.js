module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset, {
      targets: {
        safari: "10", // Укажи минимальную версию Safari, с которой нужно совместимость
      }
    }
  ]
}
