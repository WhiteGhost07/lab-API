const url = 'https://type.fit/api/quotes'
async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    let div = document.createElement("div");
    document.body.appendChild(div);
    div.append(data[88].author);
  }
  getData();  