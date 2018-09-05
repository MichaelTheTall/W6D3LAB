const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.titleList = function () {
  let result = this.films.map(t => t.title);
  // console.log(this.films.title);
  return result;
};

Cinema.prototype.findFilmByTitle = function (searchTitle) {
  let result = this.films.find(t => t.title === searchTitle);
  return result;
};

Cinema.prototype.genreFilter = function (searchGenre) {
  let result = this.films.filter(t => t.genre === searchGenre);
  return result;
};

Cinema.prototype.yearCheck = function (searchYear) {
  let result = this.films.filter(t => t.year === searchYear);
  if (result.length === 0) {
    return false;
  };
  return true;
};

Cinema.prototype.lengthCheck = function (searchLength) {
  let result = this.films.filter(t => t.length >= searchLength);
  if (result.length === this.films.length) {
    return true;
  };
  return false;
};

Cinema.prototype.runningTotal = function () {
  let lengthArray = this.films.map(t => t.length);
  let sum = (total, currentValue) => total + currentValue;
  let result = lengthArray.reduce(sum);
  return result;
};

Cinema.prototype.findByYear = function (searchYear) {
  let result = this.films.filter(t => t.year === searchYear);
  if (result.length === 0) {
    return 'There are no films from that year!';
  };
  return result;
};

Cinema.prototype.filmsByProperty = function (property, value) {
  let result = this.films.filter(t => t[property] === value);
  if (result.length === 0) {
    return `There are no films matching that ${property}!`;
  };
  return result;
};

module.exports = Cinema;
