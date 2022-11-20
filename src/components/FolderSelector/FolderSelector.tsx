import { FolderSelectorAdd } from "./FolderSelectorAdd";
import { FolderSelectorSearch } from "./FolderSelectorSearch";

type CommonProps = { [key: string]: any };

type PropsAdd = CommonProps & {
  variant: 'add';
  context: React.Context<any>;
};

type PropsSearch = CommonProps & { variant: 'search'; };

type Props = PropsAdd | PropsSearch;

const FolderSelector: React.FC<Props> = ({ variant, context, ...otherProps }) => {
  if (variant === 'search') return <FolderSelectorSearch {...otherProps} />;
  if (variant === 'add') return <FolderSelectorAdd context={context} {...otherProps} />;

  return null;
}

export { FolderSelector };