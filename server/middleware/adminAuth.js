// Simple shared-secret auth for admin-only endpoints (viewing leads, managing projects).
// Send header: x-admin-key: <ADMIN_API_KEY>
const adminAuth = (req, res, next) => {
  const key = req.headers['x-admin-key'];
  if (!key || key !== process.env.ADMIN_API_KEY) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }
  next();
};

module.exports = adminAuth;
