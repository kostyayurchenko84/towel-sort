module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) return [];
  return matrix.flatMap((str, index) =>
    index % 2 === 0 ? str : str.reverse()
  );
};
