const User = require("../Models/User");

async function getAll() {
  const users = await User.findAll();
  return users;
}

async function getSingleUser(id) {
  const data = await User.findByPk(id);
  return data;
}

async function updateUser(id, body) {
  await User.update(body, { where: { id: id } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

async function saveUser(user, res) {
  await User.create(user)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      res.status(400).send({
        message: err.message || "Some error occurred while creating the user.",
      });
    });
}

async function deleteUser(id, res) {
  await User.destroy({ where: { id: id } })
    .then(() => {
      res.status(200).send("USER DELETED");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  getAll,
  getSingleUser,
  saveUser,
  deleteUser,
  updateUser,
};
