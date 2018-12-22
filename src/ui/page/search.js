import React from 'react';
import { Navbar, NavbarNav, NavItem, NavLink, TopBarg} from '../module/bar-general';
import {Col,MDBCard, MDBCardTitle, MDBCardText,Select,Fa,Row,SelectInput,SelectOptions, SelectOption, MDBCollapse,Input } from 'mdbreact';
import {FooterPage} from '../module/foot';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
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
  render() {
    return (

      <div>
        <TopBarg/>
        <Row>
        <Col md="7" className="offset-md-1">
         
          <MDBCard className="card-body" block>
            <Row>
              <Col md="6"style={{marginTop:"0.55em"}}>
                <form className="form-inline mt-4 mb-4">
                  <Fa icon="search" />
                  <input
                    className="form-control form-control-sm ml-3 w-75"
                    type="text"
                    placeholder="搜索"
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
              <Col md="5" className="offset-md-1"style={{marginTop:"2.2em"}}>
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
          </MDBCard>
        </Col>
        </Row>
        <Row>
        <Col md="7" className="offset-md-1">
          <MDBCollapse  isOpen={this.state.collapse} style={{height:"3em"}} style={{scrollMarginBottom:"200em"}}>
            <MDBCard className="card-body" block>
              <MDBCardTitle>待定</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the panel title and make up the
                bulk of the panel's content.
              </MDBCardText>
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
            </MDBCard>
          </MDBCollapse>
        </Col>
        </Row>
        <FooterPage/>
      </div>
   
     
    );
  }
}

export {Search};
