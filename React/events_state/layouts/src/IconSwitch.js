function IconSwitch(props) {
  return <span onClick={props.onSwitch(props.icon)} className="material-icons">{props.icon}</span>;
}

export default IconSwitch;