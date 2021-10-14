console.log('we are in logic js');
calendarBtn.addEventListener("click", async () => {
  const author = document.querySelector("#author").value;
  const scheduleHobbyDate = document.querySelector("#body").value;
  let newData = { author: author, body: scheduleHobbyDate };
  console.log(newData);
  const response = await fetch("/.netlify/functions/schedule", {
    method: "POST",
    body: JSON.stringify(newData),
  });
  console.log(response);
  let data = response.json();
  console.log(data);
});

checkScheduleBtn.addEventListener("click", async (event, context) => {
  let allSchedule = await fetch("/.netlify/functions/test2", {
    method: "GET",
    body: JSON.stringify(allSchedule),
  });
  console.log(response.json());
  console.log(allSchedule);
});
