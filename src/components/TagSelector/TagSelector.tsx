import { TagAdd } from "./TagAdd";
import { TagSearch } from "./TagSearch";

type CommonProps = { [key: string]: any };

type PropsAdd = CommonProps & {
  variant: 'add';
  context: React.Context<any>;
};

type PropsSearch = CommonProps & { variant: 'search'; };

type Props = PropsAdd | PropsSearch;

const TagSelector: React.FC<Props> = ({variant, context, ...otherProps}) => {
  if(variant === 'search') return <TagSearch {...otherProps} />;
  if(variant === 'add') return <TagAdd context={context} {...otherProps} />;

  return null;
}

export { TagSelector };