export default function Today({objetoLoginRecebido, setObjetoLoginRecebido}){
    function teste(){
        console.log(objetoLoginRecebido)
    }
    return(
        <h1 onClick={teste}>CLIQUE</h1>

    )
}