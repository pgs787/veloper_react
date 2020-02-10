import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
  render() {
    console.log("redndering list");
    const { data, onRemove, onUpdate } = this.props;
    if (!data) return null;
    const list = data.map(info => (
      <PhoneInfo
        onUpdate={onUpdate}
        info={info}
        key={info.id}
        onRemove={onRemove}
      ></PhoneInfo>
    ));
    return <div>{list}</div>;
  }
}

export default PhoneInfoList;
