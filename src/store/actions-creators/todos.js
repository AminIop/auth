import { TodoApi } from "../../utils/apis";
import { ActionTypesCommon, ActionTypesTodos } from "../constants/actions-types";


const getAllTodosRequest = () => ({
    type: ActionTypesCommon.API_CALL,
    subType: ActionTypesTodos.PLACEHOLDER.GET,
    api: (filter) => TodoApi.getAllTodos(filter)
})

export default getAllTodosRequest