//your JS code here. If required.
// your JS code here

const select = document.getElementById("colorSelect");
const btn = document.querySelector('input[type="button"]');

btn.addEventListener("click", () => {
    const index = select.selectedIndex;   // get selected option index
    if (index !== -1) {
        select.remove(index);             // remove that option
    }
});
