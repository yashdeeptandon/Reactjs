export default function TabButton(props, onSelect) {

  return (
    <li>
      <button onClick={onSelect}>{props.children}</button>;
    </li>
  );
}
