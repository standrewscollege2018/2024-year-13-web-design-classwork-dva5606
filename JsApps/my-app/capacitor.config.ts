import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tourismplus.tourismplus',
  appName: 'tourism-plus',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
