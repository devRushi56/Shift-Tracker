// Add event listeners for hours, minutes, and current time input
document.getElementById('currentHours').addEventListener('input', calculateRemainingTime);
document.getElementById('currentMinutes').addEventListener('input', calculateRemainingTime);
document.getElementById('hours').addEventListener('input', calculateRemainingTime);
document.getElementById('minutes').addEventListener('input', calculateRemainingTime);

function calculateRemainingTime() {
    const totalShiftHours = 8; // Fixed 8-hour shift
    
    // Get the user input for the current time
    let currentHours = parseInt(document.getElementById('currentHours').value) || 0;
    let currentMinutes = parseInt(document.getElementById('currentMinutes').value) || 0;
    
    // Get the user input for hours and minutes they've worked
    let completedHours = parseInt(document.getElementById('hours').value) || 0;
    let completedMinutes = parseInt(document.getElementById('minutes').value) || 0;
    
    // Convert completed time to minutes
    let completedTimeInMinutes = (completedHours * 60) + completedMinutes;
    
    // Total shift time in minutes
    let totalShiftMinutes = totalShiftHours * 60;
    
    // Calculate remaining time in minutes
    let remainingMinutes = totalShiftMinutes - completedTimeInMinutes;
    
    if (remainingMinutes < 0) {
        document.getElementById('remainingHours').textContent = "Shift already completed.";
        document.getElementById('endTime').textContent = "";
        return;
    }

    // Convert remaining time back to hours and minutes
    let remainingHours = Math.floor(remainingMinutes / 60);
    let remainingMins = remainingMinutes % 60;

    // Create a Date object from the user input for current time
    let currentTime = new Date();
    currentTime.setHours(currentHours);
    currentTime.setMinutes(currentMinutes);
    
    // Add the remaining time to the current time to calculate the end time
    currentTime.setMinutes(currentTime.getMinutes() + remainingMinutes);
    
    // Extract end hours and minutes
    let endHours = currentTime.getHours();
    let endMinutes = currentTime.getMinutes();
    
    // Format and display the results
    document.getElementById('remainingHours').textContent = `Remaining Time: ${remainingHours}h ${remainingMins}m`;
    document.getElementById('endTime').textContent = `Shift will end at: ${endHours}:${endMinutes < 10 ? '0' + endMinutes : endMinutes}`;
}
