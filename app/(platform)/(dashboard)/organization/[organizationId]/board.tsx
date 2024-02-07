import {Button} from "@/components/ui/button";
import {deleteBoard} from "@/actions/delete-board";

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
            <Button variant="destructive" type={"submit"} size={"sm"}> Delete </Button>
        </form>
    )
}

export default  Board