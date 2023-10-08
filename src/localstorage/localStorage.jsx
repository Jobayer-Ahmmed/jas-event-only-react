const getCard=()=>{
    const getStorage = localStorage.getItem("Card")
    if(getStorage)
        return JSON.parse(getStorage)
    return []
}

const saveCard=cardId=>{
    const storeCard = getCard()
    const exists = storeCard.find(id=>id==cardId )
    if(!exists){
        storeCard.push(cardId)
        const stringifiedCard = JSON.stringify(storeCard)
        localStorage.setItem("Card", stringifiedCard)
    }

}



export  {saveCard, getCard}