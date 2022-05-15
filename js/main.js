import sublinks from "./data.js";

const subBarLinks = document.querySelector(".sidebar-links")
const closeBtn  = document.querySelector(".close-btn")
const toggleBtn = document.querySelector(".btn-toggle")
const sidebarWrapper = document.querySelector(".sidebar-wrapper")
const linkBtns = [...document.querySelectorAll(".btn-links")]
const submenu = document.querySelector(".submenu")
const nav = document.querySelector("nav")
const home = document.querySelector(".home-section")
toggleBtn.addEventListener("click",function() {
    sidebarWrapper.classList.add("show")
})
closeBtn.addEventListener("click",function() {
    sidebarWrapper.classList.remove("show")
})
subBarLinks.innerHTML = sublinks.map((link) =>{
    const {links,page} = link
    return `
    <article class="container">
    <h4>
    ${page}
    </h4>
    <div class="sidebar-sublinks my-3 row">
    ${links.map((link) =>
        {
            return `
            <div class="col-6 mb-2">
            <a class="col-6" href="${link.url}">
            <i class="${link.icon}"></i>
            ${link.label}
            </a>
            </div>
            
            
            `

        }).join(" ")}
    </div>
    </article>
    `
}).join(" ")
linkBtns.forEach((btn)=>{
btn.addEventListener("mouseover",function(e)
{

    const text = e.currentTarget.textContent;
const tempBtn = e.target.getBoundingClientRect();
const bottom = tempBtn.bottom - 3;
const center = (tempBtn.left + tempBtn.right)/2
const tempPage = sublinks.find((link) => link.page === text);
if(tempPage)
{
    const { page, links } = tempPage;
    submenu.classList.add("show")
    submenu.style.left = center + "px";
    submenu.style.top = bottom + "px";
    let columns = 'col-2 me-5';
    if (links.length === 3) {
      columns = 'col-3 me-3';
    }
    if (links.length > 3) {
      columns = 'col-4 mb-2 me-3';
    }
    submenu.innerHTML = `
    <section> 
    <h4>${page}</h4>
    <div class="row align-items-center">
    ${links
        .map((link) => {
          return `<div class="${columns}" >

          <a href="${link.url}" class="d-flex ">
          <i class="${link.icon} me-3"></i>${link.label}

          </a>
         </div>`;
        })
        .join('')}
   
    </div>
    </section>
    `;

}
})
})
home.addEventListener('mouseover', function () {
    submenu.classList.remove('show');
  });
  nav.addEventListener('mouseover', function (e) {
    if (!e.target.classList.contains('btn-links')) {
      submenu.classList.remove('show');
    }
  });
  