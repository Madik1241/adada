function setLang(lang){
document.querySelectorAll('[data-ru]').forEach(el=>{
el.textContent = el.getAttribute('data-'+lang)
})
}
