import { Row, Col, Divider, Card, Input } from "antd";
import MD5Encrypt from "js-md5";
import React, { PureComponent } from "react";

const { TextArea } = Input;
class Md5 extends PureComponent<any, any> {
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
    try {
      this.setState({
        data: MD5Encrypt(e.target.value),
      });
    } catch (e) {
      this.setState({ data: e, hasError: true });
    }
  };
  onChange2 = (e: any) => {
    this.setState({
      isok: e,
    });
  };
}

export default Md5;
