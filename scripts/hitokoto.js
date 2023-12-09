fetch("https://v1.hitokoto.cn")
  .then((response) => response.json())
  .then((data) => {
    const hitokotoMain = document.querySelector("#hitokotoMain");
    hitokotoMain.href = `https://hitokoto.cn/?uuid=${data.uuid}`;
    hitokotoMain.innerText = data.hitokoto;
    const hitokotoFrom = document.querySelector("#hitokotoFrom");
    hitokotoFrom.href = hitokotoMain.href;
    hitokotoFrom.innerText = "—— "+data.from;
  })
  .catch(console.error);
