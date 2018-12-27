import React from 'react';
import {Col,MDBCard, MDBCardTitle, MDBCardText,Select,Fa,Row,SelectInput,SelectOptions, SelectOption, MDBCollapse,MDBCardBody,Input, Navbar, NavbarNav, NavItem, NavLink} from 'mdbreact';



class SJobCompamy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      radio: 2
    };
    this.onClick = this.onClick.bind(this);

    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
    };
  }
  onClick(){
    this.setState({
      collapse: !this.state.collapse
    });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  getValueOfSelectOne = value => {
    console.log(value);
  }
  onClick = (nr) => {
    this.setState({
      radio: nr
    });
  }
  render() {
    return (

      <div>
        <Row style={{marginTop:"30px"}}>
          <Col md="8" className="offset-md-1">

            <MDBCard className="card-body px-3 pb-3" block>
              <MDBCardBody>
                <Row>
                  <Col md="6"style={{marginTop:"0.55em"}}>
                    <form className="form-inline mt-4 mb-4">
                      <Fa icon="search" />
                      <input
                        className="form-control form-control-sm ml-3 w-75"
                        type="text"
                        placeholder="搜索公司、工作"
                        aria-label="Search"
                      />
                    </form>
                  </Col>
                  <Col md="6">
                    <Select multiple getValue={value => this.getValueOfSelectOne(value)}>
                      <SelectInput selected="城市/省" />
                      <SelectOptions search>
                        <SelectOption>全国</SelectOption>
                        <SelectOption>北京</SelectOption>
                        <SelectOption>上海</SelectOption>
                        <SelectOption>广东</SelectOption>
                        <SelectOption>深圳</SelectOption>
                      </SelectOptions>
                    </Select>
                    <label>城市/省</label>
                  </Col>
                </Row>
                <Row>
                  <Col md="2" style={{marginLeft:"2em"}}>
                    <Select multiple getValue={value => this.getValueOfSelectOne(value)}>
                      <SelectInput selected="城市/省" />
                      <SelectOptions search>
                        <SelectOption>互联网/IT</SelectOption>
                        <SelectOption>金融</SelectOption>
                        <SelectOption>房地产</SelectOption>
                        <SelectOption>销售</SelectOption>
                        <SelectOption>管理</SelectOption>
                      </SelectOptions>
                    </Select>
                    <label>行业领域</label>
                  </Col>
                  <Col md="2" style={{marginLeft:"2em"}}>
                    <Select getValue={value => this.getValueOfSelectOne(value)}>
                      <SelectInput selected="实习" />
                      <SelectOptions search>
                        <SelectOption>实习</SelectOption>
                        <SelectOption>兼职</SelectOption>
                        <SelectOption>全职</SelectOption>

                      </SelectOptions>
                    </Select>
                    <label>岗位</label>
                  </Col>
                  <Col md="5" className="offset-md-1 px-5"style={{marginTop:"2.2em"}}>
                    <MDBCardText>
                      热门搜索
                      <a href="#!" style={{ marginLeft: "1.25rem" }}>Java</a>
                      <a href="#!" style={{ marginLeft: "1.25rem" }}>C++</a>
                      <a href="#!" style={{ marginLeft: "1.25rem" }}>其他</a>
                    </MDBCardText>
                  </Col>
                </Row>
                <Row>
                  <Col md="2" className="offset-md-10">
                    <div onClick={this.toggle}><u>高级搜索</u></div>
                  </Col>
                </Row>
                <p>
                  <MDBCollapse  isOpen={this.state.collapse} style={{height:"3em"}} style={{scrollMarginBottom:"200em"}}>
                    <hr/>
                    <h6>高级选项</h6>
                    <Row>
                      <Col md="6">
                        <div>
                          {/* Material unchecked */}
                          <Input label="Filled-in unchecked" type="checkbox" id="checkbox1" />

                          {/* Material checked */}
                          <Input label="Filled-in unchecked" checked type="checkbox" id="checkbox2" />

                          {/* Material unchecked disabled */}
                          <Input label="Filled-in unchecked" disabled type="checkbox" id="checkbox3" />

                          {/* Material checked disabled */}
                          <Input label="Filled-in unchecked" checked disabled type="checkbox" id="checkbox4" />
                        </div>
                      </Col>
                      <Col md="6">
                        <Input
                          gap
                          onClick={() => this.onClick(1)}
                          checked={this.state.radio === 1 ? true : false}
                          label="Default unchecked"
                          type="radio"
                          id="radio1"
                        />
                        <Input
                          gap
                          onClick={() => this.onClick(2)}
                          checked={this.state.radio === 2 ? true : false}
                          label="Default checked"
                          type="radio"
                          id="radio2"
                        />
                        <Input
                          gap
                          onClick={() => this.onClick(3)}
                          checked={this.state.radio === 3 ? true : false}
                          label="Default unchecked disabled"
                          disabled
                          type="radio"
                          id="radio3"
                        />
                        <Input
                          gap
                          onClick={() => this.onClick(3)}
                          checked={this.state.radio === 2 ? true : false}
                          label="Default checked disabled"
                          disabled
                          type="radio"
                          id="radio3"
                        />
                      </Col>
                    </Row>
                  </MDBCollapse>
                </p>
              </MDBCardBody>
            </MDBCard>
          </Col>
        </Row>
      </div>


    );
  }
}
export {SJobCompamy};
