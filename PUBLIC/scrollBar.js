/* ====================================================================================================================
  =====================================   SECTION TRANSITIONS   ==========================================================
  ==================================================================================================================== */
  /*============================== HOME Section Toggle =====================================*/
  const SectionToggle1 = document.querySelector(".HOME");
  SectionToggle1.addEventListener("click", () => {
      document.querySelector("#ABOUT").classList.add("ACTIVATED");
      document.querySelector("#SERVICES").classList.add("ACTIVATED");
      document.querySelector("#PORTFOLIO").classList.add("ACTIVATED");
      document.querySelector("#CONTACT").classList.add("ACTIVATED");

      document.querySelector("#HOME").classList.remove("ACTIVATED");
  })

  /*============================== ABOUT Section Toggle =====================================*/
  const SectionToggle2 = document.querySelector(".ABOUT");
  SectionToggle2.addEventListener("click", () => {
      document.querySelector("#HOME").classList.add("ACTIVATED");
      document.querySelector("#SERVICES").classList.add("ACTIVATED");
      document.querySelector("#PORTFOLIO").classList.add("ACTIVATED");
      document.querySelector("#CONTACT").classList.add("ACTIVATED");

      document.querySelector("#ABOUT").classList.remove("ACTIVATED");
  })

  /*============================== SERVICES Section Toggle =====================================*/
  const SectionToggle3 = document.querySelector(".SERVICES");
  SectionToggle3.addEventListener("click", () => {
      document.querySelector("#ABOUT").classList.add("ACTIVATED");
      document.querySelector("#HOME").classList.add("ACTIVATED");
      document.querySelector("#PORTFOLIO").classList.add("ACTIVATED");
      document.querySelector("#CONTACT").classList.add("ACTIVATED");

      document.querySelector("#SERVICES").classList.remove("ACTIVATED");
  })

  /*============================== PORTFOLIO Section Toggle =====================================*/
  const SectionToggle4 = document.querySelector(".PORTFOLIO");
  SectionToggle4.addEventListener("click", () => {
      document.querySelector("#ABOUT").classList.add("ACTIVATED");
      document.querySelector("#SERVICES").classList.add("ACTIVATED");
      document.querySelector("#HOME").classList.add("ACTIVATED");
      document.querySelector("#CONTACT").classList.add("ACTIVATED");

      document.querySelector("#PORTFOLIO").classList.remove("ACTIVATED");
  })

  /*============================== CONTACT Section Toggle =====================================*/
  const SectionToggle5 = document.querySelector(".CONTACT");
  SectionToggle5.addEventListener("click", () => {
      document.querySelector("#ABOUT").classList.add("ACTIVATED");
      document.querySelector("#SERVICES").classList.add("ACTIVATED");
      document.querySelector("#PORTFOLIO").classList.add("ACTIVATED");
      document.querySelector("#HOME").classList.add("ACTIVATED");

      document.querySelector("#CONTACT").classList.remove("ACTIVATED");
  })
  /* ====================================================================================================================
  =====================================   BUTTONS   ==========================================================
  ==================================================================================================================== */
  //BTN-ABOUT-ME
  const SectionToggle21 = document.querySelector(".BTN-ABOUT-ME");
  SectionToggle21.addEventListener("click", () => {
      document.querySelector("#HOME").classList.add("ACTIVATED");
      document.querySelector("#SERVICES").classList.add("ACTIVATED");
      document.querySelector("#PORTFOLIO").classList.add("ACTIVATED");
      document.querySelector("#CONTACT").classList.add("ACTIVATED");

      document.querySelector("#ABOUT").classList.remove("ACTIVATED");
      document.querySelector(".HOME").classList.remove("ACTIVE");
      document.querySelector(".ABOUT").classList.add("ACTIVE");
  })
  //BTN-HIRE-ME
  const SectionToggle51 = document.querySelector(".BTN-HIRE-ME");
  SectionToggle51.addEventListener("click", () => {
      document.querySelector("#ABOUT").classList.add("ACTIVATED");
      document.querySelector("#SERVICES").classList.add("ACTIVATED");
      document.querySelector("#PORTFOLIO").classList.add("ACTIVATED");
      document.querySelector("#HOME").classList.add("ACTIVATED");

      document.querySelector("#CONTACT").classList.remove("ACTIVATED");
      document.querySelector(".ABOUT").classList.remove("ACTIVE");
      document.querySelector(".CONTACT").classList.add("ACTIVE");
  })