require("dotenv").config();

module.exports = {
  port: process.env.PORT || 5000,
  baseUrl: process.env.BASE_URL || "https://localhost:5000",
  mongodbUri:
    process.env.MONGODB_URI || "mongodb+srv://rokyh459_db_user:db_user_password@cluster0.oaxncd2.mongodb.net/?appName=Cluster0",
  frontendUrl: process.env.FRONTEND_URL || "https://localhost:5000",

  // SSLCommerz
  sslcommerz: {
    storeId: process.env.STORE_ID,
    storePassword: process.env.STORE_PASSWORD,
    sessionApi: process.env.SSLCOMMERZ_SESSION_API,
    validationApi: process.env.SSLCOMMERZ_VALIDATION_API,
    isLive: process.env.IS_LIVE === "true",
  },
};
