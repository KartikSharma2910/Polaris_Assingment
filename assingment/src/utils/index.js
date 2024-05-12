export const getError = (name, errors) => {
  if (!Object.keys(errors).length) return undefined;

  return name
    .split(".")
    .map((item) => item.replaceAll("[", "").replaceAll("]", ""))
    .reduce((prev, curr) => (prev ? prev[curr] : prev), errors);
};

/**
 * Function for parsing CSV
 * @param {*} csvContent
 * @returns
 */

export const parseCSV = (csvContent) => {
  const rows = csvContent.split("\n");
  const headers = rows[0].split(",");
  const data = rows.slice(1).map((row) => {
    const values = row.split(",");
    return headers.reduce((obj, header, index) => {
      obj[header.trim()] = values[index] ? values[index].trim() : ""; // Check if value exists before trimming
      return obj;
    }, {});
  });
  return data;
};
