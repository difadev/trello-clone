import {Button} from "@/components/ui/button";

interface BoardProps {
    board: {
        title: string;
        id: string;
    }
}

const Board = ({board} : BoardProps) => {
    return (
        <form className="flex items-center gap-x-2">
            <p>Board Title : {board.title}</p>
            <Button variant="destructive" size={"sm"}> Delete </Button>
        </form>
    )
}

export default  Board