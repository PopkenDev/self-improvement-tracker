/**
 * An array of public routes that do not require authentication.
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * An array of routes that require authentication.
 * These routes will redirect logged in users to the home page of the application.
 * @type {string[]}
 */
export const authRoutes = ["/login", "/register"];

/**
 * The prefix for API authentication routes.
 * Routes that start with this prefix are used for API authentication purposes.
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after a user logs in.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/app/nutrition-tracker";
