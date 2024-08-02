 
 export const timeAgo = (timestamp: string): string => {
  const now = new Date();
  const timeDifference = now.getTime() - new Date(timestamp).getTime();

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) return `${seconds} sec`;
  if (minutes < 60) return `${minutes} mins`;
  if (hours < 24) return `${hours} h`;
  if (days < 7) return `${days} d`;
  if (weeks < 4) return `${weeks} w`;
  if (months < 12) return `${months} m`;
  return `${years}y`;
}