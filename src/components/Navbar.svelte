<script>
  import { bgColorDefault, textColor, bgBase } from "../store";

  let bgColorBool;
  let bgBase100 = "";
  let bgBase200 = "";
  let bgBase300 = "";
  let btnBGColor = "";
  let btnBG = "";
  bgColorDefault.subscribe((value) => (bgColorBool = value));
  function switchBG() {
    bgColorBool = !bgColorBool;
    bgColorDefault.update((value) => (value = bgColorBool));
    if (bgColorBool === true) {
      bgBase100 = "bg-accent-content";
      bgBase200 = "bg-accent";
      bgBase300 = "bg-accent-focus";
      btnBG = "btn-outline btn-accent";
      bgBase.update(value => value = bgBase300)
    } else {
      bgBase100 = "";
      bgBase200 = "";
      bgBase300 = "";
      btnBG = "";
      bgBase.update(value => value = bgBase300)
    }
    localStorage.setItem('bg', bgBase200)
  }

  // local storage and user color
  let textColorNav;
  if (localStorage.getItem("color") === null && bgColorBool === false) {
    textColorNav = "#ffffff";
  } else {
    textColorNav = localStorage.getItem("color");
  }

  textColor.update((value) => (value = textColorNav));
  function newColor() {
    textColor.update((v) => (v = textColorNav));
    localStorage.setItem("color", textColorNav);
  }
</script>

<div class="fixed left-0 bottom-0 w-full bg-base-200 {bgBase200}">
  <div class=" h-[1px] bg-teal-500" style="background-color: {textColorNav};" />
  <div class="flex items-center justify-between p-2">
    <div class="flex items-center gap-4">
      <div class="md:hidden">
        <div class="dropdown dropdown-top ">
          <label
            tabindex="0"
            class="btn text-teal-500 {btnBG}"
            style="color: {textColorNav};"
            ><svg
              class="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
              ><path
                d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
              /></svg
            ></label
          >
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-300 {bgBase300} rounded-box w-52"
          >
            <li>
              <label
                for="my-modal-settings"
                class="modal-button modal-open capitalize text-teal-500 {btnBG}"
                style="color: {textColorNav}">Settings</label
              >
            </li>
            <li>
              <label
                for="my-modal-help"
                class="modal-button modal-open capitalize text-teal-500 {btnBG}"
                style="color: {textColorNav}">Help</label
              >
            </li>
            <li>
              <label
                for="my-modal-about"
                class="modal-button modal-open capitalize text-teal-500 {btnBG}"
                style="color: {textColorNav}">about</label
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="hidden md:block">
        <label
          for="my-modal-settings"
          class="btn modal-button modal-open capitalize text-teal-500 {btnBG}"
          style="color: {textColorNav}">Settings</label
        >
      </div>
      <div class="hidden md:block">
        <label
          for="my-modal-help"
          class="btn modal-button modal-open capitalize text-teal-500 {btnBG}"
          style="color: {textColorNav}">Help</label
        >
      </div>
      <div class="hidden md:block">
        <label
          for="my-modal-about"
          class="btn modal-button modal-open capitalize text-teal-500 {btnBG}"
          style="color: {textColorNav}">about</label
        >
      </div>
      <div class="hidden md:block">
        <a
          href="#"
          class="btn capitalize text-teal-500 {btnBG}"
          style="color: {textColorNav}">Follow me</a
        >
      </div>
      <div class="hidden md:block">
        <a
          href="#"
          class="btn capitalize text-teal-500 {btnBG}"
          style="color: {textColorNav}">blog</a
        >
      </div>
      <div>
        <label
          for="my-modal-hacker"
          class="btn modal-button modal-open capitalize text-teal-500 {btnBG}"
          style="color: {textColorNav}">Become a real Hacker</label
        >
        <!-- Put this part before </body> tag -->
        <input type="checkbox" id="my-modal-hacker" class="modal-toggle" />
        <label for="my-modal-hacker" class="modal cursor-pointer">
          <label class="modal-box relative {bgBase200}" for="">
            <h3 class="text-xl font-bold text-center">Become a real Hacker</h3>
            <div class="">
              <div class="py-1 text-sm">
                Software Development is an essential skill for any Hacker! Only
                for the mount of August you can get the following courses for
                25% off your first month!
              </div>
              <ul class="list-disc self-center pl-8">
                <li>
                  <span class="text-rose-50">link</span>
                </li>
                <li>
                  <span class="text-rose-50">link</span>
                </li>
                <li>
                  <span class="text-rose-50">link</span>
                </li>
              </ul>
              <div class="py-1 text-sm">
                These links may earn a commission for us at no extra cost to
                you.
              </div>
            </div>
            <div class="modal-action">
              <label
                for="my-modal-hacker"
                class="btn capitalize text-teal-500 {btnBG}"
                style="color: {textColorNav}">Close</label
              >
            </div>
          </label>
        </label>
      </div>
    </div>
    <div>
      <label class="swap swap-rotate">
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" on:click={switchBG} />

        <!-- sun icon -->
        <svg
          class="swap-on fill-current w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          ><path
            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
          /></svg
        >

        <!-- moon icon -->
        <svg
          class="swap-off fill-current w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          ><path
            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
          /></svg
        >
      </label>
    </div>
  </div>
