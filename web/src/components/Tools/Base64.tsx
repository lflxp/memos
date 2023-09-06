import { Row, Col, Divider, Card, Input, Switch } from "antd";
import { Base64 } from "js-base64";
import React, { PureComponent } from "react";

const { TextArea } = Input;
class B6 extends PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isok: true,
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
        <Row gutter={16}>
          <Col span={24}>
            <Divider orientation="left">原文</Divider>
            <div style={{ width: "600px" }}>
              <Card bordered={false}>
                <TextArea showCount maxLength={100000} rows={10} onChange={this.onChange} />
              </Card>
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Divider orientation="left">切换</Divider>
            <Switch defaultChecked checkedChildren="编码" unCheckedChildren="解码" onChange={this.onChange2} />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Divider orientation="left">解码</Divider>
            <div style={{ width: "600px" }}>
              <Card bordered={false}>
                <TextArea showCount maxLength={100000} value={this.state.data} />
              </Card>
            </div>
          </Col>
        </Row>
      </>
    );
  }
  onChange = (e: any) => {
    console.log("Change:", e.target.value);
    if (this.state.isok) {
      this.setState({
        data: Base64.encode(e.target.value),
      });
    } else {
      try {
        this.setState({
          data: Base64.decode(e.target.value),
        });
      } catch (e) {
        this.setState({ data: e, hasError: true });
      }
    }
  };
  onChange2 = (e: any) => {
    this.setState({
      isok: e,
    });
  };
}

export default B6;
