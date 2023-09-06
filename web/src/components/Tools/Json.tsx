import { Row, Col, Divider, Card, Input } from "antd";
import React, { PureComponent } from "react";
import ReactJson from "react-json-view";

const { TextArea } = Input;
class JsonFormat extends PureComponent {
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
        {/* <h1>JSON格式化</h1> */}
        <Row gutter={16}>
          <Col span={24}>
            <Divider orientation="left">原文</Divider>
            <div style={{ width: "900px" }}>
              <Card bordered={false}>
                <TextArea showCount maxLength={999999} rows={10} onChange={this.onChange} />
              </Card>
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Divider orientation="left">解码</Divider>
            <div style={{ width: "900px" }}>
              <Card bordered={false}>
                <ReactJson src={this.state.data} />
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
      const datas = JSON.parse(e.target.value);
      this.setState({
        data: datas,
      });
    } catch (e) {
      this.setState({
        data: JSON.parse('{"msg":"' + e + '"}'),
      });
    }
  };
}

export default JsonFormat;
