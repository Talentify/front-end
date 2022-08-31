export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MODERN: 'client' | 'server' | boolean;
    }
  }
}
