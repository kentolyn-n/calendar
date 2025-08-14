let currentDate = new Date();

function renderCalendar() {
  let month = currentDate.getMonth();
  let year = currentDate.getFullYear();

  // Show month & year
  let monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  document.getElementById("monthYear").textContent =
    monthNames[month] + " " + year;

  
  let firstDay = new Date(year, month, 1).getDay();

  
  let daysInMonth = new Date(year, month + 1, 0).getDate();

  
  let datesDiv = document.getElementById("dates");
  datesDiv.innerHTML = "";

  
  for (let i = 0; i < firstDay; i++) {
    let emptyDiv = document.createElement("div");
    datesDiv.appendChild(emptyDiv);
  }


  for (let day = 1; day <= daysInMonth; day++) {
    let dateDiv = document.createElement("div");
    dateDiv.textContent = day;

    
    let today = new Date();
    if (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      dateDiv.classList.add("today");
    }

    datesDiv.appendChild(dateDiv);
  }
}


function prevMonth() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
}

function nextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
}


renderCalendar();
