module.exports = {
  format_date: date => {
    // Gives the date and the time.
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      new Date(date).getFullYear()
    } - ${new Date(date).toLocaleTimeString()}`;
  }
};
