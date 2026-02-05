export default function timeAgo(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const agoSeconds = (now.getTime() - date.getTime()) / 1000;

  if (agoSeconds < 60) {
    return `${Math.floor(agoSeconds)}s ago`;
  }

  if (agoSeconds < 3600) {
    return `${Math.floor(agoSeconds / 60)}m ago`;
  }

  if (agoSeconds < 86400) {
    return `${Math.floor(agoSeconds / 3600)}h ago`;
  }

  if (agoSeconds > 86400) {
    const day = Math.floor(agoSeconds / 86400);
    return day === 1 ? `${day}day ago` : `${day}days ago`;
  }
}
