export function getTimeAgo(dateString) {
  const now = new Date();
  const date = new Date(dateString);
  const diffMs = now - date;

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) {
    return `${seconds} ثانیه پیش`;
  } else if (minutes < 60) {
    return `${minutes} دقیقه پیش`;
  } else if (hours < 24) {
    return `${hours} ساعت پیش`;
  } else if (days < 30) {
    return `${days} روز پیش`;
  } else if (months < 12) {
    return `${months} ماه پیش`;
  } else {
    return `${years} سال پیش`;
  }
}