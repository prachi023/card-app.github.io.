import { createContext, Dispatch, SetStateAction } from 'react';
export interface ContextState {
    listData: string[][],
    setListData: Dispatch<SetStateAction<string[][]>>
};

const CardDataContext = createContext({} as ContextState);

export default CardDataContext;
