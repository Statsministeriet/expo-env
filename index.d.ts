declare module 'expo-env' {
  export function getEnvVars(): { [key: string]: string };
  export function setEnvVars(env: { [key: string]: string }): void;
}