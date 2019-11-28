function toggleVisibility(dep){
    if(dep.includes('detail')){
        untoggleAll()
        let image = document.getElementById(dep.split('-')[1])
        //mostrar imagem
        image.style.display = 'inline'
        //esconder detalhe
        let detail = document.getElementById(dep)
        detail.style.display = 'none'
    } else {
        untoggleAll()
        let image = document.getElementById(dep)
        //esconder imagem
        image.style.display = 'none'
        //mostrar detalhe
        let detail = document.getElementById('detail-' + dep)
        detail.style.display = 'inline'
    }
}

function untoggleAll() {
    let dep_imgs = document.getElementsByClassName('dep-img')
    for(let i = 0; i < dep_imgs.length; i++){
        dep_imgs[i].style.display = 'inline'
    }

    let detail_imgs = document.getElementsByClassName('detail-img')
    for(let i = 0; i < detail_imgs.length; i++){
        detail_imgs[i].style.display = 'none'
    }
}