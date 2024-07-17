export default defineNuxtRouteMiddleware((to, from) => {
  const isAuthenticated = () => false
  console.log('auth middleware', isAuthenticated)
  // isAuthenticated() is an example method verifying if a user is authenticated
  if (isAuthenticated() === false) {
    return navigateTo('/login')
  }
})