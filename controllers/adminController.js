const express = require("express")
const app = express()
const bcrypt = require("bcrypt")
const AdminBroExpress = require("@admin-bro/express");
const AdminBroSequelize = require("@admin-bro/sequelize");
const AdminModel = require("../models").Admin
const Users = require("../models").Users;
const Blogs = require("../models").Blogs;
require("dotenv").config()
const bodyParser = require("body-parser")
app.use(bodyParser.json());

const AdminBro = require("admin-bro");
AdminBro.registerAdapter(AdminBroSequelize);

const adminBro = new AdminBro({
  resources: [Blogs, Users],
  rootPath: "/admin",
  branding: {
    logo: "http://drive.google.com/uc?export=view&id=1ADjM3Bt86sUwMMCaV-b2sPV1KPI-wLkI",
    companyName: "SIS Admin",
    softwareBrothers: false,
  },
  dashboard: {
    component: AdminBro.bundle("../public/stylesheets/AdminDashBoard.jsx")
  },
});

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookieName: process.env.ADMIN_COOKIE_NAME,
  cookiePassword: process.env.ADMIN_COOKIE_PASS,
  authenticate: async (email, password) => {
    const user = await AdminModel.findOne({where:{email}})
    if (user && (await bcrypt.compareSync(password, user.password))) {
      return user
    }
    return null
  }
})

module.exports = {
  adminBro,
  router,
};
