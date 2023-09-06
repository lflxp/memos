import { Slider, Row, Col, Divider, Card, Input } from "antd";
import React, { PureComponent } from "react";
import { v4 as uuid } from "uuid";

const { TextArea } = Input;
class UUID extends PureComponent {
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
    };
  }
  render() {
    return (
      <>
        <h1>MD5加密工具箱</h1>
        <Row gutter={16}>
          <Col span={24}>
            <Divider orientation="left">结果</Divider>
            <div style={{ width: "900px" }}>
              <Card bordered={false}>
                <Slider defaultValue={30} onChange={this.onChange} />
              </Card>
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Divider orientation="left">结果</Divider>
            <div style={{ width: "900px" }}>
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
    try {
      const tmp = [];
      for (let i = 0; i < e; i++) {
        tmp.push(uuid() + "\r");
      }
      this.setState({
        data: tmp,
      });
    } catch (e) {
      this.setState({ data: e, hasError: true });
    }
  };
}

export default UUID;
