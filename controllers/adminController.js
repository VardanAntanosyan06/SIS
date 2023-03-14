const express = require("express")
const app = express()
const AdminBroExpress = require("@admin-bro/express");
const AdminBroSequelize = require("@admin-bro/sequelize");
const Users = require("../models").Users;
const Blogs = require("../models").Blogs;
const Admin = require("../models").Admin;

const { buildAuthenticatedRouter } = require("admin-bro-expressjs");

const AdminBro = require("admin-bro");
AdminBro.registerAdapter(AdminBroSequelize);

const adminBro = new AdminBro({
  resources: [Blogs, Users],
  rootPath: "/admin",
  branding: {
    logo: "http://drive.google.com/uc?export=view&id=1A21yToDik-V1aE7UsmTiBRR-tt1RXQil",
    companyName: "SIS Admin",
    softwareBrothers: false,
  },
});
const buildAdminRouter = (admin) => {
  const router = buildAuthenticatedRouter(admin, {
    cookieName: "admin-bro",
    cookiePassword: "superlongandcomplicatedname",
    authenticate: async (email, password) => {
      const IsAdmin = await Admin.findOne({ email });

      if (Admin) {
        return IsAdmin.toJSON();
      }
      return null;
    },
  });
  return router;
};


const ADMIN = {
  email: "admin@example.com",
  password: "test1234",
};
const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookieName: process.env.ADMIN_COOKIE_NAME || 'admin-bro',
  cookiePassword: process.env.ADMIN_COOKIE_PASS || 'supersecret-and-long-password-for-a-cookie-in-the-browser',
  authenticate: async (email, password) => {
    if (email === ADMIN.email && password === ADMIN.password) {
      return ADMIN
    }
    return null
  }
})


module.exports = {
  adminBro,
  router,
};
