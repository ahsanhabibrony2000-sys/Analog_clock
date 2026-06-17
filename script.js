function updateClock() {
  const now = new Date();

  // Get current time
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Calculate angles
  const secondDeg = ((seconds / 60) * 360) + 90;
  const minuteDeg = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
  const hourDeg = ((hours / 12) * 360) + ((minutes/60)*30) + 90;

  // Apply rotation
  document.getElementById("second").style.transform = `rotate(${secondDeg}deg)`;
  document.getElementById("minute").style.transform = `rotate(${minuteDeg}deg)`;
  document.getElementById("hour").style.transform = `rotate(${hourDeg}deg)`;
}

// Run every second
setInterval(updateClock, 1000);
updateClock();
