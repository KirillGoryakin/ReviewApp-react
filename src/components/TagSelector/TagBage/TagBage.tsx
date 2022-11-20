import { Tag } from "appTypes";
import { TagBageAdd } from "./TagBageAdd";
import { TagBageSearch } from "./TagBageSearch";

type CommonProps = { tag: Tag; [key: string]: any };

type PropsAdd = CommonProps & {
  variant: 'add';
  onClick: (tag: Tag) => void;
};

type PropsSearch = CommonProps & { variant: 'search'; };

type Props = PropsAdd | PropsSearch;

const TagBage: React.FC<Props> = ({ tag, variant, onClick, ...otherProps }) => {
  if (variant === 'search') return <TagBageSearch tag={tag} {...otherProps} />;
  if (variant === 'add') return <TagBageAdd tag={tag} onClick={onClick} {...otherProps} />;

  return null;
}

export { TagBage };