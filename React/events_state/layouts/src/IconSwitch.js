function IconSwitch(data) {
  return <span onClick={data.onSwitch} className="material-icons">{data.icon}</span>;
}

export default IconSwitch;