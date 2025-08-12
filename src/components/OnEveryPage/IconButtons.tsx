// interface props extends componentProps {
//   [content: string]: unknown;
// }

type props = React.ComponentPropsWithoutRef<"button">;

const IconButtons = (props: props) => {
  return (
    <button
    {...props}
    onClick={props.onClick}
    className={`hover:cursor-pointer rounded-full block p-2 ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default IconButtons;
