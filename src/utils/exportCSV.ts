// src/utils/exportCSV.ts

interface ExportOptions {
  headers: string[];
  filename: string;
}

const escapeCsvValue = (value: any) => {
  if (typeof value === 'string') {
    // Escape double quotes and wrap in double quotes if the value contains commas, double quotes, or new lines
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
};

export const exportToCSV = (data: Record<string, any>[], options: ExportOptions) => {
  // Create CSV content
  const header = options.headers.map(escapeCsvValue).join(',');
  const rows = data.map(row =>
    options.headers.map(header => escapeCsvValue(row[header] || '')).join(',')
  );
  const csvContent = [header, ...rows].join('\n');

  // Create a Blob from the CSV content
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  
  // Create a link element
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  // Set the link's attributes
  link.setAttribute('href', url);
  link.setAttribute('download', options.filename);
  
  // Append link to the body and trigger a click to start the download
  document.body.appendChild(link);
  link.click();
  
  // Clean up
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
