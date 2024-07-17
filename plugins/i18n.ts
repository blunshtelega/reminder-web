// // plugins/i18n.js
// export default {
//   install: (app, options) => {
//     // введение глобально доступного метода $translate()
//     app.config.globalProperties.$translate = (key) => {
//       // получить вложенное свойство в `options`,
//       // используя `key` в качестве пути
//       return key.split('.').reduce((o, i) => {
//         if (o) return o[i]
//       }, options)
//     }
//   }
// }