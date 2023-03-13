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
const adminRouter = AdminBroExpress.buildRouter(adminBro);
buildAdminRouter(adminBro);

module.exports = {
  adminBro,
  adminRouter,
};
