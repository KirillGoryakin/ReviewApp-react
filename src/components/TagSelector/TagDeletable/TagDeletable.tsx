import { Tag } from "appTypes";
import { TagDeletableAdd } from "./TagDeletableAdd";
import { TagDeletableSearch } from "./TagDeletableSearch";

type CommonProps = { tag: Tag; [key: string]: any };

type PropsAdd = CommonProps & {
  variant: 'add';
  onClick: (tag: Tag) => void;
};

type PropsSearch = CommonProps & { variant: 'search'; };

type Props = PropsAdd | PropsSearch;

const TagDeletable: React.FC<Props> = ({ tag, variant, onClick, ...otherProps }) => {
  if (variant === 'search') return <TagDeletableSearch tag={tag} {...otherProps} />;
  if (variant === 'add') return <TagDeletableAdd tag={tag} onClick={onClick} {...otherProps} />;

  return null;
}

export { TagDeletable };