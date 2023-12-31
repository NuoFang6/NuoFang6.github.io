fetch("https://v1.yurikoto.com/sentence")
  .then((response) => response.json())
  .then((data) => {
    const yurikotoContent = document.querySelector("#yurikotoContent");
    yurikotoContent.innerText = data.content;
    const yurikotoSource = document.querySelector("#yurikotoSource");
    yurikotoSource.innerText = data.source;
  })
  .catch(console.error);
// 番剧句子api
