import {Button} from "@/components/ui/button";
import {deleteBoard} from "@/actions/delete-board";
import FormDelete from "./form-delete";

interface BoardProps {
    board: {
        title: string;
        id: string;
    }
}

const Board = ({board} : BoardProps) => {
    const deleteBoardWithId = deleteBoard.bind(null,board.id)
    return (
        <form className="flex items-center gap-x-2" action={deleteBoardWithId}>
            <p>Board Title : {board.title}</p>
            <FormDelete/>
        </form>
    )
}

export default  Board