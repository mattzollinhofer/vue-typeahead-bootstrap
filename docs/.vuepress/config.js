module.exports = {
  base: '/vue-typeahead-bootstrap-docs/',
  chainWebpack(config) {
    for (const lang of ["sass", "scss"]) {
      for (const name of ["modules", "normal"]) {
        const rule = config.module.rule(lang).oneOf(name);
        rule.uses.delete("sass-loader");

        rule
          .use("sass-loader")
          .loader("sass-loader")
          .options({
            implementation: require("sass"),
          });
      }
    }
  },
  themeConfig: {
    nav: [
      {
        text: 'Home', link: '/',
      }, {
        text: 'Guide', link: '/guide/gettingStarted',
      }, {
        text: 'Examples', link: '/examples/examples'
      }, {
        text: 'Github', link: 'https://github.com/mattzollinhofer/vue-typeahead-bootstrap/'
      }
    ],
    sidebar: [
      '/',
      '/guide/gettingStarted',
      '/guide/reference',
      '/examples/examples'
    ]
  }
}
