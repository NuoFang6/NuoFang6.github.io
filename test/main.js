const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];
const btn = document.querySelector("button");
const inputName = document.querySelector("input");
const result = document.getElementById("result");
btn.addEventListener("click", function (event) {
  event.preventDefault();
  // 防止点击在form内的元素时页面自动刷新
  let success = false;
  for (let i = 0; i < contacts.length; i++) {
    const con = contacts[i];
    const tmp = con.split(":");
    // 按某个字符串分割为数组
    if (tmp[0] === inputName.value) {
      result.textContent = tmp[1];
      success = true;
      break;
    } else if (!success) {
      result.textContent = "未找到此联系人";
    }
  }
});
