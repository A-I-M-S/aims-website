export function matchesSearch(query: string, values: string[]) {
  const haystack = values.join(" ").toLocaleLowerCase("en-SG");
  return query
    .trim()
    .toLocaleLowerCase("en-SG")
    .split(/\s+/)
    .filter(Boolean)
    .every((word) => haystack.includes(word));
}
