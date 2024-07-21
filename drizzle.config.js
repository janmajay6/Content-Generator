
/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://AI-Content-Generator_owner:C5whlZK9xkMQ@ep-small-wildflower-a12avglw.ap-southeast-1.aws.neon.tech/AI-Content-Generator?sslmode=require',
  }
};
