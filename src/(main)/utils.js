export const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const now = new Date();

    // Helper function to format time
    const formatTime = (date) => {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const period = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12; // Convert 24-hour time to 12-hour time
        const formattedMinutes = minutes.toString().padStart(2, '0');
        return `${formattedHours}:${formattedMinutes} ${period}`;
    };

    // Helper function to format date
    const formatDateOnly = (date) => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        return `${month} ${day}`;
    };

    const differenceInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    const today = now.toDateString();
    const dateStr = date.toDateString();

    if (dateStr === today) {
        return `Today ${formatTime(date)}`;
    } else if (differenceInDays === 1) {
        return `Yesterday ${formatTime(date)}`;
    } else if (differenceInDays < 365) {
        return formatDateOnly(date);
    } else {
        return formatDateOnly(date); // For dates more than a year old, you can adjust format as needed
    }
};