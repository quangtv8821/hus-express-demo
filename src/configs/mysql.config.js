const CONFIG = {
  PORT: process.env.MYSQL_PORT,
  HOST: process.env.MYSQL_HOST,
  DATABASE: process.env.MYSQL_DATABASE,
  USERNAME: process.env.MYSQL_USERNAME,
  PASSWORD: process.env.MYSQL_PASSWORD,
  DIALECT: process.env.MYSQL_DIALECT,
  LOGGING: false
} 

export default CONFIG
