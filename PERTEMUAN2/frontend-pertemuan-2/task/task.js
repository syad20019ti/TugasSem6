/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */
//var users;

const users = [
  {name: "Sya",age: "20", major: "Informatika",},
  {name: "Diyah",age: "25", major: "Sistem Informasi",},
  {name: "Nur",age: "19", major: "Analisa",},
  {name: "Fawwaz",age: "18", major: "UI/UX",},
  {name: "Syadiyah",age: "20", major: "Informatics",},
];

/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
//function all() {}
const all = () =>{
  for(let i = 0; i < users.length; i++){
    console.log(`Nama: ${users[i].name} 
    Umur: ${users[i].age}
    Major: ${users[i].major}`);
  }
};

/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */
//function store(user) {}
const store = (user) => {
  users.push(user);
  all();
};

/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */
// function update(index, user) {}
const update = (index, user) => {
  users[index] = user;
  all();
}

/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */
// function destroy(index) {}
const destroy = (index) =>{
  users.splice(index,1);
  all();
};


/**
 * Function main.
 * Jangan edit atau hapus function main.
 * Function ini untuk testing task.
 */

const main = () => {
  /**
   * Test function index
   */
  console.log("# Get All Users");
  all();

  /**
   * Test function store
   */
  console.log("# Add New User: Sabiq");
  const newUser = {
    name: "Sabiq",
    age: 20,
    major: "Informatics",
  };
  store(newUser);

  /**
   * Test function update
   */
  console.log("# Edit User: Isfa");
  const editedIndex = 1;
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    major: "English",
  };
  update(editedIndex, editedUser);

  /**
   * Test function destroy
   */
  console.log("# Delete User: Nurul");
  const deletedIndex = 2;
  destroy(deletedIndex);
};

main();

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { users, all, store, update, destroy };
