const weapons = () => {
  return new Promise((resolve, reject) => {
    $.get('/db/weapons.json')
      .done(data => {
        resolve(data.weapons);
      })
      .fail(err => {
        resolve('Error loading weapons');
      });
  });
};

module.exports = weapons;
