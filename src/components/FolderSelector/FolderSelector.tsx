import { FolderSelectorAdd } from "./FolderSelectorAdd";
import { FolderSelectorSearch } from "./FolderSelectorSearch";

type Props = {
  variant: 'search' | 'add';
  [key: string]: any;
};

const FolderSelector: React.FC<Props> = ({ variant, ...otherProps }) => {
  if (variant === 'search') return <FolderSelectorSearch {...otherProps} />;
  if (variant === 'add') return <FolderSelectorAdd {...otherProps} />;

  return null;
}

export { FolderSelector };