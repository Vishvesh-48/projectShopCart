import { useEffect } from "react"

export const useTitle = (title) => {

    useEffect(()=>{
        document.title = `${title} | shoppingcr`
    },[title])

  return null
}
