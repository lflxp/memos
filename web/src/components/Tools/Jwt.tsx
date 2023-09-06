import { Row, Col, Divider, Card, Input } from "antd";
// import "antd/dist/antd.css";
import { Base64 } from "js-base64";
import React, { PureComponent } from "react";
import ReactJson from "react-json-view";

const { TextArea } = Input;
class Jwt extends PureComponent<any, any> {
  constructor(_props: any) {
    super(_props);
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
    // const [tabPosition, setTabPosition] = useState<TabPosition>("right");
    // const changeTabPosition = (e: RadioChangeEvent) => {
    //   setTabPosition(e.target.value);
    // };
    return (
      <>
        {/* <h1>JWT解析工具箱</h1> */}
        <Row gutter={16}>
          <Col span={24}>
            <Divider orientation="left">原文</Divider>
            <div style={{ width: "600px" }}>
              <Card bordered={false}>
                <TextArea showCount rows={10} maxLength={100000} placeholder="jwt复制到这里" onChange={this.onChange} />
              </Card>
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Divider orientation="left">解码</Divider>
            <div style={{ width: "600px" }}>
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
    const tmp = e.target.value.split(".");
    if (tmp.length === 3) {
      const xx = Base64.decode(e.target.value.split(".")[1]);
      this.setState({
        data: JSON.parse(xx),
      });
    } else {
      this.setState({
        data: JSON.parse('{"msg":"数据格式不对"}'),
      });
    }
  };
}

export default Jwt;
