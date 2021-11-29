window.addEventListener('scroll', function () {
    let header = document.querySelector('nav');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})

let member = {
    name: ["Daniel Morrison", "Egi Nawwar Sukma", "Angelica Watson"],
    foto: ["Assets/Image/ceo.jpg", "Assets/Image/egi.jpg", "Assets/Image/market.jpg"],
    position: ["Founder & CEO", "Programmer", "Marketing Director"]
}

for (let i=0; i<member.name.length; i++) {

    console.log(member.foto[i])
    console.log(member.name[i])
    console.log(member.position[i])

    let div = document.createElement('div');
    div.setAttribute("class", "list-member")
    console.log(div)
    
    let img = document.createElement('img');
    img.setAttribute("src", member.foto[i])
    img.innerHTML = ``
    console.log(img)

    let h3 = document.createElement('h3');
    h3.innerText = member.name[i]
    console.log(h3)

    let p =  document.createElement('p');
    p.innerText = member.position[i]
    console.log(p)

    let members = document.querySelector(".allmember");

    div.append(img);
    div.append(h3);
    div.append(p);
    members.appendChild(div)
}