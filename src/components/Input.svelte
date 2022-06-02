<script>
import { bgBase, bgColorDefault, textColor } from "../store";

let textColorInput = null;
textColor.subscribe(value => textColorInput = value)

let bgColor = '';
bgBase.subscribe(valuer => bgColor = valuer)


</script>

<div>
    <textarea type="text" value='loremsdfffffffffffffffff' class="{bgColor} outline-none border-none min-h-screen w-full bg-base-100 text-[color:{textColorInput}] font-bold p-2 pb-0" ></textarea>
</div>