const normalizeString = (param: string) => {
  const normalizedText = param.toLowerCase().replace(/'/g, "").replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  return normalizedText;
}

export default normalizeString;