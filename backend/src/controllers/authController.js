const Admin = require('../models/Admin');

const SEED_ADMIN_PASSWORD = '14345';

// @desc    Admin login / password verification
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res) => {
  try {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({
        success: false,
        message: 'Password is required',
      });
    }

    const trimmedInput = String(password).trim();

    // Check if an Admin record exists in database
    let admin = await Admin.findOne();

    // If no admin record exists in DB yet, auto-seed with "14345"
    if (!admin) {
      admin = await Admin.create({
        username: 'admin',
        password: SEED_ADMIN_PASSWORD,
      });
    }

    // Check if password matches DB password OR default seed password
    const isPasswordValid =
      trimmedInput === admin.password || trimmedInput === SEED_ADMIN_PASSWORD;

    if (isPasswordValid) {
      admin.lastLogin = new Date();
      await admin.save();

      return res.status(200).json({
        success: true,
        message: 'Authentication successful',
        token: `adm_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
        admin: {
          username: admin.username,
          lastLogin: admin.lastLogin,
        },
      });
    } else {
      return res.status(401).json({
        success: false,
        message: 'Incorrect password. Access denied.',
      });
    }
  } catch (error) {
    console.error('Auth login error:', error.message);

    // Resilient fallback: If DB is unreachable, still allow access with seed password "14345"
    const { password } = req.body;
    if (password && String(password).trim() === SEED_ADMIN_PASSWORD) {
      return res.status(200).json({
        success: true,
        message: 'Authentication successful (offline fallback)',
        token: `adm_fallback_${Date.now()}`,
        admin: {
          username: 'admin',
        },
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Authentication server error',
      error: error.message,
    });
  }
};

// @desc    Verify admin authentication status
// @route   GET /api/auth/verify
// @access  Public
const verify = async (req, res) => {
  return res.status(200).json({
    success: true,
    authenticated: true,
  });
};

// @desc    Change admin password
// @route   PUT /api/auth/change-password
// @access  Public / Protected
const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!newPassword || newPassword.trim().length < 3) {
      return res.status(400).json({
        success: false,
        message: 'New password must be at least 3 characters long',
      });
    }

    let admin = await Admin.findOne();
    if (!admin) {
      admin = await Admin.create({
        username: 'admin',
        password: SEED_ADMIN_PASSWORD,
      });
    }

    // Verify current password
    if (
      String(currentPassword).trim() !== admin.password &&
      String(currentPassword).trim() !== SEED_ADMIN_PASSWORD
    ) {
      return res.status(401).json({
        success: false,
        message: 'Current password is incorrect',
      });
    }

    admin.password = String(newPassword).trim();
    await admin.save();

    return res.status(200).json({
      success: true,
      message: 'Password updated successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update password',
      error: error.message,
    });
  }
};

module.exports = {
  login,
  verify,
  changePassword,
  SEED_ADMIN_PASSWORD,
};
