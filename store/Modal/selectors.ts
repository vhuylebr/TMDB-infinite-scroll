import { useSelector } from "react-redux";
import { State } from "../../types/State";
import { ModalState } from "./reducers";

export const useModal = () => {
    return useSelector<State, ModalState>(({ modal }) => modal);
}