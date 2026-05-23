const config = require("../config");

// ─────────────────────────────────────────────
// GET / — Health Check & API Documentation
// ─────────────────────────────────────────────

exports.index = async (req, res) => {
  try {
    res.json({
      message: "🚀 SSLCommerz Subscription Payment Server",
      version: "2.0.0",
      mode: config.sslcommerz.isLive ? "LIVE" : "SANDBOX",
      swaggerDocs: "/api-docs",
      baseUrl: config.baseUrl,
      endpoints: {
        "POST /api/payment/init": "⭐ Payment করো (শুধু এই 1টা API call করো — বাকি সব auto)",
        "GET /api/subscription/plans": "Plans ও Pricing দেখো",
        "GET /api/subscription/user/:userId": "Active Subscription দেখো",
        "GET /api/subscription/user/:userId/history": "Subscription History",
        "POST /api/subscription/calculate-price": "Price Preview",
        "POST /api/subscription/check-validity": "Subscription Valid কিনা চেক করো",
      },
    });
  } catch (error) {
    console.error("Health Check Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};