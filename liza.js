function updateTimer() {
  const now = new Date();
  const valentine = new Date(now.getFullYear(), 1, 14); // февраль — месяц 1
  if (now > valentine) valentine.setFullYear(valentine.getFullYear() + 1);
  const diff = valentine - now;
  const days = Math.floor(diff / (1000*60*60*24));
  document.getElementById('timer').innerText = `До 14 февраля: ${days} дн.`;
}
setInterval(updateTimer, 1000);
updateTimer();