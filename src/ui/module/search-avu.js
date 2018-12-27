import React from 'react';
import {Col,MDBCard, MDBCardTitle, MDBCardText,Select,Fa,Row,SelectInput,SelectOptions, SelectOption, MDBCollapse,MDBCardBody,Input, Navbar, NavbarNav, NavItem, NavLink,MDBSelect,
  MDBSelectInput,
  MDBSelectOptions,
  MDBSelectOption,
  FormInline,
  Button,
  MDBInput} from 'mdbreact';



class SAVU extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      radio: 2,
      options: [
        {
          checked: false,
          disabled: false,
          icon: null,
          value: "全部"
        },
        {
          checked: false,
          disabled: false,
          icon: null,
          value: "文章"
        },
        {
          checked: false,
          disabled: false,
          icon: null,
          value: "视频"
        },
        {
          checked: false,
          disabled: false,
          icon: null,
          value: "用户"
        }
      ]
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
                  <Col md="2">
                    <MDBSelect
                      multiple
                      color="primary"
                      options={this.state.options}
                      selected="搜索范围"
                    />
                  </Col>
                  <Col md="8">
                    <MDBInput label="搜索" />
                  </Col>
                  <Col md="2">
                      <br/>
                      <Button
                        outline
                        color="primary"
                        rounded
                        size="sm"
                        type="submit"
                      >
                        搜索
                      </Button>
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
export {SAVU};
