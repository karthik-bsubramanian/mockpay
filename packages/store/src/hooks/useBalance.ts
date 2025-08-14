import { balanceAtom } from "../atoms/balance";
import { useAtomValue } from "jotai";

export const useBalance = ()=>{
    const value = useAtomValue(balanceAtom);
    return value;
}