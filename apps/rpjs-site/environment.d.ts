declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      GITHUB_SECRET: string;
      GITHUB_ID: string;
      NEXTAUTH_URL: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
