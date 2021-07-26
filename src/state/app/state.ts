type AppState = {
  showOnboarding: boolean;
  prevAppVersion: number;
  showSplash: boolean;
  splashMessage: string;
}

export const state: AppState = {
  showOnboarding: true,
  prevAppVersion: 0,
  showSplash: false,
  splashMessage: "Cooking up something good!"
}