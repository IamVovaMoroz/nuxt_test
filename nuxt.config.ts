// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", 
    // "nuxt-server-utils", "@sidebase/nuxt-auth" 
  ],
  compatibilityDate: "2024-08-16",
  // devServer: {
  //   port: 4000
  // }
//   nuxtServerUtils: {
//     enabled: true, // default
//     enableDevTools: true, // default
//     mongodbUri: process.env.MONGODB_URI,
//   },
//   auth: {
//     provider: {
//         type: 'authjs',
//         trustHost: false,
//         defaultProvider: 'github',
//         addDefaultCallbackUrl: true
//     }
// }
});