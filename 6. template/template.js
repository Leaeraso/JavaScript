// <!-- <li class="list">
//             <b>Pais:</b>
//             <span class="text-primary">Aqui va el pais</span>
//         </li> -->
const lista = document.querySelector('#lista')

const arrayPaises = ['Peru', 'Mexico', 'Colombia']

const fragment = document.createDocumentFragment()

const clickPaises = (e) => console.log('Me diste click', e.target)

//Primer Manera

// let template = "";

// arrayPaises.forEach(pais => {
//     template += `
//     <li class="list">
//         <b>Pais: </b>
//         <span class="text-primary">${pais}</span>
//     </li>
//     `
// })

// lista.innerHTML = template;

//Segunda Manera

// arrayPaises.forEach(pais => {
//     const li = document.createElement("li");
//     li.className = "list";

//     const b = document.createElement("b");
//     b.textContent = "pais: ";

//     const span = document.createElement("span");
//     span.className = "text-primary"
//     span.textContent = pais;

//     li.appendChild(b);
//     li.appendChild(span);

//     fragment.appendChild(li);
// })

// lista.appendChild(fragment);

//Template (Tercera Manera)

const liTemplate = document.querySelector('#liTemplate')

//Se clona el liTemplate
// const clone = liTemplate.content.cloneNode(true);

// clone.querySelector(".text-primary").textContent = "agregue a traves de un template"

// lista.appendChild(clone);

arrayPaises.forEach((pais) => {
  const clone = liTemplate.content.firstElementChild.cloneNode(true)
  clone.querySelector('span').textContent = pais

  clone.addEventListener('click', clickPaises)

  fragment.appendChild(clone)
})

lista.appendChild(fragment)
