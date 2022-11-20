import { TagAdd } from "./TagAdd";
import { TagSearch } from "./TagSearch";

type Props = {
  variant: 'search' | 'add';
  [key: string]: any;
};

const TagSelector: React.FC<Props> = ({variant, ...otherProps}) => {
  if(variant === 'search') return <TagSearch {...otherProps} />;
  if(variant === 'add') return <TagAdd {...otherProps} />;

  return null;
}

export { TagSelector };