console.table(
  drawTable(
    [
      { name: 'Charlie', city: 'New York' },
      { name: 'Alice', city: 'London' },
      { name: 'Bob', city: 'Paris' }
    ],
    'name'
  )
)
// +---------+----------+
// | A       | B        |
// +---------+----------+
// | Alice   | London   |
// | Bob     | Paris    |
// | Charlie | New York |
// +---------+----------+

console.table(
  drawTable(
    [
      { gift: 'Book', quantity: 5 },
      { gift: 'Music CD', quantity: 1 },
      { gift: 'Doll', quantity: 10 }
    ],
    'quantity'
  )
)
// +----------+----+
// | A        | B  |
// +----------+----+
// | Music CD | 1  |
// | Book     | 5  |
// | Doll     | 10 |
// +----------+----+

/**
  * @param {Array<Object>} data - The data to draw the table
  * @param {string} sortBy - The field to sort the table
  * @returns {string}
  */
function drawTable(data, sortBy) {
  let initialAscii = 65;
  let result = '';
  
  if (data.length === 0) return '';
  const keys = Object.keys(data[0]);

  const sorted = [...data].sort((a, b) => {
    return (typeof a[sortBy] === 'string' && typeof b[sortBy] === 'string')
        ? a[sortBy].localeCompare(b[sortBy])
        : a[sortBy] - b[sortBy];
  });

  const maxSizes = sorted.reduce((maxLengths, row) => {
    keys.forEach((key, index) => {
      const value = row[key];
      const currentLength = String(value).length;
      
      if (!maxLengths[index] || currentLength > maxLengths[index]) {
        maxLengths[index] = currentLength;
      }
    });
    return maxLengths;
  }, new Array(keys.length).fill(0));

  let separator = '';
  let header = '';

  maxSizes.forEach(size => {
    separator += `+${'-'.repeat(size + 2)}`;
    const char = String.fromCharCode(initialAscii);
    header += `| ${char}${' '.repeat(size)}`;
    initialAscii++;
  });

  result += `${separator}+\n`;
  result += `${header}|\n`;
  result += `${separator}+\n`;

  sorted.forEach(row => {
    const rowContent = keys.map((key, count) => {
      const value = row[key];
      return ` ${value}${' '.repeat(maxSizes[count] - String(value).length)} `;
    });
    
    result += `|${rowContent.join('|')}|\n`;
  });
  
  result += `${separator}+`;

  return result
}
