import { Row, Col, Divider, Card, Input } from "antd";
import React, { PureComponent } from "react";

const { TextArea } = Input;
class Time extends PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: {
        name: "maide",
        tall: 171,
        other: {
          pant: true,
          arr: [1, 2, 3, 4],
        },
      },
      now: Math.round(new Date().getTime() / 1000),
    };
  }
  render() {
    return (
      <>
        {/* <h1>JSON格式化</h1> */}
        <Row gutter={16}>
          <Col span={24}>
            <Divider orientation="left">原文 {this.state.now}</Divider>
            <div style={{ width: "600px" }}>
              <Card bordered={false}>
                <TextArea showCount maxLength={999999} rows={10} onChange={this.onChange} />
              </Card>
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Divider orientation="left">解码</Divider>
            <div style={{ width: "600px" }}>
              <Card bordered={false}>
                <TextArea showCount maxLength={100000} rows={10} value={this.state.data} />
              </Card>
            </div>
          </Col>
        </Row>
      </>
    );
  }
  onChange = (e: any) => {
    console.log("Change:", e.target.value);
    const tmp = parseInt(e.target.value);
    const unixTimestamp = new Date(tmp * 1000);
    console.log(tmp, unixTimestamp, unixTimestamp.toLocaleString());
    this.setState({
      data: unixTimestamp + "\n\n" + unixTimestamp.toLocaleString(),
    });
  };
}

export default Time;
