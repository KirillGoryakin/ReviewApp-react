import { useAppDispatch, useAppSelector } from "hooks/app";
import { CardList } from "./CardList";
import { NewUserDialog } from "./NewUserDialog";
import { Search } from "./Search";

const HomePage = () => {
  return (
    <div>
      <Search />
      <CardList />

      <NewUserDialog />
    </div>
  )
}

export { HomePage };