
function calculateAttendance() {
    // Get input values
    const subject = document.getElementById('subject').value;
    const totalClasses = parseInt(document.getElementById('totalClasses').value);
    const attendedClasses = parseInt(document.getElementById('attendedClasses').value);
    const resultDiv = document.getElementById('result');

    // Validate inputs
    if (!subject || !totalClasses || !attendedClasses) {
        showResult('Please fill in all fields', 'warning');
        return;
    }

    if (attendedClasses > totalClasses) {
        showResult('Attended classes cannot be more than total classes', 'warning');
        return;
    }

    // Calculate attendance percentage
    const attendancePercentage = (attendedClasses / totalClasses) * 100;
    const requiredPercentage = 75;

    // Format the subject name for display
    const formattedSubject = subject.charAt(0).toUpperCase() + subject.slice(1);

    if (attendancePercentage < requiredPercentage) {
        // Calculate classes needed to reach 75%
        const classesNeeded = Math.ceil((requiredPercentage * totalClasses / 100) - attendedClasses);
        showResult(
            `${formattedSubject}<br>
            Current Attendance: ${attendancePercentage.toFixed(2)}%<br>
            You need to attend ${classesNeeded} more classes to reach ${requiredPercentage}% attendance.`,
            'warning'
        );  
    } else {
        // Calculate how many classes can be missed while maintaining 75%
        const possibleLeaves = Math.floor(attendedClasses - (requiredPercentage * totalClasses / 100));
        showResult(
            `${formattedSubject}<br>
            Current Attendance: ${attendancePercentage.toFixed(2)}%<br>
            You can skip ${possibleLeaves} classes while maintaining ${requiredPercentage}% attendance.`,
            'success'
        );
    }
}
                                    
function showResult(message, type) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = message;
    resultDiv.className = `result ${type}`;
}
