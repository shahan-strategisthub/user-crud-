const User = require("../Services/User");

module.exports = {
  async getAll(_, res) {
    try {
      const user = await User.getAll();
      return res.json(user);
    } catch (err) {
      console.error(`Error while getting all users `, err.message);
    }
  },

  async getSingleUser(req, res) {
    try {
      const { id } = req.params;
      res.json(await User.getSingleUser(id));
    } catch (err) {
      console.error(`Error while getting single record `, err.message);
    }
  },

  async saveUser(req, res) {
    try {
      await User.saveUser(req.body, res);
      return res.status(201).send(`${req.body.first_name} USER CREATE`);
    } catch (err) {
      console.error(`Error while getting saving user`, err.message);
    }
  },

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { body } = req;
      const user = await User.getSingleUser(id);
      if (user) {
        await User.updateUser(id, body)
          .then(() => {
            return res.status(200).send(`${body.first_name} UPDATED`);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.log("NO USER FOUND");
      }
    } catch (err) {
      console.error(`Error while getting update `, err.message);
    }
  },

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      await User.deleteUser(id, res);
    } catch (err) {
      console.error(`Error while getting delete user `, err.message);
    }
  },
};
