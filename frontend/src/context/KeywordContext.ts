import { createContext } from 'react'

type KeywordContextType = {
    keyword: string
    setKeyword: (keyword: string) => void
}

export const KeywordContext = createContext<KeywordContextType>({
    keyword: '',
    setKeyword: () => {}
})