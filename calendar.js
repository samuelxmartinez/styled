document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    // Preset appointments
    var presetAppointments = [
        {
            title: 'Consultation',
            duration: '00:30:00'
        },
        {
            title: 'Haircut',
            duration: '01:00:00'
        },
        {
            title: 'Shave',
            duration: '00:30:00'
        }
    ];

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',  // Displays the month view
        selectable: true,
        events: [], // Initially, no events
        select: function(info) {
            var options = presetAppointments.map(function(appointment, index) {
                return `${index + 1}. ${appointment.title} (${appointment.duration})`;
            }).join("\n");

      
