export interface Config {
  production: boolean;
  appUrl: string;
  auth0ClientId: string;
  auth0Domain: string;
  auth0Audience: string;
  auth0RedirectUri: string;
  auth0Scopes: string;
  auth0ResponseType: string;
  baseUrl: string;
  postAuthUrl: string;
  appInsightsInstrumentationKey: string;
  applicationName: string; // Used for application insights.
}