</div>

<!-- Put this part before </body> tag  -->
<!-- SETTINGS -->
<input type="checkbox" id="my-modal-settings" class="modal-toggle" />
<label for="my-modal-settings" class="modal cursor-pointer">
  <label class="modal-box relative {bgBase200}" for="">
    <h3 class="text-xl font-bold text-center">Settings</h3>
    <div class="flex flex-col mt-4">
      <div class="flex items-center justify-center gap-4">
        <h5>Color:</h5>
        <div class="">
          <input
            type="text"
            bind:value={textColorNav}
            on:input={newColor}
            class=" input input-bordered h-8 w-[100px] {bgBase300}"
            style="border-color: {textColorNav}; outline-color:{textColorNav}"
          />
        </div>
        <div class="h-8">
          <input
            type="color"
            class=" border-none outline-none bg-transparent w-8 h-8 cursor-pointer rounded-[50%]"
            bind:value={textColorNav}
            on:input={newColor}
          />
        </div>
      </div>
    </div>
    <div class="modal-action">
      <label
        for="my-modal-settings"
        class="btn capitalize text-teal-500 {btnBG}"
        style="color: {textColorNav}">Close</label
      >
    </div>
  </label>
</label>

<!-- Put this part before </body> tag -->
<!-- HELP -->
<input type="checkbox" id="my-modal-help" class="modal-toggle" />
<label for="my-modal-help" class="modal cursor-pointer">
  <label class="modal-box relative {bgBase200}" for="">
    <h3 class="font-bold text-center text-xl">Help</h3>
    <div class="">
      <div class="py-1 text-sm">
        To begin, start typing on your keyboard and your hacker code will
        immediately appear! You can also enter full screen in your browser.
      </div>
      <div class="py-1 text-sm">
        To enhance your experience, press <kbd
          class="kbd text-rose-50 {bgBase300}">shift</kbd
        >
        or <kbd class="kbd text-rose-50 {bgBase300}">alt</kbd> (or
        <kbd class="kbd text-rose-50 {bgBase300}">option</kbd>
        for Mac) three times. Press
        <kbd class="kbd text-rose-50 {bgBase300}">space</kbd> to close any dialogs.
      </div>
      <div class="py-1 text-sm">
        Configs can be modified in the Settings menu.
      </div>
    </div>

    <div class="modal-action">
      <label
        for="my-modal-help"
        class="btn capitalize text-teal-500 {btnBG}"
        style="color: {textColorNav}">Close</label
      >
    </div>
  </label>
</label>

<!-- Put this part before </body> tag -->
<!-- ABOUT-->
<input type="checkbox" id="my-modal-about" class="modal-toggle" />
<label for="my-modal-about" class="modal cursor-pointer">
  <label class="modal-box relative {bgBase200}" for="">
    <h3 class="text-xl font-bold text-center capitalize">about</h3>
    <div class="">
      <div class="py-1 text-sm">
        Created in 2011, Hacker Typer arose from a simple desire to look like
        the stereotypical hacker in movies and pop culture. Since that time, it
        has brought smiles to millions of people across the globe. Plus, many of
        you have temporarily transformed into hackers yourselves, all from a few
        clicks on the keyboard (and some programming magic behind the scenes!).
      </div>
      <div class="py-1 text-sm">
        Also, if you are using Hacker Typer in any of your projects, videos or
        images, feel free to reach out! It’s amazing to see what happens when
        people’s creativity interacts with this site.
      </div>
      <div class="py-1 text-sm">
        You can reach the developer here: <span class=" text-rose-50"
          >hackertyper@duiker101.net</span
        >
      </div>
      <div class="py-1 text-sm">
        And please note: No, I will kindly not hack into anyone’s personal
        property, so please skip these requests. Thanks!
      </div>
      <div class="py-1 text-sm">
        You can find more info at <span class=" text-rose-50"
          >duiker101.net</span
        >
      </div>
    </div>
    <div class="modal-action">
      <label
        for="my-modal-about"
        class="btn capitalize text-teal-500 {btnBG}"
        style="color: {textColorNav}">Close</label
      >
    </div>
  </label>
</label>
