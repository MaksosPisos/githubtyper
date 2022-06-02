<script>
  import Input from "./components/Input.svelte";
  import Navbar from "./components/Navbar.svelte";
  import { textColor } from "./store";
  
  
  // import {textColor} from './store'
  let textColorValue = "";
  textColor.subscribe((value) => {
    textColorValue = value;
  });
  
  
</script>

<div
  class="max-h-screen overflow-hidden font-bold"
  style="color: {textColorValue};"
>
  <Input />
  <Navbar />
</div>
