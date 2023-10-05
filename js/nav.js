document.addEventListener("DOMContentLoaded", async function() {
  const navBars = document.getElementsByClassName("navBar");

  try {
      const response = await fetch("nav.html");
      const navBarHtml = await response.text();
      
      for (const navBar of navBars) {
          navBar.innerHTML = navBarHtml;
      }
  } catch (error) {
      console.error("Error loading NavBar", error);
  }
});
document.addEventListener("DOMContentLoaded", async function() {
    const navBars = document.getElementsByClassName("navBar2");
  
    try {
        const response = await fetch("nav2.html");
        const navBarHtml = await response.text();
        
        for (const navBar of navBars) {
            navBar.innerHTML = navBarHtml;
        }
    } catch (error) {
        console.error("Error loading NavBar", error);
    }
  });
  