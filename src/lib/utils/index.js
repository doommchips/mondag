export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-UK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatDateNL(date) {
  return new Date(date).toLocaleDateString("nl-UK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatDateDay(date) {
  return new Date(date).toLocaleDateString("en-UK", {
    day: "numeric",
  });
}

export function formatDateNum(date) {
  return new Date(date).toLocaleDateString("en-UK", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
}